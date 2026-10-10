/* ═══════════════════════════════════════════════════════════════
   ملف البيانات - جميع منتجات المتجر
   ═══════════════════════════════════════════════════════════════ */


/* ----------------------------------------------------------------
   [1] الهواتف الذكية (15 شركة)
   category: flagship | midrange | budget
   ---------------------------------------------------------------- */
const phones= [
    /* ─── Apple ─── */
    { id: 1,  name: "iPhone 15 Pro Max",  brand: "Apple",    price: 1200, oldPrice: 1400, category: "flagship", rating: 5, badge: "hot",   image: "images/products/apple.png",    specs: "A17 Pro - 256GB - كاميرا 48MP" },

    /* ─── Samsung Galaxy S Series ─── */
    { id: 2,  name: "Galaxy S25 Ultra",   brand: "Samsung",  price: 400000, oldPrice: 1450, category: "flagship", rating: 5, badge: "new",   image: "images/products/samsung-s25-ultra.png", specs: "Snapdragon 8 Elite - 256GB - كاميرا 200MP" },
    { id: 3,  name: "Galaxy S25 FE",      brand: "Samsung",  price: 200000,  oldPrice: 800,  category: "midrange", rating: 4, badge: "new",   image: "images/products/samsung-s25-fe.png",    specs: "Exynos 2400 - 128GB - كاميرا 50MP" },
    { id: 4,  name: "Galaxy S24 Ultra",   brand: "Samsung",  price: 347750, oldPrice: 1300, category: "flagship", rating: 5, badge: "hot",   image: "images/products/samsung-s24-ultra.png", specs: "Snapdragon 8 Gen 3 - 256GB - كاميرا 200MP" },
    { id: 5,  name: "Galaxy S23+",        brand: "Samsung",  price:200000,  oldPrice: 1000, category: "flagship", rating: 5, badge: "sale",  image: "images/products/samsung-s24.png",       specs: "Exynos 2400 - 256GB - كاميرا 50MP" },
    { id: 6,  name: "Galaxy S23 Ultra",   brand: "Samsung",  price: 240000,  oldPrice: 1100, category: "flagship", rating: 5, badge: "sale",  image: "images/products/samsung-s23-ultra.png", specs: "Snapdragon 8 Gen 2 - 256GB - كاميرا 200MP" },
    { id: 7,  name: "Galaxy S22 Ultra",   brand: "Samsung",  price: 214000,  oldPrice: 950,  category: "flagship", rating: 4, badge: "sale",  image: "images/products/samsung-s22-ultra.png", specs: "Snapdragon 8 Gen 1 - 512GB - كاميرا 108MP" },
    { id: 8,  name: "Galaxy S21 Ultra",   brand: "Samsung",  price: 145000,  oldPrice: 800,  category: "flagship", rating: 4, badge: null,    image: "images/products/samsung-s21-ultra.png", specs: "Exynos 2100 - 256GB - كاميرا 108MP" },
    { id: 9,  name: "Galaxy S21 FE",      brand: "Samsung",  price: 107000,  oldPrice: 550,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/samsung-s21-fe.png",    specs: "Snapdragon 888 - 128GB - كاميرا 12MP" },
    { id: 10, name: "Galaxy S20 Ultra",   brand: "Samsung",  price: 115000,  oldPrice: 700,  category: "flagship", rating: 4, badge: null,    image: "images/products/samsung-s20-ultra.png", specs: "Exynos 990 - 128GB - كاميرا 108MP" },
    { id: 11, name: "Galaxy S20",         brand: "Samsung",  price: 75000,  oldPrice: 550,  category: "midrange", rating: 4, badge: null,    image: "images/products/samsung-s20.png",       specs: "Exynos 990 - 128GB - كاميرا 64MP" },

    /* ─── Samsung Galaxy Note Series ─── */
    { id: 12, name: "Galaxy Note 20",     brand: "Samsung",  price: 100000,  oldPrice: 150000,  category: "flagship", rating: 4, badge: null,    image: "images/products/samsung-note20.png",    specs: "Exynos 990 - 256GB - كاميرا 64MP" },

    /* ─── Samsung Galaxy A Series ─── */
    { id: 13, name: "Galaxy A54",         brand: "Samsung",  price: 70000,  oldPrice: 450,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/samsung-a54.png",       specs: "Exynos 1380 - 128GB - كاميرا 50MP" },
    { id: 14, name: "Galaxy A50",         brand: "Samsung",  price: 0,  oldPrice: 280,  category: "budget",   rating: 3, badge: null,    image: "images/products/samsung-a50.png",       specs: "Exynos 9610 - 128GB - كاميرا 25MP" },
    { id: 15, name: "Galaxy A34",         brand: "Samsung",  price: 0,  oldPrice: 380,  category: "midrange", rating: 4, badge: null,    image: "images/products/samsung-a34.png",       specs: "Dimensity 1080 - 128GB - كاميرا 48MP" },
    { id: 16, name: "Galaxy A35",         brand: "Samsung",  price: 320,  oldPrice: 400,  category: "midrange", rating: 4, badge: "new",   image: "images/products/samsung-a35.png",       specs: "Exynos 1380 - 128GB - كاميرا 50MP" },
    { id: 17, name: "Galaxy A36",         brand: "Samsung",  price: 70000,  oldPrice: null, category: "midrange", rating: 4, badge: "new",   image: "images/products/samsung-a36.png",       specs: "Snapdragon 6 Gen 3 - 128GB - كاميرا 50MP" },
    { id: 18, name: "Galaxy A21",         brand: "Samsung",  price: 150,  oldPrice: 220,  category: "budget",   rating: 3, badge: "sale",  image: "images/products/samsung-a21.png",       specs: "Helio P35 - 64GB - كاميرا 13MP" },
    { id: 19, name: "Galaxy A17",         brand: "Samsung",  price: 180,  oldPrice: 230,  category: "budget",   rating: 3, badge: null,    image: "images/products/samsung-a17.png",       specs: "Snapdragon 695 - 128GB - كاميرا 50MP" },
    { id: 20, name: "Galaxy A16",         brand: "Samsung",  price: 170,  oldPrice: 220,  category: "budget",   rating: 3, badge: "sale",  image: "images/products/samsung-a16.png",       specs: "Helio G99 - 128GB - كاميرا 50MP" },
    { id: 21, name: "Galaxy A15",         brand: "Samsung",  price: 100,  oldPrice: 200,  category: "budget",   rating: 3, badge: null,    image: "images/products/samsung-a15.png",       specs: "Helio G99 - 128GB - كاميرا 50MP" },

    /* ─── باقي الشركات ─── */
 /* ─── Samsung Galaxy M Series ─── */

    { id: 35, name: "Galaxy M10s",      brand: "LT", price:55000 , oldPrice: null, category: "budget",   rating: 3, badge: null,   image: "images/products/LT10.png", specs: "Exynos 7884B - 32GB - شاشة 6.4 AMOLED" },
    { id: 36, name: "Galaxy M4",        brand: "LT", price: 35000, oldPrice: null, category: "budget",   rating: 3, badge: null,   image: "images/products/", specs: "Snapdragon 450 - 32GB - بطارية 5000mAh" },
    { id: 37, name: "Galaxy M7",        brand: "LT", price: 0, oldPrice: null, category: "budget",   rating: 3, badge: null,   image: "images/products/", specs: "Snapdragon 450 - 64GB - بطارية 5000mAh" },
    { id: 38, name: "Galaxy M15s",      brand: "LT", price: 56000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Snapdragon 680 - 128GB - بطارية 6000mAh" },
    { id: 39, name: "Galaxy M15i",      brand: "LT", price: 51000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/LT15.PNG", specs: "Dimensity 6100+ - 128GB - شاشة AMOLED" },
    { id: 40, name: "Galaxy M16",       brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: "new",  image: "images/products/", specs: "Dimensity 6300 - 128GB - شاشة 6.7 AMOLED - IP54" },
    { id: 41, name: "Galaxy M16s",      brand: "LT", price: 53000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Dimensity 6300 - 128GB - بطارية 5000mAh" },
    { id: 42, name: "Galaxy M17",       brand: "LT", price: 65000, oldPrice: null, category: "midrange", rating: 4, badge: "new",  image: "images/products/LT17.PNG", specs: "Exynos 1330 - 128GB - كاميرا 50MP OIS - شاشة AMOLED" },
    { id: 43, name: "Galaxy M17s",      brand: "LT", price: 63000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Exynos 1330 - 128GB - بطارية 5000mAh" },
    { id: 44, name: "Galaxy M20s",      brand: "LT", price: 0, oldPrice: null, category: "budget",   rating: 3, badge: null,   image: "images/products/LT10.PNG", specs: "Snapdragon 450 - 64GB - بطارية 5000mAh" },
    { id: 45, name: "Galaxy M25 Plus",  brand: "LT", price: 65000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/LT25PLUS.PNG", specs: "Exynos 7904 - 128GB - بطارية 5000mAh" },
    { id: 46, name: "Galaxy M40 Plus",  brand: "LT", price: 97000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Snapdragon 675 - 128GB - كاميرا 48MP" },
    { id: 47, name: "Galaxy M45",       brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Exynos 1380 - 128GB - شاشة AMOLED - 5G" },
    { id: 48, name: "Galaxy M50 Plus",  brand: "LT", price: 98000, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/M50.png", specs: "Snapdragon 750G - 128GB - بطارية 7000mAh" },
    { id: 49, name: "Galaxy M60 Plus",  brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: null,   image: "images/products/", specs: "Snapdragon 778G - 128GB - شاشة Super AMOLED" },
    { id: 22, name: "0",      brand: "Xiaomi",   price: 800,  oldPrice: 900,  category: "flagship", rating: 4, badge: "sale",  image: "images/products/xiaomi.png",   specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 23, name: "Huawei P60 Pro",     brand: "Huawei",   price: 900,  oldPrice: 1000, category: "flagship", rating: 4, badge: null,    image: "images/products/huawei.png",   specs: "Kirin 9000s - 256GB" },
    { id: 24, name: "0",         brand: "OnePlus",  price: 750,  oldPrice: 850,  category: "flagship", rating: 5, badge: "hot",   image: "images/products/oneplus.png",  specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 25, name: "0", brand: "Google",   price: 950,  oldPrice: null, category: "flagship", rating: 5, badge: "new",   image: "images/products/google.png",   specs: "Tensor G3 - 128GB" },
    { id: 26, name: "0",       brand: "Oppo",     price: 850,  oldPrice: null, category: "midrange", rating: 4, badge: null,    image: "images/products/oppo.png",     specs: "Dimensity 9300 - 256GB" },
    { id: 27, name: "0",      brand: "Vivo",     price: 800,  oldPrice: 900,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/vivo.png",     specs: "Dimensity 9300 - 256GB" },
    { id: 28, name: "H0",  brand: "Honor",    price: 780,  oldPrice: null, category: "midrange", rating: 4, badge: null,    image: "images/products/honor.png",    specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 29, name: "Realme 8",    brand: "Realme",   price: 650,  oldPrice: 750,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/realme.png",   specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 30, name: "Nokia 105",         brand: "Nokia",    price: 5000,  oldPrice: null, category: "budget",   rating: 3, badge: null,    image: "images/products/nokia.png",    specs: "Snapdragon 695 - 128GB" },
    { id: 31, name: "Motorola Edge ",   brand: "Motorola", price: 600,  oldPrice: 700,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/motorola.png", specs: "Snapdragon 7 Gen 3 - 256GB" },
    { id: 32, name: "Sony Xperia 1 VI",   brand: "Sony",     price: 1300, oldPrice: null, category: "flagship", rating: 5, badge: "new",   image: "images/products/sony.png",     specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 33, name: "Asus ROG Phone 8",   brand: "Asus",     price: 1000, oldPrice: 1100, category: "flagship", rating: 5, badge: "hot",   image: "images/products/asus.png",     specs: "Snapdragon 8 Gen 3 - 512GB" },
    { id: 34, name: "Nothing Phone (2a)", brand: "Nothing",  price: 400,  oldPrice: 450,  category: "budget",   rating: 4, badge: "sale",  image: "images/products/nothing.png",  specs: "Dimensity 7200 Pro - 128GB" }
];
/* ----------------------------------------------------------------
   [2] موديمات الإنترنت
   ---------------------------------------------------------------- */
const modems = [
    /* ─── موديمات موجودة مسبقاً ─── */
    { id: 101, name: "Huawei 5G CPE Pro",    brand: "Huawei",  price: 300, oldPrice: 350, category: "modem", rating: 5, badge: "hot",  image: "images/products/modem-huawei.png",  specs: "5G - Wi-Fi 6 - سرعة 3.6Gbps" },
    { id: 102, name: "TP-Link Archer NX200", brand: "TP-Link", price: 200, oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-tplink.png",  specs: "5G - Wi-Fi 6 - سرعة 3.4Gbps" },
    { id: 103, name: "ZTE MC801A",           brand: "ZTE",     price: 250, oldPrice: 300, category: "modem", rating: 4, badge: "sale", image: "images/products/modem-zte.png",     specs: "5G - Wi-Fi 6 - سرعة 3.8Gbps" },
    { id: 104, name: "Netgear Nighthawk M6", brand: "Netgear", price: 400, oldPrice: null, category: "modem", rating: 5, badge: "new",  image: "images/products/modem-netgear.png", specs: "5G - Wi-Fi 6E - سرعة 4Gbps" },
    { id: 105, name: "D-Link DWR-978",       brand: "D-Link",  price: 180, oldPrice: 220, category: "modem", rating: 3, badge: "sale", image: "images/products/modem-dlink.png",   specs: "4G LTE - Wi-Fi 5 - سرعة 1.2Gbps" },

    /* ─── ZTE موديمات محمولة ─── */
    { id: 106, name: "ZTE السريع ",      brand: "ZTE",     price: 23500,   oldPrice: null, category: "modem", rating: 4, badge: "new",  image: "images/products/modem-zte-u15s.png", specs: "4G LTE - Wi-Fi 6 - بطارية 10000mAh - 26 ساعة" },
    { id: 107, name: "ZTE الحديث",           brand: "ZTE",     price: 25000,  oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-zte-u30.png",  specs: "5G - Wi-Fi 6 - سرعة 1200Mbps" },
    { id: 108, name: "00", brand: "ZTE",     price: 0,  oldPrice: null, category: "modem", rating: 4, badge: "new",  image: "images/products/modem-zte-u60.png",  specs: "5G - Wi-Fi 7 - سرعة 2900Mbps - شاشة TFT" },
    { id: 109, name: "0",            brand: "ZTE",     price: 0,  oldPrice: null, category: "modem", rating: 5, badge: "hot",  image: "images/products/modem-zte-mu5120.png", specs: "5G - Wi-Fi 6 - بطارية 10000mAh - شاشة لمس" },

    /* ─── SAM (Fortinet) موديمات ─── */
    { id: 110, name: "VORTEX-2",    brand: "VORTEX", price: 25000, oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-forti-101f.png", specs: "4G LTE Cat6 - سرعة 300Mbps" },
    { id: 111, name: "VORTEX-3 ",    brand: "VORTEX", price: 26000, oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-forti-201f.png", specs: "4G LTE Cat7 - سرعة 300Mbps" },
    { id: 112, name: "VORTEX-4",    brand: "VORTEX", price:28000 , oldPrice: null, category: "modem", rating: 5, badge: "new",  image: "images/products/modem-forti-311f.png", specs: "4G LTE Cat16 - سرعة 1Gbps" },
    { id: 113, name: "VORTEX-5",    brand: "VORTEX", price: 32000, oldPrice: null, category: "modem", rating: 5, badge: "hot",  image: "images/products/VORTEX5.png", specs: "5G - 4x4 MIMO - Wi-Fi 6" },

    /* ─── Coolpad موديمات ─── */
    { id: 114, name: "Coolpad ",       brand: "Coolpad",  price: 29000,   oldPrice: 100,  category: "modem", rating: 3, badge: "sale", image: "images/products/modem-coolpad.png",   specs: "4G LTE - Hotspot محمول - هوائي داخلي" },

    /* ─── Falcon موديمات ─── */
    { id: 115, name: "F0",           brand: "Falcon",   price: 0,  oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-falcon-3308.png", specs: "4G/5G - هوائي نافذة MiMo - بطارية 2930mAh" },
    { id: 116, name: "F0",           brand: "Falcon",   price: 0,  oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-falcon-3306.png", specs: "4G - هوائي سطح IP66 - بطارية 2930mAh" },
    { id: 117, name: "Falcon Evo 5G",         brand: "Falcon",   price: 29000,  oldPrice: null, category: "modem", rating: 5, badge: "new",  image: "images/products/modem-falcon-evo.png",  specs: "5G - سرعة 1800Mbps - بطارية 4500mAh" }
];

/* ----------------------------------------------------------------
   [2] موديمات الإنترنت (5 شركات)
   ---------------------------------------------------------------- */


/* ----------------------------------------------------------------
   [3] شرائح السلايدر (العروض الترويجية)
   ---------------------------------------------------------------- */
const banners = [
    {
        title: "  الوكالة الذهبية",
        subtitle: "خصم يصل إلى 40% على الهواتف الرائدة",
        btnText: "تسوق الآن",
        link: "#phones",
        bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        title: "📡 عالم الإنترنت بلا حدود",
        subtitle: "موديمات 5G بأحدث التقنيات وأسعار منافسة",
        btnText: "استكشف الموديمات",
        link: "#modems",
        bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        title: "💎 هواتف الفئة الفاخرة",
        subtitle: "احصل على أحدث الإصدارات بضمان سنتين",
        btnText: "اكتشف المزيد",
        link: "#phones",
        bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        title: "🚚 توصيل مجاني",
        subtitle: "لكل الطلبات فوق 500$ إلى جميع المحافظات",
        btnText: "اطلب الآن",
        link: "#contact",
        bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
];

/* ----------------------------------------------------------------
   [4] العروض اليومية (كروت خاصة)
   ---------------------------------------------------------------- */
const dailyOffers = [
    { id: 1, name: "iPhone 18 Pro",  price: 1400000,  oldPrice: 1400, discount: 30, image: "images/products/apple.png",   timeLeft: "ينتهي اليوم" },
    { id: 2, name: "Galaxy S24",     price: 400000,  oldPrice: 1100, discount: 25, image: "images/products/samsung.png", timeLeft: "ينتهي اليوم" },
    { id: 3, name: "Xiaomi 14",      price: 599,  oldPrice: 900,  discount: 35, image: "images/products/xiaomi.png",  timeLeft: "ينتهي اليوم" },
    { id: 4, name: "موديم Huawei",   price: 199,  oldPrice: 350,  discount: 45, image: "images/products/modem-huawei.png", timeLeft: "ينتهي اليوم" }
];
/* ═══════════════════════════════════════════════════════════════
   ملف البيانات - جميع منتجات المتجر
   ═══════════════════════════════════════════════════════════════ */

/* ----------------------------------------------------------------
   [1] الهواتف الذكية
   category: flagship | midrange | budget
   ---------------------------------------------------------------- */

/* ─── Samsung Galaxy M Series ─── */
