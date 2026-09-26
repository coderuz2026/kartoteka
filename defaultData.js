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
  };
}

