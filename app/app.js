/* ═══════════════════════════════════════════════
   Brasil Brindes – Catálogo Digital
   app.js
═══════════════════════════════════════════════ */

// ─── DADOS ───────────────────────────────────────────────────────
const data = {
  categories: [
    { id: 1, name: 'Sacolas de Papel',   icon: '🛍️', img: '/assets/sacolas-papel/capa.jpg', order: 1 },
    { id: 2, name: 'Sacolas Plásticas',  icon: '🧴',  img: '/assets/sacola-plastic/capa.jpg', order: 2 },
    { id: 3, name: 'Canetas',            icon: '✒️',  img: '/assets/canetas/capa.jpg', order: 3 },
    { id: 4, name: 'Chaveiros',          icon: '🗝️',  img: '/assets/chaveiros/capa.jpg', order: 4 },
    { id: 5, name: 'Fitas de Cetim',     icon: '🎀',  img: '/assets/fitas-cetim/capa.jpg', order: 5 },
  ],
  products: [

    // ── SACOLAS DE PAPEL (catId: 1) ──────────────────────────────
    { id: 101, catId: 1, name: 'Sacola de Papel 11001', shortDesc: 'Sacola de papel personalizada – Ref. 11001', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11001.', measures: '12×12×6 cm',       material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11001.jpg'], colors: [], order: 1  },
    { id: 102, catId: 1, name: 'Sacola de Papel 11002', shortDesc: 'Sacola de papel personalizada – Ref. 11002', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11002.', measures: '18,5×15×16 cm',  material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11002.jpg'], colors: [], order: 2  },
    { id: 103, catId: 1, name: 'Sacola de Papel 11003', shortDesc: 'Sacola de papel personalizada – Ref. 11003', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11003.', measures: '25×18×8 cm',      material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11003.jpg'], colors: [], order: 3  },
    { id: 104, catId: 1, name: 'Sacola de Papel 11004', shortDesc: 'Sacola de papel personalizada – Ref. 11004', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11004.', measures: '31×23×9 cm',      material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11004.jpg'], colors: [], order: 4  },
    { id: 105, catId: 1, name: 'Sacola de Papel 11005', shortDesc: 'Sacola de papel personalizada – Ref. 11005', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11005.', measures: '38×25×11 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11005.jpg'], colors: [], order: 5  },
    { id: 106, catId: 1, name: 'Sacola de Papel 11006', shortDesc: 'Sacola de papel personalizada – Ref. 11006', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11006.', measures: '24,5×15×6 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11006.jpg'], colors: [], order: 6  },
    { id: 107, catId: 1, name: 'Sacola de Papel 11007', shortDesc: 'Sacola de papel personalizada – Ref. 11007', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11007.', measures: '38×25×11 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11005.jpg'], colors: [], order: 7  },
    { id: 108, catId: 1, name: 'Sacola de Papel 11008', shortDesc: 'Sacola de papel personalizada – Ref. 11008', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11008.', measures: '45×30×15 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11008.jpg'], colors: [], order: 8  },
    { id: 109, catId: 1, name: 'Sacola de Papel 11009', shortDesc: 'Sacola de papel personalizada – Ref. 11009', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11009.', measures: '45×30×15 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11009.jpg'], colors: [], order: 9  },
    { id: 110, catId: 1, name: 'Sacola de Papel 11010', shortDesc: 'Sacola de papel personalizada – Ref. 11010', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11010.', measures: '22×33×12 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11010.jpg'], colors: [], order: 10 },
    { id: 111, catId: 1, name: 'Sacola de Papel 11011', shortDesc: 'Sacola de papel personalizada – Ref. 11011', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11011.', measures: '15×39,5×11 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11011.jpg'], colors: [], order: 11 },
    { id: 112, catId: 1, name: 'Sacola de Papel 11012', shortDesc: 'Sacola de papel personalizada – Ref. 11012', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11012.', measures: '30×47×14 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11012.jpg'], colors: [], order: 12 },
    { id: 113, catId: 1, name: 'Sacola de Papel 11013', shortDesc: 'Sacola de papel personalizada – Ref. 11013', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11013.', measures: '25×19×6 cm',      material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11013.jpg'], colors: [], order: 13 },
    { id: 114, catId: 1, name: 'Sacola de Papel 11014', shortDesc: 'Sacola de papel personalizada – Ref. 11014', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11014.', measures: '36×40×11 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11014.jpg'], colors: [], order: 14 },
    { id: 115, catId: 1, name: 'Sacola de Papel 11015', shortDesc: 'Sacola de papel personalizada – Ref. 11015', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11015.', measures: '22×24×8 cm',      material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11015.jpg'], colors: [], order: 15 },
    { id: 116, catId: 1, name: 'Sacola de Papel 11016', shortDesc: 'Sacola de papel personalizada – Ref. 11016', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11016.', measures: '49×37×14 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11016.jpg'], colors: [], order: 16 },
    { id: 117, catId: 1, name: 'Sacola de Papel 11017', shortDesc: 'Sacola de papel personalizada – Ref. 11017', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11017.', measures: '34×27×12 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11017.jpg'], colors: [], order: 17 },
    { id: 118, catId: 1, name: 'Sacola de Papel 11019', shortDesc: 'Sacola de papel personalizada – Ref. 11019', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11019.', measures: '50×44×12 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11018.jpg'], colors: [], order: 18 },
    { id: 119, catId: 1, name: 'Sacola de Papel 11020', shortDesc: 'Sacola de papel personalizada – Ref. 11020', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11020.', measures: '41×37×13 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11019.jpg'], colors: [], order: 19 },
    { id: 120, catId: 1, name: 'Sacola de Papel 11021', shortDesc: 'Sacola de papel personalizada – Ref. 11021', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11021.', measures: '35×32×13 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11020.jpg'], colors: [], order: 20 },
    { id: 121, catId: 1, name: 'Sacola de Papel 11022', shortDesc: 'Sacola de papel personalizada – Ref. 11022', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11022.', measures: '22×29×10 cm',     material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11021.jpg'], colors: [], order: 21 },
    { id: 122, catId: 1, name: 'Sacola de Papel 11023', shortDesc: 'Sacola de papel personalizada – Ref. 11023', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11023.', measures: '25×5×27×25 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11022.jpg'], colors: [], order: 22 },
    { id: 123, catId: 1, name: 'Sacola de Papel 11024', shortDesc: 'Sacola de papel personalizada – Ref. 11024', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11024.', measures: '39,5×58,5×13 cm', material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11023.jpg'], colors: [], order: 23 },
    { id: 124, catId: 1, name: 'Sacola de Papel 11025', shortDesc: 'Sacola de papel personalizada – Ref. 11025', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11025.', measures: '23,5×31×11 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11024.jpg'], colors: [], order: 24 },
    { id: 125, catId: 1, name: 'Sacola de Papel 11027', shortDesc: 'Sacola de papel personalizada – Ref. 11027', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11027.', measures: '20x20x10 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11027.jpg'], colors: [], order: 25 },
    { id: 126, catId: 1, name: 'Sacola de Papel 11028', shortDesc: 'Sacola de papel personalizada – Ref. 11028', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11028.', measures: '13x13x6 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11028.jpg'], colors: [], order: 26 },
    { id: 127, catId: 1, name: 'Sacola de Papel 11030', shortDesc: 'Sacola de papel personalizada – Ref. 11030', desc: 'Sacola de papel personalizada com impressão da sua marca. Referência 11030.', measures: '25x32,5x13 cm',   material: 'Papel', minQty: 250, images: ['/assets/sacolas-papel/11030.jpg'], colors: [], order: 27 },

    // ── SACOLAS PLÁSTICAS (catId: 2) ─────────────────────────────
    { id: 201, catId: 2, name: 'Sacola Plástica Vazada',    shortDesc: 'Sacola plástica vazada personalizada em vários tamanhos',          desc: 'Sacola plástica vazada personalizada com a logomarca da sua empresa. Disponível nos tamanhos: 16×24 cm, 20×30 cm, 25×37 cm, 30×43 cm, 36×48 cm, 45×60 cm, 50×50 cm, 50×60 cm.',    measures: '16×24 / 20×30 / 25×37 / 30×43 / 36×48 / 45×60 / 50×50 / 50×60 cm', material: 'Plástico', minQty: 500, images: ['assets/sacola-plastic/vazada.jpg'], colors: [], order: 1 },
    { id: 202, catId: 2, name: 'Sacola Plástica Camiseta',  shortDesc: 'Sacola plástica tipo camiseta personalizada em vários tamanhos',   desc: 'Sacola plástica estilo camiseta personalizada com a logomarca da sua empresa. Disponível nos tamanhos: 24×34 cm, 30×40 cm, 40×50 cm, 44×59 cm, 50×68 cm, 60×75 cm, 70×90 cm, 90×100 cm.', measures: '24×34 / 30×40 / 40×50 / 44×59 / 50×68 / 60×75 / 70×90 / 90×100 cm', material: 'Plástico', minQty: 500, images: ['assets/sacola-plastic/camiseta.jpg'], colors: [], order: 2 },
    { id: 203, catId: 2, name: 'Sacola Plástica Alça Fita', shortDesc: 'Sacola plástica com alça de fita personalizada em vários tamanhos', desc: 'Sacola plástica com alça de fita personalizada com a logomarca da sua empresa. Disponível nos tamanhos: 27×30 cm, 30×35 cm, 40×40 cm, 45×55 cm, 50×70 cm.',                           measures: '27×30 / 30×35 / 40×40 / 45×55 / 50×70 cm',                          material: 'Plástico', minQty: 500, images: ['assets/sacola-plastic/alca-fita.jpg'], colors: [], order: 3 },

    // ── CANETAS (catId: 3) ────────────────────────────────────────
    { id: 301, catId: 3, name: 'Caneta Ref. 00001',   shortDesc: 'Caneta Ecológica Papelão',            desc: 'Caneta ecológica de papelão com detalhes coloridos. Possui carga esferográfica azul 1.0 mm, clip de madeira e ponteira plástica com relevo. Acionamento por clique. ',   measures: '', material: '', minQty: 50, images: ['assets/canetas/0001.jpg'], colors: [], order: 1  },
    { id: 302, catId: 3, name: 'Caneta Ref. 00002',   shortDesc: 'Caneta Ecológica Papelão',            desc: 'Caneta de papelão com detalhes plásticos, carga esferográfica azul 1.0 mm e acionamento por clique.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/0002.jpg'], colors: [], order: 2  },
    { id: 303, catId: 3, name: 'Caneta Ref. 3011 B',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe emborrachado, carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/3011B.jpg'], colors: [], order: 3  },
    { id: 304, catId: 3, name: 'Caneta Ref. 511',     shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe emborrachado, carga esferográfica azul 1.0 mm e acionamento por clique.',     measures: '', material: '', minQty: 50, images: ['assets/canetas/511.jpg'], colors: [], order: 4  },
    { id: 305, catId: 3, name: 'Caneta Ref. 3011 C',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe emborrachado, carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/3011C.jpg'], colors: [], order: 5  },
    { id: 306, catId: 3, name: 'Caneta Ref. 401T',    shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica translúcida com carga esferográfica azul 1.0 mm e acionamento por clique.',    measures: '', material: '', minQty: 50, images: ['assets/canetas/401T.jpg'], colors: [], order: 6  },
    { id: 307, catId: 3, name: 'Caneta Ref. 3011 D',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe emborrachado, carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/3011D.jpg'], colors: [], order: 7  },
    { id: 308, catId: 3, name: 'Caneta Ref. 3017 B',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/3017B.jpg'], colors: [], order: 8  },
    { id: 309, catId: 3, name: 'Caneta Ref. 3017',    shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',    measures: '', material: '', minQty: 50, images: ['assets/canetas/3017.jpg'], colors: [], order: 9  },
    { id: 310, catId: 3, name: 'Caneta Ref. 634',     shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe strass, carga esferográfica azul 1.0 e acionamento por clique.',     measures: '', material: '', minQty: 50, images: ['assets/canetas/634.jpg'], colors: [], order: 10 },
    { id: 311, catId: 3, name: 'Caneta Ref. 1099 B',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/1099B.jpg'], colors: [], order: 11 },
    { id: 312, catId: 3, name: 'Caneta Ref. 1099 C',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/1099C.jpg'], colors: [], order: 12 },
    { id: 313, catId: 3, name: 'Caneta Ref. 807',     shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',     measures: '', material: '', minQty: 50, images: ['assets/canetas/807.jpg'], colors: [], order: 13 },
    { id: 314, catId: 3, name: 'Caneta Ref. 992',     shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul e acionamento por clique.',     measures: '', material: '', minQty: 50, images: ['assets/canetas/992.jpg'], colors: [], order: 14 },
    { id: 315, catId: 3, name: 'Caneta Ref. 1098 L',  shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',  measures: '', material: '', minQty: 50, images: ['assets/canetas/1098L.jpg'], colors: [], order: 15 },
    { id: 316, catId: 3, name: 'Caneta Ref. 8578',    shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com carga esferográfica azul 1.0 mm e acionamento por clique.',    measures: '', material: '', minQty: 50, images: ['assets/canetas/8578.jpg'], colors: [], order: 16 },
    { id: 317, catId: 3, name: 'Caneta Ref. 5073',    shortDesc: 'Caneta Plástica Touch',               desc: 'aneta plástica com touch screen e detalhes em cristal, acionamento por rotação e carga esferográfica azul 1mm.',    measures: '', material: '', minQty: 50, images: ['assets/canetas/5073.jpg'], colors: [], order: 17 },
    { id: 318, catId: 3, name: 'Caneta Ref. 05000',   shortDesc: 'Caneta Metal Touch',                  desc: 'Caneta personalizada com impressão da sua marca. Referência 05000.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/05000.jpg'], colors: [], order: 18 },
    { id: 319, catId: 3, name: 'Caneta Ref. 05011',   shortDesc: 'Caneta Metal Touch',                  desc: 'Caneta metálica touchscreen com acabamento similar à borracha, acionamento por clique e carga esferográfica azul 1.0mm.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/05011.jpg'], colors: [], order: 19 },
    { id: 320, catId: 3, name: 'Caneta Ref. 05017',   shortDesc: 'Caneta Metal Touch',                  desc: 'Caneta metálica touchscreen com acabamento similar à borracha e parte inferior texturizada, acionamento por clique e carga esferográfica azul 1.0mm.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/05017.jpg'], colors: [], order: 20 },
    { id: 321, catId: 3, name: 'Caneta Ref. ER-143 B',shortDesc: 'Caneta Metal',                        desc: 'Caneta metálica com carga esferográfica azul 1.0mm e acionamento por clique.',measures: '', material: '', minQty: 50, images: ['assets/canetas/ER143.jpg'], colors: [], order: 21 },
    { id: 322, catId: 3, name: 'Caneta Ref. 18526',   shortDesc: 'Caneta Plástica',                     desc: 'Caneta plástica com detalhe emborrachado, carga esferográfica azul e acionamento por clique.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/18526.jpg'], colors: [], order: 22 },
    { id: 323, catId: 3, name: 'Caneta Ref. 14673',   shortDesc: 'Caneta personalizada – Ref. 14673',   desc: 'Caneta personalizada com impressão da sua marca. Referência 14673.',   measures: '', material: '', minQty: 50, images: [], colors: [], order: 23 },
    { id: 324, catId: 3, name: 'Caneta Ref. 00016',   shortDesc: 'Caneta Ecológica com Suporte para Celular',   desc: 'Caneta de papelão com suporte para celular, carga esferográfica azul 0,8 mm e acionamento por clique.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/00016.jpg'], colors: [], order: 24 },
    { id: 325, catId: 3, name: 'Caneta Ref. 12172',   shortDesc: 'Caneta Ecológica de Bambu',           desc: 'Caneta de bambu com detalhes plásticos, carga esferográfica azul 1.0 mm e acionamento por clique.',   measures: '', material: '', minQty: 50, images: ['assets/canetas/12172.jpg'], colors: [], order: 25 },

    // ── CHAVEIROS (catId: 4) ──────────────────────────────────────
    ...Array.from({ length: 45 }, (_, i) => ({
      id: 400 + i + 1,
      catId: 4,
      name: `Chaveiro Ref. ${String(i + 1).padStart(2, '0')}`,
      shortDesc: `Chaveiro personalizado – Ref. ${String(i + 1).padStart(2, '0')}`,
      desc: `Chaveiro personalizado com gravação da sua marca. Referência ${String(i + 1).padStart(2, '0')}.`,
      measures: '', material: '', minQty: 50, images: [], colors: [], order: i + 1,
    })),

    // ── FITAS DE CETIM (catId: 5) ────────────────────────────────
    { id: 501, catId: 5, name: 'Fita de Cetim 2 cm', shortDesc: 'Rolo de fita de cetim 2 cm × 50 m personalizada', desc: 'Rolo de fita de cetim personalizada com a logomarca da sua empresa. Largura de 2 cm e comprimento de 50 metros por rolo. Ideal para embalagens, embrulhos e decoração.', measures: '2 cm largura × 50 m comprimento', material: 'Cetim poliéster', minQty: 0, images: ['/assets/fitas-cetim/fita2cm.jpg'], colors: [], order: 1 },
    { id: 502, catId: 5, name: 'Fita de Cetim 3 cm', shortDesc: 'Rolo de fita de cetim 3 cm × 50 m personalizada', desc: 'Rolo de fita de cetim personalizada com a logomarca da sua empresa. Largura de 3 cm e comprimento de 50 metros por rolo. Ideal para embalagens, embrulhos e decoração.', measures: '3 cm largura × 50 m comprimento', material: 'Cetim poliéster', minQty: 0, images: ['/assets/fitas-cetim/fita3cm.jpg'], colors: [], order: 2 },
  ],
  colors: [],
};

// ─── ROTEAMENTO ──────────────────────────────────────────────────
let currentPage = 'home';
let currentCatId = null;
let currentProdId = null;
let history = [];

function showPage(page, push = true) {
  if (push && currentPage !== page) history.push(currentPage);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  currentPage = page;
  updateNav();
  window.scrollTo(0, 0);
}

function updateNav() {
  const back = document.getElementById('navBackBtn');
  const bc   = document.getElementById('breadcrumbWrap');
  if (currentPage === 'home') {
    back.classList.add('hidden');
    bc.classList.add('hidden');
  } else if (currentPage === 'category') {
    back.classList.remove('hidden');
    bc.classList.remove('hidden');
    document.getElementById('navBackLabel').textContent = 'Início';
    const cat = data.categories.find(c => c.id === currentCatId);
    bc.innerHTML = `<span onclick="goHome()">Início</span><span class="sep">›</span><span class="current">${cat ? cat.name : ''}</span>`;
  } else if (currentPage === 'product') {
    back.classList.remove('hidden');
    bc.classList.remove('hidden');
    const prod = data.products.find(p => p.id === currentProdId);
    const cat  = prod ? data.categories.find(c => c.id === prod.catId) : null;
    document.getElementById('navBackLabel').textContent = cat ? cat.name : 'Voltar';
    bc.innerHTML = `<span onclick="goHome()">Início</span><span class="sep">›</span><span onclick="showCategory(${cat ? cat.id : ''})">${cat ? cat.name : ''}</span><span class="sep">›</span><span class="current">${prod ? prod.name : ''}</span>`;
  }
}

function goBack() {
  if (currentPage === 'product' && currentCatId) {
    showCategory(currentCatId);
  } else {
    goHome();
  }
}

function goHome() {
  history = [];
  currentCatId = null;
  currentProdId = null;
  renderCategories();
  showPage('home', false);
}

// ─── RENDER: HOME ────────────────────────────────────────────────
function renderCategories() {
  const grid   = document.getElementById('categoryGrid');
  const sorted = [...data.categories].sort((a, b) => a.order - b.order);
  if (!sorted.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>
      <h3>Nenhuma categoria disponível</h3>
      <p>Em breve novos produtos!</p>
    </div>`;
    return;
  }
  grid.innerHTML = sorted.map(cat => {
    const count  = data.products.filter(p => p.catId === cat.id).length;
    const imgHtml = cat.img
      ? `<img src="${cat.img}" alt="${cat.name}" class="cat-img" onerror="catImgError(this)">`
      : `<div class="cat-img-placeholder">${catPlaceholderSVG(cat.icon)}</div>`;
    return `<div class="category-card fade-in" onclick="showCategory(${cat.id})">
      <div class="cat-img-wrap">${imgHtml}</div>
      <div class="cat-info">
        <h3>${cat.name}</h3>
        <div class="cat-meta">
          <span class="cat-count">${count} ${count === 1 ? 'produto' : 'produtos'}</span>
          <div class="cat-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function catPlaceholderSVG(icon = '') {
  if (icon && icon.length <= 4) {
    return `<span style="font-size:3.5rem;line-height:1">${icon}</span>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>`;
}

// ─── RENDER: CATEGORIA ───────────────────────────────────────────
function showCategory(catId) {
  currentCatId = catId;
  const cat = data.categories.find(c => c.id === catId);
  if (!cat) return;
  document.getElementById('categoryHeader').innerHTML = `<h2>${cat.name}</h2><p>Clique em um produto para ver detalhes e solicitar orçamento</p>`;
  document.getElementById('productSearch').value = '';
  renderProductGrid(catId);
  showPage('category');
}

function renderProductGrid(catId, query = '') {
  const grid    = document.getElementById('productGrid');
  const noEl    = document.getElementById('noProducts');
  const countEl = document.getElementById('resultsCount');
  let prods = data.products.filter(p => p.catId === catId).sort((a, b) => a.order - b.order);
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q));
  }
  countEl.textContent = prods.length ? `${prods.length} produto${prods.length !== 1 ? 's' : ''}` : '';
  if (!prods.length) {
    grid.innerHTML = '';
    noEl.classList.remove('hidden');
    return;
  }
  noEl.classList.add('hidden');
  grid.innerHTML = prods.map(p => `
    <div class="product-card fade-in" onclick="showProduct(${p.id})">
      <div class="prod-img-wrap">
        ${p.images && p.images[0]
          ? `<img src="${p.images[0]}" alt="${p.name}" class="prod-img" onerror="prodImgError(this)">`
          : `<div class="prod-img-placeholder">${prodPlaceholderSVG()}</div>`}
      </div>
      <div class="prod-info">
        <h3>${p.name}</h3>
        <p class="prod-desc">${p.shortDesc}</p>
        <div class="prod-footer">
          ${p.minQty ? `<span class="min-qty">Mín: ${p.minQty} un</span>` : '<span></span>'}
          <button class="btn btn-primary btn-sm">Ver Detalhes</button>
        </div>
      </div>
    </div>`).join('');
}

function filterProducts() {
  const q = document.getElementById('productSearch').value;
  renderProductGrid(currentCatId, q);
}

function prodPlaceholderSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
}

function catImgError(img) {
  const wrap = img.parentNode;
  const cat  = data.categories.find(c => c.img === img.src || img.src.endsWith(c.img));
  wrap.innerHTML = `<div class="cat-img-placeholder">${catPlaceholderSVG(cat ? cat.icon : '')}</div>`;
}

function prodImgError(img) {
  img.parentNode.innerHTML = `<div class="prod-img-placeholder">${prodPlaceholderSVG()}</div>`;
}

// ─── RENDER: PRODUTO ─────────────────────────────────────────────
function showProduct(prodId) {
  currentProdId = prodId;
  const prod = data.products.find(p => p.id === prodId);
  if (!prod) return;
  const cat   = data.categories.find(c => c.id === prod.catId);
  const waMsg = encodeURIComponent(`Olá, gostaria de solicitar orçamento para o produto ${prod.name}.`);
  const waUrl = `https://wa.me/5599991284929?text=${waMsg}`;

  // Galeria
  const imgs = prod.images && prod.images.length ? prod.images : [];
  let galleryHtml = `<div class="gallery-main" id="galleryMain">`;
  galleryHtml += imgs.length
    ? `<img src="${imgs[0]}" alt="${prod.name}" id="mainImg" onerror="prodImgError(this)">`
    : `<div class="gallery-main-placeholder">${prodPlaceholderSVG()}</div>`;
  galleryHtml += `</div>`;
  if (imgs.length > 1) {
    galleryHtml += `<div class="gallery-thumbs">${imgs.map((img, i) =>
      `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="setMainImg('${img}',this)"><img src="${img}" alt=""></div>`
    ).join('')}</div>`;
  }

  // Cores — oculto para Sacolas de Papel (catId 1)
  const prodColors = (prod.colors || []).map(cid => data.colors.find(c => c.id === cid)).filter(Boolean);
  const colorsHtml = (prodColors.length && prod.catId !== 1) ? `
    <div class="colors-section">
      <h3>Cores Disponíveis</h3>
      <div class="colors-list">
        ${prodColors.map(c => `
          <div class="color-chip ${c.available ? '' : 'unavailable'}" title="${c.hex}">
            <div class="color-dot" style="background:${c.hex};${c.hex.toLowerCase() === '#ffffff' ? 'border-color:#ccc' : ''}"></div>
            <span class="color-name">${c.name}</span>
            <span style="font-size:0.7em;color:var(--text-muted)">${c.hex}</span>
          </div>`).join('')}
      </div>
    </div>` : '';

  document.getElementById('productDetailContent').innerHTML = `
    <div class="product-detail-inner fade-in">
      <div class="gallery">${galleryHtml}</div>
      <div class="product-info">
        <h1>${prod.name}</h1>
        <div class="product-meta-chips">
          ${cat    ? `<span class="chip chip-green">${cat.name}</span>` : ''}
          ${prod.minQty  ? `<span class="chip chip-blue">Mín. ${prod.minQty} unidades</span>` : ''}
          ${prod.material ? `<span class="chip chip-gray">${prod.material}</span>` : ''}
        </div>
        <p class="product-desc">${prod.desc || prod.shortDesc}</p>
        <div class="specs-grid">
          ${prod.measures  ? `<div class="spec-item"><div class="spec-label">Medidas</div><div class="spec-value">${prod.measures}</div></div>` : ''}
          ${prod.material  ? `<div class="spec-item"><div class="spec-label">Material</div><div class="spec-value">${prod.material}</div></div>` : ''}
          ${prod.minQty    ? `<div class="spec-item"><div class="spec-label">Qtd. Mínima</div><div class="spec-value">${prod.minQty} unidades</div></div>` : ''}
          ${cat            ? `<div class="spec-item"><div class="spec-label">Categoria</div><div class="spec-value">${cat.name}</div></div>` : ''}
        </div>
        ${colorsHtml}
        <div class="cta-block">
          <a href="${waUrl}" target="_blank" class="btn btn-whatsapp btn-lg">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.845L.057 23.454a.5.5 0 00.595.633l5.77-1.507A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.5-5.178-1.375l-.37-.214-3.826 1 1.027-3.71-.236-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Solicitar Orçamento
          </a>
          <button class="btn btn-secondary" onclick="showCategory(${prod.catId})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Voltar à Categoria
          </button>
        </div>
      </div>
    </div>`;
  showPage('product');
}

function setMainImg(url, thumbEl) {
  document.getElementById('mainImg').src = url;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

// ─── TEMA ─────────────────────────────────────────────────────────
function toggleTheme() {
  const html   = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  document.getElementById('iconSun').style.display  = isDark ? 'block' : 'none';
  document.getElementById('iconMoon').style.display = isDark ? 'none'  : 'block';
  localStorage.setItem('bb_theme', html.dataset.theme);
}

(function () {
  const t = localStorage.getItem('bb_theme') || 'light';
  document.documentElement.dataset.theme = t;
  if (t === 'dark') {
    document.getElementById('iconSun').style.display  = 'none';
    document.getElementById('iconMoon').style.display = 'block';
  }
})();

// ─── INIT ─────────────────────────────────────────────────────────
renderCategories();
