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
  cloud: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-3px"><path d="M7 18h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18Z"/></svg>`,
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

const TYPE_LABELS = {toner:'Тонер', ink:'Чернила'};
// Cartridge colors are a fixed list; the label chip color follows from it.
const COLORS = {
  'Чёрный': '#23252B',
  'Голубой': '#1E9BB3',
  'Розовый': '#D6408B',
  'Жёлтый': '#E0AE2E',
};
const COLOR_ALIASES = {'пурпурный':'Розовый', 'малиновый':'Розовый', 'magenta':'Розовый', 'cyan':'Голубой', 'синий':'Голубой', 'yellow':'Жёлтый', 'желтый':'Жёлтый', 'black':'Чёрный', 'черный':'Чёрный'};
function normalizeColor(color){
  const s = String(color || '').trim();
  if(COLORS[s]) return s;
  return COLOR_ALIASES[s.toLowerCase()] || 'Чёрный';
}
function colorHexOf(c){ return COLORS[normalizeColor(c.color)]; }

function demoCartridge(id, name, barcode, type, color, stock, branchStock, supplier, location, onOrder){
  return {id, name, barcode, type, typeLabel: TYPE_LABELS[type], color, colorHex: COLORS[color], stock, branchStock: branchStock || {}, supplier, location, onOrder: !!onOrder};
}

function defaultData(){
  return {
    warehouses: defaultWarehouses(),
    cartridges: [
      demoCartridge('hp-cf283a', 'HP CF283A', '4650123450017', 'toner', 'Чёрный', 3, {kids:2}, 'ОфисСнаб', 'Стеллаж А-12'),
      demoCartridge('canon-725', 'Canon 725', '4650123450024', 'toner', 'Чёрный', 6, {kids:1, megapolis:2}, 'ОфисСнаб', 'Стеллаж Б-04'),
      demoCartridge('epson-664-cyan', 'Epson 664 Cyan', '4650123450031', 'ink', 'Голубой', 22, null, 'ОфисСнаб', 'Стеллаж В-01'),
      demoCartridge('epson-664-magenta', 'Epson 664 Magenta', '4650123450048', 'ink', 'Розовый', 4, null, 'ОфисСнаб', 'Стеллаж В-01'),
      demoCartridge('epson-664-yellow', 'Epson 664 Yellow', '4650123450055', 'ink', 'Жёлтый', 18, null, 'ОфисСнаб', 'Стеллаж В-01'),
      demoCartridge('epson-664-black', 'Epson 664 Black', '4650123450062', 'ink', 'Чёрный', 30, {kids:4, megapolis:3}, 'ОфисСнаб', 'Стеллаж В-01'),
      demoCartridge('kyocera-tk1170', 'Kyocera TK-1170', '4650123450079', 'toner', 'Чёрный', 7, {megapolis:2}, 'ОфисСнаб', 'Стеллаж А-07'),
      demoCartridge('xerox-106r02773', 'Xerox 106R02773', '4650123450086', 'toner', 'Чёрный', 2, null, 'ОфисСнаб', 'Стеллаж Б-09'),
      demoCartridge('brother-tn2375', 'Brother TN-2375', '4650123450093', 'toner', 'Чёрный', 9, {kids:1}, 'ОфисСнаб', 'Стеллаж А-03'),
      demoCartridge('hp-664-black-ink', 'HP 664 Black', '4650123450109', 'ink', 'Чёрный', 0, null, 'ОфисСнаб', 'Стеллаж В-05', true),
      demoCartridge('samsung-mltd111s', 'Samsung MLT-D111S', '4650123450123', 'toner', 'Чёрный', 11, null, 'ОфисСнаб', 'Стеллаж А-15'),
    ],
    history: {
      'hp-cf283a': [
        {date:'2026-09-26', type:'transfer', from:MAIN_WH, to:'kids', qty:2, result:3, resultTo:2, who:'—', dept:''},
        {date:'2026-09-26', type:'issue', wh:MAIN_WH, printerId:'p-hp-m125nw', printerName:'HP LaserJet Pro M125nw', qty:1, result:5, who:'Ирина С.', dept:''},
        {date:'2026-09-20', type:'issue', wh:MAIN_WH, printerId:'p-hp-m127fw', printerName:'HP LaserJet Pro M127fw', qty:1, result:6, who:'Павел М.', dept:''},
        {date:'2026-09-14', type:'issue', wh:MAIN_WH, printerId:'p-hp-m125nw', printerName:'HP LaserJet Pro M125nw', qty:1, result:7, who:'Ирина С.', dept:''},
        {date:'2026-09-05', type:'issue', wh:MAIN_WH, printerId:'p-hp-m225', printerName:'HP LaserJet MFP M225', qty:1, result:8, who:'Ольга Р.', dept:''},
        {date:'2026-08-22', type:'issue', wh:MAIN_WH, printerId:'p-hp-m127fw', printerName:'HP LaserJet Pro M127fw', qty:1, result:9, who:'Павел М.', dept:''},
        {date:'2026-08-10', type:'receive', wh:MAIN_WH, qty:10, result:10, who:'ОфисСнаб', dept:'Накладная №4290'},
      ],
    },
    activity: [
      {date:'сегодня, 11:30', type:'transfer', text:'HP CF283A ×2', meta:'ДеФактум → Кидс'},
      {date:'сегодня, 10:24', type:'issue', text:'HP CF283A ×1', meta:'ДеФактум · HP LaserJet Pro M125nw'},
      {date:'сегодня, 09:05', type:'receive', text:'Epson 664 (набор) ×4', meta:'ОфисСнаб'},
      {date:'вчера, 17:40', type:'issue', text:'Kyocera TK-1170 ×1', meta:'Мегаполис · Kyocera M2040dn'},
    ],
    printers: [
      {id:'p-hp-m125nw', name:'HP LaserJet Pro M125nw', location:'Бухгалтерия', wh:MAIN_WH, serial:'—', notes:''},
      {id:'p-hp-m127fw', name:'HP LaserJet Pro M127fw', location:'Отдел продаж', wh:MAIN_WH, serial:'—', notes:''},
      {id:'p-hp-m225', name:'HP LaserJet MFP M225', location:'Дирекция', wh:MAIN_WH, serial:'—', notes:''},
      {id:'p-canon-lbp6000', name:'Canon i-SENSYS LBP6000', location:'Ресепшн', wh:'kids', serial:'—', notes:''},
      {id:'p-epson-l132', name:'Epson L132', location:'Ресепшн', wh:'kids', serial:'—', notes:''},
      {id:'p-kyocera-m2040', name:'Kyocera M2040dn', location:'Администрация', wh:'megapolis', serial:'—', notes:''},
      {id:'p-brother-l2340', name:'Brother HL-L2340', location:'Администрация', wh:'megapolis', serial:'—', notes:''},
    ],
    units: [],
  };
}

// Back-fills fields added over time, so data saved by an older version (in this
// browser, in the cloud or in a backup file) keeps working with the current views.
function normalizeState(parsed){
  const s = parsed && typeof parsed === 'object' ? parsed : {};
  if(!Array.isArray(s.cartridges)) s.cartridges = [];
  if(!s.history || typeof s.history !== 'object') s.history = {};
  if(!Array.isArray(s.activity)) s.activity = [];
  if(!Array.isArray(s.printers)) s.printers = [];
  // Data saved before warehouses existed: everything it holds sits on the main warehouse.
  if(!Array.isArray(s.warehouses) || !s.warehouses.length) s.warehouses = defaultWarehouses();
  const demo = defaultData();
  s.cartridges.forEach(c => {
    if(c.barcode === undefined){
      const match = demo.cartridges.find(x => x.id === c.id);
      c.barcode = match ? match.barcode : '';
    }
    if(!c.branchStock) c.branchStock = {};
    // Only toner and ink are tracked now, and colors come from a fixed list.
    if(!TYPE_LABELS[c.type]) c.type = 'toner';
    c.typeLabel = TYPE_LABELS[c.type];
    c.color = normalizeColor(c.color);
    c.colorHex = COLORS[c.color];
  });
  s.printers.forEach(p => { if(p.wh === undefined) p.wh = ''; });
  // Individual cartridges tracked by their own barcode (see the «units» section).
  if(!Array.isArray(s.units)) s.units = [];
  s.units = s.units.filter(u => u && u.code && u.cid);
  delete s.lastIssueWh; // now a per-device preference, see getPref()
  return s;
}

// Data kept in this browser only (the mode used before the cloud was connected).
function loadLocal(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return normalizeState(JSON.parse(raw));
  }catch(e){}
  return null;
}
function saveState(){
  if(cloud.enabled) return; // the cloud copy is written by commit()
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}

// Per-device settings that must not travel between phone and PC.
const PREFS_KEY = 'kartoteka-prefs';
function getPref(key){
  try{ return (JSON.parse(localStorage.getItem(PREFS_KEY) || '{}'))[key]; }catch(e){ return undefined; }
}
function setPref(key, value){
  try{
    const p = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
    if(value === undefined) delete p[key]; else p[key] = value;
    localStorage.setItem(PREFS_KEY, JSON.stringify(p));
  }catch(e){}
}

function nowLabel(){
  return new Date().toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'});
}

/* ---------- saving changes ---------- */
// A validation failure found while applying a change; its text is shown to the user.
function userError(message){ const e = new Error(message); e.userMessage = message; return e; }

// Every change goes through commit(mutator). The mutator edits the state object it
// is given and must not touch anything else: in cloud mode it runs inside a
// Firestore transaction against the latest shared data and may be re-run if
// another device saved at the same moment. Returns {ok, result}.
let commitBusy = false;
async function commit(mutator){
  if(commitBusy) return {ok:false};
  if(isReadOnly()){ toast('Режим просмотра — изменения недоступны'); return {ok:false}; }
  if(!cloud.enabled){
    // Apply to a copy so a failed validation leaves the real state untouched.
    const draft = JSON.parse(JSON.stringify(state));
    try{
      const result = mutator(draft);
      state = draft;
      saveState();
      return {ok:true, result};
    }catch(e){
      if(e.userMessage){ toast(e.userMessage); return {ok:false}; }
      throw e;
    }
  }
  commitBusy = true;
  try{
    const {state: fresh, result} = await cloudTransact(mutator);
    state = fresh;
    return {ok:true, result};
  }catch(e){
    if(e.userMessage) toast(e.userMessage);
    else if(!navigator.onLine || e.code === 'unavailable') toast('Нет интернета — операция не сохранена. Повторите, когда появится связь.');
    else if(e.code === 'permission-denied') toast('Нет доступа к базе — проверьте правила Firestore');
    else toast('Не удалось сохранить: ' + (e.message || e));
    return {ok:false};
  }finally{
    commitBusy = false;
  }
}

/* ---------- cloud (Firebase) ---------- */
// Layout in Firestore:
//   kartoteka/main              {data: JSON of everything except history, months: ['2026-08', …]}
//   kartoteka/main/months/YYYY-MM  {entries: JSON array of that month's history entries}
// History is split by month so no single document ever approaches Firestore's 1 MB cap.
const cloud = {
  enabled: false,
  user: null,
  authChecked: false,
  loaded: false,       // first snapshot of both main and months arrived
  empty: false,        // the cloud has never been written to
  error: '',
  mainDoc: undefined,  // undefined = not received yet, null = does not exist
  monthDocs: undefined,
  roles: null,         // kartoteka_roles/roles: {editors: [emails], viewers: [emails]}
  unsub: [],
};
// Management sees everything but changes nothing. The Firestore rules are what really
// block their writes; the app only hides the buttons and stops early with a message.
function isReadOnly(){
  if(!cloud.enabled || !cloud.user || !cloud.roles) return false;
  const me = String(cloud.user.email || '').toLowerCase();
  const list = k => (Array.isArray(cloud.roles[k]) ? cloud.roles[k] : []).map(x => String(x).toLowerCase());
  return list('viewers').includes(me) && !list('editors').includes(me);
}
function rolesRef(){ return firebase.firestore().collection('kartoteka_roles').doc('roles'); }

function splitState(s){
  const main = {};
  Object.keys(s).forEach(k => { if(k !== 'history') main[k] = s[k]; });
  const months = {};
  // Per-cartridge lists are newest-first; keep that relative order inside each month.
  Object.keys(s.history || {}).forEach(cid => (s.history[cid] || []).forEach(h => {
    const key = String(h.date).slice(0,7);
    if(!months[key]) months[key] = [];
    months[key].push(Object.assign({cid}, h));
  }));
  return {main, months};
}
function joinState(main, months){
  const s = Object.assign({}, main, {history: {}});
  Object.keys(months).sort().reverse().forEach(key => (months[key] || []).forEach(e => {
    const h = Object.assign({}, e);
    const cid = h.cid; delete h.cid;
    if(!s.history[cid]) s.history[cid] = [];
    s.history[cid].push(h);
  }));
  return normalizeState(s);
}

async function cloudTransact(mutator){
  const db = firebase.firestore();
  const mainRef = db.collection('kartoteka').doc('main');
  const monthsCol = mainRef.collection('months');
  let result;
  const fresh = await db.runTransaction(async tx => {
    const mainSnap = await tx.get(mainRef);
    const doc = mainSnap.exists ? mainSnap.data() : null;
    const keys = doc && Array.isArray(doc.months) ? doc.months : [];
    const before = {};
    for(const k of keys){
      const snap = await tx.get(monthsCol.doc(k));
      before[k] = snap.exists ? JSON.parse(snap.data().entries || '[]') : [];
    }
    const s = doc ? joinState(JSON.parse(doc.data), before) : normalizeState(emptyData());
    result = mutator(s);
    const out = splitState(s);
    const newKeys = Object.keys(out.months).filter(k => out.months[k].length).sort();
    new Set(keys.concat(newKeys)).forEach(k => {
      const next = JSON.stringify(out.months[k] || []);
      if(next === JSON.stringify(before[k] || [])) return;
      if(out.months[k] && out.months[k].length) tx.set(monthsCol.doc(k), {entries: next});
      else tx.delete(monthsCol.doc(k));
    });
    tx.set(mainRef, {
      data: JSON.stringify(out.main),
      months: newKeys,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: cloud.user ? cloud.user.email : '',
    });
    return s;
  });
  return {state: fresh, result};
}

function rebuildFromCloud(){
  if(cloud.mainDoc === undefined || cloud.monthDocs === undefined) return;
  if(cloud.mainDoc === null){
    cloud.empty = true;
    state = normalizeState(emptyData());
  } else {
    cloud.empty = false;
    const keys = Array.isArray(cloud.mainDoc.months) ? cloud.mainDoc.months : [];
    const months = {};
    keys.forEach(k => { months[k] = cloud.monthDocs[k] || []; });
    try{ state = joinState(JSON.parse(cloud.mainDoc.data), months); }
    catch(e){ cloud.error = 'Данные в облаке повреждены: ' + e.message; }
  }
  cloud.loaded = true;
  render({keepScroll: true});
}

function stopCloudListeners(){
  cloud.unsub.forEach(fn => { try{ fn(); }catch(e){} });
  cloud.unsub = [];
  cloud.roles = null;
  cloud.rolesReady = false;
  cloud.mainDoc = undefined;
  cloud.monthDocs = undefined;
  cloud.loaded = false;
}
function startCloudListeners(){
  stopCloudListeners();
  const mainRef = firebase.firestore().collection('kartoteka').doc('main');
  const onError = e => {
    cloud.error = e.code === 'permission-denied'
      ? `У аккаунта ${cloud.user ? cloud.user.email : ''} нет доступа к базе. Попросите владельца добавить эту почту: Настройки → Доступ.`
      : 'Ошибка связи с базой: ' + (e.message || e);
    render();
  };
  cloud.unsub.push(mainRef.onSnapshot(snap => {
    cloud.error = '';
    cloud.mainDoc = snap.exists ? snap.data() : null;
    rebuildFromCloud();
  }, onError));
  cloud.unsub.push(mainRef.collection('months').onSnapshot(q => {
    const m = {};
    q.forEach(d => { try{ m[d.id] = JSON.parse(d.data().entries || '[]'); }catch(e){ m[d.id] = []; } });
    cloud.monthDocs = m;
    rebuildFromCloud();
  }, onError));
  // Who may only look. Missing or unreadable (older rules) simply means «everyone edits».
  cloud.unsub.push(rolesRef().onSnapshot(snap => {
    cloud.roles = snap.exists ? snap.data() : null;
    cloud.rolesReady = true;
    render({keepScroll: true});
  }, () => { cloud.roles = null; cloud.rolesReady = true; render({keepScroll: true}); }));
}

function initCloud(){
  const cfg = window.KARTOTEKA_FIREBASE;
  if(!cfg || !cfg.apiKey) return;
  if(typeof firebase === 'undefined'){
    cloud.enabled = true;
    cloud.authChecked = true;
    cloud.error = 'Не удалось загрузить Firebase — проверьте интернет и обновите страницу.';
    return;
  }
  cloud.enabled = true;
  state = normalizeState(emptyData());
  firebase.initializeApp(cfg);
  // Keeps a copy on the device so the app opens fast and shows data while offline.
  firebase.firestore().enablePersistence({synchronizeTabs: true}).catch(() => {});
  firebase.auth().onAuthStateChanged(user => {
    cloud.user = user;
    cloud.authChecked = true;
    cloud.error = '';
    if(user) startCloudListeners();
    else { stopCloudListeners(); state = normalizeState(emptyData()); }
    render();
  });
}

let loginBusy = false;
async function submitLogin(){
  const email = (document.getElementById('login-email') || {}).value || '';
  const pass = (document.getElementById('login-pass') || {}).value || '';
  const msg = document.getElementById('login-msg');
  if(!email.trim() || !pass){ if(msg) msg.textContent = 'Введите почту и пароль'; return; }
  if(loginBusy) return;
  loginBusy = true;
  if(msg) msg.textContent = 'Вход…';
  try{
    await firebase.auth().signInWithEmailAndPassword(email.trim(), pass);
  }catch(e){
    const bad = ['auth/invalid-credential','auth/wrong-password','auth/user-not-found','auth/invalid-email','auth/invalid-login-credentials'];
    if(msg) msg.textContent = bad.includes(e.code) ? 'Неверная почта или пароль'
      : e.code === 'auth/too-many-requests' ? 'Слишком много попыток — подождите пару минут'
      : e.code === 'auth/network-request-failed' ? 'Нет интернета'
      : 'Не удалось войти: ' + (e.message || e.code);
  }finally{
    loginBusy = false;
  }
}
function signOutCloud(){
  if(!confirm('Выйти из аккаунта на этом устройстве?')) return;
  firebase.auth().signOut();
}

// Moves the data this browser kept before the cloud existed into the (empty) cloud.
async function uploadLocalToCloud(){
  const local = loadLocal();
  if(!local || !local.cartridges.length){ toast('На этом устройстве нет сохранённых данных'); return; }
  if(!confirm(`Загрузить в общую базу данные этого устройства: ${local.cartridges.length} картриджей, ${local.printers.length} принтеров и всю историю?`)) return;
  const {ok} = await commit(s => {
    if(s.cartridges.length) throw userError('В общей базе уже есть данные — загрузка отменена');
    Object.keys(s).forEach(k => delete s[k]);
    Object.assign(s, JSON.parse(JSON.stringify(local)));
  });
  if(ok){ toast('Данные загружены в общую базу'); render(); }
}

let state = loadLocal() || defaultData();
let searchQuery = '';
let activeFilter = 'all';
let modalState = null;
let toastTimer = null;
let historyFilter = 'all';

function emptyData(){
  return {warehouses: defaultWarehouses(), cartridges: [], history: {}, activity: [], printers: [], units: []};
}
async function resetData(mode){
  const everywhere = cloud.enabled ? ' Это изменит данные на ВСЕХ устройствах.' : '';
  const msg = mode === 'empty'
    ? 'Удалить ВСЕ картриджи, принтеры и историю операций? Склады станут пустыми. Отменить это нельзя.' + everywhere
    : 'Заменить все текущие данные демонстрационными (11 примерных картриджей)? Ваши записи будут удалены.' + everywhere;
  if(!confirm(msg)) return;
  const {ok} = await commit(s => {
    // Clearing wipes stock, not the list of branches the user set up.
    const keepWarehouses = (s.warehouses || []).filter(w => !w.deleted);
    const fresh = mode === 'empty' ? emptyData() : defaultData();
    if(mode === 'empty' && keepWarehouses.length) fresh.warehouses = keepWarehouses;
    Object.keys(s).forEach(k => delete s[k]);
    Object.assign(s, fresh);
  });
  if(!ok) return;
  toast(mode === 'empty' ? 'Склад очищен. Добавьте свои картриджи.' : 'Загружены демо-данные');
  location.hash = mode === 'empty' ? '#/inventory' : '#/dashboard';
  render();
}

/* ---------- backup file ---------- */
function downloadBackup(){
  const blob = new Blob([JSON.stringify(state, null, 1)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Картотека_копия_${todayIso()}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  toast('Копия сохранена в файл');
}
function restoreBackup(input){
  const file = input.files && input.files[0];
  input.value = '';
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    let data;
    try{ data = normalizeState(JSON.parse(reader.result)); }
    catch(e){ toast('Это не файл копии Картотеки'); return; }
    if(!confirm(`Заменить текущие данные копией из файла (${data.cartridges.length} картриджей)?${cloud.enabled ? ' Это изменит данные на ВСЕХ устройствах.' : ''}`)) return;
    const {ok} = await commit(s => {
      Object.keys(s).forEach(k => delete s[k]);
      Object.assign(s, data);
    });
    if(ok){ toast('Данные восстановлены из файла'); render(); }
  };
  reader.readAsText(file);
}

const FILTERS = [
  {key:'all', label:'Все'},
  {key:'toner', label:'Тонер'},
  {key:'ink', label:'Чернила'},
  {key:'empty', label:'Нет в наличии'},
];

/* ---------- helpers ---------- */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
// A value written into an inline onclick="fn(…)" as a safe JS string literal.
function jsArg(s){ return escapeHtml(JSON.stringify(String(s))); }
function isTouchDevice(){
  return !!(window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches);
}

/* ---------- name lists: pick from a dropdown or type your own ---------- */
const PRINTER_MODELS = ['Canon MF 3010', 'Canon LBP 6030'];
const CARTRIDGE_MODELS = ['325', '435', '725', '925'];
const DEFAULT_SUPPLIER = 'DisTECH';
const DEFAULT_LOCATION = '7 этаж склад';
const OTHER_OPTION = '__other';

function uniqueNames(list){
  const seen = new Set();
  return list.map(x => String(x || '').trim()).filter(x => {
    const k = x.toLowerCase();
    if(!x || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
// Built-in models first, then any model someone typed in for an earlier printer.
function printerModelOptions(){
  const own = state.printers.map(p => p.name).sort((a,b) => a.localeCompare(b));
  return uniqueNames([...PRINTER_MODELS, ...own]);
}
function cartridgeModelOptions(){
  return uniqueNames(CARTRIDGE_MODELS);
}
function isCustomName(name, options){
  return !!name && !options.some(o => o.toLowerCase() === name.trim().toLowerCase());
}
// kind is 'printer' or 'cartridge'; s.custom shows the text box for a name that isn't in the list.
function nameFieldTemplate(kind, s, options, placeholder){
  const selected = s.custom ? OTHER_OPTION : (options.find(o => o.toLowerCase() === s.name.trim().toLowerCase()) || '');
  return `
    <select class="input" onchange="pickName('${kind}', this.value)">
      <option value="" disabled ${selected === '' ? 'selected' : ''}>— выберите из списка —</option>
      ${options.map(o => `<option value="${escapeHtml(o)}" ${o === selected ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')}
      <option value="${OTHER_OPTION}" ${selected === OTHER_OPTION ? 'selected' : ''}>✎ Другое — ввести вручную…</option>
    </select>
    ${s.custom ? `<input class="input" id="name-other-input" style="margin-top:8px" value="${escapeHtml(s.name)}" oninput="nameFieldState('${kind}').name=this.value" placeholder="${escapeHtml(placeholder)}">` : ''}`;
}
function nameFieldState(kind){
  return kind === 'printer' ? printerModalState : cartridgeEditState;
}
function pickName(kind, value){
  const s = nameFieldState(kind);
  if(!s) return;
  if(value === OTHER_OPTION){
    s.custom = true;
    s.name = '';
  } else {
    s.custom = false;
    s.name = value;
  }
  if(kind === 'printer') renderPrinterModal(); else renderCartridgeEditModal();
  if(s.custom){ const el = document.getElementById('name-other-input'); if(el) el.focus(); }
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
// Status is about the main warehouse only: either something is on the shelf or not.
function statusOf(c){
  if(c.stock > 0) return 'ok';
  return c.onOrder ? 'order' : 'critical';
}
function statusMeta(status){
  return {
    ok:{label:'В наличии', cls:'pill-ok', bar:'var(--ok-dot)'},
    critical:{label:'Нет в наличии', cls:'pill-critical', bar:'var(--crit-dot)'},
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
  const last = getPref('lastIssueWh');
  return last && activeWarehouses().some(w => w.id === last) ? last : MAIN_WH;
}
// How one history entry changes each warehouse's stock, as {warehouseId: signedQty}.
// Stock counts only full cartridges: 'return' (an empty one taken out of a printer),
// 'refill' (handed to the refill firm) and 'scrap' (written off) change no stock.
// A refilled cartridge coming back is an ordinary 'receive' with refillQty set.
function entryDeltas(h){
  if(h.type === 'receive') return {[h.wh || MAIN_WH]: h.qty};
  if(h.type === 'issue') return {[h.wh || MAIN_WH]: -h.qty};
  if(h.type === 'transfer') return {[h.from || MAIN_WH]: -h.qty, [h.to]: h.qty};
  return {};
}
function opLabel(h){
  if(h.type === 'receive'){
    const base = !h.refillQty ? 'Приход' : h.refillQty >= h.qty ? 'С заправки' : `Приход (с заправки ${h.refillQty})`;
    return (h.wh && h.wh !== MAIN_WH) ? `${base} · ${whName(h.wh)}` : base;
  }
  if(h.type === 'transfer') return `${whName(h.from)} → ${whName(h.to)}`;
  if(h.type === 'return') return `Снят пустой → ${whName(h.wh)}`;
  if(h.type === 'refill') return 'Отправлен на заправку';
  if(h.type === 'scrap') return 'Списан';
  return `Расход · ${whName(h.wh)}`;
}
// Short operation name for the Excel sheet.
function opName(h){
  return {receive: h.refillQty ? 'С заправки' : 'Приход', issue:'Расход', transfer:'Передача', return:'Снят пустой', refill:'На заправку', scrap:'Списан'}[h.type] || h.type;
}
function opSign(h){ return {receive:'+', issue:'−', transfer:'→', return:'↩', refill:'⟳', scrap:'✕'}[h.type] || ''; }
function opColor(h){
  return {receive:'var(--ok-fg)', issue:'var(--crit-fg)', transfer:'var(--order-fg)', return:'var(--low-fg)', refill:'var(--low-fg)', scrap:'var(--faint)'}[h.type] || 'var(--faint)';
}
// Puts an entry into a cartridge's history (newest first) where its date belongs and
// refreshes every «остаток после» of that cartridge, so a record entered today for an
// earlier day (from the paper notebook) shows the balance of that day. Call it after
// the stock numbers were changed.
function addHistoryEntry(st, c, entry){
  const list = st.history[c.id] || (st.history[c.id] = []);
  let i = list.findIndex(h => h.date <= entry.date);
  if(i === -1) i = list.length;
  list.splice(i, 0, entry);
  recomputeResults(st, c);
}
function recomputeResults(st, c){
  const list = st.history[c.id] || [];
  // Balance before the oldest entry = today's stock minus every recorded change.
  const bal = {};
  st.warehouses.forEach(w => { bal[w.id] = whStock(c, w.id); });
  list.forEach(h => Object.entries(entryDeltas(h)).forEach(([w, v]) => { bal[w] = (bal[w] || 0) - v; }));
  for(let i = list.length - 1; i >= 0; i--){
    const h = list[i];
    Object.entries(entryDeltas(h)).forEach(([w, v]) => { bal[w] = (bal[w] || 0) + v; });
    if(h.type === 'transfer'){ h.result = bal[h.from || MAIN_WH] || 0; h.resultTo = bal[h.to] || 0; }
    else h.result = bal[h.wh || MAIN_WH] || 0;
  }
}
// The date chosen in a form: a real day, not in the future; otherwise today.
function opDate(v){
  const t = todayIso();
  return /^\d{4}-\d{2}-\d{2}$/.test(v || '') && v <= t ? v : t;
}
// «Последние операции» shows the clock time for today's records and the day for back-dated ones.
function activityStamp(date){ return date === todayIso() ? nowLabel() : fmtDate(date); }
// A date field for the operation forms; stateExpr is the global holding the form state.
function dateFieldTemplate(stateExpr, value, label){
  const t = todayIso();
  return `
    <div class="field">
      <span class="field-lbl">${label || 'Дата'}</span>
      <input class="input" type="date" max="${t}" value="${escapeHtml(value || t)}" onchange="${stateExpr}.date=this.value">
      ${value && value !== t ? `<div class="field-hint">Запись задним числом — остатки пересчитаются по датам.</div>` : ''}
    </div>`;
}
// Whether an entry is about one cartridge's barcode.
function entryHasCode(h, code){ return Array.isArray(h.codes) && h.codes.includes(code); }

/* ---------- units: one barcode = one physical cartridge ---------- */
// state.units holds {code, cid, status, wh, printerId, since, by, firm}:
//   stock     – full, on the shelf of warehouse wh (already part of that shelf's stock count)
//   installed – in printer printerId, taken from warehouse wh
//   empty     – used up and back on the shelf of warehouse wh, waiting for a refill
//   refill    – handed to the refill firm `firm`
//   scrapped  – written off
// Cartridges without a barcode are still counted only by number, so a shelf's count can
// be larger than the number of its barcoded units — never smaller.
const DEFAULT_INSTALLER = 'Исматуллаев Жавлон';
const UNIT_STATUS = {
  stock:     {label:'В наличии',   color:'var(--ok-fg)'},
  installed: {label:'Установлен',  color:'var(--order-fg)'},
  empty:     {label:'Пустой',      color:'var(--crit-fg)'},
  refill:    {label:'На заправке', color:'var(--low-fg)'},
  scrapped:  {label:'Списан',      color:'var(--faint)'},
};
function findUnit(st, code){
  const k = String(code || '').trim();
  return k ? (st.units || []).find(u => u.code === k) : undefined;
}
function unitsOf(st, cid, status, wh){
  return (st.units || []).filter(u => u.cid === cid && (!status || u.status === status) && (wh === undefined || u.wh === wh));
}
// Full cartridges on a shelf that have no barcode registered.
function untrackedStock(st, c, wh){ return Math.max(0, whStock(c, wh) - unitsOf(st, c.id, 'stock', wh).length); }
// Why a barcode can't be given to a new cartridge, or '' when it is free.
function codeOwner(st, code, exceptCid){
  const u = findUnit(st, code);
  if(u){ const c = st.cartridges.find(x => x.id === u.cid); return `Штрих-код ${code} уже есть: ${c ? c.name : 'картридж'} (${UNIT_STATUS[u.status].label.toLowerCase()})`; }
  const model = st.cartridges.find(x => x.barcode === code && x.id !== exceptCid);
  return model ? `Штрих-код ${code} уже у «${model.name}»` : '';
}
function printerLabel(id){
  if(!id) return 'принтер (не указан)';
  const p = state.printers.find(x => x.id === id);
  return p ? p.name + (p.location ? ' — ' + p.location : '') : 'принтер удалён';
}
function defaultInstaller(){ return getPref('lastInstaller') || DEFAULT_INSTALLER; }
function defaultFirm(){ return getPref('lastFirm') || DEFAULT_SUPPLIER; }
// Plain-language «where is it now», e.g. «в принтере Canon LBP 6030 — Регистратура с 05.10.2026».
function unitWhere(u){
  const since = u.since ? ` с ${fmtDate(u.since)}` : '';
  if(u.status === 'stock') return `на складе ${whName(u.wh)}${since}`;
  if(u.status === 'installed') return `установлен в ${printerLabel(u.printerId)}${since}${u.by ? ', установил ' + u.by : ''}`;
  if(u.status === 'empty') return `пустой, лежит на складе ${whName(u.wh)}${since}`;
  if(u.status === 'refill') return `на заправке${u.firm ? ' в ' + u.firm : ''}${since}`;
  return `списан${since}`;
}

function getHistory(c){
  return state.history[c.id] || [];
}
function cartridgeSub(c){ return `${c.typeLabel} · ${c.color}`; }

/* ---------- printers ---------- */
// Issues remember the printer by id; the stored name keeps reports readable after a
// printer is deleted, while a renamed printer shows its current name.
function printerNameOf(h){
  const p = h.printerId && state.printers.find(x => x.id === h.printerId);
  return p ? p.name : (h.printerName || '');
}
function printerInstalls(printerId){
  const list = [];
  state.cartridges.forEach(c => getHistory(c).forEach(h => {
    if(h.type === 'issue' && h.printerId === printerId) list.push({h, c});
  }));
  return list.sort((a,b) => b.h.date.localeCompare(a.h.date));
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
  const inBranches = branchList().filter(w => whStock(c, w.id) > 0).map(w => `${w.name} ${whStock(c, w.id)}`);
  return `
  <div class="c-row" onclick="location.hash='#/detail/${c.id}'">
    <div class="chip" style="background:${colorHexOf(c)}"></div>
    <div class="c-main">
      <div class="c-name">${escapeHtml(c.name)}${st === 'ok' ? '' : ` <span class="pill ${meta.cls}"><span class="pill-dot"></span>${meta.label}</span>`}</div>
      <div class="c-sub">${escapeHtml(cartridgeSub(c))}</div>
      ${inBranches.length ? `<div class="c-wh">В филиалах: ${escapeHtml(inBranches.join(' · '))}</div>` : ''}
    </div>
    <div class="c-stock"><b style="color:${st==='ok' ? 'var(--text)' : meta.bar}">${c.stock}</b><span>шт.</span></div>
    <div class="c-quick edit-only">
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
  const sign = opSign(a);
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
  const prefix = todayIso().slice(0,7);
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
  const prefix = todayIso().slice(0,7);
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
    else if(f.key==='empty') count = state.cartridges.filter(c=>c.stock===0).length;
    else count = state.cartridges.filter(c=>c.type===f.key).length;
    return `<button class="filter-chip ${f.key===activeFilter?'active':''}" onclick="setFilter('${f.key}')">${f.label} · ${count}</button>`;
  }).join('');
}

// Empty cartridges waiting for a refill and the ones at the refill firm.
function refillOverviewTemplate(){
  const empty = state.units.filter(u => u.status === 'empty');
  const away = state.units.filter(u => u.status === 'refill');
  const inPrinters = state.units.filter(u => u.status === 'installed');
  // Always shown, so the refill buttons are easy to find even while nothing is empty yet.
  // viewOk: the button only shows information, so management sees it too.
  const card = (title, list, color, btn, viewOk) => `
    <div class="card refill-card">
      <div><div class="refill-num" style="color:${list.length ? color : 'var(--faint)'}">${list.length}<small>шт.</small></div><div class="refill-title">${title}</div></div>
      <div class="${viewOk ? '' : 'edit-only'}">${btn}</div>
    </div>`;
  return `
    <div class="section">
      <div class="section-head"><h2>В принтерах, пустые и заправка</h2></div>
      <p class="field-hint edit-only" style="margin:0 0 12px">1) Сняли пустой из принтера → «Принять пустой». 2) Отдаёте фирме → «Отправить на заправку». 3) Фирма вернула заправленные → «Вернулись с заправки» — они снова в наличии.</p>
      <div class="refill-grid">
        ${card('Стоят в принтерах', inPrinters, 'var(--order-fg)', `<button class="btn-secondary" onclick="openInstalledList()" ${inPrinters.length ? '' : 'disabled'}>Где стоят</button>`, true)}
        ${card('Пустые — ждут заправки', empty, 'var(--crit-fg)', `<div class="refill-btns"><button class="btn-primary" onclick="openEmptyReturn()">${ICONS.plus}Принять пустой</button><button class="btn-secondary" onclick="openRefill('send')">Отправить на заправку</button></div>`)}
        ${card('Сейчас на заправке', away, 'var(--low-fg)', `<button class="btn-secondary" onclick="openRefill('back')">Вернулись с заправки</button>`)}
      </div>
    </div>`;
}

// Every barcoded cartridge now standing in a printer, grouped by the branch the printer is in.
function openInstalledList(){
  const units = state.units.filter(u => u.status === 'installed');
  if(!units.length){ toast('Сейчас в принтерах нет картриджей со штрих-кодом'); return; }
  const printerOf = u => state.printers.find(p => p.id === u.printerId);
  const whOf = u => { const p = printerOf(u); return p && activeWarehouses().some(w => w.id === p.wh) ? p.wh : ''; };
  const groups = activeWarehouses().map(w => ({title: w.name, list: units.filter(u => whOf(u) === w.id)}));
  groups.push({title: 'Склад не указан', list: units.filter(u => !whOf(u))});
  const row = u => {
    const c = state.cartridges.find(x => x.id === u.cid);
    const p = printerOf(u);
    return `
      <button class="installed-row" onclick="openUnitCard(${jsArg(u.code)})">
        <span class="chip" style="background:${c ? colorHexOf(c) : 'var(--faint)'}"></span>
        <span class="installed-main">
          <b>${escapeHtml(p ? p.name : 'Принтер не указан')}${p && p.location ? ` — ${escapeHtml(p.location)}` : ''}</b>
          <span class="t-sub">${escapeHtml(c ? c.name : '?')} · <span class="mono">${escapeHtml(u.code)}</span> · с ${u.since ? fmtDate(u.since) : '—'}${u.by ? ' · ' + escapeHtml(u.by) : ''}</span>
        </span>
      </button>`;
  };
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) this.remove()">
    <div class="modal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <h1>Стоят в принтерах · ${units.length}</h1>
        <button class="icon-btn" aria-label="Закрыть" onclick="document.getElementById('modal-root').innerHTML=''">${ICONS.x}</button>
      </div>
      <p style="margin:6px 0 10px;font-size:15px;color:var(--faint)">Нажмите на строку — откроется история картриджа.</p>
      ${groups.filter(g => g.list.length).map(g => `
        <div class="unit-group-head" style="margin-top:14px">${escapeHtml(g.title)} · ${g.list.length}</div>
        ${g.list.sort((a,b) => (printerOf(a) || {name:''}).name.localeCompare((printerOf(b) || {name:''}).name)).map(row).join('')}`).join('')}
    </div>
  </div>`;
}

/* ---------- views ---------- */
function renderDashboardView(){
  const totalUnits = state.cartridges.reduce((s,c) => s + totalStock(c), 0);
  const {inQty, outQty} = monthTotals();
  const hasBranches = branchList().length > 0;
  const need = state.cartridges.filter(c => c.stock === 0);
  // Main-warehouse stock: the ones that ran out first, then the rest by name.
  const mainStockList = [...state.cartridges].sort((a,b) => (a.stock > 0) - (b.stock > 0) || a.name.localeCompare(b.name));

  return `
  <div class="topbar">
    <div><h1>Главная</h1><p class="sub">${todayLabel()}${cloud.enabled ? ` · <span class="cloud-on">${ICONS.cloud} общая база</span>` : ''}${isReadOnly() ? ` · <span class="ro-badge">только просмотр</span>` : ''}</p></div>
    <button class="btn-secondary" onclick="openReport()">${ICONS.excel}Отчёт в Excel</button>
  </div>
  <div class="content">
    ${uploadLocalCardTemplate()}
    <div class="big-actions ${hasBranches ? 'four' : ''}">
      <button class="big-btn big-in edit-only" onclick="openMovement(null,'receive')">${ICONS.plus}Приход</button>
      <button class="big-btn big-out edit-only" onclick="openMovement(null,'issue')">${ICONS.minus}Расход</button>
      ${hasBranches ? `<button class="big-btn big-move edit-only" onclick="openMovement(null,'transfer')">${ICONS.transfer}В филиал</button>` : ''}
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
        <div style="margin-top:16px" class="edit-only"><button class="btn-primary" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button></div>
      </div>
    </div>` : `
    <div class="section">
      <div class="section-head"><h2>Остатки на ${escapeHtml(whName(MAIN_WH))}${need.length ? ` · <span style="color:var(--crit-fg)">закончились: ${need.length}</span>` : ''}</h2><a href="#/inventory">Все картриджи →</a></div>
      <div class="row-list">${mainStockList.slice(0, 8).map(rowTemplate).join('')}</div>
      ${mainStockList.length > 8 ? `<div style="margin-top:10px"><a href="#/inventory">Ещё ${mainStockList.length - 8} →</a></div>` : ''}
    </div>`}

    ${refillOverviewTemplate()}

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
      <div class="search-box">${ICONS.search}<input id="inv-search" placeholder="Название или штрих-код" value="${escapeHtml(searchQuery)}"></div>
      <button class="icon-btn desk-only" title="Сканировать штрих-код" aria-label="Сканировать штрих-код" onclick="openScanner(onBarcodeScanned)">${ICONS.barcode}</button>
      <button class="btn-primary edit-only" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button>
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
      <div class="detail-actions edit-only">
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
          ${c.barcode ? `<div><span class="field-label">Общий штрих-код модели</span><div class="field-value mono">${escapeHtml(c.barcode)}</div></div>` : ''}
          <div><span class="field-label">Поставщик</span><div class="field-value">${escapeHtml(c.supplier || '—')}</div></div>
          <div><span class="field-label">Место хранения</span><div class="field-value">${escapeHtml(c.location || '—')}</div></div>
        </div>

        <div class="card" style="padding:20px">
          <span class="field-label">Куда устанавливали</span>
          ${installed.length
            ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">${installed.map(([name, e]) => `<span class="tag">${escapeHtml(name)} · ${e.qty} шт.</span>`).join('')}</div>`
            : `<p style="font-size:14px;color:var(--faint);margin:8px 0 0">Пока нет. При расходе выберите принтер — он появится здесь и в отчёте по принтерам.</p>`}
        </div>

        ${unitsCardTemplate(c)}
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

// Every barcoded cartridge of this model, grouped by where it is now.
function unitsCardTemplate(c){
  const units = unitsOf(state, c.id).filter(u => u.status !== 'scrapped');
  const legacy = c.barcode && !findUnit(state, c.barcode) && untrackedStock(state, c, MAIN_WH) > 0;
  const groups = ['stock', 'installed', 'empty', 'refill'].map(status => ({status, list: units.filter(u => u.status === status)})).filter(g => g.list.length);
  const where = u => u.status === 'stock' || u.status === 'empty' ? whName(u.wh) : u.status === 'installed' ? printerLabel(u.printerId) : (u.firm || '');
  return `
    <div class="card" style="padding:20px">
      <span class="field-label">Картриджи по штрих-кодам</span>
      ${groups.length ? groups.map(g => `
        <div class="unit-group">
          <div class="unit-group-head" style="color:${UNIT_STATUS[g.status].color}">${UNIT_STATUS[g.status].label} · ${g.list.length}</div>
          ${g.list.map(u => `<button class="unit-row" onclick="openUnitCard(${jsArg(u.code)})"><span class="mono">${escapeHtml(u.code)}</span><span class="unit-where">${escapeHtml(where(u))}${u.since ? ' · с ' + fmtDate(u.since) : ''}</span></button>`).join('')}
        </div>`).join('')
        : `<p style="font-size:14px;color:var(--faint);margin:8px 0 0">Пока нет. При приходе отсканируйте штрих-код каждого картриджа — тогда видно, где каждый из них и когда его ставили.</p>`}
      ${legacy ? `<div class="warn-box edit-only" style="margin-top:12px;display:block"><span>Штрих-код <b class="mono">${escapeHtml(c.barcode)}</b> записан на всю модель. Если это код одного конкретного картриджа — </span><button class="btn-secondary" style="margin-top:8px" onclick="convertModelBarcode('${c.id}')">Сделать его кодом картриджа</button></div>` : ''}
    </div>`;
}
// Turns a barcode that was saved on the whole model (older versions) into one
// physical cartridge on the main shelf.
async function convertModelBarcode(cid){
  const {ok} = await commit(st => {
    const c = st.cartridges.find(x => x.id === cid);
    if(!c || !c.barcode) throw userError('Штрих-код уже изменён на другом устройстве');
    if(findUnit(st, c.barcode)) throw userError('Такой штрих-код уже есть');
    if(untrackedStock(st, c, MAIN_WH) < 1) throw userError(`На основном складе нет «${c.name}» без штрих-кода`);
    st.units.push({code: c.barcode, cid, status:'stock', wh: MAIN_WH, since: todayIso()});
    c.barcode = '';
  });
  if(!ok) return;
  toast('Готово: штрих-код привязан к картриджу');
  render({keepScroll: true});
}

function printerCardTemplate(p){
  const installs = printerInstalls(p.id);
  const nowIn = state.units.filter(u => u.status === 'installed' && u.printerId === p.id);
  const month = todayIso().slice(0,7);
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
      <div class="edit-only" style="display:flex;gap:6px;flex-shrink:0">
        <button class="btn-secondary p-empty-btn" title="Снять пустой картридж из этого принтера" onclick="openEmptyReturn('${p.id}')">↩ Снять пустой</button>
        <button class="icon-btn" style="width:40px;height:40px" title="Изменить" aria-label="Изменить принтер" onclick="openPrinterModal('${p.id}')">${ICONS.edit}</button>
        <button class="icon-btn" style="width:40px;height:40px" title="Удалить" aria-label="Удалить принтер" onclick="deletePrinter('${p.id}')">${ICONS.trash}</button>
      </div>
    </div>
    <div class="p-stats">
      <div><span>За месяц</span><b>${monthQty}</b></div>
      <div><span>Всего</span><b>${totalQty}</b></div>
      <div class="p-wide"><span>Последняя установка</span><b class="p-last">${last ? `${fmtDate(last.h.date)} · ${escapeHtml(last.c.name)}` : '—'}</b></div>
    </div>
    ${nowIn.length ? `<div class="p-now">Сейчас стоит: ${nowIn.map(u => { const c = state.cartridges.find(x => x.id === u.cid); return `<button class="tag" onclick="openUnitCard(${jsArg(u.code)})">${escapeHtml(c ? c.name : '?')} · <span class="mono">${escapeHtml(u.code)}</span>${u.since ? ' · с ' + fmtDate(u.since) : ''}</button>`; }).join(' ')}</div>` : ''}
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
      <button class="btn-primary edit-only" onclick="openPrinterModal()">${ICONS.plus}Добавить принтер</button>
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
  printerModalState.custom = isCustomName(printerModalState.name, printerModelOptions());
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
        ${nameFieldTemplate('printer', s, printerModelOptions(), 'Например, HP LaserJet Pro M404dn')}
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
async function submitPrinter(){
  const s = printerModalState;
  if(!s) return;
  const name = s.name.trim();
  if(!name){ toast('Выберите принтер из списка или впишите свой'); return; }
  const serial = s.serial.trim();
  const fields = {name, location: s.location.trim(), wh: s.wh, serial: serial || '—', notes: s.notes.trim()};
  // The id is made outside the mutator so a retried cloud save doesn't create two printers.
  const newId = s.id ? null : 'p-' + name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).slice(2,6);
  const {ok} = await commit(st => {
    // Several printers of the same model are normal (different rooms); only the serial number must be unique.
    const twin = serial && st.printers.find(p => p.id !== s.id && p.serial === serial);
    if(twin) throw userError(`Серийный номер ${serial} уже у принтера «${twin.name}»${twin.location ? ' — ' + twin.location : ''}`);
    if(s.id){
      const p = st.printers.find(x => x.id === s.id);
      if(!p) throw userError('Этот принтер уже удалён на другом устройстве');
      Object.assign(p, fields);
    } else {
      st.printers.push(Object.assign({id: newId}, fields));
    }
  });
  if(!ok) return;
  closePrinterModal();
  toast(s.id ? `Сохранено: ${name}` : `Принтер добавлен: ${name}`);
  render();
}
async function deletePrinter(id){
  const p = state.printers.find(x => x.id === id);
  if(!p) return;
  if(!confirm(`Удалить «${p.name}»? Записи о том, какие картриджи в него ставили, останутся в истории и отчётах.`)) return;
  const {ok} = await commit(st => { st.printers = st.printers.filter(x => x.id !== id); });
  if(!ok) return;
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
  const labels = {all:'Все', receive:'Приход', transfer:'В филиалы', issue:'Расход', refill:'Пустые и заправка'};
  return Object.keys(labels).map(k => `<button class="filter-chip ${k===historyFilter?'active':''}" onclick="setHistoryFilter('${k}')">${labels[k]} · ${all.filter(h => historyMatches(h, k)).length}</button>`).join('');
}
function historyMatches(h, key){
  if(key === 'all') return true;
  if(key === 'refill') return ['return', 'refill', 'scrap'].includes(h.type) || (h.type === 'receive' && h.refillQty > 0);
  return h.type === key;
}
function setHistoryFilter(key){
  historyFilter = key;
  const row = document.getElementById('history-filter-row');
  if(row) row.innerHTML = historyFilterChipsTemplate();
  updateHistoryList();
}
function updateHistoryList(){
  let rows = [];
  state.cartridges.forEach(c => getHistory(c).forEach(h => rows.push({...h, cartridgeName:c.name, cartridgeId:c.id, colorHex:colorHexOf(c)})));
  rows = rows.filter(r => historyMatches(r, historyFilter));
  rows.sort((a,b) => b.date.localeCompare(a.date));
  const body = document.getElementById('history-body');
  if(!body) return;
  body.innerHTML = rows.length ? rows.map(r => `
    <tr style="cursor:pointer" onclick="location.hash='#/detail/${r.cartridgeId}'">
      <td class="mono">${fmtDate(r.date)}</td>
      <td><span style="display:inline-flex;align-items:center;gap:8px"><span style="width:9px;height:9px;border-radius:3px;background:${r.colorHex};flex-shrink:0"></span>${escapeHtml(r.cartridgeName)}</span></td>
      <td>${escapeHtml(opLabel(r))}${r.codes && r.codes.length ? `<div class="t-sub mono">${escapeHtml(r.codes.join(', '))}</div>` : ''}</td>
      <td class="mono" style="text-align:right;color:${opColor(r)}">${opSign(r)}${r.qty}</td>
      <td class="mono" style="text-align:right">${r.result}</td>
      <td style="color:var(--faint)">${escapeHtml([printerNameOf(r), r.who !== '—' ? r.who : ''].filter(Boolean).join(' · ') || '—')}</td>
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
        <thead><tr><th>Дата</th><th>Картридж</th><th>Операция</th><th style="text-align:right">Кол-во</th><th style="text-align:right">Остаток</th><th>Принтер / кто</th></tr></thead>
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
    <button class="btn-secondary edit-only" onclick="addBranch()">${ICONS.plus}Добавить филиал</button>
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
              <td><span style="display:inline-flex;align-items:center;gap:8px"><span style="width:9px;height:9px;border-radius:3px;background:${colorHexOf(c)};flex-shrink:0"></span>${escapeHtml(c.name)}</span></td>
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
  const plusAction = isMain ? `openMovement('${c.id}','receive')` : `openMovement('${c.id}','transfer',{to:'${wh}'})`;
  return `
  <div class="c-row ${n ? '' : 'c-row-empty'}" onclick="location.hash='#/detail/${c.id}'">
    <div class="chip" style="background:${colorHexOf(c)}"></div>
    <div class="c-main">
      <div class="c-name">${escapeHtml(c.name)}</div>
      <div class="c-sub">${escapeHtml(cartridgeSub(c))}</div>
    </div>
    <div class="c-stock"><b>${n}</b><span>шт.</span></div>
    <div class="c-quick edit-only">
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
      <div class="detail-actions edit-only">
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

const nameTaken = (st, name, exceptId) => st.warehouses.some(w => !w.deleted && w.id !== exceptId && w.name.toLowerCase() === name.toLowerCase());
async function addBranch(){
  const name = (prompt('Название нового филиала:') || '').trim();
  if(!name) return;
  const id = 'wh-' + Math.random().toString(36).slice(2,8);
  const {ok} = await commit(st => {
    if(nameTaken(st, name)) throw userError('Склад с таким названием уже есть');
    st.warehouses.push({id, name});
  });
  if(!ok) return;
  toast(`Филиал добавлен: ${name}`);
  render();
}
async function renameWarehouse(id){
  const w = activeWarehouses().find(x => x.id === id);
  if(!w) return;
  const name = (prompt('Новое название склада:', w.name) || '').trim();
  if(!name || name === w.name) return;
  const {ok} = await commit(st => {
    if(nameTaken(st, name, id)) throw userError('Склад с таким названием уже есть');
    const target = st.warehouses.find(x => x.id === id);
    if(target) target.name = name;
  });
  if(!ok) return;
  toast('Склад переименован');
  render();
}
async function deleteWarehouse(id){
  const w = activeWarehouses().find(x => x.id === id);
  if(!w || id === MAIN_WH) return;
  const left = whTotal(id);
  if(left > 0){ toast(`На «${w.name}» ещё ${left} шт. — сначала спишите или передайте их`); return; }
  const empties = state.units.filter(u => u.status === 'empty' && u.wh === id).length;
  if(empties > 0){ toast(`На «${w.name}» лежат пустые картриджи (${empties} шт.) — сначала отправьте их на заправку`); return; }
  if(!confirm(`Удалить филиал «${w.name}»? История операций по нему сохранится.`)) return;
  const {ok} = await commit(st => {
    const stock = st.cartridges.reduce((sum, c) => sum + ((c.branchStock || {})[id] || 0), 0);
    if(stock > 0) throw userError(`На «${w.name}» ещё ${stock} шт. — сначала спишите или передайте их`);
    if(st.units.some(u => u.status === 'empty' && u.wh === id)) throw userError(`На «${w.name}» лежат пустые картриджи — сначала отправьте их на заправку`);
    const target = st.warehouses.find(x => x.id === id);
    if(target) target.deleted = true;
  });
  if(!ok) return;
  if(getPref('lastIssueWh') === id) setPref('lastIssueWh', undefined);
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
        <h2 style="font-size:20px;margin-bottom:8px">${ICONS.cloud} Общая база</h2>
        ${cloud.enabled
          ? `<p style="font-size:15px;color:var(--muted);margin:0 0 16px">Подключена: телефон и компьютер видят одни и те же данные.<br>Вы вошли как <b style="color:var(--text)">${escapeHtml(cloud.user ? cloud.user.email : '—')}</b></p>
             <button class="btn-secondary" onclick="signOutCloud()">Выйти из аккаунта</button>`
          : `<p style="font-size:15px;color:var(--muted);margin:0">Не подключена — данные хранятся только в этом браузере на этом устройстве.</p>`}
      </div>
      ${uploadLocalCardTemplate()}
      <div class="card" style="padding:22px">
        <h2 style="font-size:20px;margin-bottom:8px">Резервная копия</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Сохраните все данные в файл на всякий случай. Из файла их можно вернуть.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn-secondary" onclick="downloadBackup()">Сохранить копию в файл</button>
          <label class="btn-secondary edit-only" style="cursor:pointer">Восстановить из файла<input type="file" accept=".json,application/json" style="display:none" onchange="restoreBackup(this)"></label>
        </div>
      </div>
      ${accessCardTemplate()}
      <div class="card edit-only" style="padding:22px">
        <h2 style="font-size:20px;margin-bottom:8px">Начать с нуля</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Удаляет все картриджи, принтеры и историю${cloud.enabled ? ' — <b>на всех устройствах</b>' : ''}. Дальше добавляйте свои картриджи кнопкой «Новый картридж».</p>
        <button class="btn-primary btn-out" onclick="resetData('empty')">${ICONS.trash} Очистить всё</button>
      </div>
      <div class="card edit-only" style="padding:22px">
        <h2 style="font-size:20px;margin-bottom:8px">Демо-данные</h2>
        <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Заменяет всё на 11 примерных картриджей — чтобы посмотреть, как работает приложение.</p>
        <button class="btn-secondary" onclick="resetData('demo')">Загрузить демо-данные</button>
      </div>
    </div>
  </div>`;
}

// Offered while the cloud is still empty and this browser holds pre-cloud data.
function uploadLocalCardTemplate(){
  if(!cloud.enabled || !cloud.loaded || !cloud.empty) return '';
  const local = loadLocal();
  if(!local || !local.cartridges.length) return '';
  return `
  <div class="card upload-card edit-only">
    <h2 style="font-size:19px;margin-bottom:6px">Общая база пока пустая</h2>
    <p style="font-size:15px;color:var(--muted);margin:0 0 14px">На этом устройстве сохранены ваши прежние данные: ${local.cartridges.length} картриджей, ${local.printers.length} принтеров. Загрузите их в общую базу — после этого они появятся на всех устройствах.</p>
    <button class="btn-primary btn-in" onclick="uploadLocalToCloud()">${ICONS.cloud} Загрузить в общую базу</button>
  </div>`;
}

// Who may change data and who (management) may only look. Kept in its own Firestore
// document; the Firestore rules let only the owner write it and enforce the read-only part.
function accessCardTemplate(){
  if(!cloud.enabled) return '';
  const r = cloud.roles || {};
  const list = (key, title, hint) => {
    const emails = Array.isArray(r[key]) ? r[key] : [];
    return `
      <div class="field">
        <span class="field-lbl">${title}</span>
        <div class="field-hint" style="margin:0 0 8px">${hint}</div>
        ${emails.length ? emails.map(e => `<div class="access-row"><span>${escapeHtml(e)}</span><button class="icon-btn" style="width:36px;height:36px" aria-label="Убрать" onclick="changeAccess('${key}', ${jsArg(e)}, false)">${ICONS.x}</button></div>`).join('') : `<div class="field-hint" style="margin:0 0 8px">Пока никого</div>`}
        <div style="display:flex;gap:8px;margin-top:6px">
          <input class="input" id="access-${key}" type="email" inputmode="email" placeholder="почта@пример.uz" style="flex:1;min-width:0">
          <button class="btn-secondary" onclick="changeAccess('${key}', document.getElementById('access-${key}').value, true)">Добавить</button>
        </div>
      </div>`;
  };
  return `
    <div class="card edit-only" style="padding:22px">
      <h2 style="font-size:20px;margin-bottom:8px">Доступ</h2>
      <p style="font-size:15px;color:var(--muted);margin:0 0 16px">Аккаунт (почта и пароль) сначала создаётся в Firebase → Authentication. Потом впишите почту сюда.</p>
      ${list('viewers', 'Руководство — только просмотр', 'Видят всё: остатки, историю, отчёты. Ничего не могут изменить.')}
      ${list('editors', 'Сотрудники — могут вносить изменения', 'Приход, расход, заправка и всё остальное. Владелец базы может всегда, его вписывать не нужно.')}
    </div>`;
}
async function changeAccess(key, raw, add){
  const email = String(raw || '').trim().toLowerCase();
  if(add && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ toast('Введите почту полностью, например boss@mail.uz'); return; }
  if(!add && !confirm(`Убрать ${email} из списка?`)) return;
  try{
    const FV = firebase.firestore.FieldValue;
    const other = key === 'viewers' ? 'editors' : 'viewers';
    // One person is either management or staff, not both.
    const update = add ? {[key]: FV.arrayUnion(email), [other]: FV.arrayRemove(email)} : {[key]: FV.arrayRemove(email)};
    await rolesRef().set(update, {merge: true});
    toast(add ? `Добавлено: ${email}` : `Убрано: ${email}`);
  }catch(e){
    toast(e.code === 'permission-denied' ? 'Менять доступ может только владелец базы (проверьте правила Firestore)' : 'Не удалось сохранить: ' + (e.message || e));
  }
}

function renderLoginView(){
  return `
  <div class="login-wrap">
    <div class="card login-card">
      <div class="brand-row" style="padding:0;margin-bottom:18px"><div class="brand-mark"></div><span class="brand-name">Картотека</span></div>
      <h1 style="font-size:24px">Вход</h1>
      <p style="margin:6px 0 18px;font-size:15px;color:var(--faint)">Войдите, чтобы открыть общую базу картриджей</p>
      <form onsubmit="event.preventDefault();submitLogin()">
        <div class="field"><span class="field-lbl">Почта</span><input class="input" id="login-email" type="email" autocomplete="username" inputmode="email"></div>
        <div class="field"><span class="field-lbl">Пароль</span><input class="input" id="login-pass" type="password" autocomplete="current-password"></div>
        <div id="login-msg" style="min-height:22px;font-size:15px;color:var(--crit-fg);margin-bottom:8px"></div>
        <button class="btn-primary" type="submit" style="width:100%;min-height:56px;font-size:18px">Войти</button>
      </form>
      <p style="margin:16px 0 0;font-size:13px;color:var(--faint)">Аккаунты создаются в консоли Firebase. После входа на этом устройстве повторно вводить пароль не нужно.</p>
    </div>
  </div>`;
}
function renderMessageView(title, text){
  return `<div class="login-wrap"><div class="card login-card" style="text-align:center"><h1 style="font-size:22px;margin-bottom:8px">${title}</h1><p style="margin:0;font-size:15px;color:var(--muted)">${text}</p>${cloud.user ? `<button class="btn-secondary" style="margin-top:18px" onclick="signOutCloud()">Выйти из аккаунта</button>` : ''}</div></div>`;
}

/* ---------- inventory list update (partial re-render, keeps input focus) ---------- */
function updateInventoryList(){
  let list = state.cartridges.filter(c => {
    if(activeFilter==='empty') return c.stock===0;
    if(activeFilter!=='all') return c.type===activeFilter;
    return true;
  });
  if(searchQuery.trim()){
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(c => c.name.toLowerCase().includes(q) || (c.barcode || '').includes(q) || unitsOf(state, c.id).some(u => u.code.toLowerCase().includes(q)));
  }
  const body = document.getElementById('inv-list-body');
  if(!body) return;
  if(!state.cartridges.length){
    body.innerHTML = `<div class="empty-state"><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:6px">Склад пуст</div>Добавьте первый картридж — вручную или отсканируйте штрих-код.<div style="margin-top:16px" class="edit-only"><button class="btn-primary" onclick="openCartridgeCreate()">${ICONS.plus}Новый картридж</button></div></div>`;
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
// opts: {wh} source for issue, {from, to} for transfer, {codes} barcodes to start with.
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
    qty: 1,
    party: defaultParty(t, c),
    note: '',
    wh: opts.wh || defaultIssueWh(),
    printerId: '',
    from, to,
    codes: [],        // barcodes of the individual cartridges in this operation
    info: null,       // {text, bad} about the last scanned barcode
    returnOld: true,  // расход: the cartridge taken out of the printer goes back as empty
    date: todayIso(), // can be an earlier day when copying records from the notebook
  };
  (opts.codes || []).forEach(code => addMovementCode(code, true));
  renderModal();
}
function defaultParty(t, c){
  if(t === 'receive') return (c && c.supplier) || '';
  if(t === 'issue') return defaultInstaller();
  return '';
}
// The warehouse the cartridges leave from (none for a receive).
function movementSource(m){ return m.type === 'issue' ? m.wh : m.type === 'transfer' ? m.from : null; }
// After the model or the source shelf changes, drop barcodes that no longer fit.
function pruneMovementCodes(){
  const m = modalState;
  if(!m) return;
  if(m.type === 'receive'){
    m.codes = m.codes.filter(code => { const u = findUnit(state, code); return !u || u.cid === m.cartridgeId; });
    return;
  }
  const src = movementSource(m);
  m.codes = m.codes.filter(code => { const u = findUnit(state, code); return u && u.cid === m.cartridgeId && u.status === 'stock' && u.wh === src; });
}
function setMovementModel(id){
  const m = modalState;
  m.cartridgeId = id;
  const c = state.cartridges.find(x => x.id === id);
  if(m.type === 'receive') m.party = c ? c.supplier || '' : '';
  pruneMovementCodes();
}
// A scanned (or picked) barcode. Returns nothing; the caller re-renders.
//   receive  – a new barcode becomes a new cartridge; an empty/refill one comes back refilled
//   issue / transfer – the cartridge must be full and on a shelf; its shelf becomes the source
function addMovementCode(raw, quiet){
  const m = modalState;
  if(!m) return;
  const code = String(raw || '').trim();
  if(!code) return;
  const say = msg => { if(!quiet) toast(msg); };
  if(m.codes.includes(code)){ say('Этот штрих-код уже в списке'); return; }
  const u = findUnit(state, code);
  // A barcode saved on the whole model (older versions) only picks the model.
  const model = !u && state.cartridges.find(c => c.barcode === code);
  if(model){
    if(m.cartridgeId !== model.id) setMovementModel(model.id);
    m.info = {text: `Найден: ${model.name}`};
    return;
  }
  const c = u && state.cartridges.find(x => x.id === u.cid);
  const name = c ? c.name : 'Картридж';
  if(m.type === 'receive'){
    if(u && u.status !== 'empty' && u.status !== 'refill'){
      m.info = {text: `${name} · ${code}: ${unitWhere(u)}`, bad: true, code};
      say('Этот картридж уже есть в базе');
      return;
    }
    if(u){
      if(m.codes.length && u.cid !== m.cartridgeId){ say('Это картридж другой модели — сначала сохраните этот приход'); return; }
      if(u.cid !== m.cartridgeId) setMovementModel(u.cid);
      m.info = {text: `${name} · ${code}: вернулся с заправки`};
    } else {
      m.info = {text: `${code}: новый картридж`};
    }
    m.codes.push(code);
    return;
  }
  if(!u){
    m.info = {text: `Штрих-код ${code} не найден — сначала оформите его приход`, bad: true};
    say('Штрих-код не найден');
    return;
  }
  if(u.status !== 'stock'){
    m.info = {text: `${name} · ${code}: ${unitWhere(u)}`, bad: true, code};
    return;
  }
  if(m.codes.length && u.cid !== m.cartridgeId){ say('Это картридж другой модели'); return; }
  if(u.cid !== m.cartridgeId) setMovementModel(u.cid);
  if(m.type === 'issue') m.wh = u.wh;
  else {
    m.from = u.wh;
    if(m.to === u.wh) m.to = (activeWarehouses().find(w => w.id !== u.wh) || {}).id || null;
  }
  pruneMovementCodes();
  m.codes.push(code);
  m.info = {text: `${name} · ${code}: ${unitWhere(u)}`};
}
function pickMovementCode(code){
  if(!modalState || !code) return;
  addMovementCode(code);
  renderModal();
}
function removeMovementCode(code){
  if(!modalState) return;
  modalState.codes = modalState.codes.filter(x => x !== code);
  renderModal();
}
// Cartridges of this model now standing in the chosen printer (they come out when a new one goes in).
function oldUnitsInPrinter(m){
  if(!m || m.type !== 'issue' || !m.printerId) return [];
  return state.units.filter(u => u.status === 'installed' && u.printerId === m.printerId && u.cid === m.cartridgeId && !m.codes.includes(u.code));
}
function setMovementPrinter(id){
  if(!modalState) return;
  modalState.printerId = id;
  // A printer standing in a branch is fed from that branch's shelf — unless a scanned
  // cartridge already says which shelf it comes from.
  const p = state.printers.find(x => x.id === id);
  if(!modalState.codes.length && p && activeWarehouses().some(w => w.id === p.wh)) modalState.wh = p.wh;
  renderModal();
}
function printerOptionsTemplate(selectedId){
  const printers = [...state.printers].sort((a,b) => a.name.localeCompare(b.name));
  const opt = p => `<option value="${p.id}" ${p.id===selectedId?'selected':''}>${escapeHtml(p.name)}${p.location ? ' — ' + escapeHtml(p.location) : ''}</option>`;
  const groups = activeWarehouses().map(w => ({label: w.name, list: printers.filter(p => p.wh === w.id)}));
  const rest = printers.filter(p => !activeWarehouses().some(w => w.id === p.wh));
  return `<option value="">— не указан —</option>`
    + groups.filter(g => g.list.length).map(g => `<optgroup label="${escapeHtml(g.label)}">${g.list.map(opt).join('')}</optgroup>`).join('')
    + (rest.length ? `<optgroup label="Склад не указан">${rest.map(opt).join('')}</optgroup>` : '');
}
function closeMovement(){
  modalState = null;
  const root = document.getElementById('modal-root');
  if(root) root.innerHTML = '';
}
function setMovementType(type){
  if(!modalState) return;
  modalState.type = type;
  modalState.qty = 1;
  modalState.codes = [];
  modalState.info = null;
  modalState.party = defaultParty(type, state.cartridges.find(x => x.id === modalState.cartridgeId));
  renderModal();
}
function setMovementWh(field, id){
  if(!modalState) return;
  modalState[field] = id;
  // Source and destination of a transfer can never be the same warehouse.
  if(field === 'from' && modalState.to === id) modalState.to = (activeWarehouses().find(w => w.id !== id) || {}).id || null;
  pruneMovementCodes();
  renderModal();
}
function setMovementCartridge(id){
  if(!modalState) return;
  setMovementModel(id);
  modalState.info = null;
  renderModal();
}
function stepMovementQty(delta){
  if(!modalState) return;
  modalState.qty = Math.max(1, modalState.qty + delta);
  renderModal();
}
function codesFieldTemplate(c){
  const m = modalState;
  const t = m.type;
  const src = movementSource(m);
  const chips = m.codes.map(code => `<span class="code-chip"><span class="mono">${escapeHtml(code)}</span><button aria-label="Убрать" onclick="removeMovementCode(${jsArg(code)})">${ICONS.x}</button></span>`).join('');
  let picker = '', hint = '';
  if(t === 'receive'){
    hint = 'У каждого картриджа свой штрих-код — сканируйте их по одному, количество посчитается само. Пустой картридж, вернувшийся с заправки, тоже сканируйте здесь.';
  } else {
    const free = unitsOf(state, c.id, 'stock', src).filter(u => !m.codes.includes(u.code));
    if(free.length) picker = `
      <select class="input" style="margin-top:8px" onchange="pickMovementCode(this.value)">
        <option value="">— выбрать по штрих-коду (${free.length}) —</option>
        ${free.map(u => `<option value="${escapeHtml(u.code)}">${escapeHtml(u.code)}${u.since ? ' · с ' + fmtDate(u.since) : ''}</option>`).join('')}
      </select>`;
    if(!m.codes.length && whStock(c, src) > 0 && untrackedStock(state, c, src) === 0) hint = 'Все эти картриджи на складе со штрих-кодами — отсканируйте или выберите, какой именно.';
    else if(!m.codes.length) hint = 'Отсканируйте штрих-код картриджа — сразу будет видно, где он и когда его ставили.';
  }
  const info = m.info ? `<div class="scan-info ${m.info.bad ? 'bad' : ''}">${escapeHtml(m.info.text)}${m.info.code ? ` <button class="link-btn" onclick="closeMovement();openUnitCard(${jsArg(m.info.code)})">Открыть карточку</button>` : ''}</div>` : '';
  return `
    <div class="field">
      <span class="field-lbl">Штрих-коды картриджей</span>
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
        ${chips}
        <button class="btn-secondary scan-add" onclick="openScanner(onBarcodeScannedInModal)">${ICONS.barcode}${m.codes.length ? 'Ещё' : 'Сканировать'}</button>
      </div>
      ${picker}
      ${info}
      ${hint ? `<div class="field-hint">${hint}</div>` : ''}
    </div>`;
}
function renderModal(){
  const root = document.getElementById('modal-root');
  if(!modalState){ root.innerHTML = ''; return; }
  const c = state.cartridges.find(x => x.id === modalState.cartridgeId) || state.cartridges[0];
  const t = modalState.type;
  const qty = modalState.codes.length || modalState.qty;
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
    whFields += `
      <div class="field">
        <span class="field-lbl">В какой принтер</span>
        <div style="display:flex;gap:8px">
          <select class="input" style="flex:1;min-width:0" onchange="setMovementPrinter(this.value)">${printerOptionsTemplate(modalState.printerId)}</select>
          <button class="icon-btn" title="Сканировать серийный номер принтера" onclick="openScanner(onBarcodeScannedPrinterInModal)">${ICONS.barcode}</button>
        </div>
      </div>`;
    const old = oldUnitsInPrinter(modalState);
    if(modalState.printerId) whFields += `
      <label class="check-row"><input type="checkbox" ${modalState.returnOld ? 'checked' : ''} onchange="modalState.returnOld=this.checked">
        <span>${old.length
          ? `Снятый из принтера картридж <b class="mono">${escapeHtml(old.map(u => u.code).join(', '))}</b> положить на склад «${escapeHtml(whName(modalState.wh))}» как пустой`
          : `Старый картридж, снятый из принтера, положить на склад «${escapeHtml(whName(modalState.wh))}» как пустой (для заправки)`}</span></label>`;
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
  const partyLabel = t === 'receive' ? 'От кого (поставщик)' : t === 'issue' ? 'Кто установил' : 'Кто принял';
  const partyHint = t === 'receive' ? 'Название поставщика' : 'Необязательно';
  const qtyField = modalState.codes.length
    ? `<div class="qty-fixed"><b>${qty}</b> шт. — по штрих-кодам</div>`
    : `<div class="stepper"><button aria-label="Меньше" onclick="stepMovementQty(-1)">−</button><span class="val">${qty}</span><button aria-label="Больше" onclick="stepMovementQty(1)">+</button></div>`;

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
            ${state.cartridges.map(x => `<option value="${x.id}" ${x.id===c.id?'selected':''}>${escapeHtml(x.name)} (${whStock(x, shownWh)} шт.)</option>`).join('')}
          </select>
          <button class="icon-btn" title="Сканировать штрих-код" onclick="openScanner(onBarcodeScannedInModal)">${ICONS.barcode}</button>
        </div>
      </div>
      ${codesFieldTemplate(c)}
      ${whFields}
      <div class="field">
        <span class="field-lbl">Количество</span>
        ${qtyField}
      </div>
      ${dateFieldTemplate('modalState', modalState.date)}
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
async function submitMovement(){
  if(!modalState) return;
  const m = Object.assign({}, modalState, {codes: modalState.codes.slice()});
  const t = m.type;
  const codes = m.codes;
  const wantQty = codes.length || m.qty;
  if(wantQty < 1){ toast('Укажите количество больше нуля'); return; }
  const c0 = state.cartridges.find(x => x.id === m.cartridgeId);
  if(!c0) return;
  const src = movementSource(m);
  if(t === 'transfer' && (!m.to || m.to === src)){ toast('Выберите, куда передать'); return; }
  // Ask about an over-issue up front; the mutator below still clips to what the
  // shared data holds at save time, in case another device changed it meanwhile.
  // Barcoded cartridges leave a shelf only by their barcode, so a plain count can
  // take only the ones without a barcode.
  if(t !== 'receive' && !codes.length){
    const have = whStock(c0, src);
    const free = untrackedStock(state, c0, src);
    const verb = t === 'issue' ? 'Списать' : 'Передать';
    if(have === 0){ toast(`На складе «${whName(src)}» нет «${c0.name}»`); return; }
    if(free === 0){ toast(`Все «${c0.name}» на складе «${whName(src)}» со штрих-кодами — отсканируйте или выберите, какой именно`); return; }
    if(wantQty > free && !confirm(free < have
      ? `Без штрих-кода на складе «${whName(src)}» только ${free} шт. ${verb} их?`
      : `На складе «${whName(src)}» только ${have} шт. ${verb} всё, что есть?`)) return;
  }
  const who = m.party.trim() || '—';
  const by = m.party.trim();
  const note = (m.note || '').trim();
  const today = opDate(m.date);
  const stamp = activityStamp(today);
  const returnOld = t === 'issue' && !!m.printerId && m.returnOld;
  // Made outside the mutator so a retried cloud save gives the empty cartridge the same number.
  const emptyCode = 'БК-' + Math.random().toString(36).slice(2,7).toUpperCase();

  const {ok, result} = await commit(st => {
    const c = st.cartridges.find(x => x.id === m.cartridgeId);
    if(!c) throw userError('Этот картридж удалён на другом устройстве');
    const nameOf = id => { const w = st.warehouses.find(x => x.id === (id || MAIN_WH)); return w ? w.name : 'Склад удалён'; };
    if(!st.history[c.id]) st.history[c.id] = [];
    // Each barcode must still be where this screen showed it — another device may have moved it.
    const units = codes.map(code => findUnit(st, code));
    let qty, entry, message, meta;
    if(t === 'receive'){
      units.forEach((u, i) => {
        if(u && (u.cid !== c.id || (u.status !== 'empty' && u.status !== 'refill'))) throw userError(`Штрих-код ${codes[i]} уже есть в базе`);
        if(!u){ const owner = codeOwner(st, codes[i]); if(owner) throw userError(owner); }
      });
      qty = wantQty;
      c.stock += qty;
      if(c.onOrder) c.onOrder = false;
      const back = units.filter(Boolean).length;
      codes.forEach((code, i) => {
        if(units[i]) Object.assign(units[i], {status:'stock', wh: MAIN_WH, since: today, printerId: '', by: ''});
        else st.units.push({code, cid: c.id, status:'stock', wh: MAIN_WH, since: today});
      });
      entry = {type:'receive', wh:MAIN_WH, qty, result:c.stock};
      if(back) entry.refillQty = back;
      message = `Приход записан: ${c.name} +${qty}`;
      meta = m.party.trim() || (back ? 'С заправки' : 'Приход');
    } else {
      const have = whStock(c, src);
      if(have === 0) throw userError(`На складе «${nameOf(src)}» нет «${c.name}»`);
      if(codes.length){
        units.forEach((u, i) => {
          if(!u || u.cid !== c.id || u.status !== 'stock' || u.wh !== src) throw userError(`Картридж ${codes[i]} уже не на складе «${nameOf(src)}» — откройте окно заново`);
        });
        qty = codes.length;
      } else {
        const free = untrackedStock(st, c, src);
        if(free === 0) throw userError(`Все «${c.name}» на складе «${nameOf(src)}» со штрих-кодами — выберите, какой именно`);
        // Record what actually left the shelf, so reports never count more than existed.
        qty = Math.min(wantQty, free);
      }
      setWhStock(c, src, have - qty);
      if(t === 'issue'){
        const printer = st.printers.find(p => p.id === m.printerId);
        units.forEach(u => Object.assign(u, {status:'installed', printerId: printer ? printer.id : '', wh: src, since: today, by}));
        entry = {type:'issue', wh:src, qty, result: have - qty};
        if(printer) Object.assign(entry, {printerId: printer.id, printerName: printer.name});
        message = `Расход записан (${nameOf(src)}): ${c.name} −${qty}`;
        meta = [nameOf(src), printer ? printer.name : '', m.party.trim()].filter(Boolean).join(' · ');
        if(returnOld && printer){
          const old = st.units.filter(u => u.status === 'installed' && u.printerId === printer.id && u.cid === c.id && !codes.includes(u.code));
          if(old.length){
            old.forEach(u => Object.assign(u, {status:'empty', wh: src, since: today}));
          } else if(!findUnit(st, emptyCode)){
            // The cartridge that came out was never registered: it gets its own number now.
            const u = {code: emptyCode, cid: c.id, status:'empty', wh: src, since: today};
            st.units.push(u);
            old.push(u);
          }
          if(old.length){
            addHistoryEntry(st, c, {type:'return', wh: src, qty: old.length, result: have - qty, codes: old.map(u => u.code), printerId: printer.id, printerName: printer.name, date: today, who, dept: ''});
            message += ` · снятый пустой → ${nameOf(src)}`;
          }
        }
      } else {
        const toHave = whStock(c, m.to);
        setWhStock(c, m.to, toHave + qty);
        units.forEach(u => Object.assign(u, {wh: m.to, since: today}));
        entry = {type:'transfer', from:src, to:m.to, qty, result: have - qty, resultTo: toHave + qty};
        message = `Передано: ${c.name} ×${qty} → ${nameOf(m.to)}`;
        meta = `${nameOf(src)} → ${nameOf(m.to)}`;
      }
    }
    if(codes.length) entry.codes = codes.slice();
    Object.assign(entry, {date: today, who, dept: note});
    addHistoryEntry(st, c, entry);
    st.activity.unshift({date: stamp, type: t, text: `${c.name} ×${qty}`, meta});
    st.activity = st.activity.slice(0,8);
    return message;
  });
  if(!ok) return;
  if(t === 'issue'){
    setPref('lastIssueWh', src);
    if(by) setPref('lastInstaller', by);
  }
  closeMovement();
  toast(result);
  render();
}

/* ---------- edit / delete cartridge ---------- */
let cartridgeEditState = null;

function openCartridgeCreate(barcode){
  cartridgeEditState = {
    isNew: true, id: null,
    name: '', barcode: barcode || '',
    type: 'toner', color: 'Чёрный',
    supplier: DEFAULT_SUPPLIER, location: DEFAULT_LOCATION,
    initialStock: 1, custom: false,
    date: todayIso(),
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
    custom: isCustomName(c.name, cartridgeModelOptions()),
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
  const s = cartridgeEditState;
  const k = String(code).trim();
  const owner = s && codeOwner(state, k, s.id);
  if(owner) toast(owner);
  else if(s){ s.barcode = k; toast('Штрих-код считан'); }
  renderCartridgeEditModal();
}
// With a barcode the form adds exactly one cartridge, so the count field gives way to a note.
// Toggled in place (no re-render) so typing and the save button keep working.
function setCartridgeBarcode(value){
  if(!cartridgeEditState) return;
  cartridgeEditState.barcode = value;
  const has = !!String(value).trim();
  const qty = document.getElementById('cart-qty-field');
  const one = document.getElementById('cart-one-note');
  if(qty) qty.style.display = has ? 'none' : '';
  if(one) one.style.display = has ? '' : 'none';
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
        ${nameFieldTemplate('cartridge', s, cartridgeModelOptions(), 'Например, 728')}
      </div>

      ${s.isNew || s.barcode ? `
      <div class="field">
        <span class="field-lbl">${s.isNew ? 'Штрих-код этого картриджа' : 'Общий штрих-код модели (из старой версии)'}</span>
        <div style="display:flex;gap:8px">
          <input class="input" style="flex:1;min-width:0" value="${escapeHtml(s.barcode)}" oninput="setCartridgeBarcode(this.value)" placeholder="${s.isNew ? 'Отсканируйте или введите' : ''}">
          <button class="icon-btn" title="Сканировать" onclick="openScanner(onBarcodeScannedForCartridgeEdit)">${ICONS.barcode}</button>
        </div>
        ${s.isNew ? `<div class="field-hint">Если такой картридж уже есть в списке — он не задвоится: просто добавится ещё 1 шт. с этим штрих-кодом.</div>` : ''}
      </div>` : ''}

      <div class="field">
        <span class="field-lbl">Тип</span>
        <div class="wh-chips">${Object.keys(TYPE_LABELS).map(typeBtn).join('')}</div>
      </div>

      <div class="field">
        <span class="field-lbl">Цвет</span>
        <div class="wh-chips">${Object.keys(COLORS).map(colorBtn).join('')}</div>
      </div>

      ${s.isNew ? `
      <div class="field" id="cart-qty-field" style="${s.barcode.trim() ? 'display:none' : ''}">
        <span class="field-lbl">Сколько штук на складе ${escapeHtml(whName(MAIN_WH))} (без штрих-кода)</span>
        <input class="input" type="number" min="0" inputmode="numeric" value="${s.initialStock}" oninput="setCartridgeEditField('initialStock', Math.max(0, Math.floor(Number(this.value)||0)))">
      </div>
      <div class="warn-box" id="cart-one-note" style="margin-bottom:14px;${s.barcode.trim() ? '' : 'display:none'}"><span>Добавится <b style="color:var(--text)">1 шт.</b> на склад ${escapeHtml(whName(MAIN_WH))} с этим штрих-кодом</span></div>
      ${dateFieldTemplate('cartridgeEditState', s.date, 'Дата прихода')}` : ''}

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
async function submitCartridgeEdit(){
  const s = cartridgeEditState;
  if(!s) return;
  const name = s.name.trim();
  if(!name){ toast('Выберите картридж из списка или впишите свой'); return; }
  const barcode = s.barcode.trim();
  const isNew = s.isNew;
  // Made outside the mutator so a retried cloud save doesn't create two cartridges.
  const newId = isNew ? name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '-').replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).slice(2,6) : null;
  const today = isNew ? opDate(s.date) : todayIso();
  const stamp = activityStamp(today);
  const fields = {
    name,
    type: s.type, typeLabel: TYPE_LABELS[s.type],
    color: s.color, colorHex: COLORS[s.color],
    supplier: s.supplier.trim(), location: s.location.trim(),
  };

  const {ok, result} = await commit(st => {
    if(!isNew){
      if(barcode){ const owner = codeOwner(st, barcode, s.id); if(owner) throw userError(owner); }
      const c = st.cartridges.find(x => x.id === s.id);
      if(!c) throw userError('Этот картридж удалён на другом устройстве');
      Object.assign(c, fields, {barcode});
      return `Сохранено: ${name}`;
    }
    // A new physical cartridge: its barcode belongs to it, not to the model.
    if(barcode){ const owner = codeOwner(st, barcode); if(owner) throw userError(owner); }
    const qty = barcode ? 1 : s.initialStock;
    // Same model already in the list (same name and color) — add to it instead of a duplicate.
    let c = st.cartridges.find(x => x.name.trim().toLowerCase() === name.toLowerCase() && x.color === s.color);
    const existed = !!c;
    if(!c){
      c = Object.assign({id: newId, stock: 0, branchStock: {}, onOrder: false, barcode: ''}, fields);
      st.cartridges.push(c);
    }
    if(!st.history[c.id]) st.history[c.id] = [];
    if(qty > 0){
      c.stock += qty;
      if(c.onOrder) c.onOrder = false;
      const who = fields.supplier || 'Начальный остаток';
      const entry = {date: today, type:'receive', wh: MAIN_WH, qty, result: c.stock, who, dept: ''};
      if(barcode) entry.codes = [barcode];
      addHistoryEntry(st, c, entry);
      st.activity.unshift({date: stamp, type:'receive', text:`${name} ×${qty}`, meta: who});
      st.activity = st.activity.slice(0,8);
    }
    if(barcode) st.units.push({code: barcode, cid: c.id, status:'stock', wh: MAIN_WH, since: today});
    if(existed) return qty > 0 ? `«${c.name}» уже есть — добавлено +${qty}${barcode ? ' (штрих-код ' + barcode + ')' : ''}` : `«${c.name}» уже есть в списке`;
    return `Добавлен: ${name}${qty > 0 ? ' +' + qty : ''}`;
  });
  if(!ok) return;
  closeCartridgeEdit();
  toast(result);
  render();
}
async function deleteCartridge(id){
  const c = state.cartridges.find(x => x.id === id);
  if(!c) return;
  const coded = unitsOf(state, id).length;
  if(!confirm(`Удалить «${c.name}» из склада? История операций${coded ? ` и ${coded} штрих-код(ов) картриджей` : ''} по нему тоже будут удалены. Это необратимо.`)) return;
  const {ok} = await commit(st => {
    st.cartridges = st.cartridges.filter(x => x.id !== id);
    st.units = st.units.filter(u => u.cid !== id);
    delete st.history[id];
  });
  if(!ok) return;
  cartridgeEditState = null;
  document.getElementById('modal-root').innerHTML = '';
  toast(`Удалено: ${c.name}`);
  location.hash = '#/inventory';
  render();
}

/* ---------- excel report ---------- */
let reportState = null;

// Local calendar day (toISOString alone would give yesterday's date before 5 a.m. in Tashkent).
function todayIso(){ const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0,10); }
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
  const printerSum = moves.filter(m => m.h.type === 'issue' && printerNameOf(m.h)).reduce((a,m) => a + m.h.qty, 0);
  const outSum = rows.reduce((a,r) => a + r.outQty, 0);
  const chip = (kind, label) => `<button class="filter-chip ${s.preset===kind?'active':''}" onclick="setReportPreset('${kind}')">${label}</button>`;
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeReport()">
    <div class="modal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <h1>Отчёт в Excel</h1>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeReport()">${ICONS.x}</button>
      </div>
      <p style="margin:6px 0 16px;font-size:15px;color:var(--faint)">Выберите период. В файле: итоги по складам, лист на каждый склад, отчёт по принтерам, все движения и остатки.</p>
      <div class="filter-row">${chip('month','Этот месяц')}${chip('prev','Прошлый месяц')}${chip('all','Всё время')}</div>
      <div style="display:flex;gap:12px">
        <div class="field" style="flex:1"><span class="field-lbl">С</span><input class="input" type="date" value="${s.from}" onchange="setReportDate('from', this.value)"></div>
        <div class="field" style="flex:1"><span class="field-lbl">По</span><input class="input" type="date" value="${s.to}" onchange="setReportDate('to', this.value)"></div>
      </div>
      <div class="warn-box">${bad
        ? '<span style="color:var(--crit-fg)">Дата «С» позже даты «По»</span>'
        : `<span>За период: <b style="color:var(--ok-fg)">пришло ${inSum}</b> · <b style="color:var(--order-fg)">в филиалы ${sentSum}</b> · <b style="color:var(--crit-fg)">расход ${outSum}</b> (в принтеры с отметкой: ${printerSum}) · операций ${moves.length}</span>`}</div>
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
    ['Склад', 'Было на начало', 'Пришло (поставщик / заправка)', 'Получено с других складов', 'Передано на другие склады', 'Расход', 'Осталось на конец'],
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
      {title:'Пришло (поставщик / заправка)', key:'inQty', show: isMain || sum(list,'inQty') > 0},
      {title: isMain ? 'Возвращено из филиалов' : 'Получено', key:'got', show: !isMain || sum(list,'got') > 0},
      {title: isMain ? 'Передано в филиалы' : 'Передано', key:'sent', show: isMain || sum(list,'sent') > 0},
      {title:'Расход', key:'outQty', show:true},
      {title:'Осталось на конец', key:'closing', show:true},
    ].filter(col => col.show);
    return [
      [`Склад: ${w.name}`],
      ['Период', period],
      [],
      ['Картридж', ...cols.map(col => col.title)],
      ...list.map(r => [r.c.name, ...cols.map(col => r[col.key])]),
      [],
      ['Итого', ...cols.map(col => sum(list, col.key))],
    ];
  };

  const moveRows = [
    ['Дата', 'Картридж', 'Операция', 'Склад', 'Принтер', 'Кол-во', 'Остаток после', 'Кто', 'Комментарий', 'Штрих-коды'],
    ...moves.map(({h, c}) => [
      fmtDate(h.date), c.name,
      opName(h),
      h.type === 'transfer' ? `${whName(h.from)} → ${whName(h.to)}` : whName(h.wh),
      printerNameOf(h),
      h.type === 'issue' ? -h.qty : h.qty,
      h.result, h.who && h.who !== '—' ? h.who : '', h.dept || '',
      (h.codes || []).join(', '),
    ]),
  ];

  // Every barcoded cartridge and where it is now.
  const unitRows = [
    ['Штрих-код', 'Картридж', 'Состояние', 'Где сейчас', 'С какого числа', 'Кто установил'],
    ...state.units.map(u => {
      const c = state.cartridges.find(x => x.id === u.cid);
      const where = u.status === 'installed' ? printerLabel(u.printerId) : u.status === 'refill' ? (u.firm || '') : u.status === 'scrapped' ? '' : whName(u.wh);
      return [u.code, c ? c.name : '', UNIT_STATUS[u.status] ? UNIT_STATUS[u.status].label : u.status, where, u.since ? fmtDate(u.since) : '', u.status === 'installed' ? u.by || '' : ''];
    }),
  ];

  // Printer report: every расход in the period, grouped by the printer it went into.
  const printerWh = p => { const w = p && state.warehouses.find(x => x.id === p.wh); return w ? w.name : 'Не указан'; };
  const byPrinter = {};
  moves.forEach(({h, c}) => {
    if(h.type !== 'issue') return;
    const key = h.printerId || h.printerName || '';
    const e = byPrinter[key] || (byPrinter[key] = {key, name: printerNameOf(h) || 'Принтер не указан', printer: state.printers.find(p => p.id === h.printerId), qty: 0, last: '', items: {}});
    e.qty += h.qty;
    if(h.date > e.last) e.last = h.date;
    const it = e.items[c.id] || (e.items[c.id] = {c, qty: 0, last: ''});
    it.qty += h.qty;
    if(h.date > it.last) it.last = h.date;
  });
  // Printers with nothing installed still get a row, so the list is complete.
  state.printers.forEach(p => { if(!byPrinter[p.id]) byPrinter[p.id] = {key: p.id, name: p.name, printer: p, qty: 0, last: '', items: {}}; });
  const printerList = Object.values(byPrinter).sort((a,b) => (a.key === '') - (b.key === '') || b.qty - a.qty || a.name.localeCompare(b.name));
  const printerRows = [
    ['Отчёт по принтерам'],
    ['Период', period],
    [],
    ['Принтер', 'Где стоит', 'Отдел / кабинет', 'Серийный номер', 'Установлено картриджей, шт.', 'Последняя установка'],
    ...printerList.map(e => [e.name, e.key ? printerWh(e.printer) : '', e.printer ? e.printer.location || '' : '', e.printer && e.printer.serial !== '—' ? e.printer.serial || '' : '', e.qty, e.last ? fmtDate(e.last) : '']),
    [],
    ['Итого', '', '', '', printerList.reduce((a,e) => a + e.qty, 0), ''],
  ];
  const printerItemRows = [
    ['Принтер', 'Где стоит', 'Картридж', 'Тип', 'Цвет', 'Установлено, шт.', 'Последняя установка'],
    ...printerList.flatMap(e => Object.values(e.items).sort((a,b) => b.qty - a.qty).map(it =>
      [e.name, e.key ? printerWh(e.printer) : '', it.c.name, it.c.typeLabel, it.c.color, it.qty, fmtDate(it.last)])),
  ];

  const liveWhs = activeWarehouses();
  const stockRows = [
    ['Картридж', 'Штрих-код', 'Тип', 'Цвет', ...liveWhs.map(w => w.name), 'Всего', 'Поставщик', 'Место хранения'],
    ...state.cartridges.map(c => [c.name, c.barcode || '', c.typeLabel, c.color, ...liveWhs.map(w => whStock(c, w.id)), totalStock(c), c.supplier || '', c.location || '']),
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
  whs.forEach(w => addSheet(warehouseSheet(w), w.name, [26, 16, 20, 22, 20, 10, 18]));
  addSheet(printerRows, 'Принтеры', [30, 16, 20, 18, 26, 20]);
  addSheet(printerItemRows, 'Принтеры и картриджи', [30, 16, 26, 11, 11, 16, 20]);
  addSheet(moveRows, 'Движения', [12, 26, 13, 24, 28, 9, 14, 20, 28, 30]);
  if(state.units.length) addSheet(unitRows, 'Штрих-коды', [20, 22, 14, 36, 14, 22]);
  addSheet(stockRows, 'Остатки', [26, 16, 11, 11, ...liveWhs.map(() => 12), 9, 16, 18]);
  XLSX.writeFile(wb, `Отчёт_картриджи_${s.from}_${s.to}.xlsx`);

  closeReport();
  toast('Отчёт скачан');
}

/* ---------- one cartridge by barcode: card, empty return, refill ---------- */
// Changes the state of barcoded cartridges and writes the history. action:
//   'return' – installed → empty on shelf opts.wh (taken out of the printer)
//   'refill' – empty → at the refill firm opts.firm
//   'back'   – at the refill firm (or empty) → full on shelf opts.wh, adds to its stock
//   'scrap'  – empty / at the firm → written off
// Runs inside commit(); one history entry per cartridge model. Returns a message.
const UNIT_ACTION_FROM = {return: ['installed'], refill: ['empty'], back: ['refill', 'empty'], scrap: ['empty', 'refill']};
function applyUnitAction(st, codes, action, opts){
  const today = opDate(opts.date);
  const nameOf = id => { const w = st.warehouses.find(x => x.id === (id || MAIN_WH)); return w ? w.name : 'Склад удалён'; };
  const units = codes.map(code => {
    const u = findUnit(st, code);
    if(!u || !UNIT_ACTION_FROM[action].includes(u.status)) throw userError(`Картридж ${code} уже в другом состоянии — откройте окно заново`);
    if(!st.cartridges.some(c => c.id === u.cid)) throw userError(`Модель картриджа ${code} удалена`);
    return u;
  });
  if((action === 'return' || action === 'back') && !st.warehouses.some(w => w.id === opts.wh && !w.deleted)) throw userError('Выберите склад');
  const byModel = {};
  units.forEach(u => { (byModel[u.cid] = byModel[u.cid] || []).push(u); });
  let total = 0;
  Object.keys(byModel).forEach(cid => {
    const c = st.cartridges.find(x => x.id === cid);
    const list = byModel[cid];
    const qty = list.length;
    total += qty;
    const entry = {date: today, type: action, qty, codes: list.map(u => u.code), who: opts.who || '—', dept: opts.note || ''};
    let meta;
    if(action === 'return'){
      const printerIds = [...new Set(list.map(u => u.printerId).filter(Boolean))];
      const p = printerIds.length === 1 && st.printers.find(x => x.id === printerIds[0]);
      if(p) Object.assign(entry, {printerId: p.id, printerName: p.name});
      list.forEach(u => Object.assign(u, {status:'empty', wh: opts.wh, since: today}));
      Object.assign(entry, {wh: opts.wh, result: whStock(c, opts.wh)});
      meta = `Снят пустой → ${nameOf(opts.wh)}`;
    } else if(action === 'refill'){
      const wh = list[0].wh;
      list.forEach(u => Object.assign(u, {status:'refill', firm: opts.firm, since: today}));
      Object.assign(entry, {wh, result: whStock(c, wh), who: opts.firm});
      meta = `На заправку · ${opts.firm}`;
    } else if(action === 'back'){
      const firms = [...new Set(list.map(u => u.firm).filter(Boolean))];
      const have = whStock(c, opts.wh);
      setWhStock(c, opts.wh, have + qty);
      if(opts.wh === MAIN_WH && c.onOrder) c.onOrder = false;
      list.forEach(u => Object.assign(u, {status:'stock', wh: opts.wh, since: today, printerId: '', by: ''}));
      Object.assign(entry, {type:'receive', wh: opts.wh, result: have + qty, refillQty: qty, who: firms.join(', ') || '—'});
      meta = `С заправки → ${nameOf(opts.wh)}`;
    } else {
      const wh = list[0].wh;
      list.forEach(u => Object.assign(u, {status:'scrapped', since: today}));
      Object.assign(entry, {wh, result: whStock(c, wh)});
      meta = 'Списан';
    }
    addHistoryEntry(st, c, entry);
    st.activity.unshift({date: activityStamp(today), type: entry.type, text: `${c.name} ×${qty}`, meta});
  });
  st.activity = st.activity.slice(0,8);
  const word = `${total} ${plural(total, 'картридж', 'картриджа', 'картриджей')}`;
  return {return: `Снят пустой: ${word} → ${nameOf(opts.wh)}`, refill: `На заправку: ${word} · ${opts.firm}`, back: `С заправки вернулось: ${word} → ${nameOf(opts.wh)}`, scrap: `Списано: ${word}`}[action];
}

let unitCardState = null; // {code, wh, firm}
function openUnitCard(code){
  const u = findUnit(state, code);
  if(!u){ toast('Штрих-код не найден'); return; }
  modalState = null; printerModalState = null; cartridgeEditState = null; refillState = null; emptyState = null;
  // Where an empty one goes by default: the shelf of the branch where its printer stands.
  const p = u.status === 'installed' && state.printers.find(x => x.id === u.printerId);
  const live = id => activeWarehouses().some(w => w.id === id);
  const wh = u.status === 'installed' ? (p && live(p.wh) ? p.wh : live(u.wh) ? u.wh : MAIN_WH) : MAIN_WH;
  unitCardState = {code: u.code, wh, firm: defaultFirm(), date: todayIso()};
  renderUnitCard();
}
function closeUnitCard(){
  unitCardState = null;
  document.getElementById('modal-root').innerHTML = '';
}
function renderUnitCard(){
  const root = document.getElementById('modal-root');
  const s = unitCardState;
  const u = s && findUnit(state, s.code);
  if(!u){ unitCardState = null; root.innerHTML = ''; return; }
  const c = state.cartridges.find(x => x.id === u.cid);
  const meta = UNIT_STATUS[u.status];
  const hist = c ? getHistory(c).filter(h => entryHasCode(h, u.code)) : [];
  const whChips = activeWarehouses().map(w => `<button class="filter-chip ${s.wh===w.id?'active':''}" onclick="unitCardState.wh='${w.id}';renderUnitCard()">${escapeHtml(w.name)}</button>`).join('');
  let actions = '';
  if(u.status === 'stock'){
    actions = `
      <div class="unit-actions">
        <button class="btn-primary btn-out" onclick="closeUnitCard();openMovement('${u.cid}','issue',{wh:'${u.wh}',codes:[${jsArg(u.code)}]})">${ICONS.minus}Установить в принтер</button>
        ${branchList().length ? `<button class="btn-primary btn-move" onclick="closeUnitCard();openMovement('${u.cid}','transfer',{from:'${u.wh}',codes:[${jsArg(u.code)}]})">${ICONS.transfer}На другой склад</button>` : ''}
      </div>`;
  } else if(u.status === 'installed'){
    actions = `
      <div class="field"><span class="field-lbl">Снять пустой и положить на склад</span><div class="wh-chips">${whChips}</div></div>
      <div class="unit-actions"><button class="btn-primary" onclick="submitUnitAction('return')">↩ Снят пустой — на склад</button></div>`;
  } else if(u.status === 'empty'){
    actions = `
      <div class="field"><span class="field-lbl">Фирма, которая заправляет</span><input class="input" value="${escapeHtml(s.firm)}" oninput="unitCardState.firm=this.value"></div>
      <div class="unit-actions">
        <button class="btn-primary" onclick="submitUnitAction('refill')">⟳ Отдать на заправку</button>
        <button class="btn-secondary" style="color:var(--crit-fg)" onclick="submitUnitAction('scrap')">Списать</button>
      </div>`;
  } else if(u.status === 'refill'){
    actions = `
      <div class="field"><span class="field-lbl">Заправленный картридж положить на склад</span><div class="wh-chips">${whChips}</div></div>
      <div class="unit-actions">
        <button class="btn-primary btn-in" onclick="submitUnitAction('back')">${ICONS.plus}Вернулся с заправки</button>
        <button class="btn-secondary" style="color:var(--crit-fg)" onclick="submitUnitAction('scrap')">Списать</button>
      </div>`;
  }
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeUnitCard()">
    <div class="modal-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div style="display:flex;align-items:center;gap:12px;min-width:0">
          <div class="detail-chip" style="background:${c ? colorHexOf(c) : 'var(--faint)'}"></div>
          <div style="min-width:0"><h1>${escapeHtml(c ? c.name : 'Картридж')}</h1><div class="mono" style="font-size:15px;color:var(--faint);margin-top:2px">${escapeHtml(u.code)}</div></div>
        </div>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeUnitCard()">${ICONS.x}</button>
      </div>
      <div class="unit-status" style="border-color:${meta.color}">
        <b style="color:${meta.color}">${meta.label}</b>
        <span>${escapeHtml(unitWhere(u))}</span>
      </div>
      ${['installed', 'empty', 'refill'].includes(u.status) ? `<div class="edit-only">${dateFieldTemplate('unitCardState', s.date)}</div>` : ''}
      ${actions ? `<div class="edit-only">${actions}</div>` : ''}
      <h2 style="font-size:17px;margin:18px 0 8px">История этого картриджа</h2>
      <div class="unit-hist">
        ${hist.length ? hist.map(h => `
          <div class="unit-hist-row">
            <span class="mono">${fmtDate(h.date)}</span>
            <span><b style="color:${opColor(h)}">${escapeHtml(h.type === 'issue' ? 'Установлен' : opLabel(h))}</b>${h.type === 'issue' ? ` · ${escapeHtml(printerNameOf(h) || 'принтер не указан')}` : ''}${h.who && h.who !== '—' ? `<span class="t-sub">${escapeHtml(h.who)}</span>` : ''}</span>
          </div>`).join('') : `<div style="color:var(--faint);font-size:14px">Записей пока нет</div>`}
      </div>
      ${c ? `<div style="margin-top:14px"><a href="#/detail/${c.id}" onclick="closeUnitCard()">Все картриджи «${escapeHtml(c.name)}» →</a></div>` : ''}
    </div>
  </div>`;
}
async function submitUnitAction(action){
  const s = unitCardState;
  if(!s) return;
  const firm = (s.firm || '').trim();
  if(action === 'refill' && !firm){ toast('Укажите фирму, которая заправляет'); return; }
  if(action === 'scrap' && !confirm(`Списать картридж ${s.code}? Он больше не будет числиться ни на складе, ни на заправке.`)) return;
  const {ok, result} = await commit(st => applyUnitAction(st, [s.code], action, {wh: s.wh, firm, date: s.date}));
  if(!ok) return;
  if(action === 'refill') setPref('lastFirm', firm);
  toast(result);
  render({keepScroll: true});
  renderUnitCard();
}

// Several cartridges at once: all empty ones to the refill firm, or back from it.
let refillState = null; // {mode: 'send' | 'back', picked: [codes], firm, wh}
function refillCandidates(mode){ return state.units.filter(u => u.status === (mode === 'send' ? 'empty' : 'refill')); }
function openRefill(mode){
  const list = refillCandidates(mode);
  if(!list.length){ toast(mode === 'send' ? 'Пустых картриджей нет' : 'На заправке ничего нет'); return; }
  modalState = null; printerModalState = null; cartridgeEditState = null; unitCardState = null; emptyState = null;
  refillState = {mode, picked: list.map(u => u.code), firm: defaultFirm(), wh: MAIN_WH, date: todayIso()};
  renderRefillModal();
}
function closeRefill(){
  refillState = null;
  document.getElementById('modal-root').innerHTML = '';
}
function toggleRefillPick(code, on){
  if(!refillState) return;
  refillState.picked = refillState.picked.filter(x => x !== code);
  if(on) refillState.picked.push(code);
  const btn = document.getElementById('refill-submit-count');
  if(btn) btn.textContent = refillState.picked.length;
}
function renderRefillModal(){
  const root = document.getElementById('modal-root');
  const s = refillState;
  if(!s){ root.innerHTML = ''; return; }
  const send = s.mode === 'send';
  const list = refillCandidates(s.mode);
  s.picked = s.picked.filter(code => list.some(u => u.code === code));
  const rows = list.map(u => {
    const c = state.cartridges.find(x => x.id === u.cid);
    return `<label class="check-row"><input type="checkbox" ${s.picked.includes(u.code) ? 'checked' : ''} onchange="toggleRefillPick(${jsArg(u.code)}, this.checked)">
      <span><b>${escapeHtml(c ? c.name : '?')}</b> · <span class="mono">${escapeHtml(u.code)}</span><span class="t-sub">${escapeHtml(unitWhere(u))}</span></span></label>`;
  }).join('');
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeRefill()">
    <div class="modal-card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <h1>${send ? 'Отдать на заправку' : 'Вернулись с заправки'}</h1>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeRefill()">${ICONS.x}</button>
      </div>
      <p style="margin:6px 0 14px;font-size:15px;color:var(--faint)">${send ? 'Отметьте пустые картриджи, которые отдаёте фирме.' : 'Отметьте заправленные картриджи, которые вернула фирма — они снова будут в наличии.'}</p>
      <div class="field">${rows}</div>
      ${send
        ? `<div class="field"><span class="field-lbl">Фирма, которая заправляет</span><input class="input" value="${escapeHtml(s.firm)}" oninput="refillState.firm=this.value"></div>`
        : `<div class="field"><span class="field-lbl">Положить на склад</span><div class="wh-chips">${activeWarehouses().map(w => `<button class="filter-chip ${s.wh===w.id?'active':''}" onclick="refillState.wh='${w.id}';renderRefillModal()">${escapeHtml(w.name)}</button>`).join('')}</div></div>`}
      ${dateFieldTemplate('refillState', s.date, send ? 'Дата, когда отдали' : 'Дата, когда вернули')}
      <div class="modal-foot">
        <button class="btn-secondary" onclick="closeRefill()">Отмена</button>
        <button class="btn-primary ${send ? '' : 'btn-in'}" onclick="submitRefill()">${ICONS.check}${send ? 'Отдать' : 'Принять'}: <span id="refill-submit-count">${s.picked.length}</span> шт.</button>
      </div>
    </div>
  </div>`;
}
async function submitRefill(){
  const s = refillState;
  if(!s) return;
  if(!s.picked.length){ toast('Отметьте хотя бы один картридж'); return; }
  const firm = (s.firm || '').trim();
  if(s.mode === 'send' && !firm){ toast('Укажите фирму, которая заправляет'); return; }
  const codes = s.picked.slice();
  const {ok, result} = await commit(st => applyUnitAction(st, codes, s.mode === 'send' ? 'refill' : 'back', {wh: s.wh, firm, date: s.date}));
  if(!ok) return;
  if(s.mode === 'send') setPref('lastFirm', firm);
  closeRefill();
  toast(result);
  render({keepScroll: true});
}

// «Принять пустой»: an empty cartridge taken out of a printer goes onto a shelf.
// It is either one we know by barcode (installed earlier), a new barcode, or one
// without a barcode — that one gets a generated code like «БК-7Q2XK» so it can be
// followed to the refill firm and back like any other.
let emptyState = null; // {printerId, picked: [codes], code, cid, wh}
function openEmptyReturn(printerId){
  if(!state.cartridges.length){ toast('Сначала добавьте картридж'); return; }
  modalState = null; printerModalState = null; cartridgeEditState = null; unitCardState = null; refillState = null;
  emptyState = {printerId: '', picked: [], code: '', cid: state.cartridges[0].id, wh: MAIN_WH, date: todayIso()};
  if(printerId) setEmptyPrinter(printerId, true);
  renderEmptyModal();
}
function closeEmptyReturn(){
  emptyState = null;
  document.getElementById('modal-root').innerHTML = '';
}
function installedIn(printerId){ return printerId ? state.units.filter(u => u.status === 'installed' && u.printerId === printerId) : []; }
function setEmptyPrinter(id, quiet){
  const s = emptyState;
  if(!s) return;
  s.printerId = id;
  const p = state.printers.find(x => x.id === id);
  if(p && activeWarehouses().some(w => w.id === p.wh)) s.wh = p.wh;
  // What stands in the printer now is what comes out.
  const inside = installedIn(id);
  s.picked = inside.map(u => u.code);
  if(inside.length) s.cid = inside[0].cid;
  // The model most recently installed there is the best guess for an unknown one.
  else if(p){ const last = printerInstalls(p.id)[0]; if(last) s.cid = last.c.id; }
  if(!quiet) renderEmptyModal();
}
function toggleEmptyPick(code, on){
  const s = emptyState;
  if(!s) return;
  s.picked = s.picked.filter(x => x !== code);
  if(on) s.picked.push(code);
  renderEmptyModal();
}
function onBarcodeScannedForEmpty(raw){
  const s = emptyState;
  if(!s) return;
  const code = String(raw || '').trim();
  const u = findUnit(state, code);
  if(u && u.status === 'installed'){
    s.printerId = u.printerId || s.printerId;
    s.picked = [code];
    s.cid = u.cid;
    s.code = '';
    toast('Найден: ' + unitWhere(u));
  } else if(u){
    toast(`Этот картридж ${unitWhere(u)}`);
  } else if(state.cartridges.some(c => c.barcode === code)){
    toast('Это общий штрих-код модели — выберите картридж в списке');
    s.cid = state.cartridges.find(c => c.barcode === code).id;
  } else {
    s.code = code;
    s.picked = [];
  }
  renderEmptyModal();
}
function renderEmptyModal(){
  const root = document.getElementById('modal-root');
  const s = emptyState;
  if(!s){ root.innerHTML = ''; return; }
  const inside = installedIn(s.printerId);
  const needModel = !s.picked.length;
  root.innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeEmptyReturn()">
    <div class="modal-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div><h1>Принять пустой картридж</h1><p style="margin:4px 0 0;font-size:14px;color:var(--faint)">Сняли из принтера пустой — положите его на склад, потом отправите на заправку</p></div>
        <button class="icon-btn" aria-label="Закрыть" onclick="closeEmptyReturn()">${ICONS.x}</button>
      </div>
      <div class="field" style="margin-top:16px">
        <span class="field-lbl">Из какого принтера</span>
        <select class="input" onchange="setEmptyPrinter(this.value)">${printerOptionsTemplate(s.printerId)}</select>
      </div>
      ${inside.length ? `
      <div class="field">
        <span class="field-lbl">Сейчас в этом принтере</span>
        ${inside.map(u => { const c = state.cartridges.find(x => x.id === u.cid); return `<label class="check-row"><input type="checkbox" ${s.picked.includes(u.code) ? 'checked' : ''} onchange="toggleEmptyPick(${jsArg(u.code)}, this.checked)"><span><b>${escapeHtml(c ? c.name : '?')}</b> · <span class="mono">${escapeHtml(u.code)}</span><span class="t-sub">стоит с ${u.since ? fmtDate(u.since) : '—'}</span></span></label>`; }).join('')}
      </div>` : ''}
      ${needModel ? `
      <div class="field">
        <span class="field-lbl">Какой картридж</span>
        <select class="input" onchange="emptyState.cid=this.value">${state.cartridges.map(c => `<option value="${c.id}" ${c.id===s.cid?'selected':''}>${escapeHtml(c.name)} · ${escapeHtml(c.color)}</option>`).join('')}</select>
      </div>
      <div class="field">
        <span class="field-lbl">Штрих-код пустого картриджа</span>
        <div style="display:flex;gap:8px">
          <input class="input" style="flex:1;min-width:0" value="${escapeHtml(s.code)}" oninput="emptyState.code=this.value" placeholder="Если есть — отсканируйте">
          <button class="icon-btn" title="Сканировать" onclick="openScanner(onBarcodeScannedForEmpty)">${ICONS.barcode}</button>
        </div>
        <div class="field-hint">Нет штрих-кода — оставьте пустым, программа даст картриджу свой номер.</div>
      </div>` : ''}
      <div class="field">
        <span class="field-lbl">Положить на склад</span>
        <div class="wh-chips">${activeWarehouses().map(w => `<button class="filter-chip ${s.wh===w.id?'active':''}" onclick="emptyState.wh='${w.id}';renderEmptyModal()">${escapeHtml(w.name)}</button>`).join('')}</div>
      </div>
      ${dateFieldTemplate('emptyState', s.date, 'Дата, когда сняли')}
      <div class="modal-foot">
        <button class="btn-secondary" onclick="closeEmptyReturn()">Отмена</button>
        <button class="btn-primary" onclick="submitEmptyReturn()">${ICONS.check}Принять пустой${s.picked.length > 1 ? ` (${s.picked.length})` : ''}</button>
      </div>
    </div>
  </div>`;
}
async function submitEmptyReturn(){
  const s = emptyState;
  if(!s) return;
  const picked = s.picked.slice();
  const typed = (s.code || '').trim();
  const code = typed || 'БК-' + Math.random().toString(36).slice(2,7).toUpperCase();
  const {printerId, cid, wh} = s;
  const today = opDate(s.date);
  const stamp = activityStamp(today);
  const {ok, result} = await commit(st => {
    if(picked.length) return applyUnitAction(st, picked, 'return', {wh, date: today});
    const known = findUnit(st, code);
    if(known){
      if(known.status === 'installed') return applyUnitAction(st, [code], 'return', {wh, date: today});
      throw userError(`Картридж ${code} сейчас ${UNIT_STATUS[known.status].label.toLowerCase()} — принять пустым нельзя`);
    }
    const owner = codeOwner(st, code);
    if(owner) throw userError(owner);
    const c = st.cartridges.find(x => x.id === cid);
    if(!c) throw userError('Выберите картридж');
    if(!st.warehouses.some(w => w.id === wh && !w.deleted)) throw userError('Выберите склад');
    const p = st.printers.find(x => x.id === printerId);
    st.units.push({code, cid, status:'empty', wh, since: today});
    const entry = {date: today, type:'return', wh, qty: 1, result: whStock(c, wh), codes: [code], who: '—', dept: ''};
    if(p) Object.assign(entry, {printerId: p.id, printerName: p.name});
    addHistoryEntry(st, c, entry);
    const whLabel = (st.warehouses.find(w => w.id === wh) || {}).name || '';
    st.activity.unshift({date: stamp, type:'return', text:`${c.name} ×1`, meta:`Снят пустой → ${whLabel}${p ? ' · ' + p.name : ''}`});
    st.activity = st.activity.slice(0,8);
    return `Пустой принят: ${c.name} (${code}) → ${whLabel}`;
  });
  if(!ok) return;
  closeEmptyReturn();
  toast(result);
  render({keepScroll: true});
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
  // A cartridge with its own barcode: show where it is and what can be done with it.
  if(findUnit(state, code)){ openUnitCard(code); return; }
  const c = findCartridgeByBarcode(code);
  if(isReadOnly()){
    document.getElementById('modal-root').innerHTML = '';
    if(c) location.hash = '#/detail/' + c.id;
    else toast(`Штрих-код «${code}» не найден`);
    return;
  }
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
  addMovementCode(code);
  if(modalState) renderModal();
}
// Picks the printer in an open расход by its scanned serial number.
function onBarcodeScannedPrinterInModal(code){
  const trimmed = String(code).trim();
  const p = state.printers.find(x => x.serial && x.serial !== '—' && x.serial === trimmed);
  if(p){
    toast(`Принтер: ${p.name}`);
    if(modalState){ setMovementPrinter(p.id); return; }
  } else {
    toast(`Принтер с серийным номером «${trimmed}» не найден`);
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
      <label class="btn-secondary scan-photo">${ICONS.barcode}Сфотографировать штрих-код<input type="file" accept="image/*" capture="environment" style="display:none" onchange="scanPhoto(this)"></label>
      <div class="field-hint" style="margin-top:6px">Если камера долго не читает (часто на iPhone) — нажмите эту кнопку и сделайте чёткое фото штрих-кода крупно.</div>
      <div id="scanner-file-reader" style="display:none"></div>
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
  // Focus the field only on a computer (for a USB scanner): on a phone the keyboard would cover the camera.
  if(!isTouchDevice()) setTimeout(() => { const el = document.getElementById('scan-manual-input'); if(el) el.focus(); }, 50);
}
function closeScanner(){
  stopCameraScan();
  scanResultCallback = null;
  if(modalState) renderModal();
  else if(printerModalState) renderPrinterModal();
  else if(cartridgeEditState) renderCartridgeEditModal();
  else if(unitCardState) renderUnitCard();
  else if(refillState) renderRefillModal();
  else if(emptyState) renderEmptyModal();
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
    const inst = new Html5Qrcode('scanner-reader', scannerConfig());
    html5QrCodeInstance = inst;
    const onCode = decodedText => handleScanResult(decodedText);
    // A wide, short box suits ordinary (1D) barcodes; a high camera resolution is
    // what lets iPhones read them — their default stream is too small for thin bars.
    const opts = {
      fps: 15,
      qrbox: (w, h) => ({width: Math.max(200, Math.floor(w * 0.9)), height: Math.max(120, Math.floor(h * 0.5))}),
      videoConstraints: {facingMode: 'environment', width: {ideal: 1920}, height: {ideal: 1080}},
    };
    inst.start({facingMode: 'environment'}, opts, onCode, () => {})
      // Some cameras refuse the high resolution — fall back to the plain stream.
      .catch(() => html5QrCodeInstance === inst
        ? inst.start({facingMode: 'environment'}, {fps: 10, qrbox: opts.qrbox}, onCode, () => {})
        : Promise.reject(new Error('closed')))
      .then(() => {
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
// Only the barcode kinds found on cartridges and stickers: fewer formats, faster and surer reads.
// Android Chrome then uses its built-in barcode reader; iPhone falls back to the library's own.
function scannerConfig(){
  const F = typeof Html5QrcodeSupportedFormats !== 'undefined' ? Html5QrcodeSupportedFormats : null;
  const formats = F ? ['EAN_13', 'EAN_8', 'UPC_A', 'UPC_E', 'CODE_128', 'CODE_39', 'CODE_93', 'ITF', 'CODABAR', 'QR_CODE', 'DATA_MATRIX']
    .map(k => F[k]).filter(v => v !== undefined) : undefined;
  return {verbose: false, formatsToSupport: formats, experimentalFeatures: {useBarCodeDetectorIfSupported: true}};
}
// Reads a barcode from a photo taken with the phone's own camera app (sharp and in focus,
// which is what iPhones need). Tries a reduced copy first, then the full photo.
async function scanPhoto(input){
  const file = input.files && input.files[0];
  input.value = '';
  if(!file) return;
  if(typeof Html5Qrcode === 'undefined'){ setScanStatus('Библиотека сканера не загрузилась — введите код вручную.'); return; }
  setScanStatus('Читаю штрих-код с фото…');
  stopCameraScan();
  const reader = new Html5Qrcode('scanner-file-reader', scannerConfig());
  const tries = [];
  try{ tries.push(await shrinkImage(file, 1600)); }catch(e){}
  tries.push(file);
  for(const f of tries){
    try{
      const code = await reader.scanFile(f, false);
      try{ reader.clear(); }catch(e){}
      handleScanResult(code);
      return;
    }catch(e){}
  }
  try{ reader.clear(); }catch(e){}
  setScanStatus('Не удалось прочитать штрих-код на фото. Снимите ближе и ровнее, чтобы штрих-код был чётким и занимал почти всю ширину кадра — или введите цифры вручную.');
}
function shrinkImage(file, maxSide){
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const k = Math.min(1, maxSide / Math.max(img.width, img.height));
      const cv = document.createElement('canvas');
      cv.width = Math.round(img.width * k);
      cv.height = Math.round(img.height * k);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url);
      cv.toBlob(b => b ? resolve(new File([b], 'photo.jpg', {type: 'image/jpeg'})) : reject(new Error('no blob')), 'image/jpeg', 0.92);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('bad image')); };
    img.src = url;
  });
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
  } else if(view === 'login'){
    el.innerHTML = `<div class="brand-row"><div class="brand-mark"></div><span class="brand-name">Картотека</span></div>`;
  } else {
    el.innerHTML = `<div class="brand-row"><div class="brand-mark"></div><span class="brand-name">Картотека</span></div><button class="icon-btn" aria-label="Сканировать штрих-код" onclick="openScanner(onBarcodeScanned)">${ICONS.barcode}</button>`;
  }
}

function render(opts){
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const view = parts[0] || 'dashboard';
  const param = parts[1];

  // keepScroll: a data refresh from another device, not a navigation.
  const keepScroll = !!(opts && opts.keepScroll === true);
  const hadSearchFocus = document.activeElement && document.activeElement.id === 'inv-search';

  // In cloud mode nothing is shown until the user is signed in and the data arrived.
  let gate = null;
  if(cloud.enabled){
    if(cloud.error) gate = renderMessageView('Нет доступа к данным', escapeHtml(cloud.error));
    else if(!cloud.authChecked) gate = renderMessageView('Загрузка…', 'Подключаемся к общей базе');
    else if(!cloud.user) gate = renderLoginView();
    else if(!cloud.loaded || !cloud.rolesReady) gate = renderMessageView('Загрузка…', 'Получаем данные из общей базы');
  }
  document.body.classList.toggle('locked', !!gate);
  const readOnly = isReadOnly();
  document.body.classList.toggle('readonly', readOnly);
  // An edit form left open when the account turned read-only must not stay usable.
  if(readOnly && (modalState || printerModalState || cartridgeEditState || refillState || emptyState)){
    modalState = printerModalState = cartridgeEditState = refillState = emptyState = null;
    document.getElementById('modal-root').innerHTML = '';
  }
  if(gate){
    document.getElementById('view').innerHTML = gate;
    document.getElementById('modal-root').innerHTML = '';
    updateMobileTopbar('login');
    return;
  }

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
    if(input){
      input.addEventListener('input', e => { searchQuery = e.target.value; updateInventoryList(); });
      if(hadSearchFocus){ input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    }
  }
  if(view === 'history') updateHistoryList();
  if(!keepScroll) window.scrollTo(0,0);
}

window.addEventListener('hashchange', () => render());
window.addEventListener('DOMContentLoaded', () => { initCloud(); render(); });
