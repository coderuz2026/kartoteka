/* ---------- edit / delete cartridge ---------- */
let cartridgeEditState = null;

function openCartridgeCreate(barcode){
  cartridgeEditState = {
    isNew: true, id: null,
    name: '', barcode: barcode || '',
    type: 'toner', color: 'Чёрный',
    supplier: '', location: '',
    initialStock: 0,
  };
  renderCartridgeEditModal();
}
function openCartridgeEdit(id){
  const c = state.cartridges.find(x => x.id === id);
  if(!c) return;
  cartridgeEditState = {
    isNew: false, id: c.id,
    name: c.name, barcode: c.barcode || '',
    type: TYPE_LABELS[c.type] ? c.type : 'toner', color: normalizeColor(c.color),
    supplier: c.supplier || '', location: c.location || '',
  };
  renderCartridgeEditModal();
}
function closeCartridgeEdit(){
  cartridgeEditState = null;
  document.getElementById('modal-root').innerHTML = '';
}
function setCartridgeEditField(field, value){
  if(cartridgeEditState) cartridgeEditState[field] = value;
}
function pickCartridgeOption(field, value){
  if(!cartridgeEditState) return;
  cartridgeEditState[field] = value;
  renderCartridgeEditModal();
}
function onBarcodeScannedForCartridgeEdit(code){
  if(cartridgeEditState) cartridgeEditState.barcode = String(code).trim();
  renderCartridgeEditModal();
  toast('Штрих-код считан');
}
function renderCartridgeEditModal(){
  const root = document.getElementById('modal-root');
  const s = cartridgeEditState;
  if(!s){ root.innerHTML = ''; return; }
  const typeBtn = t => `<button class="filter-chip ${s.type===t?'active':''}" onclick="pickCartridgeOption('type','${t}')">${TYPE_LABELS[t]}</button>`;
  const colorBtn = name => `<button class="filter-chip color-chip ${s.color===name?'active':''}" onclick="pickCartridgeOption('color','${name}')"><span class="color-dot" style="background:${COLORS[name]}"></span>${name}</button>`;
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeCartridgeEdit()">
    <div class="modal-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div><h1>${s.isNew ? 'Новый картридж' : 'Редактировать картридж'}</h1><p style="margin:4px 0 0;font-size:14px;color:var(--faint)">${s.isNew ? 'Обязательно только название' : 'Остаток меняется через «Приход» и «Расход»'}</p></div>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeCartridgeEdit()">${ICONS.x}</button>
      </div>

      <div class="field" style="margin-top:16px">
        <span class="field-lbl">Название *</span>
        <input class="input" value="${escapeHtml(s.name)}" oninput="setCartridgeEditField('name', this.value)" placeholder="Например, HP CF283A">
      </div>

      <div class="field">
        <span class="field-lbl">Штрих-код</span>
        <div style="display:flex;gap:8px">
          <input class="input" style="flex:1;min-width:0" value="${escapeHtml(s.barcode)}" oninput="setCartridgeEditField('barcode', this.value)">
          <button class="icon-btn" title="Сканировать" onclick="openScanner(onBarcodeScannedForCartridgeEdit)">${ICONS.barcode}</button>
        </div>
      </div>

      <div class="field">
        <span class="field-lbl">Тип</span>
        <div class="wh-chips">${Object.keys(TYPE_LABELS).map(typeBtn).join('')}</div>
      </div>

      <div class="field">
        <span class="field-lbl">Цвет</span>
        <div class="wh-chips">${Object.keys(COLORS).map(colorBtn).join('')}</div>
      </div>

      ${s.isNew ? `
      <div class="field">
        <span class="field-lbl">Сейчас на складе ${escapeHtml(whName(MAIN_WH))}, шт.</span>
        <input class="input" type="number" min="0" inputmode="numeric" value="${s.initialStock}" oninput="setCartridgeEditField('initialStock', Math.max(0, Math.floor(Number(this.value)||0)))">
      </div>` : ''}

      <div style="display:flex;gap:14px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:180px">
          <span class="field-lbl">Поставщик</span>
          <input class="input" value="${escapeHtml(s.supplier)}" oninput="setCartridgeEditField('supplier', this.value)" placeholder="Необязательно">
        </div>
        <div class="field" style="flex:1;min-width:180px">
          <span class="field-lbl">Место хранения</span>
          <input class="input" value="${escapeHtml(s.location)}" oninput="setCartridgeEditField('location', this.value)" placeholder="Например, Стеллаж А-12">
        </div>
      </div>

      <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap">
        ${s.isNew ? '' : `<button class="btn-secondary" style="color:var(--crit-fg)" onclick="deleteCartridge('${s.id}')">${ICONS.trash} Удалить</button>`}
        <div style="flex-grow:1"></div>
        <button class="btn-secondary" onclick="closeCartridgeEdit()">Отмена</button>
        <button class="btn-primary" onclick="submitCartridgeEdit()">${ICONS.check}${s.isNew ? 'Добавить картридж' : 'Сохранить'}</button>
      </div>
    </div>
  </div>`;
}
function submitCartridgeEdit(){
  const s = cartridgeEditState;
  if(!s) return;
  const name = s.name.trim();
  if(!name){ toast('Укажите название картриджа'); return; }
  const barcode = s.barcode.trim();
  const clash = barcode && state.cartridges.find(x => x.barcode === barcode && x.id !== s.id);
  if(clash){ toast(`Этот штрих-код уже у «${clash.name}»`); return; }

  let c;
  if(s.isNew){
    const slug = name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, '');
    c = {id: slug + '-' + Math.random().toString(36).slice(2,6), stock: s.initialStock, branchStock: {}, onOrder: false};
    state.cartridges.push(c);
    if(s.initialStock > 0){
      state.history[c.id] = [{date: todayIso(), type:'receive', wh: MAIN_WH, qty: s.initialStock, result: s.initialStock, who: 'Начальный остаток', dept: ''}];
      state.activity.unshift({date:'только что', type:'receive', text:`${name} ×${s.initialStock}`, meta:'Начальный остаток'});
      state.activity = state.activity.slice(0,8);
    } else {
      state.history[c.id] = [];
    }
  } else {
    c = state.cartridges.find(x => x.id === s.id);
    if(!c) return;
  }
  const isNew = s.isNew;
  c.name = name;
  c.barcode = barcode;
  c.type = s.type;
  c.typeLabel = TYPE_LABELS[s.type];
  c.color = s.color;
  c.colorHex = COLORS[s.color];
  c.supplier = s.supplier.trim();
  c.location = s.location.trim();
  saveState();
  closeCartridgeEdit();
  toast(isNew ? `Добавлен: ${c.name}` : `Сохранено: ${c.name}`);
  render();
}
