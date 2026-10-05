/* ═══════════════════════════════════════════════════════════════
   ملف البيانات - جميع منتجات المتجر
   ═══════════════════════════════════════════════════════════════ */

/* ----------------------------------------------------------------
   [1] الهواتف الذكية (15 شركة)
   category: flagship | midrange | budget
   ---------------------------------------------------------------- */
const phones = [
    { id: 1,  name: "iPhone 15 Pro Max",  brand: "Apple",    price: 1200, oldPrice: 1400, category: "flagship", rating: 5, badge: "hot",   image: "images/products/apple.png",    specs: "A17 Pro - 256GB - كاميرا 48MP" },
    { id: 2,  name: "Galaxy S24 Ultra",   brand: "Samsung",  price: 1100, oldPrice: 1300, category: "flagship", rating: 5, badge: "new",   image: "images/products/samsung.png",  specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 3,  name: "Xiaomi 14 Pro",      brand: "Xiaomi",   price: 800,  oldPrice: 900,  category: "flagship", rating: 4, badge: "sale",  image: "images/products/xiaomi.png",   specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 4,  name: "Huawei P60 Pro",     brand: "Huawei",   price: 900,  oldPrice: 1000, category: "flagship", rating: 4, badge: null,    image: "images/products/huawei.png",   specs: "Kirin 9000s - 256GB" },
    { id: 5,  name: "OnePlus 12",         brand: "OnePlus",  price: 750,  oldPrice: 850,  category: "flagship", rating: 5, badge: "hot",   image: "images/products/oneplus.png",  specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 6,  name: "Google Pixel 8 Pro", brand: "Google",   price: 950,  oldPrice: null, category: "flagship", rating: 5, badge: "new",   image: "images/products/google.png",   specs: "Tensor G3 - 128GB" },
    { id: 7,  name: "Oppo Find X7",       brand: "Oppo",     price: 850,  oldPrice: null, category: "midrange", rating: 4, badge: null,    image: "images/products/oppo.png",     specs: "Dimensity 9300 - 256GB" },
    { id: 8,  name: "Vivo X100 Pro",      brand: "Vivo",     price: 800,  oldPrice: 900,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/vivo.png",     specs: "Dimensity 9300 - 256GB" },
    { id: 9,  name: "Honor Magic 6 Pro",  brand: "Honor",    price: 780,  oldPrice: null, category: "midrange", rating: 4, badge: null,    image: "images/products/honor.png",    specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 10, name: "Realme GT 5 Pro",    brand: "Realme",   price: 650,  oldPrice: 750,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/realme.png",   specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 11, name: "Nokia XR21",         brand: "Nokia",    price: 500,  oldPrice: null, category: "budget",   rating: 3, badge: null,    image: "images/products/nokia.png",    specs: "Snapdragon 695 - 128GB" },
    { id: 12, name: "Motorola Edge 50",   brand: "Motorola", price: 600,  oldPrice: 700,  category: "midrange", rating: 4, badge: "sale",  image: "images/products/motorola.png", specs: "Snapdragon 7 Gen 3 - 256GB" },
    { id: 13, name: "Sony Xperia 1 VI",   brand: "Sony",     price: 1300, oldPrice: null, category: "flagship", rating: 5, badge: "new",   image: "images/products/sony.png",     specs: "Snapdragon 8 Gen 3 - 256GB" },
    { id: 14, name: "Asus ROG Phone 8",   brand: "Asus",     price: 1000, oldPrice: 1100, category: "flagship", rating: 5, badge: "hot",   image: "images/products/asus.png",     specs: "Snapdragon 8 Gen 3 - 512GB" },
    { id: 15, name: "Nothing Phone (2a)", brand: "Nothing",  price: 400,  oldPrice: 450,  category: "budget",   rating: 4, badge: "sale",  image: "images/products/nothing.png",  specs: "Dimensity 7200 Pro - 128GB" }
];

/* ----------------------------------------------------------------
   [2] موديمات الإنترنت (5 شركات)
   ---------------------------------------------------------------- */
const modems = [
    { id: 101, name: "Huawei 5G CPE Pro",    brand: "Huawei",  price: 300, oldPrice: 350, category: "modem", rating: 5, badge: "hot",  image: "images/products/modem-huawei.png",  specs: "5G - Wi-Fi 6 - سرعة 3.6Gbps" },
    { id: 102, name: "TP-Link Archer NX200", brand: "TP-Link", price: 200, oldPrice: null, category: "modem", rating: 4, badge: null,   image: "images/products/modem-tplink.png",  specs: "5G - Wi-Fi 6 - سرعة 3.4Gbps" },
    { id: 103, name: "ZTE MC801A",           brand: "ZTE",     price: 250, oldPrice: 300, category: "modem", rating: 4, badge: "sale", image: "images/products/modem-zte.png",     specs: "5G - Wi-Fi 6 - سرعة 3.8Gbps" },
    { id: 104, name: "Netgear Nighthawk M6", brand: "Netgear", price: 400, oldPrice: null, category: "modem", rating: 5, badge: "new",  image: "images/products/modem-netgear.png", specs: "5G - Wi-Fi 6E - سرعة 4Gbps" },
    { id: 105, name: "D-Link DWR-978",       brand: "D-Link",  price: 180, oldPrice: 220, category: "modem", rating: 3, badge: "sale", image: "images/products/modem-dlink.png",   specs: "4G LTE - Wi-Fi 5 - سرعة 1.2Gbps" }
];

/* ----------------------------------------------------------------
   [3] شرائح السلايدر (العروض الترويجية)
   ---------------------------------------------------------------- */
const banners = [
    {
        title: "🎉 عروض الجمعة البيضاء",
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
    { id: 1, name: "iPhone 15 Pro",  price: 999,  oldPrice: 1400, discount: 30, image: "images/products/apple.png",   timeLeft: "ينتهي اليوم" },
    { id: 2, name: "Galaxy S24",     price: 850,  oldPrice: 1100, discount: 25, image: "images/products/samsung.png", timeLeft: "ينتهي اليوم" },
    { id: 3, name: "Xiaomi 14",      price: 599,  oldPrice: 900,  discount: 35, image: "images/products/xiaomi.png",  timeLeft: "ينتهي اليوم" },
    { id: 4, name: "موديم Huawei",   price: 199,  oldPrice: 350,  discount: 45, image: "images/products/modem-huawei.png", timeLeft: "ينتهي اليوم" }
];