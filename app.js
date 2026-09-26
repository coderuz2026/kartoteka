/* ---------- icons ---------- */
const ICONS = {
  home: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9h13v-9"/></svg>`,
  box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z"/><path d="M3 7.5V16l9 4.5 9-4.5V7.5"/><path d="M12 12v8.5"/></svg>`,
  printer: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="8" rx="1.5"/><path d="M6 11h12v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7Z"/><path d="M9 15h6"/></svg>`,
  truck: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.7-1.3-2-3.4-2 .6a7.7 7.7 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.4a7.7 7.7 0 0 0-2.6 1.5l-2-.6-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3L2.9 14.8l2 3.4 2-.6a7.7 7.7 0 0 0 2.6 1.5l.5 2.4h4l.5-2.4a7.7 7.7 0 0 0 2.6-1.5l2 .6 2-3.4-1.7-1.3Z"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 3.5 1 5 1.5 6H4.5C5 14 6 12.5 6 9Z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  minus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  excel: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 12 4 5M13 12l-4 5"/></svg>`,
  back: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  forecast: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 6h4v4"/></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  dots: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>`,
  barcode: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5v14M8 5v14M11 5v14M14 5v9M17 5v14M20 5v14"/></svg>`,
  edit: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/></svg>`,
  trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M8 7v13a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7"/><path d="M10 11v6M14 11v6"/></svg>`,
  transfer: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>`,
  store: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 4l9 5.5"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg>`,
};

/* ---------- data ---------- */
const STORAGE_KEY = 'kartoteka-data-v1';
// The main warehouse keeps its stock in c.stock (so min-stock status, suppliers and
// printers keep working unchanged); branches keep theirs in c.branchStock[whId].
const MAIN_WH = 'main';

function defaultWarehouses(){
  return [
    {id:MAIN_WH, name:'ДеФактум'},
    {id:'kids', name:'Кидс'},
    {id:'megapolis', name:'Мегаполис'},
  ];
}

function defaultData(){
  return {
    warehouses: defaultWarehouses(),
    cartridges: [
      {id:'hp-cf283a', name:'HP CF283A', sku:'CF283A', barcode:'4650123450017', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#2A2C33', printers:['HP LaserJet Pro M125nw','HP LaserJet Pro M127fn','HP LaserJet Pro M127fw','HP LaserJet MFP M225'], stock:3, branchStock:{kids:2}, minStock:5, parStock:20, supplier:'ОфисСнаб', location:'Стеллаж А-12', resource:'~1500 стр.', onOrder:false},
      {id:'canon-725', name:'Canon 725', sku:'CRG725', barcode:'4650123450024', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#2A2C33', printers:['Canon i-SENSYS LBP6000'], stock:6, branchStock:{kids:1, megapolis:2}, minStock:8, parStock:20, supplier:'ПринтМастер', location:'Стеллаж Б-04', resource:'~1600 стр.', onOrder:false},
      {id:'epson-664-cyan', name:'Epson 664 Cyan', sku:'T66424A', barcode:'4650123450031', type:'ink', typeLabel:'Чернила', color:'Голубой', colorHex:'#1E9BB3', printers:['Epson L132','Epson L220'], stock:22, minStock:10, parStock:30, supplier:'ИнкЛаб', location:'Стеллаж В-01', resource:'~4500 стр.', onOrder:false},
      {id:'epson-664-magenta', name:'Epson 664 Magenta', sku:'T66434A', barcode:'4650123450048', type:'ink', typeLabel:'Чернила', color:'Пурпурный', colorHex:'#C43B7D', printers:['Epson L132','Epson L220'], stock:4, minStock:10, parStock:30, supplier:'ИнкЛаб', location:'Стеллаж В-01', resource:'~4500 стр.', onOrder:false},
      {id:'epson-664-yellow', name:'Epson 664 Yellow', sku:'T66444A', barcode:'4650123450055', type:'ink', typeLabel:'Чернила', color:'Жёлтый', colorHex:'#D9A62E', printers:['Epson L132','Epson L220'], stock:18, minStock:10, parStock:30, supplier:'ИнкЛаб', location:'Стеллаж В-01', resource:'~4500 стр.', onOrder:false},
      {id:'epson-664-black', name:'Epson 664 Black', sku:'T66414A', barcode:'4650123450062', type:'ink', typeLabel:'Чернила', color:'Чёрный', colorHex:'#23252B', printers:['Epson L132','Epson L220'], stock:30, branchStock:{kids:4, megapolis:3}, minStock:10, parStock:30, supplier:'ИнкЛаб', location:'Стеллаж В-01', resource:'~4500 стр.', onOrder:false},
      {id:'kyocera-tk1170', name:'Kyocera TK-1170', sku:'TK-1170', barcode:'4650123450079', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#23252B', printers:['Kyocera M2040dn'], stock:7, branchStock:{megapolis:2}, minStock:6, parStock:15, supplier:'ОфисСнаб', location:'Стеллаж А-07', resource:'~7200 стр.', onOrder:false},
      {id:'xerox-106r02773', name:'Xerox 106R02773', sku:'106R02773', barcode:'4650123450086', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#2A2C33', printers:['Xerox WorkCentre 3025'], stock:2, minStock:4, parStock:12, supplier:'ПринтМастер', location:'Стеллаж Б-09', resource:'~1000 стр.', onOrder:false},
      {id:'brother-tn2375', name:'Brother TN-2375', sku:'TN-2375', barcode:'4650123450093', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#2A2C33', printers:['Brother HL-L2340'], stock:9, branchStock:{kids:1}, minStock:5, parStock:15, supplier:'ОфисСнаб', location:'Стеллаж А-03', resource:'~2600 стр.', onOrder:false},
      {id:'hp-664-black-ink', name:'HP 664 Black', sku:'F6V29AE', barcode:'4650123450109', type:'ink', typeLabel:'Чернила', color:'Чёрный', colorHex:'#F3EFE6', printers:['HP DeskJet 2020'], stock:0, minStock:5, parStock:15, supplier:'ИнкЛаб', location:'Стеллаж В-05', resource:'~2400 стр.', onOrder:true},
      {id:'canon-728-drum', name:'Canon 728 Drum', sku:'728DRM', barcode:'4650123450116', type:'drum', typeLabel:'Драм-юнит', color:'—', colorHex:'#3A3C44', printers:['Canon MF4410'], stock:1, minStock:2, parStock:4, supplier:'ПринтМастер', location:'Стеллаж Б-11', resource:'~12000 стр.', onOrder:false},
      {id:'samsung-mltd111s', name:'Samsung MLT-D111S', sku:'MLT-D111S', barcode:'4650123450123', type:'toner', typeLabel:'Тонер', color:'Чёрный', colorHex:'#2A2C33', printers:['Samsung SL-M2020'], stock:11, minStock:5, parStock:15, supplier:'ОфисСнаб', location:'Стеллаж А-15', resource:'~1000 стр.', onOrder:false},
    ],
    history: {
      'hp-cf283a': [
        {date:'2026-09-26', type:'transfer', from:MAIN_WH, to:'kids', qty:2, result:3, resultTo:2, who:'—', dept:''},
        {date:'2026-09-26', type:'issue', wh:MAIN_WH, qty:1, result:5, who:'Ирина С.', dept:'Бухгалтерия'},
        {date:'2026-09-20', type:'issue', wh:MAIN_WH, qty:1, result:6, who:'Павел М.', dept:'Отдел продаж'},
        {date:'2026-09-14', type:'issue', wh:MAIN_WH, qty:1, result:7, who:'Ирина С.', dept:'Бухгалтерия'},
        {date:'2026-09-05', type:'issue', wh:MAIN_WH, qty:1, result:8, who:'Ольга Р.', dept:'Дирекция'},
        {date:'2026-08-22', type:'issue', wh:MAIN_WH, qty:1, result:9, who:'Павел М.', dept:'Отдел продаж'},
        {date:'2026-08-10', type:'receive', wh:MAIN_WH, qty:10, result:10, who:'Накладная №4290', dept:'ОфисСнаб'},
      ],
    },
    activity: [
      {date:'сегодня, 11:30', type:'transfer', text:'HP CF283A ×2', meta:'ДеФактум → Кидс'},
      {date:'сегодня, 10:24', type:'issue', text:'HP CF283A ×1', meta:'Бухгалтерия · Ирина С.'},
      {date:'сегодня, 09:05', type:'receive', text:'Epson 664 (набор) ×4', meta:'Накладная №4521'},
      {date:'вчера, 17:40', type:'issue', text:'Kyocera TK-1170 ×1', meta:'Отдел продаж · Павел М.'},
      {date:'вчера, 14:12', type:'order', text:'Xerox 106R02773 ×3', meta:'Поставщик ПринтМастер'},
      {date:'23 сен, 11:00', type:'issue', text:'Canon 725 ×2', meta:'Дирекция · Ольга Р.'},
    ],
    printers: [
      {id:'p-hp-m125nw', name:'HP LaserJet Pro M125nw', location:'Бухгалтерия', serial:'—', notes:''},
      {id:'p-hp-m127fn', name:'HP LaserJet Pro M127fn', location:'Бухгалтерия', serial:'—', notes:''},
      {id:'p-hp-m127fw', name:'HP LaserJet Pro M127fw', location:'Отдел продаж', serial:'—', notes:''},
      {id:'p-hp-m225', name:'HP LaserJet MFP M225', location:'Дирекция', serial:'—', notes:''},
      {id:'p-canon-lbp6000', name:'Canon i-SENSYS LBP6000', location:'Отдел продаж', serial:'—', notes:''},
      {id:'p-epson-l132', name:'Epson L132', location:'Ресепшн', serial:'—', notes:''},
      {id:'p-epson-l220', name:'Epson L220', location:'Бухгалтерия', serial:'—', notes:''},
      {id:'p-kyocera-m2040', name:'Kyocera M2040dn', location:'Склад / логистика', serial:'—', notes:''},
      {id:'p-xerox-3025', name:'Xerox WorkCentre 3025', location:'IT-отдел', serial:'—', notes:''},
      {id:'p-brother-l2340', name:'Brother HL-L2340', location:'Дирекция', serial:'—', notes:''},
      {id:'p-hp-dj2020', name:'HP DeskJet 2020', location:'Ресепшн', serial:'—', notes:''},
      {id:'p-canon-mf4410', name:'Canon MF4410', location:'IT-отдел', serial:'—', notes:''},
      {id:'p-samsung-m2020', name:'Samsung SL-M2020', location:'Бухгалтерия', serial:'—', notes:''},
    ],
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      // Back-fill fields added after this browser's data was first saved, so an
      // older localStorage snapshot doesn't crash newer views (e.g. printers,
      // barcodes) or leave barcode lookups silently unable to match anything.
      const fresh = defaultData();
      if(!parsed.printers) parsed.printers = fresh.printers;
      // Data saved before warehouses existed: everything it holds sits on the main warehouse.
      if(!Array.isArray(parsed.warehouses) || !parsed.warehouses.length) parsed.warehouses = defaultWarehouses();
      if(Array.isArray(parsed.cartridges)){
        parsed.cartridges.forEach(c => {
          if(!c.barcode){
            const match = fresh.cartridges.find(x => x.id === c.id);
            c.barcode = match ? match.barcode : '';
          }
          if(!c.branchStock) c.branchStock = {};
        });
      }
      return parsed;
    }
  }catch(e){}
  return defaultData();
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}

let state = loadState();
let searchQuery = '';
let activeFilter = 'all';
let modalState = null;
let toastTimer = null;
let historyFilter = 'all';

function emptyData(){
  return {warehouses: defaultWarehouses(), cartridges: [], history: {}, activity: [], printers: []};
}
function resetData(mode){
  const msg = mode === 'empty'
    ? 'Удалить ВСЕ картриджи, принтеры и историю операций? Склады станут пустыми. Отменить это нельзя.'
    : 'Заменить все текущие данные демонстрационными (12 примерных картриджей)? Ваши записи будут удалены.';
  if(!confirm(msg)) return;
  const keepWarehouses = (state.warehouses || []).filter(w => !w.deleted);
  state = mode === 'empty' ? emptyData() : defaultData();
  // Clearing wipes stock, not the list of branches the user set up.
  if(mode === 'empty' && keepWarehouses.length) state.warehouses = keepWarehouses;
  saveState();
  toast(mode === 'empty' ? 'Склад очищен. Добавьте свои картриджи.' : 'Загружены демо-данные');
  location.hash = mode === 'empty' ? '#/inventory' : '#/dashboard';
  render();
}

const FILTERS = [
  {key:'all', label:'Все'},
  {key:'toner', label:'Тонер'},
  {key:'ink', label:'Чернила'},
  {key:'drum', label:'Драм-юнит'},
  {key:'critical', label:'Критично'},
  {key:'low', label:'Заканчивается'},
];

/* ---------- helpers ---------- */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function todayLabel(){
  return new Date().toLocaleDateString('ru-RU', {day:'numeric', month:'long', year:'numeric'});
}
function fmtDate(iso){
  const [y,m,d] = iso.split('-');
  return `${d}.${m}.${y}`;
}
function daysAgoIso(n){
  const d = new Date(); d.setDate(d.getDate()-n);
  return d.toISOString().slice(0,10);
}
function statusOf(c){
  if(c.onOrder) return 'order';
  if(c.stock <= c.minStock*0.5) return 'critical';
  if(c.stock <= c.minStock) return 'low';
  return 'ok';
}
function statusMeta(status){
  return {
    ok:{label:'В наличии', cls:'pill-ok', bar:'var(--ok-dot)'},
    low:{label:'Заканчивается', cls:'pill-low', bar:'var(--low-dot)'},
    critical:{label:'Критично', cls:'pill-critical', bar:'var(--crit-dot)'},
    order:{label:'На заказе', cls:'pill-order', bar:'var(--order-dot)'},
  }[status];
}
function plural(n, one, few, many){
  const a = Math.abs(n) % 100, b = a % 10;
  if(a > 10 && a < 20) return many;
  if(b === 1) return one;
  if(b >= 2 && b <= 4) return few;
  return many;
}

/* ---------- warehouses ---------- */
// Deleted branches stay in the list (flagged) so old history still shows their name.
function activeWarehouses(){ return state.warehouses.filter(w => !w.deleted); }
function branchList(){ return activeWarehouses().filter(w => w.id !== MAIN_WH); }
function whName(id){
  const w = state.warehouses.find(x => x.id === (id || MAIN_WH));
  return w ? w.name : 'Склад удалён';
}
function whStock(c, wh){
  if((wh || MAIN_WH) === MAIN_WH) return c.stock;
  return (c.branchStock || {})[wh] || 0;
}
function setWhStock(c, wh, value){
  if(wh === MAIN_WH){ c.stock = value; return; }
  if(!c.branchStock) c.branchStock = {};
  c.branchStock[wh] = value;
}
function totalStock(c){ return activeWarehouses().reduce((s,w) => s + whStock(c, w.id), 0); }
function whTotal(wh){ return state.cartridges.reduce((s,c) => s + whStock(c, wh), 0); }
function defaultIssueWh(){
  const last = state.lastIssueWh;
  return last && activeWarehouses().some(w => w.id === last) ? last : MAIN_WH;
}
// How one history entry changes each warehouse's stock, as {warehouseId: signedQty}.
function entryDeltas(h){
  if(h.type === 'receive') return {[h.wh || MAIN_WH]: h.qty};
  if(h.type === 'issue') return {[h.wh || MAIN_WH]: -h.qty};
  if(h.type === 'transfer') return {[h.from || MAIN_WH]: -h.qty, [h.to]: h.qty};
  return {};
}
function opLabel(h){
  if(h.type === 'receive') return (h.wh && h.wh !== MAIN_WH) ? `Приход · ${whName(h.wh)}` : 'Приход';
  if(h.type === 'transfer') return `${whName(h.from)} → ${whName(h.to)}`;
  return `Расход · ${whName(h.wh)}`;
}
function opSign(h){ return h.type === 'receive' ? '+' : h.type === 'issue' ? '−' : '→'; }
function opColor(h){ return h.type === 'receive' ? 'var(--ok-fg)' : h.type === 'issue' ? 'var(--crit-fg)' : 'var(--order-fg)'; }

function defaultHistory(c){
  return [{date: daysAgoIso(40), type:'receive', qty:c.parStock, result:c.parStock, who:'Накладная №—', dept:c.supplier}];
}
function getHistory(c){
  return state.history[c.id] || defaultHistory(c);
}
function estimateForecast(c, hist){
  // Everything that leaves the main warehouse: its own installs plus hand-offs to branches.
  const issues = hist.filter(h => (h.type === 'issue' && (h.wh || MAIN_WH) === MAIN_WH) || (h.type === 'transfer' && (h.from || MAIN_WH) === MAIN_WH));
  if(issues.length < 2) return null;
  const totalQty = issues.reduce((s,h) => s+h.qty, 0);
  const newest = new Date(issues[0].date);
  const oldest = new Date(issues[issues.length-1].date);
  const spanDays = Math.max(1, Math.round((newest-oldest)/86400000));
  const perUnitDays = Math.max(1, Math.round(spanDays/totalQty));
  const days = c.stock > 0 ? Math.round(c.stock*perUnitDays) : 0;
  return {perUnitDays, days};
}

/* ---------- toast ---------- */
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------- row / card templates ---------- */
function rowTemplate(c){
  const st = statusOf(c);
  const meta = statusMeta(st);
  const chipBorder = c.colorHex.toUpperCase() === '#F3EFE6' ? ';border:1px solid var(--border)' : '';
  const inBranches = branchList().filter(w => whStock(c, w.id) > 0).map(w => `${w.name} ${whStock(c, w.id)}`);
  return `
  <div class="c-row" onclick="location.hash='#/detail/${c.id}'">
    <div class="chip" style="background:${c.colorHex}${chipBorder}"></div>
    <div class="c-main">
      <div class="c-name">${escapeHtml(c.name)} <span class="pill ${meta.cls}"><span class="pill-dot"></span>${meta.label}</span></div>
      <div class="c-sub">${escapeHtml([c.sku, c.printers[0] || c.typeLabel].filter(Boolean).join(' · '))}</div>
      ${inBranches.length ? `<div class="c-wh">В филиалах: ${escapeHtml(inBranches.join(' · '))}</div>` : ''}
    </div>
    <div class="c-stock"><b style="color:${st==='ok' ? 'var(--text)' : meta.bar}">${c.stock}</b><span>шт. · мин ${c.minStock}</span></div>
    <div class="c-quick">
      <button class="q-btn q-in" title="Приход" aria-label="Приход ${escapeHtml(c.name)}" onclick="event.stopPropagation();openMovement('${c.id}','receive')">+</button>
      <button class="q-btn q-out" title="Расход" aria-label="Расход ${escapeHtml(c.name)}" onclick="event.stopPropagation();openMovement('${c.id}','issue')">−</button>
    </div>
  </div>`;
}

function activityRowTemplate(a){
  const m = String(a.text).match(/×(\d+)\s*$/);
  const qty = m ? m[1] : '';
  const name = String(a.text).replace(/\s*×\d+\s*$/, '');
  const cls = a.type==='issue' ? 'act-out' : a.type==='receive' ? 'act-in' : 'act-order';
  const sign = a.type==='issue' ? '−' : a.type==='receive' ? '+' : a.type==='transfer' ? '→' : '';
  const prefix = a.type==='order' ? 'Заказ · ' : '';
  return `
  <div class="act-row">
    <div class="act-badge ${cls}">${sign}${qty}</div>
    <div style="min-width:0;flex-grow:1">
      <div style="font-weight:700">${prefix}${escapeHtml(name)}</div>
      <div style="color:var(--faint);font-size:13px;margin-top:2px">${escapeHtml(a.meta)} · ${escapeHtml(a.date)}</div>
    </div>
  </div>`;
}

function monthTotals(){
  const prefix = new Date().toISOString().slice(0,7);
  let inQty = 0, outQty = 0;
  Object.values(state.history).forEach(list => list.forEach(h => {
    if(!h.date.startsWith(prefix)) return;
    if(h.type === 'receive') inQty += h.qty;
    else if(h.type === 'issue') outQty += h.qty;
  }));
  return {inQty, outQty};
}
// This month's flows per warehouse: in = from supplier, got = received from another
// warehouse, sent = handed to another warehouse, out = installed (расход).
function monthFlows(){
  const prefix = new Date().toISOString().slice(0,7);
  const flows = {};
  const f = id => flows[id] || (flows[id] = {in:0, got:0, sent:0, out:0});
  Object.values(state.history).forEach(list => list.forEach(h => {
    if(!h.date.startsWith(prefix)) return;
    if(h.type === 'receive') f(h.wh || MAIN_WH).in += h.qty;
    else if(h.type === 'issue') f(h.wh || MAIN_WH).out += h.qty;
    else if(h.type === 'transfer'){ f(h.from || MAIN_WH).sent += h.qty; f(h.to).got += h.qty; }
  }));
  return f;
}

function warehouseCardsTemplate(){
  const flow = monthFlows();
  return `<div class="wh-grid">${activeWarehouses().map(w => {
    const isMain = w.id === MAIN_WH;
    const f = flow(w.id);
    const total = whTotal(w.id);
    const models = state.cartridges.filter(c => whStock(c, w.id) > 0).length;
    const parts = [];
    if(f.in) parts.push(`<span style="color:var(--ok-fg)">+${f.in} пришло</span>`);
    if(f.got) parts.push(`<span style="color:var(--order-fg)">+${f.got} получено</span>`);
    if(f.sent) parts.push(`<span style="color:var(--order-fg)">→${f.sent} ${isMain ? 'в филиалы' : 'передано'}</span>`);
    if(f.out) parts.push(`<span style="color:var(--crit-fg)">−${f.out} расход</span>`);
    return `
    <a class="wh-card ${isMain ? 'wh-main' : ''}" href="#/warehouses/${w.id}">
      <div class="wh-top"><span class="wh-name">${escapeHtml(w.name)}</span><span class="wh-tag">${isMain ? 'Основной' : 'Филиал'}</span></div>
      <div class="wh-total">${total}<small>шт.</small></div>
      <div class="wh-sub">${models} ${plural(models, 'модель', 'модели', 'моделей')} в наличии</div>
      <div class="wh-month">${parts.length ? 'За месяц: ' + parts.join(' · ') : 'За месяц движений нет'}</div>
    </a>`;
  }).join('')}</div>`;
}

function filterChipsTemplate(){
  return FILTERS.map(f => {
    let count;
    if(f.key==='all') count = state.cartridges.length;
    else if(f.key==='critical') count = state.cartridges.filter(c=>statusOf(c)==='critical').length;
    else if(f.key==='low') count = state.cartridges.filter(c=>statusOf(c)==='low').length;
    else count = state.cartridges.filter(c=>c.type===f.key).length;
    return `<button class="filter-chip ${f.key===activeFilter?'active':''}" onclick="setFilter('${f.key}')">${f.label} · ${count}</button>`;
  }).join('');
}

/* ---------- views ---------- */
function renderDashboardView(){
  const totalUnits = state.cartridges.reduce((s,c) => s + totalStock(c), 0);
  const {inQty, outQty} = monthTotals();
  const hasBranches = branchList().length > 0;
  const need = state.cartridges
    .filter(c => statusOf(c) !== 'ok')
    .sort((a,b) => (a.stock/Math.max(1,a.minStock)) - (b.stock/Math.max(1,b.minStock)));

  return `
  <div class="topbar">
    <div><h1>Главная</h1><p class="sub">${todayLabel()}</p></div>
    <button class="btn-secondary" onclick="openReport()">${ICONS.excel}Отчёт в Excel</button>
  </div>
  <div class="content">
    <div class="big-actions ${hasBranches ? 'four' : ''}">
      <button class="big-btn big-in" onclick="openMovement(null,'receive')">${ICONS.plus}Приход</button>
      <button class="big-btn big-out" onclick="openMovement(null,'issue')">${ICONS.minus}Расход</button>
      ${hasBranches ? `<button class="big-btn big-move" onclick="openMovement(null,'transfer')">${ICONS.transfer}В филиал</button>` : ''}
      <button class="big-btn big-scan" onclick="openScanner(onBarcodeScanned)">${ICONS.barcode}<span>Сканировать<span class="desk-inline"> штрих-код</span></span></button>
    </div>

    <div class="stat-row">
      <div class="stat"><div class="stat-label">На всех складах</div><div class="stat-value">${totalUnits}<small>шт.</small></div></div>
      <div class="stat"><div class="stat-label">Пришло за месяц</div><div class="stat-value" style="color:var(--ok-fg)">+${inQty}</div></div>
      <div class="stat"><div class="stat-label">Расход за месяц</div><div class="stat-value" style="color:var(--crit-fg)">−${outQty}</div></div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Склады</h2><a href="#/warehouses">Остатки по складам →</a></div>
      ${warehouseCardsTemplate()}
    </div>

    ${!state.cartridges.length ? `
    <div class="section">
      <div class="row-list empty-state">
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:6px">Склад пуст</div>
        Добавьте свои картриджи — после этого здесь появятся остатки и операции.
        <div style="margin-top:16px"><button class="btn-primary" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button></div>
      </div>
    </div>` : `
    <div class="section">
      <div class="section-head"><h2>Нужно пополнить${need.length ? ' · ' + need.length : ''}</h2><a href="#/inventory">Весь склад →</a></div>
      ${need.length ? `<div class="row-list">${need.map(rowTemplate).join('')}</div>` : `<div class="row-list empty-state">Все картриджи в наличии</div>`}
    </div>`}

    <div class="section">
      <div class="section-head"><h2>Последние операции</h2><a href="#/history">Вся история →</a></div>
      <div class="row-list">${state.activity.length ? state.activity.slice(0,6).map(activityRowTemplate).join('') : `<div class="empty-state">Пока нет операций</div>`}</div>
    </div>
  </div>`;
}

function renderInventoryView(){
  return `
  <div class="topbar">
    <div><h1>Картриджи</h1><p class="sub">${state.cartridges.length} ${plural(state.cartridges.length, 'модель', 'модели', 'моделей')} · ${escapeHtml(whName(MAIN_WH))}: ${whTotal(MAIN_WH)} шт.${branchList().length ? ` · в филиалах: ${branchList().reduce((s,w) => s + whTotal(w.id), 0)} шт.` : ''}</p></div>
    <div class="topbar-actions">
      <div class="search-box">${ICONS.search}<input id="inv-search" placeholder="Название или артикул" value="${escapeHtml(searchQuery)}"></div>
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
  const pct = Math.min(100, Math.round((c.stock/c.parStock)*100));
  const forecast = estimateForecast(c, hist);

  return `
  <div class="content" style="padding-top:24px">
    <a class="back-link" href="#/inventory">${ICONS.back} Весь склад</a>
    <div class="detail-head">
      <div class="detail-title-row">
        <div class="detail-chip" style="background:${c.colorHex}"></div>
        <div>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><h1 style="font-size:22px">${escapeHtml(c.name)}</h1><span class="pill ${meta.cls}"><span class="pill-dot"></span>${meta.label}</span></div>
          <div class="mono" style="font-size:12.5px;color:var(--faint);margin-top:4px">Артикул ${escapeHtml(c.sku)} · ${escapeHtml(c.typeLabel)}${c.color!=='—' ? ', '+c.color.toLowerCase() : ''}</div>
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
          <span class="field-label">По складам</span>
          <div class="wh-mini">
            ${activeWarehouses().map(w => `<a class="wh-mini-item" href="#/warehouses/${w.id}"><span>${escapeHtml(w.name)}</span><b>${whStock(c, w.id)}</b></a>`).join('')}
            <div class="wh-mini-item wh-mini-total"><span>Всего</span><b>${totalStock(c)}</b></div>
          </div>
        </div>

        <div class="card" style="padding:20px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:6px">
            <span class="field-label">Остаток на складе ${escapeHtml(whName(MAIN_WH))}</span>
            <span class="mono" style="font-size:12px;color:${meta.bar};font-weight:600">${c.stock} шт. из ${c.minStock} минимальных</span>
          </div>
          <div style="position:relative;padding-top:13px">
            <div class="gauge-nub"></div>
            <div class="gauge-body">
              <div class="gauge-fill-big" style="width:${pct}%;background:${meta.bar}"></div>
              <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:7px">
                <span class="mono" style="font-size:22px;font-weight:600">${c.stock} шт.</span>
              </div>
            </div>
          </div>
          <div style="margin-top:8px;font-size:12px;color:var(--muted);text-align:center">Шкала показывает остаток в процентах от нормы пополнения — ${pct}% от ${c.parStock} шт.</div>
          ${forecast ? `<div class="insight"><div class="insight-icon">${ICONS.forecast}</div><div><div style="font-size:12.5px;font-weight:600;color:#5C3B0C">Средний расход ~1 шт. в ${forecast.perUnitDays} дн.</div><div style="font-size:12px;color:#8F5C0C">При текущем темпе остаток закончится ориентировочно через ${forecast.days} дн. — закажите заранее</div></div></div>` : ''}
        </div>

        <div class="card field-grid" style="padding:20px">
          <div><span class="field-label">Тип</span><div class="field-value">${escapeHtml(c.typeLabel)}</div></div>
          <div><span class="field-label">Цвет</span><div class="field-value">${escapeHtml(c.color)}</div></div>
          <div><span class="field-label">Ресурс</span><div class="field-value">${escapeHtml(c.resource)}</div></div>
          <div><span class="field-label">Поставщик</span><div class="field-value">${escapeHtml(c.supplier)}</div></div>
          <div><span class="field-label">Мин. остаток</span><div class="field-value">${c.minStock} шт.</div></div>
          <div><span class="field-label">Стандартный запас</span><div class="field-value">${c.parStock} шт.</div></div>
          <div><span class="field-label">Место хранения</span><div class="field-value mono">${escapeHtml(c.location)}</div></div>
          <div><span class="field-label">Ед. учёта</span><div class="field-value">шт.</div></div>
          <div><span class="field-label">Штрих-код</span><div class="field-value mono">${escapeHtml(c.barcode || '—')}</div></div>
        </div>

        <div class="card" style="padding:20px">
          <span class="field-label">Совместимые принтеры</span>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">${c.printers.map(p=>`<span class="tag">${escapeHtml(p)}</span>`).join('')}</div>
        </div>
      </div>

      <div class="card" style="padding:20px">
        <h2 style="margin-bottom:10px">История движений</h2>
        <table>
          <thead><tr><th>Дата</th><th>Операция</th><th style="text-align:right">Кол-во</th><th style="text-align:right">Остаток</th></tr></thead>
          <tbody>${hist.slice(0,8).map(h => `<tr><td>${fmtDate(h.date)}</td><td>${escapeHtml(opLabel(h))}</td><td class="mono" style="text-align:right;color:${opColor(h)}">${opSign(h)}${h.qty}</td><td class="mono" style="text-align:right">${h.result}</td></tr>`).join('')}</tbody>
        </table>
        <div style="margin-top:10px;font-size:11.5px;color:var(--faint)">Показаны последние ${Math.min(hist.length,8)} операций из ${hist.length}</div>
      </div>
    </div>
  </div>`;
}

function cartridgesForPrinter(printerName){
  return state.cartridges.filter(c => c.printers.includes(printerName));
}
function renderPrintersView(){
  const printers = [...state.printers].sort((a,b) => a.name.localeCompare(b.name));

  const cards = printers.map(p => {
    const items = cartridgesForPrinter(p.name);
    const critCount = items.filter(c => statusOf(c)==='critical').length;
    return `
    <div class="card" style="padding:18px 20px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:11px">
          <div class="icon-btn" style="background:var(--paper-2)">${ICONS.printer}</div>
          <div>
            <div style="font-size:14.5px;font-weight:600">${escapeHtml(p.name)}</div>
            <div style="font-size:12px;color:var(--faint)">${escapeHtml(p.location || 'Место не указано')}${p.serial && p.serial !== '—' ? ' · с/н ' + escapeHtml(p.serial) : ''} · ${items.length ? items.length + ' совместимых картриджа' : 'картриджи не привязаны'}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          ${items.length ? (critCount ? `<span class="pill pill-critical"><span class="pill-dot"></span>${critCount} критично</span>` : `<span class="pill pill-ok"><span class="pill-dot"></span>Расходники в норме</span>`) : ''}
          <button class="icon-btn" style="width:32px;height:32px" title="Удалить принтер" onclick="deletePrinter('${p.id}')">${ICONS.x}</button>
        </div>
      </div>
      ${items.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px">
        ${items.map(c => {
          const meta = statusMeta(statusOf(c));
          return `<a href="#/detail/${c.id}" class="tag" style="display:inline-flex;align-items:center;gap:6px;color:var(--text)"><span style="width:9px;height:9px;border-radius:3px;background:${c.colorHex};flex-shrink:0"></span>${escapeHtml(c.name)}<span class="pill ${meta.cls}" style="padding:2px 7px"><span class="pill-dot"></span>${c.stock}/${c.minStock}</span></a>`;
        }).join('')}
      </div>` : `<p style="font-size:12.5px;color:var(--muted);margin:0">Пока ни один картридж не указывает эту модель как совместимую — список пополнится сам, как только такой картридж появится на складе.</p>`}
    </div>`;
  }).join('');

  return `
  <div class="topbar">
    <div><h1>Принтеры</h1><p class="sub">${printers.length} моделей на обслуживании</p></div>
    <button class="btn-primary" onclick="openPrinterModal()">${ICONS.plus}Добавить принтер</button>
  </div>
  <div class="content"><div style="display:flex;flex-direction:column;gap:14px">${cards || `<div class="card empty-state">Принтеров пока нет — нажмите «Добавить принтер»</div>`}</div></div>`;
}

/* ---------- add-printer modal ---------- */
let printerModalState = null;
function openPrinterModal(){
  printerModalState = {name:'', location:'', serial:'', notes:''};
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
        <div><h1 style="font-size:19px">Новый принтер</h1><p style="margin:4px 0 0;font-size:12.5px;color:var(--muted)">Зарегистрируйте модель, чтобы привязывать к ней картриджи</p></div>
        <button class="icon-btn" onclick="closePrinterModal()">${ICONS.x}</button>
      </div>
      <div class="field" style="margin-top:18px">
        <span class="field-lbl">Модель принтера *</span>
        <input class="input" value="${escapeHtml(s.name)}" oninput="printerModalState.name=this.value" placeholder="Например, HP LaserJet Pro M404dn" autofocus>
      </div>
      <div style="display:flex;gap:14px">
        <div class="field" style="flex:1">
          <span class="field-lbl">Отдел / место</span>
          <input class="input" value="${escapeHtml(s.location)}" oninput="printerModalState.location=this.value" placeholder="Например, Бухгалтерия">
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Серийный номер</span>
          <div style="display:flex;gap:8px">
            <input class="input" style="flex:1" value="${escapeHtml(s.serial)}" oninput="printerModalState.serial=this.value" placeholder="Необязательно">
            <button class="icon-btn" title="Сканировать штрих-код" onclick="openScanner(onBarcodeScannedForPrinter)">${ICONS.barcode}</button>
          </div>
        </div>
      </div>
      <div class="field">
        <span class="field-lbl">Комментарий</span>
        <textarea class="input" rows="2" placeholder="Необязательно" oninput="printerModalState.notes=this.value">${escapeHtml(s.notes)}</textarea>
      </div>
      <div style="display:flex;gap:10px;margin-top:6px">
        <button class="btn-secondary" style="flex:1;justify-content:center" onclick="closePrinterModal()">Отмена</button>
        <button class="btn-primary" style="flex:2;justify-content:center" onclick="submitPrinter()">${ICONS.check}Добавить принтер</button>
      </div>
    </div>
  </div>`;
}
function submitPrinter(){
  if(!printerModalState) return;
  const name = printerModalState.name.trim();
  if(!name){ toast('Укажите модель принтера'); return; }
  if(state.printers.some(p => p.name.toLowerCase() === name.toLowerCase())){
    toast('Такой принтер уже есть в списке');
    return;
  }
  const id = 'p-' + name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).slice(2,6);
  state.printers.push({
    id,
    name,
    location: printerModalState.location.trim(),
    serial: printerModalState.serial.trim() || '—',
    notes: printerModalState.notes.trim(),
  });
  saveState();
  closePrinterModal();
  toast(`Принтер добавлен: ${name}`);
  render();
}
function deletePrinter(id){
  const p = state.printers.find(x => x.id === id);
  if(!p) return;
  const linked = cartridgesForPrinter(p.name).length;
  const msg = linked
    ? `Удалить «${p.name}»? С ним связано ${linked} картридж(ей) в списке совместимости — сами картриджи не удалятся.`
    : `Удалить «${p.name}»?`;
  if(!confirm(msg)) return;
  state.printers = state.printers.filter(x => x.id !== id);
  saveState();
  toast('Принтер удалён');
  render();
}

function renderSuppliersView(){
  const bySupplier = {};
  state.cartridges.forEach(c => {
    if(!bySupplier[c.supplier]) bySupplier[c.supplier] = {items:[], stock:0};
    const s = bySupplier[c.supplier];
    s.items.push(c);
    s.stock += c.stock;
  });
  const names = Object.keys(bySupplier).sort((a,b) => bySupplier[b].stock - bySupplier[a].stock);

  const cards = names.map(name => {
    const s = bySupplier[name];
    return `
    <div class="card" style="padding:18px 20px">
      <div style="display:flex;align-items:center;gap:11px;margin-bottom:12px">
        <div class="icon-btn" style="background:var(--paper-2)">${ICONS.truck}</div>
        <div><div style="font-size:14.5px;font-weight:600">${escapeHtml(name)}</div><div style="font-size:12px;color:var(--faint)">${s.items.length} моделей · ${s.stock} шт. на складе</div></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${s.items.map(c => `<a href="#/detail/${c.id}" class="tag" style="color:var(--text)">${escapeHtml(c.name)}</a>`).join('')}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="topbar"><div><h1>Поставщики</h1><p class="sub">${names.length} поставщиков</p></div></div>
  <div class="content"><div style="display:flex;flex-direction:column;gap:14px">${cards || `<div class="card empty-state">Нет данных о поставщиках</div>`}</div></div>`;
}

function historyFilterChipsTemplate(){
  const all = [];
  state.cartridges.forEach(c => getHistory(c).forEach(h => all.push(h)));
  const counts = {
    all: all.length,
    receive: all.filter(h=>h.type==='receive').length,
    transfer: all.filter(h=>h.type==='transfer').length,
    issue: all.filter(h=>h.type==='issue').length,
  };
  const labels = {all:'Все', receive:'Приход', transfer:'В филиалы', issue:'Расход'};
  return Object.keys(labels).map(k => `<button class="filter-chip ${k===historyFilter?'active':''}" onclick="setHistoryFilter('${k}')">${labels[k]} · ${counts[k]}</button>`).join('');
}
function setHistoryFilter(key){
  historyFilter = key;
  const row = document.getElementById('history-filter-row');
  if(row) row.innerHTML = historyFilterChipsTemplate();
  updateHistoryList();
}
function updateHistoryList(){
  let rows = [];
  state.cartridges.forEach(c => getHistory(c).forEach(h => rows.push({...h, cartridgeName:c.name, cartridgeId:c.id, colorHex:c.colorHex})));
  if(historyFilter !== 'all') rows = rows.filter(r => r.type === historyFilter);
  rows.sort((a,b) => b.date.localeCompare(a.date));
  const body = document.getElementById('history-body');
  if(!body) return;
  body.innerHTML = rows.length ? rows.map(r => `
    <tr style="cursor:pointer" onclick="location.hash='#/detail/${r.cartridgeId}'">
      <td class="mono">${fmtDate(r.date)}</td>
      <td><span style="display:inline-flex;align-items:center;gap:8px"><span style="width:9px;height:9px;border-radius:3px;background:${r.colorHex};flex-shrink:0"></span>${escapeHtml(r.cartridgeName)}</span></td>
      <td>${escapeHtml(opLabel(r))}</td>
      <td class="mono" style="text-align:right;color:${opColor(r)}">${opSign(r)}${r.qty}</td>
      <td class="mono" style="text-align:right">${r.result}</td>
      <td style="color:var(--faint)">${escapeHtml(r.who || '—')}</td>
    </tr>`).join('') : `<tr><td colspan="6" class="empty-state">Операций не найдено</td></tr>`;
}
function renderHistoryView(){
  return `
  <div class="topbar">
    <div><h1>История</h1><p class="sub">Приходы, передачи в филиалы и расходы</p></div>
    <button class="btn-primary btn-in" onclick="openReport()">${ICONS.excel}Отчёт в Excel</button>
  </div>
  <div class="content">
    <div class="filter-row" id="history-filter-row">${historyFilterChipsTemplate()}</div>
    <div class="card table-wrap">
      <table>
        <thead><tr><th>Дата</th><th>Картридж</th><th>Операция</th><th style="text-align:right">Кол-во</th><th style="text-align:right">Остаток</th><th>Кто / куда</th></tr></thead>
        <tbody id="history-body"></tbody>
      </table>
    </div>
  </div>`;
}

/* ---------- warehouses views ---------- */
function renderWarehousesView(){
  const whs = activeWarehouses();
  const list = [...state.cartridges].sort((a,b) => totalStock(b) - totalStock(a) || a.name.localeCompare(b.name));
  const grand = list.reduce((s,c) => s + totalStock(c), 0);
  return `
  <div class="topbar">
    <div><h1>Склады</h1><p class="sub">${escapeHtml(whName(MAIN_WH))} — основной склад, остальные — филиалы</p></div>
    <button class="btn-secondary" onclick="addBranch()">${ICONS.plus}Добавить филиал</button>
  </div>
  <div class="content">
    <div class="section">${warehouseCardsTemplate()}</div>
    <div class="section">
      <div class="section-head"><h2>Остатки по складам</h2></div>
      <div class="card table-wrap">
        <table class="wh-table">
          <thead><tr><th>Картридж</th>${whs.map(w => `<th class="num">${escapeHtml(w.name)}</th>`).join('')}<th class="num">Всего</th></tr></thead>
          <tbody>${list.length ? list.map(c => `
            <tr style="cursor:pointer" onclick="location.hash='#/detail/${c.id}'">
              <td><span style="display:inline-flex;align-items:center;gap:8px"><span style="width:9px;height:9px;border-radius:3px;background:${c.colorHex};flex-shrink:0"></span>${escapeHtml(c.name)}</span></td>
              ${whs.map(w => { const v = whStock(c, w.id); return `<td class="num mono ${v ? '' : 'zero'}">${v}</td>`; }).join('')}
              <td class="num mono"><b>${totalStock(c)}</b></td>
            </tr>`).join('') : `<tr><td colspan="${whs.length + 2}" class="empty-state">Картриджей пока нет</td></tr>`}</tbody>
          ${list.length ? `<tfoot><tr><td>Итого</td>${whs.map(w => `<td class="num mono">${whTotal(w.id)}</td>`).join('')}<td class="num mono">${grand}</td></tr></tfoot>` : ''}
        </table>
      </div>
    </div>
  </div>`;
}

function whRowTemplate(c, wh){
  const n = whStock(c, wh);
  const isMain = wh === MAIN_WH;
  const chipBorder = c.colorHex.toUpperCase() === '#F3EFE6' ? ';border:1px solid var(--border)' : '';
  const plusAction = isMain ? `openMovement('${c.id}','receive')` : `openMovement('${c.id}','transfer',{to:'${wh}'})`;
  return `
  <div class="c-row ${n ? '' : 'c-row-empty'}" onclick="location.hash='#/detail/${c.id}'">
    <div class="chip" style="background:${c.colorHex}${chipBorder}"></div>
    <div class="c-main">
      <div class="c-name">${escapeHtml(c.name)}</div>
      <div class="c-sub">${escapeHtml([c.sku, c.printers[0] || c.typeLabel].filter(Boolean).join(' · '))}</div>
    </div>
    <div class="c-stock"><b>${n}</b><span>шт.</span></div>
    <div class="c-quick">
      <button class="q-btn ${isMain ? 'q-in' : 'q-move'}" title="${isMain ? 'Приход' : 'Получить с ' + escapeHtml(whName(MAIN_WH))}" onclick="event.stopPropagation();${plusAction}">+</button>
      <button class="q-btn q-out" title="Расход" onclick="event.stopPropagation();openMovement('${c.id}','issue',{wh:'${wh}'})">−</button>
    </div>
  </div>`;
}

function renderWarehouseView(id){
  const w = activeWarehouses().find(x => x.id === id);
  if(!w) return `<div class="content" style="padding-top:32px"><p>Склад не найден. <a href="#/warehouses">Все склады</a></p></div>`;
  const isMain = w.id === MAIN_WH;
  const total = whTotal(w.id);
  const models = state.cartridges.filter(c => whStock(c, w.id) > 0).length;
  const list = [...state.cartridges].sort((a,b) => whStock(b, w.id) - whStock(a, w.id) || a.name.localeCompare(b.name));
  return `
  <div class="content" style="padding-top:24px">
    <a class="back-link" href="#/warehouses">${ICONS.back} Все склады</a>
    <div class="detail-head">
      <div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><h1 style="font-size:26px">${escapeHtml(w.name)}</h1><span class="wh-tag ${isMain ? 'wh-tag-main' : ''}">${isMain ? 'Основной склад' : 'Филиал'}</span></div>
        <p style="margin:4px 0 0;font-size:15px;color:var(--faint)">${total} шт. · ${models} ${plural(models, 'модель', 'модели', 'моделей')} в наличии</p>
      </div>
      <div class="detail-actions">
        <button class="icon-btn" title="Переименовать" aria-label="Переименовать склад" onclick="renameWarehouse('${w.id}')">${ICONS.edit}</button>
        ${isMain ? '' : `<button class="icon-btn" title="Удалить филиал" aria-label="Удалить филиал" onclick="deleteWarehouse('${w.id}')">${ICONS.trash}</button>`}
        ${isMain
          ? `<button class="btn-primary btn-in" onclick="openMovement(null,'receive')">${ICONS.plus}Приход</button>`
          : `<button class="btn-primary btn-move" onclick="openMovement(null,'transfer',{to:'${w.id}'})">${ICONS.transfer}Получить с ${escapeHtml(whName(MAIN_WH))}</button>`}
        <button class="btn-primary btn-out" onclick="openMovement(null,'issue',{wh:'${w.id}'})">${ICONS.minus}Расход</button>
      </div>
    </div>
    <div class="row-list">${list.length ? list.map(c => whRowTemplate(c, w.id)).join('') : `<div class="empty-state">Картриджей пока нет</div>`}</div>
  </div>`;
}

function addBranch(){
  const name = (prompt('Название нового филиала:') || '').trim();
  if(!name) return;
  if(activeWarehouses().some(w => w.name.toLowerCase() === name.toLowerCase())){ toast('Склад с таким названием уже есть'); return; }
  state.warehouses.push({id: 'wh-' + Math.random().toString(36).slice(2,8), name});
  saveState();
  toast(`Филиал добавлен: ${name}`);
  render();
}
function renameWarehouse(id){
  const w = activeWarehouses().find(x => x.id === id);
  if(!w) return;
  const name = (prompt('Новое название склада:', w.name) || '').trim();
  if(!name || name === w.name) return;
  if(activeWarehouses().some(x => x.id !== id && x.name.toLowerCase() === name.toLowerCase())){ toast('Склад с таким названием уже есть'); return; }
  w.name = name;
  saveState();
  toast('Склад переименован');
  render();
}
function deleteWarehouse(id){
  const w = activeWarehouses().find(x => x.id === id);
  if(!w || id === MAIN_WH) return;
  const left = whTotal(id);
  if(left > 0){ toast(`На «${w.name}» ещё ${left} шт. — сначала спишите или передайте их`); return; }
  if(!confirm(`Удалить филиал «${w.name}»? История операций по нему сохранится.`)) return;
  w.deleted = true;
  if(state.lastIssueWh === id) delete state.lastIssueWh;
  saveState();
  toast('Филиал удалён');
  location.hash = '#/warehouses';
}

function renderSettingsView(){
  return `
  <div class="topbar"><div><h1>Настройки</h1><p class="sub">Данные приложения</p></div></div>
  <div class="content">
    <div style="display:flex;flex-direction:column;gap:14px;max-width:520px">
      <div class="row-list mob-only">
        <a class="menu-link" href="#/warehouses">${ICONS.store}Склады и филиалы</a>
        <a class="menu-link" href="#/printers">${ICONS.printer}Принтеры</a>
        <a class="menu-link" href="#/suppliers">${ICONS.truck}Поставщики</a>
      </div>
      <div class="card" style="padding:22px">
        <h2 style="font-size:20px;margin-bottom:8px">Начать с нуля</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Удаляет все картриджи, принтеры и историю. Склад станет пустым — дальше добавляйте свои картриджи кнопкой «Новый картридж» на складе.</p>
        <button class="btn-primary btn-out" onclick="resetData('empty')">${ICONS.trash} Очистить всё</button>
      </div>
      <div class="card" style="padding:22px">
        <h2 style="font-size:20px;margin-bottom:8px">Демо-данные</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Заменяет всё на 12 примерных картриджей — чтобы посмотреть, как работает приложение.</p>
        <button class="btn-secondary" onclick="resetData('demo')">Загрузить демо-данные</button>
      </div>
      <p style="font-size:14px;color:var(--faint);margin:0">Данные хранятся только в этом браузере на этом устройстве.</p>
    </div>
  </div>`;
}

/* ---------- inventory list update (partial re-render, keeps input focus) ---------- */
function updateInventoryList(){
  let list = state.cartridges.filter(c => {
    if(activeFilter==='critical') return statusOf(c)==='critical';
    if(activeFilter==='low') return statusOf(c)==='low';
    if(activeFilter!=='all') return c.type===activeFilter;
    return true;
  });
  if(searchQuery.trim()){
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(c => c.name.toLowerCase().includes(q) || c.sku.toLowerCase().includes(q));
  }
  const body = document.getElementById('inv-list-body');
  if(!body) return;
  if(!state.cartridges.length){
    body.innerHTML = `<div class="empty-state"><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:6px">Склад пуст</div>Добавьте первый картридж — вручную или отсканируйте штрих-код.<div style="margin-top:16px"><button class="btn-primary" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button></div></div>`;
    return;
  }
  body.innerHTML = list.length ? list.map(rowTemplate).join('') : `<div class="empty-state">Ничего не найдено</div>`;
}
function setFilter(key){
  activeFilter = key;
  const row = document.getElementById('filter-row');
  if(row) row.innerHTML = filterChipsTemplate();
  updateInventoryList();
}

/* ---------- movement modal ---------- */
// type: 'receive' (supplier → main), 'issue' (расход from any warehouse),
// 'transfer' (one warehouse → another, normally main → branch).
// opts: {wh} source for issue, {from, to} for transfer.
function openMovement(id, type, opts){
  if(!state.cartridges.length){
    toast('Склад пуст — сначала добавьте картридж');
    openCartridgeCreate();
    return;
  }
  opts = opts || {};
  const c = (id && state.cartridges.find(x=>x.id===id)) || state.cartridges[0];
  let t = type || 'receive';
  const branches = branchList();
  if(t === 'transfer' && !branches.length){
    toast('Филиалов нет — добавьте их в разделе «Склады»');
    t = 'issue';
  }
  const from = opts.from || MAIN_WH;
  let to = opts.to || (branches[0] ? branches[0].id : null);
  if(to === from) to = (activeWarehouses().find(w => w.id !== from) || {}).id || null;
  modalState = {
    cartridgeId: c.id,
    type: t,
    qty: t==='receive' ? 10 : 1,
    party: t==='receive' ? c.supplier : '',
    note: '',
    wh: opts.wh || defaultIssueWh(),
    from, to,
  };
  renderModal();
}
function closeMovement(){
  modalState = null;
  const root = document.getElementById('modal-root');
  if(root) root.innerHTML = '';
}
function setMovementType(type){
  if(!modalState) return;
  modalState.type = type;
  modalState.qty = type==='receive' ? 10 : 1;
  const c = state.cartridges.find(x=>x.id===modalState.cartridgeId);
  modalState.party = type==='receive' ? (c ? c.supplier : '') : '';
  renderModal();
}
function setMovementWh(field, id){
  if(!modalState) return;
  modalState[field] = id;
  // Source and destination of a transfer can never be the same warehouse.
  if(field === 'from' && modalState.to === id) modalState.to = (activeWarehouses().find(w => w.id !== id) || {}).id || null;
  renderModal();
}
function setMovementCartridge(id){
  if(!modalState) return;
  modalState.cartridgeId = id;
  const c = state.cartridges.find(x=>x.id===id);
  if(modalState.type==='receive') modalState.party = c ? c.supplier : '';
  renderModal();
}
function stepMovementQty(delta){
  if(!modalState) return;
  modalState.qty = Math.max(1, modalState.qty + delta);
  renderModal();
}
function renderModal(){
  const root = document.getElementById('modal-root');
  if(!modalState){ root.innerHTML = ''; return; }
  const c = state.cartridges.find(x => x.id === modalState.cartridgeId) || state.cartridges[0];
  const t = modalState.type;
  const qty = modalState.qty;
  const hasBranches = branchList().length > 0;
  // The warehouse whose count the cartridge dropdown shows.
  const shownWh = t === 'receive' ? MAIN_WH : t === 'issue' ? modalState.wh : modalState.from;
  const whChips = (field, list) => `<div class="wh-chips">${list.map(w => `<button class="filter-chip ${modalState[field]===w.id?'active':''}" onclick="setMovementWh('${field}','${w.id}')">${escapeHtml(w.name)} · ${whStock(c, w.id)} шт.</button>`).join('')}</div>`;

  let whFields = '', summary, title, submitLabel, btnCls;
  if(t === 'receive'){
    title = 'Приход картриджа';
    submitLabel = 'Сохранить приход'; btnCls = 'btn-in';
    summary = `${escapeHtml(whName(MAIN_WH))}: ${c.stock} → ${c.stock + qty} шт.`;
  } else if(t === 'issue'){
    const have = whStock(c, modalState.wh);
    title = 'Расход картриджа';
    submitLabel = 'Сохранить расход'; btnCls = 'btn-out';
    if(hasBranches) whFields = `<div class="field"><span class="field-lbl">Со склада</span>${whChips('wh', activeWarehouses())}</div>`;
    summary = `${escapeHtml(whName(modalState.wh))}: ${have} → ${Math.max(0, have - qty)} шт.`;
  } else {
    const have = whStock(c, modalState.from);
    const moved = Math.min(qty, have);
    const toHave = whStock(c, modalState.to);
    title = modalState.from === MAIN_WH ? 'Передача в филиал' : 'Перемещение между складами';
    submitLabel = 'Передать'; btnCls = 'btn-move';
    whFields = `
      <div class="field"><span class="field-lbl">Откуда</span>${whChips('from', activeWarehouses())}</div>
      <div class="field"><span class="field-lbl">Куда</span>${whChips('to', activeWarehouses().filter(w => w.id !== modalState.from))}</div>`;
    summary = `${escapeHtml(whName(modalState.from))}: ${have} → ${have - moved} шт.<br>${escapeHtml(whName(modalState.to))}: ${toHave} → ${toHave + moved} шт.`;
  }
  const partyLabel = t === 'receive' ? 'От кого (поставщик)' : t === 'issue' ? 'Кому (отдел / сотрудник)' : 'Кто принял';
  const partyHint = t === 'receive' ? 'Название поставщика' : t === 'issue' ? 'Например, Бухгалтерия' : 'Необязательно';

  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeMovement()">
    <div class="modal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <h1>${title}</h1>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeMovement()">${ICONS.x}</button>
      </div>
      <div class="toggle ${hasBranches ? 'three' : ''}">
        <button class="toggle-opt in ${t==='receive'?'active':''}" onclick="setMovementType('receive')">+ Приход</button>
        ${hasBranches ? `<button class="toggle-opt move ${t==='transfer'?'active':''}" onclick="setMovementType('transfer')">→ В филиал</button>` : ''}
        <button class="toggle-opt out ${t==='issue'?'active':''}" onclick="setMovementType('issue')">− Расход</button>
      </div>
      <div class="field">
        <span class="field-lbl">Картридж</span>
        <div style="display:flex;gap:8px">
          <select class="input" style="flex:1;min-width:0" onchange="setMovementCartridge(this.value)">
            ${state.cartridges.map(x => `<option value="${x.id}" ${x.id===c.id?'selected':''}>${escapeHtml(x.name)} — ${escapeHtml(x.sku)} (${whStock(x, shownWh)} шт.)</option>`).join('')}
          </select>
          <button class="icon-btn" title="Сканировать штрих-код" onclick="openScanner(onBarcodeScannedInModal)">${ICONS.barcode}</button>
        </div>
      </div>
      ${whFields}
      <div class="field">
        <span class="field-lbl">Количество</span>
        <div class="stepper"><button aria-label="Меньше" onclick="stepMovementQty(-1)">−</button><span class="val">${qty}</span><button aria-label="Больше" onclick="stepMovementQty(1)">+</button></div>
      </div>
      <div class="field">
        <span class="field-lbl">${partyLabel}</span>
        <input class="input" value="${escapeHtml(modalState.party)}" oninput="modalState.party=this.value" placeholder="${partyHint}">
      </div>
      <div class="field">
        <span class="field-lbl">Комментарий</span>
        <textarea class="input" rows="2" placeholder="Необязательно" oninput="modalState.note=this.value">${escapeHtml(modalState.note||'')}</textarea>
      </div>
      <div class="warn-box"><span>Станет: <b style="color:var(--text);font-size:17px;line-height:1.5">${summary}</b></span></div>
      <div class="modal-foot">
        <button class="btn-secondary" onclick="closeMovement()">Отмена</button>
        <button class="btn-primary ${btnCls}" onclick="submitMovement()">${ICONS.check}${submitLabel}</button>
      </div>
    </div>
  </div>`;
}
function submitMovement(){
  if(!modalState) return;
  const c = state.cartridges.find(x => x.id === modalState.cartridgeId);
  const t = modalState.type;
  if(modalState.qty < 1){ toast('Укажите количество больше нуля'); return; }
  const who = modalState.party.trim() || '—';
  const note = (modalState.note || '').trim();
  let qty = modalState.qty, entry, message, meta;

  if(t === 'receive'){
    c.stock += qty;
    if(c.onOrder) c.onOrder = false;
    entry = {type:'receive', wh:MAIN_WH, qty, result:c.stock};
    message = `Приход записан: ${c.name} +${qty}`;
    meta = modalState.party.trim() || 'Приход';
  } else {
    const src = t === 'issue' ? modalState.wh : modalState.from;
    const dst = modalState.to;
    if(t === 'transfer' && (!dst || dst === src)){ toast('Выберите, куда передать'); return; }
    const have = whStock(c, src);
    if(have === 0){ toast(`На складе «${whName(src)}» нет «${c.name}»`); return; }
    if(qty > have){
      if(!confirm(`На складе «${whName(src)}» только ${have} шт. ${t === 'issue' ? 'Списать' : 'Передать'} всё, что есть?`)) return;
      // Record what actually left the shelf, so reports never count more than existed.
      qty = have;
    }
    setWhStock(c, src, have - qty);
    if(t === 'issue'){
      state.lastIssueWh = src;
      entry = {type:'issue', wh:src, qty, result: have - qty};
      message = `Расход записан (${whName(src)}): ${c.name} −${qty}`;
      meta = [whName(src), modalState.party.trim()].filter(Boolean).join(' · ');
    } else {
      const toHave = whStock(c, dst);
      setWhStock(c, dst, toHave + qty);
      entry = {type:'transfer', from:src, to:dst, qty, result: have - qty, resultTo: toHave + qty};
      message = `Передано: ${c.name} ×${qty} → ${whName(dst)}`;
      meta = `${whName(src)} → ${whName(dst)}`;
    }
  }

  Object.assign(entry, {date: todayIso(), who, dept: note});
  if(!state.history[c.id]) state.history[c.id] = [];
  state.history[c.id].unshift(entry);

  state.activity.unshift({date: 'только что', type: t, text: `${c.name} ×${qty}`, meta});
  state.activity = state.activity.slice(0,8);

  saveState();
  closeMovement();
  toast(message);
  render();
}

/* ---------- edit / delete cartridge ---------- */
const TYPE_LABELS = {toner:'Тонер', ink:'Чернила', drum:'Драм-юнит'};
let cartridgeEditState = null;

function openCartridgeCreate(barcode){
  cartridgeEditState = {
    isNew: true, id: null,
    name: '', sku: '', barcode: barcode || '',
    type: 'toner', color: 'Чёрный', colorHex: '#2A2C33',
    printers: '', supplier: '',
    minStock: 2, parStock: 10,
    location: '', resource: '',
    initialStock: 0,
  };
  renderCartridgeEditModal();
}
function openCartridgeEdit(id){
  const c = state.cartridges.find(x => x.id === id);
  if(!c) return;
  cartridgeEditState = {
    isNew: false,
    id: c.id,
    name: c.name, sku: c.sku, barcode: c.barcode || '',
    type: c.type, color: c.color, colorHex: c.colorHex,
    printers: c.printers.join(', '),
    supplier: c.supplier,
    minStock: c.minStock, parStock: c.parStock,
    location: c.location, resource: c.resource,
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
function onBarcodeScannedForCartridgeEdit(code){
  if(cartridgeEditState) cartridgeEditState.barcode = String(code).trim();
  renderCartridgeEditModal();
  toast('Штрих-код считан');
}
function renderCartridgeEditModal(){
  const root = document.getElementById('modal-root');
  const s = cartridgeEditState;
  if(!s){ root.innerHTML = ''; return; }
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeCartridgeEdit()">
    <div class="modal-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div><h1>${s.isNew ? 'Новый картридж' : 'Редактировать картридж'}</h1><p style="margin:4px 0 0;font-size:14px;color:var(--faint)">${s.isNew ? 'Обязательно только название' : 'Остаток меняется через «Приход» и «Расход»'}</p></div>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeCartridgeEdit()">${ICONS.x}</button>
      </div>

      <div style="display:flex;gap:14px;margin-top:16px">
        <div class="field" style="flex:2">
          <span class="field-lbl">Название *</span>
          <input class="input" value="${escapeHtml(s.name)}" oninput="setCartridgeEditField('name', this.value)" placeholder="Например, HP CF283A">
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Цвет метки</span>
          <input class="input" type="color" style="padding:4px" value="${s.colorHex}" oninput="setCartridgeEditField('colorHex', this.value)">
        </div>
      </div>

      ${s.isNew ? `
      <div class="field">
        <span class="field-lbl">Сейчас на складе ${escapeHtml(whName(MAIN_WH))}, шт.</span>
        <input class="input" type="number" min="0" inputmode="numeric" value="${s.initialStock}" oninput="setCartridgeEditField('initialStock', Math.max(0, Math.floor(Number(this.value)||0)))">
      </div>` : ''}

      <div style="display:flex;gap:14px">
        <div class="field" style="flex:1">
          <span class="field-lbl">Артикул</span>
          <input class="input" value="${escapeHtml(s.sku)}" oninput="setCartridgeEditField('sku', this.value)">
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Штрих-код</span>
          <div style="display:flex;gap:8px">
            <input class="input" style="flex:1" value="${escapeHtml(s.barcode)}" oninput="setCartridgeEditField('barcode', this.value)">
            <button class="icon-btn" title="Сканировать" onclick="openScanner(onBarcodeScannedForCartridgeEdit)">${ICONS.barcode}</button>
          </div>
        </div>
      </div>

      <div style="display:flex;gap:14px">
        <div class="field" style="flex:1">
          <span class="field-lbl">Тип</span>
          <select class="input" onchange="setCartridgeEditField('type', this.value)">
            ${Object.keys(TYPE_LABELS).map(t => `<option value="${t}" ${t===s.type?'selected':''}>${TYPE_LABELS[t]}</option>`).join('')}
          </select>
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Цвет</span>
          <input class="input" value="${escapeHtml(s.color)}" oninput="setCartridgeEditField('color', this.value)" placeholder="Чёрный, голубой… или —">
        </div>
      </div>

      <div class="field">
        <span class="field-lbl">Совместимые принтеры (через запятую)</span>
        <input class="input" value="${escapeHtml(s.printers)}" oninput="setCartridgeEditField('printers', this.value)">
      </div>

      <div class="field">
        <span class="field-lbl">Поставщик</span>
        <input class="input" value="${escapeHtml(s.supplier)}" oninput="setCartridgeEditField('supplier', this.value)">
      </div>

      <div style="display:flex;gap:14px">
        <div class="field" style="flex:1">
          <span class="field-lbl">Мин. остаток</span>
          <input class="input" type="number" min="0" value="${s.minStock}" oninput="setCartridgeEditField('minStock', Number(this.value)||0)">
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Стандартный запас</span>
          <input class="input" type="number" min="0" value="${s.parStock}" oninput="setCartridgeEditField('parStock', Number(this.value)||0)">
        </div>
      </div>

      <div style="display:flex;gap:14px">
        <div class="field" style="flex:1">
          <span class="field-lbl">Место хранения</span>
          <input class="input" value="${escapeHtml(s.location)}" oninput="setCartridgeEditField('location', this.value)">
        </div>
        <div class="field" style="flex:1">
          <span class="field-lbl">Ресурс</span>
          <input class="input" value="${escapeHtml(s.resource)}" oninput="setCartridgeEditField('resource', this.value)" placeholder="~1500 стр.">
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
      state.history[c.id] = [{date: new Date().toISOString().slice(0,10), type:'receive', wh: MAIN_WH, qty: s.initialStock, result: s.initialStock, who: 'Начальный остаток', dept: ''}];
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
  c.sku = s.sku.trim();
  c.barcode = barcode;
  c.type = s.type;
  c.typeLabel = TYPE_LABELS[s.type];
  c.color = s.color.trim() || '—';
  c.colorHex = s.colorHex;
  c.printers = s.printers.split(',').map(p => p.trim()).filter(Boolean);
  c.supplier = s.supplier.trim();
  c.minStock = Math.max(0, s.minStock);
  c.parStock = Math.max(0, s.parStock);
  c.location = s.location.trim();
  c.resource = s.resource.trim();
  saveState();
  closeCartridgeEdit();
  toast(isNew ? `Добавлен: ${c.name}` : `Сохранено: ${c.name}`);
  render();
}
function deleteCartridge(id){
  const c = state.cartridges.find(x => x.id === id);
  if(!c) return;
  if(!confirm(`Удалить «${c.name}» из склада? История операций по нему тоже будет удалена. Это необратимо.`)) return;
  state.cartridges = state.cartridges.filter(x => x.id !== id);
  delete state.history[id];
  saveState();
  cartridgeEditState = null;
  document.getElementById('modal-root').innerHTML = '';
  toast(`Удалено: ${c.name}`);
  location.hash = '#/inventory';
  render();
}

/* ---------- excel report ---------- */
let reportState = null;

function todayIso(){ return new Date().toISOString().slice(0,10); }
function reportPreset(kind){
  const t = todayIso();
  const y = Number(t.slice(0,4)), m = Number(t.slice(5,7));
  if(kind === 'month') return {from: t.slice(0,8) + '01', to: t};
  if(kind === 'prev'){
    const py = m === 1 ? y - 1 : y, pm = m === 1 ? 12 : m - 1;
    const last = new Date(Date.UTC(py, pm, 0)).getUTCDate();
    const mm = String(pm).padStart(2,'0');
    return {from: `${py}-${mm}-01`, to: `${py}-${mm}-${String(last).padStart(2,'0')}`};
  }
  let earliest = t;
  Object.values(state.history).forEach(list => list.forEach(h => { if(h.date < earliest) earliest = h.date; }));
  return {from: earliest, to: t};
}
function openReport(){
  reportState = {...reportPreset('month'), preset: 'month'};
  renderReportModal();
}
function closeReport(){
  reportState = null;
  document.getElementById('modal-root').innerHTML = '';
}
function setReportPreset(kind){
  reportState = {...reportPreset(kind), preset: kind};
  renderReportModal();
}
function setReportDate(field, value){
  if(!reportState || !value) return;
  reportState[field] = value;
  reportState.preset = null;
  renderReportModal();
}

// Opening/closing stock are reconstructed backwards from the current stock, so the
// report stays correct even though only the latest stock value is stored.
// Returns one row per cartridge per warehouse: in = from supplier, got = from another
// warehouse, sent = to another warehouse, out = расход.
function buildReport(from, to){
  const rows = [];
  const moves = [];
  state.cartridges.forEach(c => {
    // Stored newest-first; walk oldest-first so same-day moves keep their real order.
    const hist = [...(state.history[c.id] || [])].reverse();
    const acc = {};
    const get = id => acc[id] || (acc[id] = {afterTo:0, inQty:0, got:0, sent:0, outQty:0});
    hist.forEach(h => {
      if(h.date > to){
        Object.entries(entryDeltas(h)).forEach(([wh, v]) => { get(wh).afterTo += v; });
        return;
      }
      if(h.date < from) return;
      moves.push({h, c});
      if(h.type === 'receive') get(h.wh || MAIN_WH).inQty += h.qty;
      else if(h.type === 'issue') get(h.wh || MAIN_WH).outQty += h.qty;
      else if(h.type === 'transfer'){ get(h.from || MAIN_WH).sent += h.qty; get(h.to).got += h.qty; }
    });
    state.warehouses.forEach(w => {
      const a = get(w.id);
      const closing = whStock(c, w.id) - a.afterTo;
      const opening = closing - a.inQty - a.got + a.sent + a.outQty;
      rows.push({c, wh: w, opening, closing, inQty: a.inQty, got: a.got, sent: a.sent, outQty: a.outQty});
    });
  });
  moves.sort((a,b) => a.h.date.localeCompare(b.h.date));
  return {rows, moves};
}
function rowHasData(r){ return r.opening || r.closing || r.inQty || r.got || r.sent || r.outQty; }

function renderReportModal(){
  const root = document.getElementById('modal-root');
  const s = reportState;
  if(!s){ root.innerHTML = ''; return; }
  const bad = s.from > s.to;
  const {rows, moves} = bad ? {rows:[], moves:[]} : buildReport(s.from, s.to);
  const inSum = rows.reduce((a,r) => a + r.inQty, 0);
  const sentSum = rows.filter(r => r.wh.id === MAIN_WH).reduce((a,r) => a + r.sent, 0);
  const outSum = rows.reduce((a,r) => a + r.outQty, 0);
  const chip = (kind, label) => `<button class="filter-chip ${s.preset===kind?'active':''}" onclick="setReportPreset('${kind}')">${label}</button>`;
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeReport()">
    <div class="modal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <h1>Отчёт в Excel</h1>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeReport()">${ICONS.x}</button>
      </div>
      <p style="margin:6px 0 16px;font-size:15px;color:var(--faint)">Выберите период — сколько пришло и сколько ушло</p>
      <div class="filter-row">${chip('month','Этот месяц')}${chip('prev','Прошлый месяц')}${chip('all','Всё время')}</div>
      <div style="display:flex;gap:12px">
        <div class="field" style="flex:1"><span class="field-lbl">С</span><input class="input" type="date" value="${s.from}" onchange="setReportDate('from', this.value)"></div>
        <div class="field" style="flex:1"><span class="field-lbl">По</span><input class="input" type="date" value="${s.to}" onchange="setReportDate('to', this.value)"></div>
      </div>
      <div class="warn-box">${bad
        ? '<span style="color:var(--crit-fg)">Дата «С» позже даты «По»</span>'
        : `<span>За период: <b style="color:var(--ok-fg)">пришло ${inSum}</b> · <b style="color:var(--order-fg)">в филиалы ${sentSum}</b> · <b style="color:var(--crit-fg)">расход ${outSum}</b> · операций ${moves.length}</span>`}</div>
      <div class="modal-foot">
        <button class="btn-secondary" onclick="closeReport()">Отмена</button>
        <button class="btn-primary btn-in" onclick="downloadReport()">${ICONS.excel}Скачать Excel</button>
      </div>
    </div>
  </div>`;
}

function downloadReport(){
  const s = reportState;
  if(!s) return;
  if(s.from > s.to){ toast('Проверьте даты периода'); return; }
  if(typeof XLSX === 'undefined'){ toast('Модуль Excel не загрузился — проверьте интернет'); return; }

  const {rows, moves} = buildReport(s.from, s.to);
  const period = `${fmtDate(s.from)} — ${fmtDate(s.to)}`;
  const created = new Date().toLocaleString('ru-RU');
  // A deleted branch still appears if it had stock or moves inside the period.
  const whs = state.warehouses.filter(w => !w.deleted || rows.some(r => r.wh.id === w.id && rowHasData(r)));
  const sum = (list, k) => list.reduce((a,r) => a + r[k], 0);

  const overviewRows = [
    ['Отчёт по картриджам'],
    ['Период', period],
    ['Сформирован', created],
    [],
    ['Склад', 'Было на начало', 'Пришло от поставщика', 'Получено с других складов', 'Передано на другие склады', 'Расход', 'Осталось на конец'],
    ...whs.map(w => {
      const list = rows.filter(r => r.wh.id === w.id);
      return [w.name + (w.id === MAIN_WH ? ' (основной)' : ''), sum(list,'opening'), sum(list,'inQty'), sum(list,'got'), sum(list,'sent'), sum(list,'outQty'), sum(list,'closing')];
    }),
    [],
    ['Всего', sum(rows,'opening'), sum(rows,'inQty'), sum(rows,'got'), sum(rows,'sent'), sum(rows,'outQty'), sum(rows,'closing')],
  ];

  // One sheet per warehouse; columns that are zero for the whole warehouse are dropped
  // (a branch never gets supplier deliveries, the main warehouse rarely gets returns).
  const warehouseSheet = w => {
    const isMain = w.id === MAIN_WH;
    const list = rows.filter(r => r.wh.id === w.id && (isMain || rowHasData(r)));
    const cols = [
      {title:'Было на начало', key:'opening', show:true},
      {title:'Пришло от поставщика', key:'inQty', show: isMain || sum(list,'inQty') > 0},
      {title: isMain ? 'Возвращено из филиалов' : 'Получено', key:'got', show: !isMain || sum(list,'got') > 0},
      {title: isMain ? 'Передано в филиалы' : 'Передано', key:'sent', show: isMain || sum(list,'sent') > 0},
      {title:'Расход', key:'outQty', show:true},
      {title:'Осталось на конец', key:'closing', show:true},
    ].filter(col => col.show);
    return [
      [`Склад: ${w.name}`],
      ['Период', period],
      [],
      ['Картридж', 'Артикул', ...cols.map(col => col.title)],
      ...list.map(r => [r.c.name, r.c.sku, ...cols.map(col => r[col.key])]),
      [],
      ['Итого', '', ...cols.map(col => sum(list, col.key))],
    ];
  };

  const moveRows = [
    ['Дата', 'Картридж', 'Артикул', 'Операция', 'Склад', 'Кол-во', 'Остаток после', 'Кто', 'Комментарий'],
    ...moves.map(({h, c}) => [
      fmtDate(h.date), c.name, c.sku,
      h.type === 'receive' ? 'Приход' : h.type === 'issue' ? 'Расход' : 'Передача',
      h.type === 'transfer' ? `${whName(h.from)} → ${whName(h.to)}` : whName(h.wh),
      h.type === 'issue' ? -h.qty : h.qty,
      h.result, h.who && h.who !== '—' ? h.who : '', h.dept || '',
    ]),
  ];
  const liveWhs = activeWarehouses();
  const stockRows = [
    ['Картридж', 'Артикул', 'Штрих-код', 'Тип', 'Цвет', ...liveWhs.map(w => w.name), 'Всего', `Мин. остаток (${whName(MAIN_WH)})`, 'Статус', 'Поставщик', 'Место хранения', 'Совместимые принтеры'],
    ...state.cartridges.map(c => [c.name, c.sku, c.barcode || '', c.typeLabel, c.color, ...liveWhs.map(w => whStock(c, w.id)), totalStock(c), c.minStock, statusMeta(statusOf(c)).label, c.supplier, c.location, c.printers.join(', ')]),
  ];

  const wb = XLSX.utils.book_new();
  const usedNames = new Set();
  const addSheet = (rows, name, widths) => {
    // Excel sheet names: max 31 chars, no []:*?/\ and unique within the file.
    let base = String(name).replace(/[\[\]:*?\/\\]/g, ' ').trim().slice(0, 28) || 'Лист';
    let sheetName = base, n = 2;
    while(usedNames.has(sheetName.toLowerCase())) sheetName = `${base} ${n++}`;
    usedNames.add(sheetName.toLowerCase());
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = widths.map(w => ({wch: w}));
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  };
  addSheet(overviewRows, 'Итоги', [24, 16, 20, 24, 24, 10, 18]);
  whs.forEach(w => addSheet(warehouseSheet(w), w.name, [26, 14, 16, 20, 22, 20, 10, 18]));
  addSheet(moveRows, 'Движения', [12, 26, 14, 11, 24, 9, 14, 20, 28]);
  addSheet(stockRows, 'Остатки', [26, 14, 16, 11, 11, ...liveWhs.map(() => 12), 9, 22, 15, 16, 16, 40]);
  XLSX.writeFile(wb, `Отчёт_картриджи_${s.from}_${s.to}.xlsx`);

  closeReport();
  toast('Отчёт скачан');
}

/* ---------- barcode scanner ---------- */
let html5QrCodeInstance = null;
let cameraRunning = false;
let scanResultCallback = null;

function findCartridgeByBarcode(code){
  const trimmed = String(code).trim();
  return state.cartridges.find(c => c.barcode && c.barcode === trimmed);
}
function onBarcodeScanned(code){
  const c = findCartridgeByBarcode(code);
  if(c){
    openMovement(c.id, 'issue');
    toast(`Найден: ${c.name}`);
  } else {
    document.getElementById('modal-root').innerHTML = '';
    if(confirm(`Штрих-код «${code}» не найден на складе.\nДобавить новый картридж с этим кодом?`)){
      openCartridgeCreate(String(code).trim());
    }
  }
}
function onBarcodeScannedForPrinter(code){
  if(printerModalState){
    printerModalState.serial = String(code).trim();
    renderPrinterModal();
  }
  toast('Штрих-код считан');
}
function onBarcodeScannedInModal(code){
  const c = findCartridgeByBarcode(code);
  if(c){
    if(modalState){
      modalState.cartridgeId = c.id;
      if(modalState.type === 'receive') modalState.party = c.supplier;
    }
    toast(`Найден: ${c.name}`);
  } else {
    toast(`Штрих-код «${code}» не найден в базе`);
  }
  if(modalState) renderModal();
}

function openScanner(onResult){
  scanResultCallback = onResult;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeScanner()">
    <div class="modal-card" style="max-width:420px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div><h1 style="font-size:18px">Сканировать штрих-код</h1><p style="margin:4px 0 0;font-size:12.5px;color:var(--muted)">Наведите камеру на штрих-код картриджа</p></div>
        <button class="icon-btn" onclick="closeScanner()">${ICONS.x}</button>
      </div>
      <div id="scanner-reader" style="margin-top:14px;border-radius:12px;overflow:hidden;background:#14162B;min-height:220px"></div>
      <div id="scan-status" style="margin-top:10px;font-size:12px;color:var(--muted)">Запрашиваю доступ к камере…</div>
      <div class="field" style="margin-top:6px">
        <span class="field-lbl">Или введите код вручную</span>
        <div style="display:flex;gap:8px">
          <input class="input" id="scan-manual-input" placeholder="Штрих-код" onkeydown="if(event.key==='Enter'){event.preventDefault();submitManualScan();}">
          <button class="btn-secondary" onclick="submitManualScan()">OK</button>
        </div>
      </div>
    </div>
  </div>`;
  startCameraScan();
  setTimeout(() => { const el = document.getElementById('scan-manual-input'); if(el) el.focus(); }, 50);
}
function closeScanner(){
  stopCameraScan();
  scanResultCallback = null;
  if(modalState) renderModal();
  else if(printerModalState) renderPrinterModal();
  else if(cartridgeEditState) renderCartridgeEditModal();
  else document.getElementById('modal-root').innerHTML = '';
}
function setScanStatus(msg){
  const el = document.getElementById('scan-status');
  if(el) el.textContent = msg;
}
function startCameraScan(){
  if(typeof Html5Qrcode === 'undefined'){
    setScanStatus('Библиотека сканера не загрузилась (нет интернета?) — введите код вручную.');
    return;
  }
  if(!window.isSecureContext){
    setScanStatus('Камера доступна только по HTTPS или на localhost. Введите код вручную, либо откройте сайт по защищённому адресу.');
    return;
  }
  try{
    const inst = new Html5Qrcode('scanner-reader');
    html5QrCodeInstance = inst;
    inst.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 240, height: 140 } },
      (decodedText) => handleScanResult(decodedText),
      () => {}
    ).then(() => {
        if(html5QrCodeInstance !== inst){
          // Modal was closed before the camera finished starting — shut this one down
          // so the stream doesn't keep the camera light on in the background.
          inst.stop().then(() => inst.clear()).catch(() => {});
          return;
        }
        cameraRunning = true;
        setScanStatus('Наведите камеру на штрих-код…');
      })
     .catch(err => {
        if(html5QrCodeInstance === inst) cameraRunning = false;
        setScanStatus('Камера недоступна: ' + (err && err.message ? err.message : String(err)) + ' — введите код вручную.');
      });
  }catch(err){
    cameraRunning = false;
    setScanStatus('Не удалось запустить камеру — введите код вручную.');
  }
}
function stopCameraScan(){
  if(html5QrCodeInstance){
    const inst = html5QrCodeInstance;
    const wasRunning = cameraRunning;
    html5QrCodeInstance = null;
    cameraRunning = false;
    if(wasRunning) inst.stop().then(() => inst.clear()).catch(() => {});
    else { try{ inst.clear(); }catch(e){} }
  }
}
function submitManualScan(){
  const input = document.getElementById('scan-manual-input');
  const val = input ? input.value.trim() : '';
  if(!val) return;
  handleScanResult(val);
}
function handleScanResult(code){
  const cb = scanResultCallback;
  stopCameraScan();
  scanResultCallback = null;
  if(cb) cb(code);
}

/* ---------- shell / nav / router ---------- */
function updateNavActive(view){
  // The mobile «Ещё» tab stands for every section that has no tab of its own.
  const moreViews = ['settings', 'warehouses', 'printers', 'suppliers'];
  document.querySelectorAll('[data-view]').forEach(el => {
    const v = el.dataset.view;
    const match = v === view || (view==='detail' && v==='inventory') || (v==='more' && moreViews.includes(view));
    el.classList.toggle('active', match);
  });
}
function updateMobileTopbar(view, param){
  const el = document.getElementById('mobile-topbar-inner');
  if(!el) return;
  const backBar = (href, title) => `<a href="${href}" style="display:flex;color:#4B4F5B" aria-label="Назад">${ICONS.back}</a><span style="font-size:15px;font-weight:700;flex-grow:1;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 8px">${escapeHtml(title)}</span><span style="width:18px"></span>`;
  if(view === 'detail'){
    const c = state.cartridges.find(x => x.id === param);
    el.innerHTML = backBar('#/inventory', c ? c.name : 'Картридж');
  } else if(view === 'warehouses' && param){
    el.innerHTML = backBar('#/warehouses', whName(param));
  } else {
    el.innerHTML = `<div class="brand-row"><div class="brand-mark"></div><span class="brand-name">Картотека</span></div><button class="icon-btn" aria-label="Сканировать штрих-код" onclick="openScanner(onBarcodeScanned)">${ICONS.barcode}</button>`;
  }
}

function render(){
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const view = parts[0] || 'dashboard';
  const param = parts[1];

  let html;
  if(view === 'inventory') html = renderInventoryView();
  else if(view === 'detail') html = renderDetailView(param);
  else if(view === 'warehouses') html = param ? renderWarehouseView(param) : renderWarehousesView();
  else if(view === 'printers') html = renderPrintersView();
  else if(view === 'suppliers') html = renderSuppliersView();
  else if(view === 'history') html = renderHistoryView();
  else if(view === 'settings') html = renderSettingsView();
  else html = renderDashboardView();

  document.getElementById('view').innerHTML = html;
  updateNavActive(view);
  updateMobileTopbar(view, param);

  if(view === 'inventory'){
    updateInventoryList();
    const input = document.getElementById('inv-search');
    if(input) input.addEventListener('input', e => { searchQuery = e.target.value; updateInventoryList(); });
  }
  if(view === 'history') updateHistoryList();
  window.scrollTo(0,0);
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
