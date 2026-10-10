/* ═══════════════════════════════════════════════════════════════
   ملف JavaScript الرئيسي - متجر بشار الحداد
   يحتوي على جميع الوظائف التفاعلية
   ═══════════════════════════════════════════════════════════════ */

/* ----------------------------------------------------------------
   [1] المتغيرات العامة
   ---------------------------------------------------------------- */
let cart = JSON.parse(localStorage.getItem('bashar_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bashar_wishlist')) || [];
let currentSlide = 0;
let sliderInterval;

/* ----------------------------------------------------------------
   [2] تشغيل الكود عند تحميل الصفحة
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(phones, 'phones-grid');
    renderProducts(modems, 'modems-grid');
    renderOffers();
    renderSlider();
    startCountdown();
    startSliderAuto();
    updateCartUI();
    updateWishlistUI();
    setupScrollTop();
    loadTheme();
});

/* ═══════════════════════════════════════════════════════════════
   [3] عرض المنتجات
   ═══════════════════════════════════════════════════════════════ */
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p class="no-results">😔 لا توجد منتجات مطابقة</p>';
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            ${product.badge ? `<span class="badge-tag badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
            
            <!-- زر المفضلة -->
            <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" 
                    onclick="toggleWishlistItem(${product.id}, event)">
                <i class="fas fa-heart"></i>
            </button>
            
            <!-- صورة المنتج -->
            <div class="product-image-wrapper" onclick="showProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='default.png'">
                ${product.oldPrice ? `<span class="discount-badge">-${Math.round((1 - product.price/product.oldPrice)*100)}%</span>` : ''}
            </div>
            
            <!-- معلومات المنتج -->
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h4 class="product-name">${product.name}</h4>
                <p class="product-specs">${product.specs}</p>
                
                <!-- التقييم بالنجوم -->
                <div class="product-rating">
                    ${renderStars(product.rating)}
                </div>
                
                <!-- السعر -->
                <div class="product-price">
                    <span class="price-current">${product.price} YR </span>
                    ${product.oldPrice ? `<span class="price-old">${product.oldPrice} $</span>` : ''}
                </div>
                
                <!-- زر الإضافة -->
                <button class="btn-add" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> أضف للسلة
                </button>
            </div>
        </div>
    `).join('');
}

/* دالة مساعدة: نص الشارة */
function getBadgeText(badge) {
    const texts = { hot: '🔥 الأكثر مبيعًا', new: '✨ جديد', sale: '💥 خصم' };
    return texts[badge] || '';
}

/* دالة مساعدة: رسم النجوم */
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

/* ═══════════════════════════════════════════════════════════════
   [4] السلايدر (Banner Carousel)
   ═══════════════════════════════════════════════════════════════ */
function renderSlider() {
    const container = document.getElementById('slider-container');
    const dotsContainer = document.getElementById('slider-dots');

    container.innerHTML = banners.map((banner, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" style="background: ${banner.bg}">
            <div class="slide-content">
                <h2>${banner.title}</h2>
                <p>${banner.subtitle}</p>
                <a href="${banner.link}" class="slide-btn">${banner.btnText}</a>
            </div>
        </div>
    `).join('');

    dotsContainer.innerHTML = banners.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
    `).join('');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % banners.length);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + banners.length) % banners.length);
}

function startSliderAuto() {
    sliderInterval = setInterval(nextSlide, 5000);
}

/* ═══════════════════════════════════════════════════════════════
   [5] كروت العروض اليومية
   ═══════════════════════════════════════════════════════════════ */
function renderOffers() {
    const container = document.getElementById('offers-grid');
    if (!container) return;

    container.innerHTML = dailyOffers.map(offer => `
        <div class="offer-card">
            <div class="offer-discount">-${offer.discount}%</div>
            <img src="${offer.image}" alt="${offer.name}" onerror="this.src='default.png'">
            <h4>${offer.name}</h4>
            <div class="offer-price">
                <span class="price-current">${offer.price} YR</span>
                <span class="price-old">${offer.oldPrice} YR</span>
            </div>
            <span class="offer-time"><i class="fas fa-clock"></i> ${offer.timeLeft}</span>
            <button class="btn-offer" onclick="addToCart(${offer.id})">اطلب الآن</button>
        </div>
    `).join('');
}

/* ═══════════════════════════════════════════════════════════════
   [6] العدّاد التنازلي للعروض
   ═══════════════════════════════════════════════════════════════ */
function startCountdown() {
    // نهاية العرض: نهاية اليوم الحالي
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ═══════════════════════════════════════════════════════════════
   [7] البحث الفوري
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsBox = document.getElementById('search-results');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 1) {
            resultsBox.innerHTML = '';
            resultsBox.classList.remove('show');
            return;
        }
        
        const allProducts = [...phones, ...modems];
        const results = allProducts.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query)
        ).slice(0, 6);
        
        if (results.length === 0) {
            resultsBox.innerHTML = '<div class="no-results">لا توجد نتائج</div>';
        } else {
            resultsBox.innerHTML = results.map(p => `
                <div class="search-result-item" onclick="showProductModal(${p.id})">
                    <img src="${p.image}" onerror="this.src='default.png'">
                    <div>
                        <p>${p.name}</p>
                        <span>${p.price} $</span>
                    </div>
                </div>
            `).join('');
        }
        resultsBox.classList.add('show');
    });
    
    // إخفاء النتائج عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mad')) {
            resultsBox.classList.remove('show');
        }
    });
});

/* ═══════════════════════════════════════════════════════════════
   [8] الفلترة
   ═══════════════════════════════════════════════════════════════ */
function filterProducts(category, btn) {
    // تحديث الزر النشط
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // الفلترة
    let products = [];
    if (category === 'all') {
        products = [...phones, ...modems];
    } else if (category === 'modem') {
        products = modems;
    } else {
        products = phones.filter(p => p.category === category);
    }
    
    // عرض في كلا الحاويتين حسب الفئة
    if (category === 'modem') {
        renderProducts(modems, 'phones-grid');
        document.getElementById('modems-grid').innerHTML = '';
    } else if (category === 'all') {
        renderProducts(phones, 'phones-grid');
        renderProducts(modems, 'modems-grid');
    } else {
        renderProducts(products, 'phones-grid');
        document.getElementById('modems-grid').innerHTML = '';
    }
    
    // التمرير لقسم الهواتف
    document.getElementById('phones').scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════════════
   [9] سلة المشتريات
   ═══════════════════════════════════════════════════════════════ */
function addToCart(productId) {
    const product = [...phones, ...modems].find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`✅ تمت إضافة "${product.name}" إلى السلة`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">🛒 السلة فارغة</p>';
        cartTotal.textContent = '0 YR';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" onerror="this.src='default.png'">
            <div class="cart-item-info">
                <p>${item.name}</p>
                <span>${item.quantity} × ${item.price} $</span>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total + ' $';
}

function saveCart() {
    localStorage.setItem('bashar_cart', JSON.stringify(cart));
}

function toggleCart() {
    document.getElementById('cart-panel').classList.toggle('open');
}

/* ═══════════════════════════════════════════════════════════════
   [9-B] إتمام الشراء وإرسال الطلب عبر واتساب
   ═══════════════════════════════════════════════════════════════ */

/* رقم الواتساب - عدّله حسب رغبتك (بدون + وبدون أصفار في البداية) */
const WHATSAPP_NUMBER = "967717255871";  // ← غيّر الرقم هنا

function checkout() {
    // التحقق من أن السلة ليست فارغة
    if (cart.length === 0) {
        showToast('⚠️ السلة فارغة! أضف منتجات أولاً', 'warning');
        return;
    }
    
    // حساب الإجمالي
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // بناء رسالة الواتساب
    const message = buildWhatsAppMessage(cart, total);
    
    // إنشاء رابط الواتساب
    // wa.me هو الرابط الرسمي لواتساب (يعمل على الجوال والكمبيوتر)
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // فتح الواتساب في نافذة جديدة
    window.open(whatsappURL, '_blank');
    
    // إشعار للمستخدم
    showToast('✅ تم إرسال طلبك إلى واتساب! سيتم التواصل معك قريبًا', 'success');
    
    // تفريغ السلة بعد الإرسال (اختياري - يمكن حذفه إذا أردت الاحتفاظ بالمنتجات)
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
        toggleCart();
    }, 1500); // بعد 1.5 ثانية
}

/* ─────────────────────────────────────────────────────────────
   دالة بناء رسالة الواتساب بتنسيق احترافي
   ───────────────────────────────────────────────────────────── */
function buildWhatsAppMessage(cart, total) {
    // ترويسة الرسالة
    let message = "🛒 *طلب جديد من الوكالة الذهبية*\n";
    message += "━━━━━━━━━━━━━━━━━━━━\n\n";
    
    // قائمة المنتجات
    message += "📦 *تفاصيل الطلب:*\n\n";
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   🏢 الشركة: ${item.brand}\n`;
        message += `   📊 الكمية: ${item.quantity}\n`;
        message += `   💰 السعر: ${item.price}  × ${item.quantity} = ${item.price * item.quantity} YR\n\n`;
    });
    
    message += "━━━━━━━━━━━━━━━━━━━━\n";
    message += `💵 *الإجمالي:* ${total} YR\n`;
    message += "━━━━━━━━━━━━━━━━━━━━\n\n";
    
    // معلومات العميل (سنطلبها لاحقًا)
    message += "👤 *معلومات العميل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الهاتف: \n\n";
    
    message += "شكرًا لكم 🌟";
    
    return message;
}

/* ═══════════════════════════════════════════════════════════════
   [10] المفضلة (Wishlist)
   ═══════════════════════════════════════════════════════════════ */
function toggleWishlistItem(productId, event) {
    event.stopPropagation();
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showToast('❤️ تمت الإضافة للمفضلة', 'success');
    } else {
        wishlist.splice(index, 1);
        showToast('💔 تمت الإزالة من المفضلة', 'info');
    }
    
    localStorage.setItem('bashar_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    
    // إعادة عرض المنتجات لتحديث الأزرار
    renderProducts(phones, 'phones-grid');
    renderProducts(modems, 'modems-grid');
}

function updateWishlistUI() {
    const count = document.getElementById('wishlist-count');
    if (count) count.textContent = wishlist.length;
}

function toggleWishlist() {
    if (wishlist.length === 0) {
        showToast('💔 المفضلة فارغة', 'info');
        return;
    }
    showToast(`❤️ لديك ${wishlist.length} منتج في المفضلة`, 'info');
}

/* ═══════════════════════════════════════════════════════════════
   [11] نافذة تفاصيل المنتج (Modal)
   ═══════════════════════════════════════════════════════════════ */
function showProductModal(productId) {
    const product = [...phones, ...modems].find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" onerror="this.src='default.png'">
            </div>
            <div class="modal-details">
                <span class="product-brand">${product.brand}</span>
                <h2>${product.name}</h2>
                <div class="product-rating">${renderStars(product.rating)}</div>
                <p class="modal-specs">${product.specs}</p>
                
                <div class="modal-price">
                    <span class="price-current">${product.price} YR</span>
                    ${product.oldPrice ? `<span class="price-old">${product.oldPrice} $</span>` : ''}
                </div>
                
                <div class="modal-actions">
                    <button class="btn-add" onclick="addToCart(${product.id}); closeModal();">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                    <button class="btn-wishlist ${wishlist.includes(product.id) ? 'active' : ''}" 
                            onclick="toggleWishlistItem(${product.id}, event)">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modal-overlay').classList.remove('show');
    document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════════
   [12] الإشعارات (Toast Notifications)
   ═══════════════════════════════════════════════════════════════ */
function showToast(message, type = 'info') {
    // حذف أي إشعار قديم
    const old = document.querySelector('.toast');
    if (old) old.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ═══════════════════════════════════════════════════════════════
   [13] الوضع الليلي/النهاري
   ═══════════════════════════════════════════════════════════════ */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('bashar_theme', isDark ? 'dark' : 'light');
    
    const icon = document.getElementById('theme-icon');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function loadTheme() {
    const theme = localStorage.getItem('bashar_theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = 'fas fa-sun';
    }
}

/* ═══════════════════════════════════════════════════════════════
   [14] زر العودة للأعلى
   ═══════════════════════════════════════════════════════════════ */
function setupScrollTop() {
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scroll-top');
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
