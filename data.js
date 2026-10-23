/* ═══════════════════════════════════════════════════════════════
   ملف البيانات - جميع منتجات المتجر
   ═══════════════════════════════════════════════════════════════ */


/* ----------------------------------------------------------------
   [1] الهواتف الذكية (15 شركة)
   category: flagship | midrange | budget
   ---------------------------------------------------------------- */
const phones = [
   /* ─── Apple ─── */
   { id: 1, name: "iPhone 18 Pro Max", brand: "Apple", price: 1444500, oldPrice:null, category: "flagship", rating: 5, badge: "hot", image: "images/products/Iphone.PNG", specs: "18 Pro Max - 1TB " },
   /* ─── Samsung Galaxy S Series ─── */
   { id: 2, name: "Galaxy S25 Ultra", brand: "Samsung", price: 400000, oldPrice:500000 , category: "flagship", rating: 5, badge: "new", image: "samsung-s25-ultra.png", specs: "Snapdragon 8 Elite - 256GB - كاميرا 200MP" },
   { id: 3, name: "Galaxy S25 FE", brand: "Samsung", price: 200000, oldPrice: 250000, category: "midrange", rating: 4, badge: "new", image: "samsung-s25-fe.png", specs: "Exynos 2400 - 128GB - كاميرا 50MP" },
   { id: 4, name: "Galaxy S24 Ultra", brand: "Samsung", price: 347750, oldPrice: 400000, category: "flagship", rating: 5, badge: "hot", image: "S24.png", specs: "Snapdragon 8 Gen 3 - 256GB - كاميرا 200MP" },
   { id: 5, name: "Galaxy S23+", brand: "Samsung", price: 200000, oldPrice: null, category: "flagship", rating: 5, badge: "sale", image: "S24.png", specs: "Exynos 2400 - 256GB - كاميرا 50MP" },
   { id: 6, name: "Galaxy S23 Ultra", brand: "Samsung", price: 240000, oldPrice: null, category: "flagship", rating: 5, badge: "sale", image: "samsung-s23-ultra.png", specs: "Snapdragon 8 Gen 2 - 256GB - كاميرا 200MP" },
   { id: 7, name: "Galaxy S22 Ultra", brand: "Samsung", price: 214000, oldPrice: null, category: "flagship", rating: 4, badge: "sale", image: "samsung-s22-ultra.png", specs: "Snapdragon 8 Gen 1 - 512GB - كاميرا 108MP" },
   { id: 8, name: "Galaxy S21 Ultra", brand: "Samsung", price: 145000, oldPrice: null, category: "flagship", rating: 4, badge: null, image: "S21ULTRA.png", specs: "Exynos 2100 - 256GB - كاميرا 108MP" },
   { id: 9, name: "Galaxy S21 FE", brand: "Samsung", price: 107000, oldPrice: null, category: "midrange", rating: 4, badge: "sale", image: "samsung-s21-fe.png", specs: "Snapdragon 888 - 128GB - كاميرا 12MP" },
   { id: 10, name: "Galaxy S20 Ultra", brand: "Samsung", price: 115000, oldPrice: null, category: "flagship", rating: 4, badge: null, image: "samsung-s20-ultra.png", specs: "Exynos 990 - 128GB - كاميرا 108MP" },
   { id: 11, name: "Galaxy S20", brand: "Samsung", price: 75000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "samsung-s20.png", specs: "Exynos 990 - 128GB - كاميرا 64MP" },

   /* ─── Samsung Galaxy Note Series ─── */
   { id: 12, name: "Galaxy Note 20", brand: "Samsung", price: 100000, oldPrice: null, category: "flagship", rating: 4, badge: null, image: "samsung-note20.png", specs: "Exynos 990 - 256GB - كاميرا 64MP" },

   /* ─── Samsung Galaxy A Series ─── */
   { id: 13, name: "Galaxy A54", brand: "Samsung", price: 700000, oldPrice: null, category: "midrange", rating: 4, badge: "sale", image: "A54.png", specs: "Exynos 1380 - 128GB - كاميرا 50MP" },
   { id: 14, name: "Galaxy A50", brand: "Samsung", price: 0, oldPrice: null, category: "budget", rating: 3, badge: null, image: "samsung-a50.png", specs: "Exynos 9610 - 128GB - كاميرا 25MP" },
   { id: 15, name: "Galaxy A34", brand: "Samsung", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "A34.png", specs: "Dimensity 1080 - 128GB - كاميرا 48MP" },
   { id: 16, name: "Galaxy A35", brand: "Samsung", price: 320, oldPrice: null, category: "midrange", rating: 4, badge: "new", image: "A35.png", specs: "Exynos 1380 - 128GB - كاميرا 50MP" },
   { id: 17, name: "Galaxy A36", brand: "Samsung", price: 70000, oldPrice: null, category: "midrange", rating: 4, badge: "new", image: "samsung-a36.png", specs: "Snapdragon 6 Gen 3 - 128GB - كاميرا 50MP" },
   { id: 18, name: "Galaxy A21", brand: "Samsung", price: 150, oldPrice: null, category: "budget", rating: 3, badge: "sale", image: "A21.png", specs: "Helio P35 - 64GB - كاميرا 13MP" },
   { id: 19, name: "Galaxy A17", brand: "Samsung", price: 180, oldPrice: null, category: "budget", rating: 3, badge: null, image: "A17.png", specs: "Snapdragon 695 - 128GB - كاميرا 50MP" },
   { id: 20, name: "Galaxy A16", brand: "Samsung", price: 170, oldPrice: null, category: "budget", rating: 3, badge: "sale", image: "M4.png", specs: "Helio G99 - 128GB - كاميرا 50MP" },
   { id: 21, name: "Galaxy xcover", brand: "Samsung", price: 30000, oldPrice: null, category: "budget", rating: 3, badge: null, image: "XCOVER.png", specs: "Helio G99 - 128GB - كاميرا 50MP" },

   /* ─── باقي الشركات ─── */
   /* ─── Samsung Galaxy M Series ─── */

   { id: 35, name: "Galaxy M10s", brand: "LT", price: 55000, oldPrice: null, category: "budget", rating: 3, badge: null, image: "M10.png", specs: "Exynos 7884B - 32GB - شاشة 6.4 AMOLED" },
   { id: 36, name: "Galaxy M4", brand: "LT", price: 35000, oldPrice: null, category: "budget", rating: 3, badge: null, image: "M4.png", specs: "Snapdragon 450 - 32GB - بطارية 5000mAh" },
   { id: 37, name: "Galaxy M7", brand: "LT", price: 0, oldPrice: null, category: "budget", rating: 3, badge: null, image: "images/products/", specs: "Snapdragon 450 - 64GB - بطارية 5000mAh" },
   { id: 38, name: "Galaxy M15s", brand: "LT", price: 56000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "LT15.png", specs: "Snapdragon 680 - 128GB - بطارية 6000mAh" },
   { id: 39, name: "Galaxy M15i", brand: "LT", price: 51000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "LT15i.PNG", specs: "Dimensity 6100+ - 128GB - شاشة AMOLED" },
   { id: 40, name: "Galaxy M16", brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: "new", image: "lt16.png", specs: "Dimensity 6300 - 128GB - شاشة 6.7 AMOLED - IP54" },
   { id: 41, name: "Galaxy M16s", brand: "LT", price: 53000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "images/products/", specs: "Dimensity 6300 - 128GB - بطارية 5000mAh" },
   { id: 42, name: "Galaxy M17", brand: "LT", price: 65000, oldPrice: null, category: "midrange", rating: 4, badge: "new", image: "LT17.PNG", specs: "Exynos 1330 - 128GB - كاميرا 50MP OIS - شاشة AMOLED" },
   { id: 43, name: "Galaxy M17s", brand: "LT", price: 63000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "M40.PNG", specs: "Exynos 1330 - 128GB - بطارية 5000mAh" },
   { id: 44, name: "Galaxy M20s", brand: "LT", price: 0, oldPrice: null, category: "budget", rating: 3, badge: null, image: "M20.PNG", specs: "Snapdragon 450 - 64GB - بطارية 5000mAh" },
   { id: 45, name: "Galaxy M25 Plus", brand: "LT", price: 65000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "LT25PLUS.PNG", specs: "Exynos 7904 - 128GB - بطارية 5000mAh" },
   { id: 46, name: "Galaxy M40 Plus", brand: "LT", price: 97000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "M40.PNG", specs: "Snapdragon 675 - 128GB - كاميرا 48MP" },
   { id: 47, name: "Galaxy M45", brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "images/products/", specs: "Exynos 1380 - 128GB - شاشة AMOLED - 5G" },
   { id: 48, name: "Galaxy M50 Plus", brand: "LT", price: 98000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "M50.png", specs: "Snapdragon 750G - 128GB - بطارية 7000mAh" },
   { id: 49, name: "Galaxy M60 Plus", brand: "LT", price: 0, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "images/products/", specs: "Snapdragon 778G - 128GB - شاشة Super AMOLED" },
   { id: 22, name: "infnex-hot60", brand: "Xiaomi", price: 100000, oldPrice: null, category: "flagship", rating: 4, badge: "sale", image: "infnaxHot60.png", specs: "Snapdragon 8 Gen 3 - 256GB" },
   { id: 23, name: "TAP-A", brand: "SAMSUNG", price: 900, oldPrice: null, category: "flagship", rating: 4, badge: null, image: "TabA.png", specs: "Kirin 9000s - 256GB" },
   { id: 24, name: "ETEL-P66", brand: "ETEL", price: 65000, oldPrice: null, category: "flagship", rating: 5, badge: "hot", image: "etelP66.png", specs: "Snapdragon 8 Gen 3 - 256GB" },
   { id: 25, name: "ETEL-P65", brand: "ETEL", price: 63000, oldPrice: null, category: "flagship", rating: 5, badge: "new", image: "etelp65.png", specs: "Tensor G3 - 128GB" },
   { id: 26, name: "REDME-X10 5G", brand: "REDME", price:40000 , oldPrice: null, category: "midrange", rating: 4, badge: null, image: "REDME10X.png", specs: "Dimensity 9300 - 256GB" },
   { id: 27, name: "REDME11", brand: "REDME", price: 50000, oldPrice: null, category: "midrange", rating: 4, badge: "sale", image: "REDME11.png", specs: "Dimensity 9300 - 256GB" },
   { id: 28, name: "REDME-NOT12PRO+", brand: "REDME", price: 100000, oldPrice: null, category: "midrange", rating: 4, badge: null, image: "REDMENOT12PRO.png", specs: "Snapdragon 8 Gen 3 - 256GB" },
   { id: 29, name: "Realme 8", brand: "REDME", price: 45000, oldPrice: null, category: "midrange", rating: 4, badge: "sale", image: "realme.png", specs: "Snapdragon 8 Gen 3 - 256GB" },
   { id: 30, name: "REDME13POR+", brand: "REDME", price:160000, oldPrice: null, category: "budget", rating: 3, badge: null, image: "redme12pro+.png", specs: "Snapdragon 695 - 128GB" },
   { id: 31, name: "Motorola Edge ", brand: "Motorola", price: 1.0, oldPrice: null, category: "midrange", rating: 4, badge: "sale", image: "motorola.png", specs: "Snapdragon 7 Gen 3 - 256GB" },
   { id: 32, name: "tab-usa", brand: "SAMSUNG", price: 1300, oldPrice: null, category: "flagship", rating: 5, badge: "new", image: "tapUSA.png", specs: "Snapdragon 1 Gen 3 - 64GB" },
   { id: 33, name: "REDME14C", brand: "REDME", price: 1000, oldPrice: null, category: "flagship", rating: 5, badge: "hot", image: "redme14C.png", specs: "Snapdragon 2 Gen 3 - 256GB" },
  
];
/* ----------------------------------------------------------------
   [2] موديمات الإنترنت
   ---------------------------------------------------------------- */
const modems = [
   /* ─── موديمات موجودة مسبقاً ─── */
   /* ─── ZTE موديمات محمولة ─── */
   { id: 101, name: "COOLpad", brand: "coolpad", price: 23500, oldPrice: null, category: "modem", rating: 4, badge: "new", image: "modem-coolpad.png", specs: "4G LTE - Wi-Fi 6 - بطارية 10000mAh - 26 ساعة" },
   { id: 102, name: "ZTE الحديث", brand: "ZTE", price: 25000, oldPrice: null, category: "modem", rating: 4, badge: null, image: "modem-zte-u30.png", specs: "5G - Wi-Fi 6 - سرعة 1200Mbps" },
   { id: 103, name: "فالكون", brand: "VORTEX", price: 32000, oldPrice: null, category: "modem", rating: 5, badge: "hot", image: "modem-falcon-3308", specs: "5G - 4x4 MIMO - Wi-Fi 6" },
   { id: 104, name: "فورتيكس-5", brand: "VORTYX", price: 0, oldPrice: null, category: "modem", rating: 5, badge: "hot", image: "VORTEX5.png", specs: "5G - Wi-Fi 6 - بطارية 10000mAh - شاشة لمس" },
   { id: 105, name: "فورتيكس-3", brand: "VORTYX", price: 0, oldPrice: null, category: "modem", rating: 5, badge: "hot", image: "modem-forti-511f.png", specs: "5G - Wi-Fi 6 - بطارية 10000mAh - شاشة لمس" },

   /* ─── SAM (Fortinet) موديمات ─── */
  
   /* ─── Coolpad موديمات ─── */
   

   /* ─── Falcon موديمات ─── */
  /* { id: 115, name: "F0", brand: "Falcon", price: 0, oldPrice: null, category: "modem", rating: 4, badge: null, image: "images/products/modem-falcon-3308.png", specs: "4G/5G - هوائي نافذة MiMo - بطارية 2930mAh" },
   { id: 116, name: "F0", brand: "Falcon", price: 0, oldPrice: null, category: "modem", rating: 4, badge: null, image: "images/products/modem-falcon-3306.png", specs: "4G - هوائي سطح IP66 - بطارية 2930mAh" },
   { id: 117, name: "Falcon Evo 5G", brand: "Falcon", price: 29000, oldPrice: null, category: "modem", rating: 5, badge: "new", image: "images/products/modem-falcon-evo.png", specs: "5G - سرعة 1800Mbps - بطارية 4500mAh" }*/
    
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
      subtitle: "حيث تجتمع الفخامة وسعر المناسب",
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
      subtitle: "لكل الطلبات إلى جميع المحافظات",
      btnText: "اطلب الآن",
      link: "#contact",
      bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
   }
];

/* ----------------------------------------------------------------
   [4] العروض اليومية (كروت خاصة)
   ---------------------------------------------------------------- */
const dailyOffers = [
   { id: 1, name: "iPhone 18 Pro", price: 1400000, oldPrice: 1500000, discount: 10, image: "Iphone.PNG", timeLeft: "ينتهي اليوم" },
   { id: 4, name: "Galaxy S24", price: 347000, oldPrice: 400000, discount: 25, image: "S24.png", timeLeft: "ينتهي اليوم" },
   { id: 2, name: "S25FE", price: 200000, oldPrice: 500000, discount: 25, image: "S25FE.png", timeLeft: "ينتهي اليوم" },
   { id: 4, name: "موديم سام فورجي", price: 29000, oldPrice: 33000, discount: 45, image: "SAM.png", timeLeft: "ينتهي اليوم" }
];
/* ═══════════════════════════════════════════════════════════════
   ملف البيانات - جميع منتجات المتجر
   ═══════════════════════════════════════════════════════════════ */

/* ----------------------------------------------------------------
   [1] الهواتف الذكية
   category: flagship | midrange | budget
   ---------------------------------------------------------------- */

/* ─── Samsung Galaxy M Series ─── */
