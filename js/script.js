const WHATSAPP_NUMBER = "55SEUNUMEROAQUI"; // Ex.: 5581999999999
const DELIVERY_FEE = 0; // Se quiser taxa para Delivery, troque aqui. Ex.: 5
const STORAGE_KEY = "mana_peanuts_cart_v1";
const FORM_STORAGE_KEY = "mana_peanuts_form_v1";
const CURRENCY = "pt-BR";

/*
  IMPORTANTE:
  - Troque o WHATSAPP_NUMBER pelo número real.
  - Troque os preços pelos valores reais.
  - Troque os caminhos das imagens quando quiser.
*/

const products = [
  // LINHA TRADICIONAL
  {
    id: 1,
    name: "Amendoim Torrado",
    category: "linha-tradicional",
    badge: "tradicional",
    weight: "300g",
    price: 14.9,
    image: "./assets/img/linhatradicional/amendoim-torrado.png",
    description:
      "Amendoim torrado tradicional da Maná Peanuts, ideal para consumo e revenda.",
  },
  {
    id: 2,
    name: "Amendoim Doce",
    category: "linha-tradicional",
    badge: "tradicional",
    weight: "300g",
    price: 14.9,
    image: "./assets/img/linhatradicional/amendoim-doce.png",
    description: "Amendoim doce com sabor marcante e textura crocante.",
  },
  {
    id: 3,
    name: "Amendoim com Sal Rosa",
    category: "linha-tradicional",
    badge: "tradicional",
    weight: "300g",
    price: 15.9,
    image: "./assets/img/linhatradicional/amendoim-rosa.png",
    description:
      "Versão especial com sal rosa, equilibrando sabor e crocância.",
  },
  {
    id: 4,
    name: "Amendoim Granulado",
    category: "linha-tradicional",
    badge: "tradicional",
    weight: "400g",
    price: 17.9,
    image: "./assets/img/linhatradicional/amendoim-granulado.png",
    description: "Ideal para receitas, coberturas, recheios e uso culinário.",
  },
  {
    id: 5,
    name: "Amendoim Moído",
    category: "linha-tradicional",
    badge: "tradicional",
    weight: "400g",
    price: 17.9,
    image: "./assets/img/linhatradicional/amendoim-moido.png",
    description: "Perfeito para preparos, doces e composições artesanais.",
  },

  // LINHA SABORES
  {
    id: 6,
    name: "Amendoim sabor Churrasco",
    category: "linha-sabores",
    badge: "sabores",
    weight: "300g",
    price: 16.9,
    image: "./assets/img/linhasabor/amendoim-churrasco.png",
    description: "Amendoim crocante com tempero sabor churrasco.",
  },
  {
    id: 7,
    name: "Amendoim sabor Pimenta",
    category: "linha-sabores",
    badge: "sabores",
    weight: "300g",
    price: 16.9,
    image: "./assets/img/linhasabor/amendoim-pimenta.png",
    description: "Versão temperada com toque picante e marcante.",
  },
  {
    id: 8,
    name: "Amendoim sabor Bacon",
    category: "linha-sabores",
    badge: "sabores",
    weight: "300g",
    price: 16.9,
    image: "./assets/img/linhasabor/amendoim-bacon.png",
    description: "Sabor intenso e defumado, ótimo para petiscos e revenda.",
  },
  {
    id: 9,
    name: "Amendoim sabor Mostarda e Mel",
    category: "linha-sabores",
    badge: "sabores",
    weight: "300g",
    price: 16.9,
    image: "./assets/img/linhasabor/amendoim-mel.png",
    description: "Combinação agridoce com perfil de sabor diferenciado.",
  },
  {
    id: 10,
    name: "Amendoim sabor Cebola & Salsa",
    category: "linha-sabores",
    badge: "sabores",
    weight: "300g",
    price: 16.9,
    image: "./assets/img/linhasabor/amendoim-cebola.png",
    description:
      "Tempero clássico e equilibrado para quem gosta de sabor suave.",
  },

  // LINHA DOCES
  {
    id: 11,
    name: "Pé de Moça",
    category: "linha-doces",
    badge: "doces",
    weight: "42g",
    price: 4.9,
    image: "",
    description: "Doce prático e saboroso, ideal para consumo rápido.",
  },
  {
    id: 12,
    name: "Rapadura de Amendoim tipo Torrão",
    category: "linha-doces",
    badge: "doces",
    weight: "51g",
    price: 5.9,
    image: "",
    description: "Doce tradicional com textura firme e sabor artesanal.",
  },

  // LINHA GRANEL
  {
    id: 13,
    name: "Amendoim Cru Inteiro",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description:
      "Produto vendido sob consulta, ideal para revenda e uso industrial.",
  },
  {
    id: 14,
    name: "Amendoim Cru Banda",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description:
      "Opção para processos, receitas e comercialização em maior volume.",
  },
  {
    id: 15,
    name: "Amendoim Paçoca",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description: "Ideal para doces, recheios e preparações artesanais.",
  },
  {
    id: 16,
    name: "Amendoim Doce Granel",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description: "Versão granel para revenda ou compra em maior quantidade.",
  },
  {
    id: 17,
    name: "Amendoim Granulado Granel",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description: "Indicado para confeitaria, panificação e produção.",
  },
  {
    id: 18,
    name: "Amendoim Moído Granel",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description: "Produto sob consulta para uso culinário e comercial.",
  },
  {
    id: 19,
    name: "Amendoim Torrado Granel",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description: "Versão em maior volume para atender pedidos sob demanda.",
  },
  {
    id: 20,
    name: "Farinha de Amendoim",
    category: "linha-granel",
    badge: "granel",
    weight: "Granel",
    price: 0,
    image: "",
    description:
      "Opção versátil para receitas, misturas e produção alimentícia.",
  },
];

const state = {
  filter: "linha-tradicional",
  cart: loadCart(),
};

const els = {};

function cacheElements() {
  els.productGrid = document.getElementById("productGrid");
  els.productTemplate = document.getElementById("productCardTemplate");
  els.cartItems = document.getElementById("cartItems");
  els.cartCount = document.getElementById("cartCount");
  els.cartCountHeader = document.getElementById("cartCountHeader");
  els.orderSubtotal = document.getElementById("orderSubtotal");
  els.orderTotal = document.getElementById("orderTotal");
  els.deliveryFeeRow = document.getElementById("deliveryFeeRow");
  els.deliveryFeeValue = document.getElementById("deliveryFeeValue");
  els.clearCartBtn = document.getElementById("clearCartBtn");
  els.checkoutBtn = document.getElementById("checkoutBtn");
  els.orderType = document.getElementById("orderType");
  els.paymentMethod = document.getElementById("paymentMethod");
  els.changeAmountGroup = document.getElementById("changeAmountGroup");
  els.changeAmount = document.getElementById("changeAmount");
  els.customerName = document.getElementById("customerName");
  els.customerAddress = document.getElementById("customerAddress");
  els.addressGroup = document.getElementById("addressGroup");
  els.orderNotes = document.getElementById("orderNotes");
  els.categoryTabs = document.querySelectorAll(".category-tab");
}

let revealObserver = null;

/* =========================
   UTILITÁRIOS
========================= */
function formatCurrency(value) {
  if (value <= 0) return "Sob consulta";
  return value.toLocaleString(CURRENCY, {
    style: "currency",
    currency: "BRL",
  });
}

function formatCurrencyStrict(value) {
  return value.toLocaleString(CURRENCY, {
    style: "currency",
    currency: "BRL",
  });
}

function sanitizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartDetailedItems() {
  return state.cart
    .map((item) => ({
      ...item,
      product: getProductById(item.id),
    }))
    .filter((item) => item.product);
}

function getDeliveryFee() {
  const orderType = els.orderType?.value || "Delivery";
  return orderType === "Delivery" ? DELIVERY_FEE : 0;
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  } catch (error) {
    console.warn("Não foi possível salvar o carrinho.", error);
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item) => {
      return (
        item &&
        Number.isInteger(item.id) &&
        Number.isFinite(item.quantity) &&
        item.quantity > 0 &&
        getProductById(item.id)
      );
    });
  } catch (error) {
    return [];
  }
}

function saveFormState() {
  try {
    const formState = {
      customerName: els.customerName?.value || "",
      customerAddress: els.customerAddress?.value || "",
      orderType: els.orderType?.value || "Delivery",
      paymentMethod: els.paymentMethod?.value || "Pix",
      changeAmount: els.changeAmount?.value || "",
      orderNotes: els.orderNotes?.value || "",
    };

    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formState));
  } catch (error) {
    console.warn("Não foi possível salvar o formulário.", error);
  }
}

function loadFormState() {
  try {
    const raw = localStorage.getItem(FORM_STORAGE_KEY);
    if (!raw) return;

    const formState = JSON.parse(raw);

    if (els.customerName) els.customerName.value = formState.customerName || "";
    if (els.customerAddress)
      els.customerAddress.value = formState.customerAddress || "";
    if (els.orderType) els.orderType.value = formState.orderType || "Delivery";
    if (els.paymentMethod)
      els.paymentMethod.value = formState.paymentMethod || "Pix";
    if (els.changeAmount) els.changeAmount.value = formState.changeAmount || "";
    if (els.orderNotes) els.orderNotes.value = formState.orderNotes || "";
  } catch (error) {
    console.warn("Não foi possível carregar o formulário.", error);
  }
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createPlaceholderSvg(title, weight) {
  const safeTitle = escapeXml((title || "Maná Peanuts").slice(0, 28));
  const safeWeight = escapeXml(weight || "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="620" viewBox="0 0 800 620">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1E120C"/>
          <stop offset="100%" stop-color="#2C1B12"/>
        </linearGradient>
        <linearGradient id="chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#81501E"/>
          <stop offset="100%" stop-color="#9C622A"/>
        </linearGradient>
      </defs>
      <rect width="800" height="620" rx="36" fill="url(#bg)"/>
      <circle cx="110" cy="90" r="90" fill="rgba(156,173,58,0.08)"/>
      <circle cx="690" cy="540" r="110" fill="rgba(156,173,58,0.06)"/>
      <rect x="70" y="90" width="660" height="440" rx="28" fill="#130D09" stroke="rgba(181,116,48,0.35)"/>
      <text x="400" y="235" text-anchor="middle" font-size="54" font-family="Arial, sans-serif" font-weight="800" fill="#F8F0E5">Maná Peanuts</text>
      <rect x="215" y="280" width="370" height="62" rx="31" fill="url(#chip)"/>
      <text x="400" y="321" text-anchor="middle" font-size="30" font-family="Arial, sans-serif" font-weight="700" fill="#FFFFFF">${safeWeight}</text>
      <text x="400" y="395" text-anchor="middle" font-size="28" font-family="Arial, sans-serif" font-weight="700" fill="#C9D85E">${safeTitle}</text>
      <text x="400" y="455" text-anchor="middle" font-size="20" font-family="Arial, sans-serif" font-weight="500" fill="#D7C3AE">Adicione a imagem do produto depois</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* =========================
   REVEAL ANIMATION
========================= */
function initRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-up, .reveal-scale").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
}

function observeRevealElements(scope = document) {
  const elements = scope.querySelectorAll(".reveal-up, .reveal-scale");
  elements.forEach((element) => {
    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  });
}

/* =========================
   FILTROS E PRODUTOS
========================= */
function renderProducts() {
  if (!els.productGrid || !els.productTemplate) return;

  els.productGrid.innerHTML = "";

  const filteredProducts = products.filter(
    (product) => product.category === state.filter,
  );

  filteredProducts.forEach((product, index) => {
    const node = els.productTemplate.content.firstElementChild.cloneNode(true);

    const image = node.querySelector(".product-image");
    const badge = node.querySelector(".product-badge");
    const title = node.querySelector(".product-title");
    const price = node.querySelector(".product-price");
    const description = node.querySelector(".product-description");
    const weight = node.querySelector(".product-weight");
    const addButton = node.querySelector(".btn-add");

    node.dataset.category = product.category;
    node.style.transitionDelay = `${index * 35}ms`;

    const imageSource = product.image?.trim()
      ? product.image
      : createPlaceholderSvg(product.name, product.weight);

    image.src = imageSource;
    image.alt = product.name;

    badge.textContent = product.badge;
    title.textContent = product.name;
    price.textContent = formatCurrency(product.price);
    description.textContent = product.description;
    weight.textContent = product.weight;

    addButton.addEventListener("click", () => {
      addToCart(product.id);
    });

    els.productGrid.appendChild(node);
  });

  observeRevealElements(els.productGrid);
}

function setupFilters() {
  els.categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      els.categoryTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      state.filter = tab.dataset.filter;
      renderProducts();
    });
  });
}

/* =========================
   CARRINHO
========================= */
function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  renderCart();
  updateSummary();
  updateCartCounters();
  showToast("Produto adicionado ao pedido");
}

function changeQuantity(productId, amount) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  saveCart();
  renderCart();
  updateSummary();
  updateCartCounters();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
  updateSummary();
  updateCartCounters();
  showToast("Produto removido do pedido");
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  updateSummary();
  updateCartCounters();
  showToast("Pedido limpo com sucesso");
}

function renderCart() {
  if (!els.cartItems) return;

  const detailedItems = getCartDetailedItems();

  if (!detailedItems.length) {
    els.cartItems.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🥜</span>
        <p>Seu pedido está vazio.</p>
        <small>Adicione um item para começar.</small>
      </div>
    `;
    return;
  }

  els.cartItems.innerHTML = "";

  detailedItems.forEach(({ product, quantity }) => {
    const itemElement = document.createElement("article");
    itemElement.className = "cart-item";

    const imageSource = product.image?.trim()
      ? product.image
      : createPlaceholderSvg(product.name, product.weight);

    const lineTotal = product.price > 0 ? product.price * quantity : 0;

    itemElement.innerHTML = `
      <img src="${imageSource}" alt="${product.name}" />
      <div>
        <h4>${product.name}</h4>
        <p>${product.weight} • ${product.price > 0 ? formatCurrency(product.price) : "Sob consulta"}</p>

        <div class="qty-control">
          <button class="qty-btn" type="button" data-action="decrease" aria-label="Diminuir quantidade">−</button>
          <strong>${quantity}</strong>
          <button class="qty-btn" type="button" data-action="increase" aria-label="Aumentar quantidade">+</button>
        </div>

        <button class="remove-btn" type="button" data-action="remove">
          Remover
        </button>
      </div>
      <div style="text-align:right">
        <strong>${product.price > 0 ? formatCurrency(lineTotal) : "Consultar"}</strong>
      </div>
    `;

    itemElement
      .querySelector('[data-action="decrease"]')
      .addEventListener("click", () => changeQuantity(product.id, -1));

    itemElement
      .querySelector('[data-action="increase"]')
      .addEventListener("click", () => changeQuantity(product.id, 1));

    itemElement
      .querySelector('[data-action="remove"]')
      .addEventListener("click", () => removeFromCart(product.id));

    els.cartItems.appendChild(itemElement);
  });
}

function updateCartCounters() {
  const count = getCartCount();

  if (els.cartCount) els.cartCount.textContent = count;
  if (els.cartCountHeader) els.cartCountHeader.textContent = count;
}

function updateSummary() {
  const detailedItems = getCartDetailedItems();

  const subtotal = detailedItems.reduce((sum, item) => {
    if (item.product.price <= 0) return sum;
    return sum + item.product.price * item.quantity;
  }, 0);

  const deliveryFee = getDeliveryFee();
  const total = subtotal + deliveryFee;

  if (els.orderSubtotal) {
    els.orderSubtotal.textContent = formatCurrencyStrict(subtotal);
  }

  if (els.deliveryFeeValue) {
    els.deliveryFeeValue.textContent = formatCurrencyStrict(deliveryFee);
  }

  if (els.orderTotal) {
    els.orderTotal.textContent = formatCurrencyStrict(total);
  }

  if (els.deliveryFeeRow) {
    if (deliveryFee > 0) {
      els.deliveryFeeRow.classList.remove("hidden");
    } else {
      els.deliveryFeeRow.classList.add("hidden");
    }
  }
}

/* =========================
   FORMULÁRIO
========================= */
function updateFormVisibility() {
  const orderType = els.orderType?.value || "Delivery";
  const paymentMethod = els.paymentMethod?.value || "Pix";

  if (els.addressGroup) {
    if (orderType === "Retirada") {
      els.addressGroup.classList.add("hidden");
    } else {
      els.addressGroup.classList.remove("hidden");
    }
  }

  if (els.changeAmountGroup) {
    if (paymentMethod === "Dinheiro") {
      els.changeAmountGroup.classList.remove("hidden");
    } else {
      els.changeAmountGroup.classList.add("hidden");
      if (els.changeAmount) els.changeAmount.value = "";
    }
  }

  updateSummary();
  saveFormState();
}

function setupFormEvents() {
  const formFields = [
    els.customerName,
    els.customerAddress,
    els.orderType,
    els.paymentMethod,
    els.changeAmount,
    els.orderNotes,
  ];

  formFields.forEach((field) => {
    if (!field) return;

    field.addEventListener("input", saveFormState);
    field.addEventListener("change", saveFormState);
  });

  if (els.orderType) {
    els.orderType.addEventListener("change", updateFormVisibility);
  }

  if (els.paymentMethod) {
    els.paymentMethod.addEventListener("change", updateFormVisibility);
  }
}

/* =========================
   WHATSAPP
========================= */
function validateCheckout() {
  const customerName = els.customerName?.value.trim() || "";
  const customerAddress = els.customerAddress?.value.trim() || "";
  const orderType = els.orderType?.value || "Delivery";

  if (!state.cart.length) {
    showToast("Adicione pelo menos um produto ao pedido");
    return false;
  }

  if (!customerName) {
    showToast("Informe seu nome para continuar");
    els.customerName?.focus();
    return false;
  }

  if (orderType === "Delivery" && !customerAddress) {
    showToast("Informe o bairro / endereço para delivery");
    els.customerAddress?.focus();
    return false;
  }

  const phone = sanitizePhone(WHATSAPP_NUMBER);
  if (!phone || phone.length < 12) {
    showToast("Defina o número do WhatsApp no script.js");
    return false;
  }

  return true;
}

function buildWhatsAppMessage() {
  const customerName = els.customerName?.value.trim() || "";
  const customerAddress = els.customerAddress?.value.trim() || "";
  const orderType = els.orderType?.value || "Delivery";
  const paymentMethod = els.paymentMethod?.value || "Pix";
  const changeAmount = els.changeAmount?.value.trim() || "";
  const orderNotes = els.orderNotes?.value.trim() || "";

  const detailedItems = getCartDetailedItems();

  let subtotal = 0;
  let hasConsultPrice = false;

  const lines = [];
  lines.push("Olá! Quero fazer um pedido da Maná Peanuts:");
  lines.push("");
  lines.push(`Nome: ${customerName}`);
  lines.push(`Tipo do pedido: ${orderType}`);

  if (orderType === "Delivery") {
    lines.push(`Endereço / bairro: ${customerAddress}`);
  }

  lines.push(`Forma de pagamento: ${paymentMethod}`);

  if (paymentMethod === "Dinheiro" && changeAmount) {
    lines.push(`Troco para: R$ ${changeAmount}`);
  }

  if (orderNotes) {
    lines.push(`Observações: ${orderNotes}`);
  }

  lines.push("");
  lines.push("Itens do pedido:");

  detailedItems.forEach((item, index) => {
    const lineTotal =
      item.product.price > 0 ? item.product.price * item.quantity : 0;

    if (item.product.price > 0) {
      subtotal += lineTotal;
    } else {
      hasConsultPrice = true;
    }

    lines.push(`${index + 1}. ${item.product.name} (${item.product.weight})`);
    lines.push(`   Quantidade: ${item.quantity}`);

    if (item.product.price > 0) {
      lines.push(`   Unitário: ${formatCurrency(item.product.price)}`);
      lines.push(`   Subtotal: ${formatCurrency(lineTotal)}`);
    } else {
      lines.push(`   Valor: Sob consulta`);
    }

    lines.push("");
  });

  const deliveryFee = getDeliveryFee();
  const total = subtotal + deliveryFee;

  lines.push(`Subtotal: ${formatCurrencyStrict(subtotal)}`);

  if (deliveryFee > 0) {
    lines.push(`Taxa de entrega: ${formatCurrencyStrict(deliveryFee)}`);
  }

  lines.push(`Total: ${formatCurrencyStrict(total)}`);

  if (hasConsultPrice) {
    lines.push("");
    lines.push("Obs.: Existem itens no pedido com valor sob consulta.");
  }

  lines.push("");
  lines.push("Pode confirmar disponibilidade e forma de pagamento?");

  return encodeURIComponent(lines.join("\n"));
}

function checkoutOnWhatsApp() {
  if (!validateCheckout()) return;

  const phone = sanitizePhone(WHATSAPP_NUMBER);
  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}

/* =========================
   EVENTOS
========================= */
function setupButtons() {
  if (els.clearCartBtn) {
    els.clearCartBtn.addEventListener("click", clearCart);
  }

  if (els.checkoutBtn) {
    els.checkoutBtn.addEventListener("click", checkoutOnWhatsApp);
  }
}

/* =========================
   INIT
========================= */
function init() {
  cacheElements();
  initRevealObserver();
  loadFormState();
  updateFormVisibility();
  setupFilters();
  setupFormEvents();
  setupButtons();
  renderProducts();
  renderCart();
  updateCartCounters();
  updateSummary();
  observeRevealElements(document);
}

document.addEventListener("DOMContentLoaded", init);
