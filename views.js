function renderInventoryView(){
  return `
  <div class="topbar">
    <div><h1>Картриджи</h1><p class="sub">${state.cartridges.length} ${plural(state.cartridges.length, 'модель', 'модели', 'моделей')} · ${escapeHtml(whName(MAIN_WH))}: ${whTotal(MAIN_WH)} шт.${branchList().length ? ` · в филиалах: ${branchList().reduce((s,w) => s + whTotal(w.id), 0)} шт.` : ''}</p></div>
    <div class="topbar-actions">
      <div class="search-box">${ICONS.search}<input id="inv-search" placeholder="Название или штрих-код" value="${escapeHtml(searchQuery)}"></div>
      <button class="icon-btn desk-only" title="Сканировать штрих-код" aria-label="Сканировать штрих-код" onclick="openScanner(onBarcodeScanned)">${ICONS.barcode}</button>
      <button class="btn-primary" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button>
    </div>
  </div>
  <div class="content">
    <div class="filter-row" id="filter-row">${filterChipsTemplate()}</div>
    <div class="row-list" id="inv-list-body"></div>
  </div>`;
}

function renderDetailView(id){
  const c = state.cartridges.find(x => x.id === id);
  if(!c){
    return `<div class="content" style="padding-top:32px"><p>Картридж не найден. <a href="#/inventory">Вернуться к складу</a></p></div>`;
  }
  const st = statusOf(c);
  const meta = statusMeta(st);
  const hist = getHistory(c);
  const forecast = estimateForecast(c, hist);

  // Which printers this cartridge went into, most-used first.
  const byPrinter = {};
  hist.forEach(h => {
    if(h.type !== 'issue') return;
    const name = printerNameOf(h);
    if(!name) return;
    const e = byPrinter[name] || (byPrinter[name] = {qty:0, last:h.date});
    e.qty += h.qty;
    if(h.date > e.last) e.last = h.date;
  });
  const installed = Object.entries(byPrinter).sort((a,b) => b[1].qty - a[1].qty);

  return `
  <div class="content" style="padding-top:24px">
    <a class="back-link" href="#/inventory">${ICONS.back} Все картриджи</a>
    <div class="detail-head">
      <div class="detail-title-row">
        <div class="detail-chip" style="background:${colorHexOf(c)}"></div>
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><h1 style="font-size:22px">${escapeHtml(c.name)}</h1>${st === 'ok' ? '' : `<span class="pill ${meta.cls}"><span class="pill-dot"></span>${meta.label}</span>`}</div>
          <div style="font-size:15px;color:var(--faint);margin-top:4px">${escapeHtml(cartridgeSub(c))}</div>
        </div>
      </div>
      <div class="detail-actions">
        <button class="icon-btn" title="Редактировать" onclick="openCartridgeEdit('${c.id}')">${ICONS.edit}</button>
        <button class="btn-primary btn-in" onclick="openMovement('${c.id}','receive')">${ICONS.plus}Приход</button>
        ${branchList().length ? `<button class="btn-primary btn-move" onclick="openMovement('${c.id}','transfer')">${ICONS.transfer}В филиал</button>` : ''}
        <button class="btn-primary btn-out" onclick="openMovement('${c.id}','issue')">${ICONS.minus}Расход</button>
      </div>
    </div>

    <div class="detail-grid">
      <div style="display:flex;flex-direction:column;gap:14px;min-width:0">
        <div class="card" style="padding:20px">
          <span class="field-label">Остатки по складам</span>
          <div class="wh-mini">
            ${activeWarehouses().map(w => `<a class="wh-mini-item" href="#/warehouses/${w.id}"><span>${escapeHtml(w.name)}</span><b>${whStock(c, w.id)}</b></a>`).join('')}
            <div class="wh-mini-item wh-mini-total"><span>Всего</span><b>${totalStock(c)}</b></div>
          </div>
          ${forecast ? `<div class="insight"><div class="insight-icon">${ICONS.forecast}</div><div><div style="font-size:14px;font-weight:700;color:#5C3B0C">С ${escapeHtml(whName(MAIN_WH))} уходит ~1 шт. в ${forecast.perUnitDays} дн.</div><div style="font-size:13px;color:#8F5C0C">${c.stock > 0 ? `Остатка хватит примерно на ${forecast.days} дн.` : 'На складе уже пусто'}</div></div></div>` : ''}
        </div>

        <div class="card field-grid" style="padding:20px">
          <div><span class="field-label">Тип</span><div class="field-value">${escapeHtml(c.typeLabel)}</div></div>
          <div><span class="field-label">Цвет</span><div class="field-value" style="display:flex;align-items:center;gap:8px"><span style="width:12px;height:12px;border-radius:4px;background:${colorHexOf(c)}"></span>${escapeHtml(c.color)}</div></div>
          <div><span class="field-label">Штрих-код</span><div class="field-value mono">${escapeHtml(c.barcode || '—')}</div></div>
          <div><span class="field-label">Поставщик</span><div class="field-value">${escapeHtml(c.supplier || '—')}</div></div>
          <div><span class="field-label">Место хранения</span><div class="field-value">${escapeHtml(c.location || '—')}</div></div>
        </div>

        <div class="card" style="padding:20px">
          <span class="field-label">Куда устанавливали</span>
          ${installed.length
            ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">${installed.map(([name, e]) => `<span class="tag">${escapeHtml(name)} · ${e.qty} шт.</span>`).join('')}</div>`
            : `<p style="font-size:14px;color:var(--faint);margin:8px 0 0">Пока нет. При расходе выберите принтер — он появится здесь и в отчёте по принтерам.</p>`}
        </div>
      </div>

      <div class="card" style="padding:20px">
        <h2 style="margin-bottom:10px">История движений</h2>
        <table>
          <thead><tr><th>Дата</th><th>Операция</th><th style="text-align:right">Кол-во</th><th style="text-align:right">Остаток</th></tr></thead>
          <tbody>${hist.length ? hist.slice(0,8).map(h => `<tr><td>${fmtDate(h.date)}</td><td>${escapeHtml(opLabel(h))}${printerNameOf(h) ? `<div class="t-sub">${escapeHtml(printerNameOf(h))}</div>` : ''}</td><td class="mono" style="text-align:right;color:${opColor(h)}">${opSign(h)}${h.qty}</td><td class="mono" style="text-align:right">${h.result}</td></tr>`).join('') : `<tr><td colspan="4" class="empty-state">Операций пока нет</td></tr>`}</tbody>
        </table>
        ${hist.length ? `<div style="margin-top:10px;font-size:12px;color:var(--faint)">Показаны последние ${Math.min(hist.length,8)} из ${hist.length}</div>` : ''}
      </div>
    </div>
  </div>`;
}

function printerCardTemplate(p){
  const installs = printerInstalls(p.id);
  const month = new Date().toISOString().slice(0,7);
  const monthQty = installs.filter(x => x.h.date.startsWith(month)).reduce((s,x) => s + x.h.qty, 0);
  const totalQty = installs.reduce((s,x) => s + x.h.qty, 0);
  const byCartridge = {};
  installs.forEach(({h, c}) => { byCartridge[c.id] = byCartridge[c.id] || {c, qty:0}; byCartridge[c.id].qty += h.qty; });
  const last = installs[0];
  const sub = [p.location, p.serial && p.serial !== '—' ? 'с/н ' + p.serial : ''].filter(Boolean).join(' · ') || 'Место не указано';
  return `
  <div class="card" style="padding:16px 18px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
      <div style="display:flex;align-items:center;gap:12px;min-width:0">
        <div class="icon-btn" style="background:var(--paper-2);flex-shrink:0">${ICONS.printer}</div>
        <div style="min-width:0">
          <div style="font-size:17px;font-weight:700">${escapeHtml(p.name)}</div>
          <div style="font-size:13px;color:var(--faint)">${escapeHtml(sub)}</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button class="icon-btn" style="width:40px;height:40px" title="Изменить" aria-label="Изменить принтер" onclick="openPrinterModal('${p.id}')">${ICONS.edit}</button>
        <button class="icon-btn" style="width:40px;height:40px" title="Удалить" aria-label="Удалить принтер" onclick="deletePrinter('${p.id}')">${ICONS.trash}</button>
      </div>
    </div>
    <div class="p-stats">
      <div><span>За месяц</span><b>${monthQty}</b></div>
      <div><span>Всего</span><b>${totalQty}</b></div>
      <div style="flex:2;min-width:0"><span>Последняя установка</span><b class="p-last">${last ? `${fmtDate(last.h.date)} · ${escapeHtml(last.c.name)}` : '—'}</b></div>
    </div>
    ${totalQty ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">${Object.values(byCartridge).sort((a,b) => b.qty - a.qty).map(({c, qty}) => `<a href="#/detail/${c.id}" class="tag" style="display:inline-flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:3px;background:${colorHexOf(c)}"></span>${escapeHtml(c.name)} · ${qty} шт.</a>`).join('')}</div>` : ''}
  </div>`;
}
function renderPrintersView(){
  const printers = [...state.printers].sort((a,b) => a.name.localeCompare(b.name));
  // Group by the warehouse/branch the printer stands in.
  const groups = activeWarehouses().map(w => ({title: w.name, list: printers.filter(p => p.wh === w.id)}));
  groups.push({title: 'Склад не указан', list: printers.filter(p => !activeWarehouses().some(w => w.id === p.wh))});
  const body = groups.filter(g => g.list.length).map(g => `
    <div class="section">
      <div class="section-head"><h2>${escapeHtml(g.title)} · ${g.list.length}</h2></div>
      <div style="display:flex;flex-direction:column;gap:12px">${g.list.map(printerCardTemplate).join('')}</div>
    </div>`).join('');

  return `
  <div class="topbar">
    <div><h1>Принтеры</h1><p class="sub">${printers.length} ${plural(printers.length, 'принтер', 'принтера', 'принтеров')} · сколько картриджей куда установлено</p></div>
    <div class="topbar-actions">
      <button class="btn-secondary" onclick="openReport()">${ICONS.excel}Отчёт в Excel</button>
      <button class="btn-primary" onclick="openPrinterModal()">${ICONS.plus}Добавить принтер</button>
    </div>
  </div>
  <div class="content">${body || `<div class="card empty-state">Принтеров пока нет — нажмите «Добавить принтер»</div>`}</div>`;
}

/* ---------- printer modal (add / edit) ---------- */
let printerModalState = null;
function openPrinterModal(id){
  const p = id && state.printers.find(x => x.id === id);
  printerModalState = p
    ? {id: p.id, name: p.name, location: p.location || '', wh: p.wh || '', serial: p.serial === '—' ? '' : (p.serial || ''), notes: p.notes || ''}
    : {id: null, name:'', location:'', wh: MAIN_WH, serial:'', notes:''};
  renderPrinterModal();
}
function closePrinterModal(){
  printerModalState = null;
  const root = document.getElementById('modal-root');
  if(root) root.innerHTML = '';
}
function renderPrinterModal(){
  const root = document.getElementById('modal-root');
  if(!printerModalState){ root.innerHTML = ''; return; }
  const s = printerModalState;
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closePrinterModal()">
    <div class="modal-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div><h1>${s.id ? 'Изменить принтер' : 'Новый принтер'}</h1><p style="margin:4px 0 0;font-size:14px;color:var(--faint)">При расходе картриджа выбирайте принтер — так появится отчёт по принтерам</p></div>
        <button class="icon-btn" aria-label="Закрыть" onclick="closePrinterModal()">${ICONS.x}</button>
      </div>
      <div class="field" style="margin-top:18px">
        <span class="field-lbl">Принтер *</span>
        <input class="input" value="${escapeHtml(s.name)}" oninput="printerModalState.name=this.value" placeholder="Например, HP LaserJet Pro M404dn">
      </div>
      <div class="field">
        <span class="field-lbl">Где стоит (склад / филиал)</span>
        <select class="input" onchange="printerModalState.wh=this.value">
          ${activeWarehouses().map(w => `<option value="${w.id}" ${w.id===s.wh?'selected':''}>${escapeHtml(w.name)}</option>`).join('')}
          <option value="" ${activeWarehouses().some(w => w.id === s.wh) ? '' : 'selected'}>Не указан</option>
        </select>
      </div>
      <div style="display:flex;gap:14px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:180px">
          <span class="field-lbl">Отдел / кабинет</span>
          <input class="input" value="${escapeHtml(s.location)}" oninput="printerModalState.location=this.value" placeholder="Например, Бухгалтерия">
        </div>
        <div class="field" style="flex:1;min-width:180px">
          <span class="field-lbl">Серийный номер</span>
          <div style="display:flex;gap:8px">
            <input class="input" style="flex:1;min-width:0" value="${escapeHtml(s.serial)}" oninput="printerModalState.serial=this.value" placeholder="Необязательно">
            <button class="icon-btn" title="Сканировать штрих-код" onclick="openScanner(onBarcodeScannedForPrinter)">${ICONS.barcode}</button>
          </div>
        </div>
      </div>
      <div class="field">
        <span class="field-lbl">Комментарий</span>
        <textarea class="input" rows="2" placeholder="Необязательно" oninput="printerModalState.notes=this.value">${escapeHtml(s.notes)}</textarea>
      </div>
      <div class="modal-foot">
        <button class="btn-secondary" onclick="closePrinterModal()">Отмена</button>
        <button class="btn-primary" onclick="submitPrinter()">${ICONS.check}${s.id ? 'Сохранить' : 'Добавить принтер'}</button>
      </div>
    </div>
  </div>`;
}
function submitPrinter(){
  const s = printerModalState;
  if(!s) return;
  const name = s.name.trim();
  if(!name){ toast('Укажите принтер'); return; }
  if(state.printers.some(p => p.id !== s.id && p.name.toLowerCase() === name.toLowerCase())){
    toast('Такой принтер уже есть в списке');
    return;
  }
  const fields = {name, location: s.location.trim(), wh: s.wh, serial: s.serial.trim() || '—', notes: s.notes.trim()};
  if(s.id){
    Object.assign(state.printers.find(p => p.id === s.id), fields);
  } else {
    const id = 'p-' + name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).slice(2,6);
    state.printers.push({id, ...fields});
  }
  saveState();
  closePrinterModal();
  toast(s.id ? `Сохранено: ${name}` : `Принтер добавлен: ${name}`);
  render();
}
function deletePrinter(id){
  const p = state.printers.find(x => x.id === id);
  if(!p) return;
  if(!confirm(`Удалить «${p.name}»? Записи о том, какие картриджи в него ставили, останутся в истории и отчётах.`)) return;
  state.printers = state.printers.filter(x => x.id !== id);
  saveState();
  toast('Принтер удалён');
  render();
}

