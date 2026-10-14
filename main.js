/* ============================================================
   CONFIGURACIÓN — edita aquí para adaptar la página a un cliente
   ============================================================ */
const CONFIG = {
  brand: { logo: "AQUÍ IRÍA TU LOGO", name: "Aquí iría tu nombre" },
  email: "correo@tudominio.com",
  address: "Av. Principal #000, Ciudad, Estado",
  hours: ["Lunes a viernes 8:00–18:00", "Sábado 9:00–14:00"],
  freeShippingFrom: 1500,              // monto para envío gratis (0 = ocultar barra)
  whatsapp: "520000000000",            // número con lada de país, sin + ni espacios (PLACEHOLDER)
  whatsappDisplay: "+52 000 000 0000",
  phoneDisplay: "(000) 000 0000",
  currency: "$",
  // Endpoint opcional para recibir cotizaciones (Formspree, Make, etc.). Vacío = abre WhatsApp.
  formEndpoint: "",
  social: [
    { icon: "facebook", url: "#", label: "Facebook" },
    { icon: "instagram", url: "#", label: "Instagram" },
    { icon: "tiktok", url: "#", label: "TikTok" },
    { icon: "youtube", url: "#", label: "YouTube" }
  ]
};

const CATEGORIES = [
  { id: "motor", name: "Refacciones para motor", desc: "Pistones, juntas, bombas y más.", icon: "engine" },
  { id: "frenos", name: "Frenos", desc: "Balatas, discos y líquido.", icon: "brake" },
  { id: "filtros", name: "Filtros", desc: "Aceite, aire, gasolina y cabina.", icon: "filter" },
  { id: "suspension", name: "Suspensión", desc: "Amortiguadores y rotulas.", icon: "spring" },
  { id: "direccion", name: "Dirección", desc: "Cremalleras, terminales y bombas.", icon: "wheel" },
  { id: "bandas", name: "Bandas y tensores", desc: "Distribución y accesorios.", icon: "belt" },
  { id: "lubricantes", name: "Lubricantes y químicos", desc: "Aceites, aditivos y limpiadores.", icon: "oil" },
  { id: "baterias", name: "Baterías", desc: "Energía confiable para arrancar.", icon: "battery" },
  { id: "electrico", name: "Sistema eléctrico", desc: "Bujías, bobinas y sensores.", icon: "bolt" },
  { id: "enfriamiento", name: "Enfriamiento", desc: "Radiadores, bombas y termostatos.", icon: "therm" },
  { id: "embrague", name: "Embrague", desc: "Kits, collarines y volantes.", icon: "gear" },
  { id: "accesorios", name: "Accesorios", desc: "Tapetes, escobillas y más.", icon: "spark" }
];

// anios: [desde, hasta] · universal:true = compatible con cualquier filtro de vehículo
const PRODUCTS = [
  { name: "Kit de balatas delanteras", cat: "frenos", compat: "Compatible con sedanes y hatchbacks compactos 2015–2023", price: 649, old: 799, stock: "Disponible", brands: ["Marca A","Marca B"], models: ["Modelo X","Modelo Y"], years: [2015,2023], engines: ["1.6L","2.0L"], icon: "brake" },
  { name: "Filtro de aceite", cat: "filtros", compat: "Compatible con múltiples motores 1.4L – 2.0L", price: 129, stock: "Disponible", universal: true, icon: "filter" },
  { name: "Batería automotriz 12V", cat: "baterias", compat: "Grupo 35 · 600 CCA · Garantía incluida", price: 1890, old: 2150, stock: "Disponible", universal: true, icon: "battery" },
  { name: "Amortiguador delantero", cat: "suspension", compat: "Compatible con SUV compacta 2012–2020", price: 1120, stock: "Últimas piezas", low: true, brands: ["Marca B","Marca C"], models: ["Modelo Z"], years: [2012,2020], engines: ["2.0L","1.4L Turbo"], icon: "spring" },
  { name: "Kit de distribución", cat: "bandas", compat: "Incluye banda, tensor y poleas · Motor 1.6L", price: 1480, old: 1750, stock: "Disponible", brands: ["Marca A","Marca C"], models: ["Modelo X","Modelo Z"], years: [2010,2019], engines: ["1.6L"], icon: "belt" },
  { name: "Disco de freno ventilado", cat: "frenos", compat: "Compatible con sedanes medianos 2014–2022", price: 890, stock: "Disponible", brands: ["Marca A","Marca B"], models: ["Modelo Y"], years: [2014,2022], engines: ["2.0L","1.4L Turbo"], icon: "disc" },
  { name: "Aceite sintético 5W-30 (4 L)", cat: "lubricantes", compat: "Para motores a gasolina modernos · Norma API SP", price: 589, old: 680, stock: "Disponible", universal: true, icon: "oil" },
  { name: "Bujías de iridio (juego de 4)", cat: "electrico", compat: "Compatible con motores 1.6L y 2.0L 2012–2022", price: 760, stock: "Disponible", brands: ["Marca A","Marca B","Marca C"], models: ["Modelo X","Modelo Y"], years: [2012,2022], engines: ["1.6L","2.0L"], icon: "bolt" },
  { name: "Radiador de aluminio", cat: "enfriamiento", compat: "Compatible con sedán mediano 2013–2020", price: 2350, old: 2690, stock: "Bajo pedido", low: true, brands: ["Marca B"], models: ["Modelo Y"], years: [2013,2020], engines: ["2.0L","2.5L"], icon: "therm" },
  { name: "Kit de embrague completo", cat: "embrague", compat: "Disco, prensa y collarín · Transmisión manual", price: 3190, stock: "Disponible", brands: ["Marca A","Marca C"], models: ["Modelo X","Modelo Z"], years: [2011,2019], engines: ["1.6L","2.0L"], icon: "gear" },
  { name: "Terminal de dirección", cat: "direccion", compat: "Compatible con hatchbacks y sedanes compactos 2014–2021", price: 310, stock: "Disponible", brands: ["Marca A","Marca B"], models: ["Modelo X","Modelo Y"], years: [2014,2021], engines: ["1.6L","2.0L"], icon: "wheel" },
  { name: "Escobillas limpiaparabrisas (par)", cat: "accesorios", compat: "Medidas universales 22 y 18 pulgadas", price: 245, stock: "Disponible", universal: true, icon: "spark" }
];

const SERVICE_DETAILS = {
  "Diagnóstico automotriz": ["Revisión general del vehículo para identificar fallas.", "Desde $350"],
  "Mantenimiento preventivo": ["Revisión de niveles, frenos, suspensión y desgaste.", "Desde $890"],
  "Cambio de aceite": ["Aceite y filtro según especificación de tu motor.", "Desde $450"],
  "Frenos": ["Cambio de balatas, rectificado y purga de líquido.", "Desde $600"],
  "Suspensión": ["Amortiguadores, rotulas y alineación.", "Desde $750"],
  "Afinación": ["Bujías, filtros y ajuste para mejor desempeño.", "Desde $1,100"],
  "Diagnóstico electrónico": ["Lectura de códigos de falla con escáner.", "Desde $400"],
  "Sistema de enfriamiento": ["Revisión de radiador, mangueras, bomba y anticongelante.", "Desde $500"],
  "Sistema eléctrico": ["Batería, alternador, marcha y luces.", "Desde $350"],
  "Reparaciones mecánicas": ["Motor, transmisión y reparaciones mayores.", "Cotización"]
};

const SERVICES = [
  ["Diagnóstico automotriz", "Detectamos la falla a tiempo.", "search"],
  ["Mantenimiento preventivo", "Evita reparaciones costosas.", "shield"],
  ["Cambio de aceite", "Aceite y filtro correctos.", "oil"],
  ["Frenos", "Revisión y cambio seguro.", "brake"],
  ["Suspensión", "Confort y estabilidad.", "spring"],
  ["Afinación", "Más potencia, menos consumo.", "wrench"],
  ["Diagnóstico electrónico", "Escáner de última generación.", "chip"],
  ["Sistema de enfriamiento", "Evita el sobrecalentamiento.", "therm"],
  ["Sistema eléctrico", "Batería, alternador y luces.", "bolt"],
  ["Reparaciones mecánicas", "Motor, caja y más.", "engine"]
];

const TESTIMONIALS = [
  { text: "Encontré exactamente la pieza que necesitaba y me ayudaron a confirmar la compatibilidad antes de comprar.", who: "Cliente" },
  { text: "Excelente atención y muy buena variedad de refacciones.", who: "Cliente" },
  { text: "Me orientaron con la pieza correcta y la entrega fue rápida.", who: "Cliente" }
];

const FILTER_OPTIONS = {
  brand: ["Marca A", "Marca B", "Marca C"],
  model: ["Modelo X", "Modelo Y", "Modelo Z"],
  year: Array.from({ length: 15 }, (_, i) => String(2025 - i)),
  engine: ["1.4L Turbo", "1.6L", "2.0L", "2.5L", "Diésel"]
};

/* ============================================================
   ICONOS (SVG de trazo, 24x24)
   ============================================================ */
const P = {
  logo: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a1 1 0 001 .6h9.8a1 1 0 001-.8L21 7H6"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  tag: '<path d="M3 12V4a1 1 0 011-1h8l9 9-9 9z"/><circle cx="8" cy="8" r="1.5"/>',
  headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1-2 2-5 2"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  engine: '<path d="M3 10h2V8h3V6h6v2h2l2 2h3v6h-3l-2 2H8l-2-2H3z"/><path d="M10 12h4"/>',
  brake: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="5.5" r=".8"/><circle cx="12" cy="18.5" r=".8"/><circle cx="5.5" cy="12" r=".8"/><circle cx="18.5" cy="12" r=".8"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6 6l2.8 2.8M15.2 15.2L18 18M6 18l2.8-2.8M15.2 8.8L18 6"/>',
  filter: '<path d="M4 4h16l-6 8v7l-4 2v-9z"/>',
  spring: '<path d="M12 2v3M12 19v3M7 5h10M7 9l10 2M7 13l10 2M7 17l10 2"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 14v7M10.3 11L3.5 9.5M13.7 11l6.8-1.5"/>',
  belt: '<circle cx="7" cy="12" r="4"/><circle cx="18" cy="8" r="3"/><circle cx="18" cy="17" r="3"/><path d="M7 8l11-3M7 16l11 4M21 8v9"/>',
  oil: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.7 2.7 0 002.5 2"/>',
  battery: '<rect x="2" y="7" width="18" height="12" rx="2"/><path d="M6 7V4h3v3M15 7V4h3v3M8 13h4M10 11v4M15 13h2"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  therm: '<path d="M10 14V5a2 2 0 014 0v9a4 4 0 11-4 0z"/><path d="M12 9v7"/>',
  gear: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2l1.5 3a7 7 0 012.3 1l3.2-1 1.5 2.6-2.3 2.3a7 7 0 010 2.2l2.3 2.3-1.5 2.6-3.2-1a7 7 0 01-2.3 1L12 22l-1.5-3a7 7 0 01-2.3-1l-3.2 1-1.5-2.6 2.3-2.3a7 7 0 010-2.2L3.5 7.6 5 5l3.2 1a7 7 0 012.3-1z"/>',
  spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 005 5L21 13l-8 8a2.8 2.8 0 01-4-4l8-8zM17 3l-3 3 4 4 3-3"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor"/>',
  whatsapp: '<path d="M3 21l1.6-5.1A8.5 8.5 0 1112 20.5a8.5 8.5 0 01-4.1-1z"/><path d="M9 8.5c0 3.5 3 6.5 6.500 6.500l1.200-1.500-2.300-1.200-1 .8a4 4 0 01-2-2l.8-1-1.200-2.300z" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 11-3.500-3.500M14 3c.3 2.500 2 4.500 5 4.700"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9.500v5l4.500-2.500z" fill="currentColor"/>'
};
const svg = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;
// Logo genérico: engrane + silueta de auto
P.logo = '<circle cx="12" cy="9" r="3"/><path d="M12 2v2M12 14v2M5 9h2M17 9h2M7 4l1.400 1.400M15.600 12.600L17 14M7 14l1.400-1.400M15.600 5.400L17 4"/><path d="M2 21v-2.500l2-3.500h16l2 3.500V21M2 21h20M6 21v1M18 21v1"/>';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = (n) => CONFIG.currency + n.toLocaleString("es-MX");
const waUrl = (msg = "Hola, necesito ayuda con una refacción.") => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || id;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Render ---------- */
function renderIcons(root = document) {
  $$("[data-icon]", root).forEach((el) => { if (!el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", svg(el.dataset.icon)); });
}

function renderCategories() {
  $("#catGrid").innerHTML = CATEGORIES.map((c) => `
    <button class="cat-card reveal" data-cat="${c.id}" aria-label="Ver ${c.name}">
      <div class="cat-card__img" data-icon="${c.icon}"></div>
      <div class="cat-card__body"><div><h3>${c.name}</h3><p>${c.desc}</p></div><span class="cat-card__arrow" data-icon="arrow"></span></div>
    </button>`).join("");
}

function renderProducts(list) {
  $("#prodGrid").innerHTML = list.map((p) => {
    const i = PRODUCTS.indexOf(p);
    const off = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    return `
    <article class="prod reveal">
      <div class="prod__img">
        <span class="badge ${p.low ? "badge--low" : ""}">${p.stock}</span>
        ${off ? `<span class="badge badge--off">-${off}%</span>` : ""}
        <span data-icon="${p.icon}"></span>
        <div class="prod__quick"><button data-quick="${i}">Vista rápida</button><button data-wa-prod="${i}">Pedir por WhatsApp</button></div>
      </div>
      <div class="prod__body">
        <span class="prod__cat">${catName(p.cat)}</span>
        <h3 class="link" data-quick="${i}">${p.name}</h3>
        <p class="prod__compat"><span data-icon="check"></span>${p.compat}</p>
        <div class="prod__price"><span class="price">${money(p.price)}</span>${p.old ? `<span class="price-old">${money(p.old)}</span>` : ""}</div>
        <div class="prod__btns">
          <button class="btn btn--primary" data-add="${i}">Agregar al carrito</button>
          <button class="btn btn--outline" data-wa-prod="${i}">Consultar</button>
        </div>
      </div>
    </article>`;
  }).join("");
  renderIcons($("#prodGrid"));
  observeReveal();
}

function renderServices() {
  $("#srvGrid").innerHTML = SERVICES.map(([n, d, ic]) => `
    <button class="srv reveal" data-srv="${n}"><div class="srv__ic" data-icon="${ic}"></div><h3>${n}</h3><p>${d}</p></button>`).join("");
}

function renderTestimonials() {
  const stars = Array.from({ length: 5 }, () => svg("star")).join("");
  $("#testiGrid").innerHTML = TESTIMONIALS.map((t) => `
    <article class="testi reveal"><div class="stars" aria-label="5 de 5 estrellas">${stars}</div><p>${t.text}</p>
    <footer><span class="avatar" data-icon="user"></span>— ${t.who}</footer></article>`).join("");
}

function renderSocial() {
  $$("[data-social]").forEach((el) => {
    el.innerHTML = CONFIG.social.map((s) => `<a href="${s.url}" aria-label="${s.label}" data-icon="${s.icon}" target="_blank" rel="noopener"></a>`).join("");
  });
}

function fillSelects() {
  const fill = (id, arr) => { $(id).insertAdjacentHTML("beforeend", arr.map((o) => `<option value="${o}">${o}</option>`).join("")); };
  fill("#fCat", []);
  $("#fCat").insertAdjacentHTML("beforeend", CATEGORIES.map((c) => `<option value="${c.id}">${c.name}</option>`).join(""));
  fill("#fBrand", FILTER_OPTIONS.brand); fill("#fModel", FILTER_OPTIONS.model);
  fill("#fYear", FILTER_OPTIONS.year); fill("#fEngine", FILTER_OPTIONS.engine);
}

/* ---------- Search ---------- */
function applyFilters(scroll) {
  const q = $("#q").value.trim().toLowerCase();
  const cat = $("#fCat").value, brand = $("#fBrand").value, model = $("#fModel").value, year = +$("#fYear").value, engine = $("#fEngine").value;
  const active = q || cat || brand || model || year || engine;
  const res = PRODUCTS.filter((p) => {
    const hay = `${p.name} ${catName(p.cat)} ${p.compat} ${(p.brands || []).join(" ")} ${(p.models || []).join(" ")}`.toLowerCase();
    if (q && !q.split(/\s+/).every((w) => hay.includes(w))) return false;
    if (cat && p.cat !== cat) return false;
    if (p.universal) return true;
    if (brand && !(p.brands || []).includes(brand)) return false;
    if (model && !(p.models || []).includes(model)) return false;
    if (year && !(p.years && year >= p.years[0] && year <= p.years[1])) return false;
    if (engine && !(p.engines || []).includes(engine)) return false;
    return true;
  });
  if (shop.sort === "asc") res.sort((a, b) => a.price - b.price);
  if (shop.sort === "desc") res.sort((a, b) => b.price - a.price);
  const paged = !active && !shop.expanded && res.length > shop.pageSize;
  renderProducts(paged ? res.slice(0, shop.pageSize) : res);
  $("#moreWrap").hidden = !paged;
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.chip === cat));
  $("#emptyMsg").hidden = res.length > 0;
  $("#clearFilters").hidden = !active;
  $("#resultInfo").textContent = active ? `${res.length} resultado(s) para tu búsqueda.` : "Productos de demostración, precios y existencias editables.";
  if (scroll) $("#refacciones").scrollIntoView({ behavior: "smooth" });
}

/* ---------- Cart ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("cartItems")) || []; } catch (e) {}
cart = cart.filter((c) => PRODUCTS[c.i]);
const saveCart = () => { try { localStorage.setItem("cartItems", JSON.stringify(cart)); } catch (e) {} };
const cartQty = () => cart.reduce((s, c) => s + c.qty, 0);
const cartTotal = () => cart.reduce((s, c) => s + PRODUCTS[c.i].price * c.qty, 0);

function addToCart(i, qty = 1) {
  const it = cart.find((c) => c.i === i);
  if (it) it.qty += qty; else cart.push({ i, qty });
  updateCartUI();
  toast(`Agregado: ${PRODUCTS[i].name}`);
  track("add_to_cart", { item: PRODUCTS[i].name, value: PRODUCTS[i].price * qty });
  const b = $("#cartBtn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
}
const esc = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const coGet = (k) => { try { return localStorage.getItem("co_" + k) || ""; } catch (e) { return ""; } };
const coSet = (k, v) => { try { localStorage.setItem("co_" + k, v); } catch (e) {} };
function shipBar() {
  const goal = CONFIG.freeShippingFrom; if (!goal) return "";
  const t = cartTotal(), ok = t >= goal, pct = Math.min(100, Math.round((t / goal) * 100));
  return `<div class="ship ${ok ? "ship--ok" : ""}"><p>${ok ? "¡Tu pedido califica para envío gratis!" : `Te faltan ${money(goal - t)} para envío gratis`}</p><div class="ship__bar"><i style="width:${pct}%"></i></div></div>`;
}
function track(name, data) { try { (window.dataLayer = window.dataLayer || []).push({ event: name, ...data }); } catch (e) {} }
function updateCartUI() {
  saveCart();
  $("#cartCount").textContent = cartQty();
  const body = $("#drawerBody"), foot = $("#drawerFoot");
  if (!cart.length) {
    body.innerHTML = `<div class="drawer__empty"><span data-icon="cart"></span><p>Tu carrito está vacío.</p><button class="btn btn--primary" data-close data-goto="#refacciones">Ver refacciones</button></div>`;
    foot.innerHTML = "";
  } else {
    body.innerHTML = cart.map((c) => { const p = PRODUCTS[c.i]; return `
      <div class="ci">
        <div class="ci__img" data-icon="${p.icon}"></div>
        <div class="ci__info"><b>${p.name}</b><span>${catName(p.cat)}</span><span class="price ci__price">${money(p.price)}</span>
          <div class="qty"><button data-dec="${c.i}" aria-label="Menos">−</button><span>${c.qty}</span><button data-inc="${c.i}" aria-label="Más">+</button></div></div>
        <button class="ci__rm" data-rm="${c.i}" aria-label="Quitar">&times;</button>
      </div>`; }).join("");
    foot.innerHTML = `
      <div class="drawer__total"><span>Total estimado</span><b>${money(cartTotal())}</b></div>
      ${shipBar()}
      <div class="co" id="co">
        <input name="co_nombre" placeholder="Tu nombre *" autocomplete="name" value="${esc(coGet("nombre"))}">
        <input name="co_tel" type="tel" placeholder="Teléfono *" autocomplete="tel" value="${esc(coGet("tel"))}">
        <div class="co__row"><select name="co_entrega" aria-label="Entrega"><option value="Recoger en sucursal">Recoger en sucursal</option><option value="Envío a domicilio">Envío a domicilio</option></select>
        <input name="co_cp" placeholder="C.P. / colonia" autocomplete="postal-code" value="${esc(coGet("cp"))}"></div>
      </div>
      <p class="drawer__note">Precios de demostración. Confirmaremos existencias, costo de envío y forma de pago por WhatsApp.</p>
      <button class="btn btn--wa btn--lg" id="checkoutWa"><span data-icon="whatsapp"></span>Finalizar pedido por WhatsApp</button>
      <button class="btn btn--outline" id="emptyCart">Vaciar carrito</button>`;
  }
  renderIcons($("#drawer"));
}

/* ---------- Drawer / Modal ---------- */
let lastFocus = null;
document.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const box = !$("#modal").hidden ? $("#modal") : $("#drawer").classList.contains("open") ? $("#drawer") : null;
  if (!box) return;
  const f = $$("a[href],button:not([disabled]),input,select,textarea,summary,[tabindex]:not([tabindex='-1'])", box).filter((x) => x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
function lock(on) {
  if (on && document.body.style.overflow !== "hidden") lastFocus = document.activeElement;
  if (!on && lastFocus && lastFocus.focus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} } document.body.style.overflow = on ? "hidden" : ""; $("#overlay").hidden = !on; }
function openCart() { closeModal(true); $("#drawer").classList.add("open"); $("#drawer").setAttribute("aria-hidden", "false"); lock(true); }
function closeCart() { $("#drawer").classList.remove("open"); $("#drawer").setAttribute("aria-hidden", "true"); if ($("#modal").hidden) lock(false); }
function openModal(html) {
  closeCart();
  $("#modalBody").innerHTML = html; renderIcons($("#modalBody"));
  const m = $("#modal"); m.hidden = false; setTimeout(() => m.classList.add("open"), 10);
  m.setAttribute("aria-hidden", "false"); lock(true); $("#modal .x-btn").focus();
}
function closeModal(keepLock) {
  const m = $("#modal"); if (m.hidden) return;
  m.classList.remove("open"); m.hidden = true; m.setAttribute("aria-hidden", "true");
  if (!keepLock && !$("#drawer").classList.contains("open")) lock(false);
}
const closeAll = () => { closeModal(); closeCart(); };

const wrapDoc = (title, html) => `<div class="doc"><h2>${title}</h2>${html}</div>`;
const MODALS = {
  faq: () => wrapDoc("Preguntas frecuentes", `
    <details open><summary>¿Cómo sé si una pieza es compatible con mi vehículo?</summary><p>Envíanos marca, modelo, año y motor desde la sección de cotización y confirmamos la compatibilidad antes de que compres.</p></details>
    <details><summary>¿Tienen servicio de instalación?</summary><p>Sí. Contamos con taller para instalar la refacción que compres con nosotros.</p></details>
    <details><summary>¿Puedo pagar contra entrega?</summary><p>Depende de la zona. Confírmalo con un asesor por WhatsApp.</p></details>
    <details><summary>¿Qué hago si no encuentro la pieza?</summary><p>Solicita una cotización y la buscamos por ti.</p></details>
    <p class="doc__note">Contenido de ejemplo: sustitúyelo por las políticas reales del negocio.</p>`),
  envios: () => wrapDoc("Envíos y entregas", `<ul><li>Entrega local el mismo día en pedidos confirmados antes de las 14:00.</li><li>Envíos nacionales por paquetería en 2 a 5 días hábiles.</li><li>Recolección en sucursal sin costo.</li></ul><p class="doc__note">Contenido de ejemplo editable.</p>`),
  garantias: () => wrapDoc("Garantías", `<ul><li>Garantía contra defectos de fabricación según el producto.</li><li>Cambios dentro de 15 días con empaque original.</li><li>Las piezas eléctricas requieren validación en taller.</li></ul><p class="doc__note">Contenido de ejemplo editable.</p>`),
  privacidad: () => wrapDoc("Aviso de privacidad", `<p>Los datos que compartes en este sitio se usan únicamente para atender tus solicitudes de cotización y pedidos. No se venden ni se comparten con terceros sin tu consentimiento.</p><p class="doc__note">Texto de demostración. Debe sustituirse por el aviso legal del negocio.</p>`),
  terminos: () => wrapDoc("Términos y condiciones", `<p>Los precios y existencias pueden cambiar sin previo aviso y están sujetos a confirmación. La compatibilidad debe validarse con un asesor antes de la compra.</p><p class="doc__note">Texto de demostración. Debe sustituirse por los términos reales del negocio.</p>`),
  nosotros: () => wrapDoc("Conócenos", `<p>Somos un negocio especializado en soluciones automotrices, refacciones y mantenimiento. Nuestro objetivo es ayudarte a encontrar lo que necesitas para mantener tu vehículo seguro, confiable y en óptimas condiciones.</p>
    <div class="stats"><div><b>+10</b><span>años de experiencia</span></div><div><b>+5,000</b><span>piezas en catálogo</span></div><div><b>+2,000</b><span>clientes atendidos</span></div></div>
    <p><a class="btn btn--primary" href="#contacto" data-close>Contáctanos</a></p><p class="doc__note">Cifras de ejemplo editables.</p>`),
  servicios: () => wrapDoc("Servicios automotrices", `<div class="srv-list">${SERVICES.map(([n, , ic], k) => { const d = SERVICE_DETAILS[n] || ["", ""]; return `
    <div class="srv-row"><span class="srv__ic" data-icon="${ic}"></span><div><b>${n}</b><p>${d[0]}</p></div><div class="srv-row__r"><span class="price">${d[1]}</span><button class="btn btn--primary btn--sm" data-book="${k}">Agendar</button></div></div>`; }).join("")}</div><p class="doc__note">Precios de ejemplo editables.</p>`),
  cuenta: () => {
    const u = getUser();
    return wrapDoc(u ? `Hola, ${u.name}` : "Mi cuenta", u ? `<p>Sesión de demostración con <b>${u.email}</b>.</p><ul><li>Pedidos recientes: aún no tienes pedidos.</li><li>Vehículos guardados: ninguno.</li></ul><button class="btn btn--outline" id="logout">Cerrar sesión</button>`
      : `<p>Guarda tus datos para agilizar tus cotizaciones (demo, sin contraseña).</p>
      <form id="userForm" class="stack"><label>Nombre<input name="name" required autocomplete="name"></label><label>Correo<input name="email" type="email" required autocomplete="email"></label><button class="btn btn--primary btn--lg">Entrar</button></form>`);
  }
};
function getUser() { try { return JSON.parse(localStorage.getItem("demoUser")); } catch (e) { return null; } }

function openProduct(i) {
  const p = PRODUCTS[i], off = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  openModal(`
  <div class="pd">
    <div class="pd__img"><span class="badge ${p.low ? "badge--low" : ""}">${p.stock}</span><span data-icon="${p.icon}"></span></div>
    <div class="pd__info">
      <span class="prod__cat">${catName(p.cat)}</span>
      <h2>${p.name}</h2>
      <div class="prod__price"><span class="price">${money(p.price)}</span>${p.old ? `<span class="price-old">${money(p.old)}</span><span class="badge badge--inline">-${off}%</span>` : ""}</div>
      <p class="prod__compat"><span data-icon="check"></span>${p.compat}</p>
      <ul class="specs"><li><span data-icon="shield"></span>Garantía según fabricante</li><li><span data-icon="truck"></span>Envío o recolección en sucursal</li><li><span data-icon="wrench"></span>Instalación disponible en taller</li></ul>
      <div class="pd__buy"><div class="qty"><button id="pdDec" aria-label="Menos">−</button><span id="pdQty">1</span><button id="pdInc" aria-label="Más">+</button></div>
      <button class="btn btn--primary btn--lg" id="pdAdd">Agregar al carrito</button></div>
      <button class="btn btn--wa" data-wa-prod="${i}"><span data-icon="whatsapp"></span>Consultar por WhatsApp</button>
    </div>
  </div>`);
  let q = 1; const set = (n) => { q = Math.max(1, Math.min(20, n)); $("#pdQty").textContent = q; };
  $("#pdDec").onclick = () => set(q - 1); $("#pdInc").onclick = () => set(q + 1);
  $("#pdAdd").onclick = () => { addToCart(i, q); openCart(); };
}

/* ---------- Tienda: orden y paginación ---------- */
const shop = { sort: "rel", expanded: false, pageSize: 6 };
function renderShopBar() {
  $("#shopBar").innerHTML = `<div class="chips"><button class="chip active" data-chip="">Todas</button>${CATEGORIES.filter((c) => PRODUCTS.some((p) => p.cat === c.id)).map((c) => `<button class="chip" data-chip="${c.id}">${c.name}</button>`).join("")}</div>
  <label class="sort">Ordenar<select id="sortSel"><option value="rel">Destacados</option><option value="asc">Precio: menor a mayor</option><option value="desc">Precio: mayor a menor</option></select></label>`;
  $("#sortSel").addEventListener("change", (e) => { shop.sort = e.target.value; applyFilters(false); });
}

/* ---------- Reveal ---------- */
let io;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((e) => e.classList.add("in")); return; }
  io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  $$(".reveal:not(.in)").forEach((e) => io.observe(e));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories(); renderServices(); renderTestimonials(); renderSocial(); fillSelects();
  renderShopBar(); applyFilters(false); renderIcons(); updateCartUI();

  // WhatsApp links / datos de contacto
  $$("[data-wa]").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
  $$('[data-cfg="wa"]').forEach((a) => (a.textContent = CONFIG.whatsappDisplay));
  $$('[data-cfg="phone"]').forEach((a) => (a.textContent = CONFIG.phoneDisplay));

  // Header: menú móvil
  const burger = $("#burger"), nav = $("#nav");
  const closeNav = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
  $$("#nav a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeNav());
  $("#searchToggle").addEventListener("click", () => { $("#buscador").scrollIntoView({ behavior: "smooth" }); setTimeout(() => $("#q").focus({ preventScroll: true }), 500); });
  $("#cartBtn").addEventListener("click", openCart);

  // Buscador
  $("#searchForm").addEventListener("submit", (e) => { e.preventDefault(); applyFilters(true); });
  $("#clearFilters").addEventListener("click", () => { $("#searchForm").reset(); applyFilters(false); });

  // Delegación de clics (categorías y productos)
  document.addEventListener("click", (e) => {
    const cat = e.target.closest("[data-cat]");
    if (cat) { e.preventDefault(); $("#searchForm").reset(); $("#fCat").value = cat.dataset.cat; shop.expanded = true; applyFilters(true); return; }
    const add = e.target.closest("[data-add]");
    if (add) { addToCart(+add.dataset.add); return; }
    const wa = e.target.closest("[data-wa-prod]");
    if (wa) { const p = PRODUCTS[wa.dataset.waProd]; window.open(waUrl(`Hola, me interesa: ${p.name} (${money(p.price)}). ¿Me confirman disponibilidad y compatibilidad?`), "_blank", "noopener"); return; }
    const q = e.target.closest("[data-quick]");
    if (q) { openProduct(+q.dataset.quick); }
  });

  // Header sombra
  const hd = $("#header");
  addEventListener("scroll", () => (hd.style.boxShadow = scrollY > 10 ? "0 6px 20px rgba(0,0,0,.3)" : "none"), { passive: true });

  // Formulario de cotización
  const form = $("#quoteForm"), msg = $("#formMsg");
  const data = () => Object.fromEntries(new FormData(form).entries());
  const text = (d) => `Hola, quiero cotizar una refacción:\n• Nombre: ${d.nombre}\n• Teléfono: ${d.telefono}\n• Vehículo: ${d.marca} ${d.modelo} ${d.anio}${d.motor ? " · Motor " + d.motor : ""}\n• Refacción: ${d.pieza}${d.mensaje ? "\n• Mensaje: " + d.mensaje : ""}`;
  const validate = () => {
    let ok = true;
    $$("[required]", form).forEach((i) => { const bad = !i.value.trim(); i.classList.toggle("invalid", bad); if (bad) ok = false; });
    if (!ok) { msg.className = "form-msg err"; msg.textContent = "Completa los campos obligatorios."; }
    return ok;
  };
  form.addEventListener("input", (e) => e.target.classList.remove("invalid"));
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (CONFIG.formEndpoint) {
      try {
        const r = await fetch(CONFIG.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!r.ok) throw 0;
        msg.className = "form-msg ok"; msg.textContent = "¡Gracias! Recibimos tu solicitud y te contactaremos pronto."; form.reset();
      } catch { msg.className = "form-msg err"; msg.textContent = "No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp."; }
    } else {
      msg.className = "form-msg ok"; msg.textContent = "Demo: conecta CONFIG.formEndpoint para recibir solicitudes. Abriendo WhatsApp…";
      window.open(waUrl(text(data())), "_blank", "noopener");
    }
  });
  $("#quoteWa").addEventListener("click", () => { if (validate()) window.open(waUrl(text(data())), "_blank", "noopener"); });

  // ----- Marca y datos del negocio (todo sale de CONFIG) -----
  $$('[data-brand="logo"]').forEach((e) => (e.textContent = CONFIG.brand.logo));
  $$('[data-brand="name"]').forEach((e) => (e.textContent = CONFIG.brand.name));
  document.title = `Refacciones y Servicio Automotriz | ${CONFIG.brand.name}`;
  $$('[data-cfg="email"]').forEach((a) => { a.textContent = CONFIG.email; a.href = "mailto:" + CONFIG.email; });
  $$('[data-cfg="address"]').forEach((e) => (e.textContent = CONFIG.address));
  $$('[data-cfg="hours"]').forEach((e) => { e.textContent = ""; CONFIG.hours.forEach((h, k) => { if (k) e.append(document.createElement("br")); e.append(h); }); });
  $$('[data-cfg="phone"],[data-cfg="phoneLink"]').forEach((a) => (a.href = "tel:+" + CONFIG.whatsapp));
  $$("[data-wa][data-msg]").forEach((a) => (a.href = waUrl(a.dataset.msg)));

  // Aviso de demostración
  const rb = $("#ribbon");
  try { if (sessionStorage.getItem("ribbonOff")) rb.hidden = true; } catch (e) {}
  $("#ribbonX").addEventListener("click", () => { rb.hidden = true; try { sessionStorage.setItem("ribbonOff", "1"); } catch (e) {} });

  // Aviso sobre foto adjunta
  $("#foto").addEventListener("change", (e) => { $("#fotoHint").hidden = !e.target.files.length; });

  // Datos del pedido: se recuerdan para la próxima vez
  document.addEventListener("input", (e) => { if (e.target.closest(".co")) e.target.classList.remove("invalid"); });

  // ----- Carrito, modales y extras -----
  document.addEventListener("click", (e) => {
    const t = e.target;
    const m = t.closest("[data-modal]");
    if (m) { e.preventDefault(); openModal(MODALS[m.dataset.modal]()); bindAccount(); return; }
    if (t.closest("[data-close]")) { const g = t.closest("[data-goto]"); closeAll(); if (g) location.hash = g.dataset.goto; return; }
    if (t === $("#overlay")) { closeAll(); return; }
    const chip = t.closest("[data-chip]");
    if (chip) { $("#searchForm").reset(); $("#fCat").value = chip.dataset.chip; applyFilters(false); return; }
    const inc = t.closest("[data-inc]"), dec = t.closest("[data-dec]"), rm = t.closest("[data-rm]");
    if (inc || dec || rm) {
      const i = +(inc || dec || rm).dataset[inc ? "inc" : dec ? "dec" : "rm"], it = cart.find((c) => c.i === i);
      if (it) { if (inc) it.qty = Math.min(20, it.qty + 1); if (dec) it.qty -= 1; if (rm || it.qty < 1) cart = cart.filter((c) => c.i !== i); updateCartUI(); }
      return;
    }
    if (t.closest("#emptyCart")) { cart = []; updateCartUI(); return; }
    if (t.closest("#checkoutWa")) {
      const f = (n) => $(`#co [name="${n}"]`);
      let ok = true;
      ["co_nombre", "co_tel"].forEach((n) => { const bad = !f(n).value.trim(); f(n).classList.toggle("invalid", bad); if (bad) ok = false; });
      if (!ok) { toast("Escribe tu nombre y teléfono para continuar."); return; }
      coSet("nombre", f("co_nombre").value); coSet("tel", f("co_tel").value); coSet("cp", f("co_cp").value);
      track("begin_checkout", { value: cartTotal() });
      const lines = cart.map((c) => `• ${c.qty} x ${PRODUCTS[c.i].name} (${money(PRODUCTS[c.i].price)})`).join("\n");
      window.open(waUrl(`Hola, quiero hacer este pedido:\n${lines}\nTotal estimado: ${money(cartTotal())}\n\nNombre: ${f("co_nombre").value}\nTeléfono: ${f("co_tel").value}\nEntrega: ${f("co_entrega").value}${f("co_cp").value ? " (" + f("co_cp").value + ")" : ""}\n¿Me confirman disponibilidad y costo de envío?`), "_blank", "noopener");
      return;
    }
    const srv = t.closest("[data-srv]");
    if (srv) { const n = srv.dataset.srv, k = SERVICES.findIndex((s) => s[0] === n), d = SERVICE_DETAILS[n]; openModal(wrapDoc(n, `<p>${d[0]}</p><p><span class="price">${d[1]}</span></p><button class="btn btn--primary btn--lg" data-book="${k}">Agendar por WhatsApp</button><p class="doc__note">Precio de ejemplo editable.</p>`)); return; }
    const bk = t.closest("[data-book]");
    if (bk) { window.open(waUrl(`Hola, quiero agendar el servicio: ${SERVICES[bk.dataset.book][0]}. ¿Qué horarios tienen disponibles?`), "_blank", "noopener"); return; }
    if (t.closest("#moreBtn")) { shop.expanded = true; applyFilters(false); return; }
    if (t.closest("#toTop")) { scrollTo({ top: 0, behavior: "smooth" }); }
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeAll());
  $("#userBtn").addEventListener("click", () => { openModal(MODALS.cuenta()); bindAccount(); });

  // Sugerencias del buscador
  const sg = $("#suggest"), qi = $("#q");
  qi.addEventListener("input", () => {
    const v = qi.value.trim().toLowerCase();
    const hits = v.length < 2 ? [] : PRODUCTS.filter((p) => `${p.name} ${catName(p.cat)}`.toLowerCase().includes(v)).slice(0, 5);
    sg.innerHTML = hits.map((p) => `<li><button type="button" data-sg="${p.name}">${p.name}<small>${catName(p.cat)}</small></button></li>`).join("");
    sg.hidden = !hits.length;
  });
  sg.addEventListener("click", (e) => { const b = e.target.closest("[data-sg]"); if (b) { qi.value = b.dataset.sg; sg.hidden = true; applyFilters(true); } });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-input")) sg.hidden = true; });

  // Volver arriba y enlace activo
  const top = $("#toTop"), links = $$("#nav a[href^='#']:not(.btn)");
  const secs = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  addEventListener("scroll", () => {
    top.hidden = scrollY < 700;
    const y = scrollY + 140; let cur = null;
    secs.forEach((s) => { if (s.offsetTop <= y) cur = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }, { passive: true });
  bindAccount();

  observeReveal();
});

function bindAccount() {
  const f = $("#userForm"), lo = $("#logout");
  const refresh = () => $("#userBtn").classList.toggle("logged", !!getUser());
  if (f) f.addEventListener("submit", (e) => { e.preventDefault(); const d = Object.fromEntries(new FormData(f)); try { localStorage.setItem("demoUser", JSON.stringify(d)); } catch (x) {} refresh(); toast("Bienvenido, " + d.name); openModal(MODALS.cuenta()); bindAccount(); });
  if (lo) lo.addEventListener("click", () => { try { localStorage.removeItem("demoUser"); } catch (x) {} refresh(); closeModal(); toast("Sesión cerrada"); });
  refresh();
}
