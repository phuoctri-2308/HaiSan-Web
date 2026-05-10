(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Data (demo)
  const products = [
    { id: 'p1', name: 'Tôm hùm Alaska', price: 1200000, category: 'Tôm', emoji: '🦞', image: './image/tomhum.jfif', desc: 'Thịt chắc, ngọt, nhập khẩu trực tiếp.' },
    { id: 'p2', name: 'Cua hoàng đế', price: 1800000, category: 'Cua', emoji: '🦀', image: './image/cuahoangde.jfif', desc: 'King crab tươi sống, size lớn.' },
    { id: 'p3', name: 'Mực ống Phú Quốc', price: 350000, category: 'Mực', emoji: '🦑', image: './image/Mucong.jfif', desc: 'Mực câu tươi ngon, giòn ngọt.' },
    { id: 'p4', name: 'Cá ngừ vây xanh', price: 450000, category: 'Cá', emoji: '🐟', image: './image/cangu.jfif', desc: 'Fillet tươi, phù hợp ăn sashimi.' },
    { id: 'p5', name: 'Hàu sữa', price: 150000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/hausua.jfif', desc: 'Hàu sống béo ngậy, giàu dinh dưỡng.' },
    { id: 'p6', name: 'Tôm tít', price: 420000, category: 'Tôm', emoji: '🦐', image: './image/tomtit.jfif', desc: 'Tôm sú thiên nhiên, đánh bắt tươi.' },
    { id: 'p7', name: 'Ghẹ xanh', price: 390000, category: 'Cua', emoji: '🦀', image: './image/ghexanh.jfif', desc: 'Ghẹ tươi sống loại 1.' },
    { id: 'p8', name: 'Cá hồi Na Uy', price: 520000, category: 'Cá', emoji: '🐟', image: './image/cahoi.jfif', desc: 'Cá hồi nhập khẩu giàu omega 3.' },
    { id: 'p9', name: 'Bạch tuộc', price: 310000, category: 'Mực', emoji: '🐙', image: './image/bachtuoc.jfif', desc: 'Bạch tuộc giòn dai tự nhiên.' },
    { id: 'p10', name: 'Ốc hương', price: 280000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/ochuong.jfif', desc: 'Ốc hương tươi ngon, thịt giòn.' },
    { id: 'p11', name: 'Tôm sú', price: 450000, category: 'Tôm', emoji: '🦐', image: './image/tomsu.jfif', desc: 'Tôm sú thiên nhiên size lớn.' },
    { id: 'p12', name: 'Sò điệp Nhật', price: 600000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/sodiep.jfif', desc: 'Sò điệp Nhật ngọt thịt.' },
    { id: 'p13', name: 'Cá chẽm', price: 240000, category: 'Cá', emoji: '🐟', image: './image/cachem.jfif', desc: 'Cá chẽm biển tươi mỗi ngày.' },
    { id: 'p14', name: 'Mực nang', price: 370000, category: 'Mực', emoji: '🦑', image: './image/mucnang.jfif', desc: 'Mực nang dày thịt, tươi ngon.' },
    { id: 'p15', name: 'Tôm càng xanh', price: 480000, category: 'Tôm', emoji: '🦐', image: './image/tomcangxanh.jfif', desc: 'Tôm càng xanh tươi sống, thịt dai ngọt.' },
    { id: 'p16', name: 'Tôm bạc', price: 320000, category: 'Tôm', emoji: '🦐', image: './image/tombac.jfif', desc: 'Tôm bạc thiên nhiên, chất lượng cao.' },
    { id: 'p17', name: 'Cua biển Cà Mau', price: 650000, category: 'Cua', emoji: '🦀', image: './image/cuabien.jfif', desc: 'Cua biển chắc thịt, nhiều gạch.' },
    { id: 'p18', name: 'Ghẹ đỏ', price: 430000, category: 'Cua', emoji: '🦀', image: './image/ghedo.jfif', desc: 'Ghẹ đỏ tươi ngon đánh bắt trong ngày.' },
    { id: 'p19', name: 'Mực lá', price: 390000, category: 'Mực', emoji: '🦑', image: './image/mucla.jfif', desc: 'Mực lá dày thịt, ngọt tự nhiên.' },
    { id: 'p20', name: 'Mực trứng', price: 410000, category: 'Mực', emoji: '🦑', image: './image/muctrung.jfif', desc: 'Mực trứng béo ngon, nhiều trứng.' },
    { id: 'p21', name: 'Cá thu', price: 280000, category: 'Cá', emoji: '🐟', image: './image/cathu.jfif', desc: 'Cá thu tươi ngon, giàu dinh dưỡng.' },
    { id: 'p22', name: 'Cá chim biển', price: 260000, category: 'Cá', emoji: '🐟', image: './image/cachim.jfif', desc: 'Cá chim biển thịt mềm, thơm ngon.' },
    { id: 'p23', name: 'Cá bớp', price: 340000, category: 'Cá', emoji: '🐟', image: './image/cabop.jfif', desc: 'Cá bớp tươi sống, thích hợp lẩu.' },
    { id: 'p24', name: 'Ốc móng tay', price: 220000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/ocmongtay.jfif', desc: 'Ốc móng tay giòn ngọt tự nhiên.' },
    { id: 'p25', name: 'Ốc len', price: 190000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/oclen.jfif', desc: 'Ốc len tươi sống, thích hợp xào dừa.' },
    { id: 'p26', name: 'Sò huyết', price: 240000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/sohuyet.jfif', desc: 'Sò huyết tươi ngon giàu dinh dưỡng.' },
    { id: 'p27', name: 'Nghêu trắng', price: 160000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/ngheu.jfif', desc: 'Nghêu trắng sạch, ngọt nước.' },
    { id: 'p28', name: 'Tôm hùm baby', price: 890000, category: 'Tôm', emoji: '🦞', image: './image/tomhumbaby.jfif', desc: 'Tôm hùm baby size vừa, thịt chắc.' },
    { id: 'p29', name: 'Bề bề', price: 450000, category: 'Tôm', emoji: '🦐', image: './image/bebe.jfif', desc: 'Bề bề tươi sống, nhiều thịt.' },
    { id: 'p30', name: 'Cua gạch', price: 720000, category: 'Cua', emoji: '🦀', image: './image/cuagach.jfif', desc: 'Cua gạch son béo ngậy.' },
    { id: 'p31', name: 'Ốc nhảy', price: 260000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/ocnhay.jfif', desc: 'Ốc nhảy tươi sống, giòn ngọt tự nhiên.' },
    { id: 'p32', name: 'Cá ngừ đại dương', price: 520000, category: 'Cá', emoji: '🐟', image: './image/cangudaiduong.jfif', desc: 'Cá ngừ đại dương tươi ngon, thịt đỏ đẹp.' },
    { id: 'p33', name: 'Mực hấp thuyền', price: 390000, category: 'Mực', emoji: '🦑', image: './image/muchapthuyen.jfif', desc: 'Mực hấp vừa cập bến, cực kỳ tươi.' },
    { id: 'p34', name: 'Mực ống', price: 340000, category: 'Mực', emoji: '🦑', image: './image/mucong2.jfif', desc: 'Mực ống câu tự nhiên, thịt giòn.' },
    { id: 'p35', name: 'Mực trứng Cà Mau', price: 450000, category: 'Mực', emoji: '🦑', image: './image/muctrungcamau.jfif', desc: 'Mực trứng đầy trứng béo ngon.' },
    { id: 'p36', name: 'Cá phèn', price: 180000, category: 'Cá', emoji: '🐟', image: './image/caphen.jfif', desc: 'Cá phèn biển tươi mỗi ngày.' },
    { id: 'p37', name: 'Cá đù', price: 170000, category: 'Cá', emoji: '🐟', image: './image/cadu.jfif', desc: 'Cá đù thịt mềm, ngọt tự nhiên.' },
    { id: 'p38', name: 'Cá trứng Na Uy', price: 320000, category: 'Cá', emoji: '🐟', image: './image/catrungnauy.jfif', desc: 'Cá trứng nhập khẩu Na Uy chất lượng cao.' },
    { id: 'p39', name: 'Cá nục', price: 160000, category: 'Cá', emoji: '🐟', image: './image/canuc.jfif', desc: 'Cá nục tươi ngon giàu dinh dưỡng.' },
    { id: 'p40', name: 'Cá bạc má', price: 190000, category: 'Cá', emoji: '🐟', image: './image/cabacma.jfif', desc: 'Cá bạc má biển tươi đánh bắt trong ngày.' },
    { id: 'p41', name: 'Ốc giác', price: 300000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/ochuong.jfif', desc: 'Ốc giác giòn dai, thích hợp nướng.' },
    { id: 'p42', name: 'Ốc cà na', price: 210000, category: 'Ốc/Hàu', emoji: '🐚', image: './image/oclen.jfif', desc: 'Ốc cà na tươi sống, ngon đậm vị biển.' },
    { id: 'p43', name: 'Sò lông', price: 240000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/sohuyet.jfif', desc: 'Sò lông béo ngọt tự nhiên.' },
    { id: 'p44', name: 'Nghêu hai còi', price: 290000, category: 'Ốc/Hàu', emoji: '🦪', image: './image/ngheu.jfif', desc: 'Nghêu size lớn, nhiều thịt.' },
    { id: 'p45', name: 'Tôm đất', price: 280000, category: 'Tôm', emoji: '🦐', image: './image/tombac.jfif', desc: 'Tôm đất tươi ngon, ngọt thịt.' },
    { id: 'p46', name: 'Tôm thẻ', price: 310000, category: 'Tôm', emoji: '🦐', image: './image/tomsu.jfif', desc: 'Tôm thẻ sống, size đẹp.' },
    { id: 'p47', name: 'Ghẹ xanh loại 1', price: 520000, category: 'Cua', emoji: '🦀', image: './image/ghexanh.jfif', desc: 'Ghẹ xanh chắc thịt, nhiều gạch.' },
    { id: 'p48', name: 'Cua thịt', price: 590000, category: 'Cua', emoji: '🦀', image: './image/cuabien.jfif', desc: 'Cua thịt Cà Mau chất lượng cao.' },
    { id: 'p49', name: 'Bạch tuộc baby', price: 350000, category: 'Mực', emoji: '🐙', image: './image/bachtuoc.jfif', desc: 'Bạch tuộc baby giòn ngon tự nhiên.' },
    { id: 'p50', name: 'Mực lá đại', price: 480000, category: 'Mực', emoji: '🦑', image: './image/mucla.jfif', desc: 'Mực lá size lớn, dày thịt.' }
  ];

  // State
  const state = {
    cart: {}, // { productId: qty }
    filter: 'All',
    search: '',
    orders: [],
    tempReorderInfo: null // { name, phone, address }
  };

  const els = {
    productsGrid: $('#productsGrid'),
    searchField: $('#searchInput'),
    chipAll: $('#chipAll'),
    cartBtn: $('#cartBtn'),
    chipOrder: $('#chipOrder'),
    cartOverlay: $('#cartOverlay'),
    cartPanel: $('#cartPanel'),
    cartItems: $('#cartItems'),
    cartEmpty: $('#cartEmpty'),
    cartCountBadge: $('#cartCountBadge'),
    cartTotal: $('#cartTotal'),
    closeCartBtn: $('#closeCartBtn'),
    checkoutBtn: $('#checkoutBtn'),
    clearCartBtn: $('#clearCartBtn'),
    checkoutModal: $('#checkoutModal'),
    closeCheckoutBtn: $('#closeCheckoutBtn'),
    checkoutForm: $('#checkoutForm'),
    historyModal: $('#historyModal'),
    closeHistoryBtn: $('#closeHistoryBtn'),
    historyItems: $('#historyItems'),
    editOrderModal: $('#editOrderModal'),
    closeEditOrderBtn: $('#closeEditOrderBtn'),
    editOrderForm: $('#editOrderForm'),
  };

  function formatVND(n) {
    return n.toLocaleString('vi-VN') + ' ₫';
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem('cart_v1');
      state.cart = raw ? JSON.parse(raw) : {};
    } catch {
      state.cart = {};
    }
  }

  function saveCart() {
    localStorage.setItem('cart_v1', JSON.stringify(state.cart));
  }

  function loadOrders() {
    try {
      const raw = localStorage.getItem('orders_v1');
      state.orders = raw ? JSON.parse(raw) : [];
    } catch {
      state.orders = [];
    }
  }

  function saveOrders() {
    localStorage.setItem('orders_v1', JSON.stringify(state.orders));
  }

  function cartCount() {
    return Object.values(state.cart).reduce((a, b) => a + b, 0);
  }

  function cartTotal() {
    let total = 0;
    for (const [id, qty] of Object.entries(state.cart)) {
      const p = products.find(x => x.id === id);
      if (!p) continue;
      total += p.price * qty;
    }
    return total;
  }

  function openCart() {
    els.cartOverlay.classList.add('cart-overlay--open');
    els.cartPanel.classList.add('cart-panel--open');
  }

  function closeCart() {
    els.cartOverlay.classList.remove('cart-overlay--open');
    els.cartPanel.classList.remove('cart-panel--open');
  }

  function setBadge() {
    const count = cartCount();
    els.cartCountBadge.textContent = String(count);
    els.cartCountBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  function renderHistory() {
    console.log('Rendering history with orders:', state.orders);
    if (!els.historyItems) return;
    if (state.orders.length === 0) {
      els.historyItems.innerHTML = '<p style="color: #caf0f8;">Chưa có đơn hàng nào.</p>';
      return;
    }
    els.historyItems.innerHTML = state.orders.map((o, i) => `
      <div style="border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 12px; margin-bottom: 12px; background: rgba(17,27,51,0.35);">
        <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
          <strong>Đơn #${state.orders.length - i}</strong>
          <span style="color: #caf0f8; font-size: 13px;">${o.date}</span>
        </div>
        <div style="font-size: 13px; color: #caf0f8; margin-bottom: 8px; line-height: 1.5;">
          Người nhận: ${o.name}<br/>
          SĐT: ${o.phone}<br/>
          Địa chỉ: ${o.address}
        </div>
        <div style="background: rgba(0,0,0,0.2); padding: 8px; border-radius: 8px; margin-bottom: 12px;">
          ${o.items.map(item => `
            <div style="display:flex; justify-content:space-between; font-size: 13px; margin-bottom: 4px;">
              <span>${item.qty}x ${item.name}</span>
              <span>${formatVND(item.price * item.qty)}</span>
            </div>
          `).join('')}
          <div style="border-top: 1px dashed rgba(255,255,255,0.2); margin-top: 6px; padding-top: 6px; text-align: right; font-weight: bold;">
            Tổng: ${formatVND(o.total)}
          </div>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn" data-edit-order="${i}" style="flex: 1; padding: 6px 10px; font-size: 12px; background: rgba(244, 162, 97, 0.2); border-color: rgba(244, 162, 97, 0.5); color: #f4a261;">✏ Sửa thông tin</button>
          <button type="button" class="btn" data-reorder="${i}" style="flex: 1; padding: 6px 10px; font-size: 12px; background: rgba(0, 180, 216, 0.2); border-color: rgba(0, 180, 216, 0.5); color: #00b4d8;">🔄 Đặt lại</button>
          <button type="button" class="btn" data-delete-order="${i}" style="flex: 1; padding: 6px 10px; font-size: 12px; background: rgba(230, 57, 70, 0.2); border-color: rgba(230, 57, 70, 0.5); color: #e63946;">🗑 Xóa đơn</button>
        </div>
      </div>
    `).join('');
  }

  function renderProducts() {
    const q = state.search.trim().toLowerCase();

    const filtered = products.filter(p => {
      const matchCategory = state.filter === 'All' ? true : p.category === state.filter;
      const matchSearch = !q ? true : (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });

    els.productsGrid.innerHTML = filtered.map(p => {
      const qty = state.cart[p.id];
      return `
        <article class="product" data-product-id="${p.id}">
          <div class="product__img">
            ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" />` : `<span aria-hidden="true">${p.emoji}</span>`}
          </div>
          <div class="product__body">
            <div class="product__meta">
              <h3 class="product__name">${p.name}</h3>
              <div class="product__price">${formatVND(p.price)}</div>
            </div>
            <p class="product__desc">${p.desc}</p>
            <div class="product__actions">
              <div class="qty" aria-label="Chọn số lượng">
                <button type="button" class="qty-dec" aria-label="Giảm">-</button>
                <input class="qty-input" inputmode="numeric" type="number" min="1" step="1" value="1" />
                <button type="button" class="qty-inc" aria-label="Tăng">+</button>
              </div>
              <button type="button" class="product__add" data-add="${p.id}">
                ${qty > 0 ? `Thêm thêm (${qty})` : 'Thêm vào giỏ'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderCart() {
    const items = Object.entries(state.cart);
    els.cartItems.innerHTML = '';

    const count = cartCount();
    els.cartEmpty.style.display = count === 0 ? 'block' : 'none';

    for (const [id, qty] of items) {
      const p = products.find(x => x.id === id);
      if (!p) continue;
      const totalLine = p.price * qty;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item__thumb" aria-hidden="true">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 14px;" />` : p.emoji}
        </div>
        <div>
          <p class="cart-item__name">${p.name}</p>
          <p class="cart-item__sub">${formatVND(p.price)} • Số lượng: <strong>${qty}</strong></p>
          <div class="cart-item__row">
            <div class="product__actions" style="margin-top:0">
              <div class="qty" aria-label="Số lượng sản phẩm">
                <button type="button" class="qty-dec" data-qtydec="${id}" aria-label="Giảm">-</button>
                <input class="qty-input-cart" type="number" min="1" step="1" value="${qty}" data-qtyinput="${id}" />
                <button type="button" class="qty-inc" data-qtyinc="${id}" aria-label="Tăng">+</button>
              </div>
              <button type="button" class="btn btn--ghost" style="border-radius:14px" data-remove="${id}">Xóa</button>
            </div>
            <div class="cart-item__total">${formatVND(totalLine)}</div>
          </div>
        </div>
      `;
      els.cartItems.appendChild(itemEl);
    }

    els.cartTotal.textContent = formatVND(cartTotal());
    setBadge();
  }

  function addToCart(productId, qty) {
    const q = Math.max(1, qty | 0);
    state.cart[productId] = (state.cart[productId] ?? 0) + q;
    saveCart();
    renderCart();
    renderProducts();
  }

  function setQty(productId, qty) {
    const q = Math.max(0, qty | 0);
    if (q === 0) delete state.cart[productId];
    else state.cart[productId] = q;
    saveCart();
    renderCart();
    renderProducts();
  }

  function initEvents() {
    els.searchField.addEventListener('input', (e) => {
      state.search = e.target.value;
      renderProducts();
    });

    $$('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        $$('.chip[data-filter]').forEach(c => c.classList.remove('chip--active'));
        chip.classList.add('chip--active');
        state.filter = chip.dataset.filter;
        renderProducts();
      });
    });

    if (els.chipOrder) {
      els.chipOrder.addEventListener('click', () => {
        if (els.historyModal) els.historyModal.style.display = 'flex';
      });
    }

    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-add]');
      if (addBtn) {
        const productId = addBtn.getAttribute('data-add');
        const product = addBtn.closest('.product');
        const input = $('.qty-input', product);
        const qty = Number(input?.value ?? 1);
        addToCart(productId, qty);
        openCart();
      }

      const decBtn = e.target.closest('[data-qtydec]');
      if (decBtn) {
        const id = decBtn.dataset.qtydec;
        const current = state.cart[id] || 1;
        setQty(id, current - 1);
      }

      const incBtn = e.target.closest('[data-qtyinc]');
      if (incBtn) {
         const id = incBtn.dataset.qtyinc;
         const current = state.cart[id] || 1;
         setQty(id, current + 1);
       }

      const rem = e.target.closest('[data-remove]');
      if (rem) {
        const id = rem.getAttribute('data-remove');
        setQty(id, 0);
      }

      const delOrderBtn = e.target.closest('[data-delete-order]');
      if (delOrderBtn) {
        const index = delOrderBtn.getAttribute('data-delete-order');
        if (confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
          state.orders.splice(index, 1);
          saveOrders();
          renderHistory();
        }
      }

      const editOrderBtn = e.target.closest('[data-edit-order]');
      if (editOrderBtn) {
        const index = editOrderBtn.getAttribute('data-edit-order');
        const order = state.orders[index];
        if (order && els.editOrderModal) {
          $('#editOrderIndex').value = index;
          $('#editOrderName').value = order.name;
          $('#editOrderPhone').value = order.phone;
          $('#editOrderAddress').value = order.address;
          els.editOrderModal.style.display = 'flex';
        }
      }

      const reorderBtn = e.target.closest('[data-reorder]');
      if (reorderBtn) {
        const index = reorderBtn.getAttribute('data-reorder');
        const order = state.orders[index];
        if (order) {
          // Lưu thông tin người nhận vào bộ nhớ tạm
          state.tempReorderInfo = {
            name: order.name,
            phone: order.phone,
            address: order.address
          };

          // THAY THẾ toàn bộ giỏ hàng hiện tại (Xóa giỏ cũ)
          state.cart = {};

          for (const item of order.items) {
            let pid = item.id;
            if (!pid) {
              const p = products.find(x => x.name === item.name);
              if (p) pid = p.id;
            }
            if (pid) {
              state.cart[pid] = item.qty;
            }
          }
          saveCart();
          renderCart();
          renderProducts();
          if (els.historyModal) els.historyModal.style.display = 'none';
          openCart();
        }
      }

      const closeBtn = e.target.closest('#closeCartBtn');
      if (closeBtn) closeCart();
    });

    document.addEventListener('input', (e) => {
      const input = e.target.closest('[data-qtyinput]');
      if (!input) return;
      const id = input.getAttribute('data-qtyinput');
      const val = Number(input.value);
      if (Number.isNaN(val)) return;
      setQty(id, val);
    });

    // qty controls in product cards (not cart)
    document.addEventListener('click', (e) => {
  const dec = e.target.closest('.qty-dec');
  const inc = e.target.closest('.qty-inc');

  if (!dec && !inc) return;

  const product = e.target.closest('.product');
  const input = $('.qty-input', product);

  let current = Number(input.value || 1);

  if (dec) {
    current = Math.max(1, current - 1);
  }

  if (inc) {
    current = Math.min(99, current + 1);
  }

  input.value = current;

    });

    els.cartBtn.addEventListener('click', () => openCart());
    els.closeCartBtn.addEventListener('click', () => closeCart());
    els.cartOverlay.addEventListener('click', () => closeCart());
    // Lỗi: els.cartPanel.addEventListener('click', (e) => e.stopPropagation()); 
    // đã bị xóa để cho phép bắt sự kiện click xóa [data-remove] ở cấp document

    els.clearCartBtn.addEventListener('click', () => {
      state.cart = {};
      saveCart();
      renderCart();
      renderProducts();
    });

    els.checkoutBtn.addEventListener('click', () => {
      console.log('Checkout button clicked. Cart count:', cartCount());
      if (cartCount() === 0) {
        alert('Giỏ hàng đang trống');
        return;
      }
      closeCart(); // Đóng giỏ hàng trước

      if (els.checkoutModal) {
        // Kiểm tra xem có thông tin tạm từ nút "Đặt lại" không
        if (state.tempReorderInfo) {
          $('#checkoutName').value = state.tempReorderInfo.name;
          $('#checkoutPhone').value = state.tempReorderInfo.phone;
          $('#checkoutAddress').value = state.tempReorderInfo.address;
        } else {
          // Nếu không có, đảm bảo form trống
          els.checkoutForm.reset();
        }

        els.checkoutModal.style.display = 'flex'; // Mở modal
        console.log('Mở modal thông tin giao hàng thành công');
      } else {
        console.error('Lỗi: Không tìm thấy element checkoutModal');
      }
    });

    if (els.closeCheckoutBtn) {
      els.closeCheckoutBtn.addEventListener('click', () => els.checkoutModal.style.display = 'none');
    }

    if (els.closeHistoryBtn) {
      els.closeHistoryBtn.addEventListener('click', () => els.historyModal.style.display = 'none');
    }

    if (els.closeEditOrderBtn) {
      els.closeEditOrderBtn.addEventListener('click', () => els.editOrderModal.style.display = 'none');
    }

    if (els.editOrderForm) {
      els.editOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = $('#editOrderIndex').value;
        const order = state.orders[index];
        if (order) {
          order.name = $('#editOrderName').value.trim();
          order.phone = $('#editOrderPhone').value.trim();
          order.address = $('#editOrderAddress').value.trim();
          saveOrders();
          renderHistory();
          els.editOrderModal.style.display = 'none';
          alert('Cập nhật thông tin nhận hàng thành công!');
        }
      });
    }

    if (els.checkoutForm) {
      els.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('#checkoutName').value.trim();
        const phone = $('#checkoutPhone').value.trim();
        const address = $('#checkoutAddress').value.trim();
        
        const items = [];
        for (const [id, qty] of Object.entries(state.cart)) {
          const p = products.find(x => x.id === id);
          if (p) items.push({ id: p.id, name: p.name, qty, price: p.price });
        }
        
        const order = {
          date: new Date().toLocaleString('vi-VN'),
          name, phone, address,
          items,
          total: cartTotal()
        };
        
        console.log('Created order:', order);
        state.orders.unshift(order);
        saveOrders();
        
        alert('Đặt hàng thành công!');
        els.checkoutModal.style.display = 'none';
        els.checkoutForm.reset();
        state.tempReorderInfo = null; // Xóa thông tin tạm sau khi đặt thành công
        
        state.cart = {};
        saveCart();
        renderCart();
        renderProducts();
        renderHistory();
        console.log('Đã cập nhật xong Lịch sử đơn hàng');
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCart();
    });
  }

  function init() {
    loadCart();
    loadOrders();
    renderProducts();
    renderCart();
    renderHistory();
    initEvents();
  }

  init();
})();