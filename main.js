// main.js

lucide.createIcons();

const htmlEl = document.documentElement;

// --- OS/Device Theme Synchronization ---
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const applyDeviceTheme = (e) => {
    const isDark = e.matches;
    htmlEl.setAttribute('data-theme', isDark ? 'dark' : 'light');
};

// Apply immediately on load
applyDeviceTheme(darkModeMediaQuery);

// Listen for live changes in device settings
darkModeMediaQuery.addEventListener('change', applyDeviceTheme);

const dictionary = {
    de: {
        nav_about: "Über uns", nav_menu: "Speisekarte", nav_why: "Warum wir", nav_reviews: "Bewertungen", nav_contact: "Kontakt", nav_order: "Bestellen", nav_call: "Anrufen",
        hero_title: "Frisch. Lecker. Schnell.", hero_subtitle: "Die beste Pizza und Döner in Bamberg, seit 1988.", hero_order: "Jetzt Bestellen", hero_menu: "Speisekarte",
        cat_title: "Unsere Produkte", cat_pizza: "Pizza", cat_doner: "Döner & Kebab", cat_hotdog: "Hotdogs", full_menu_title: "Unsere Speisekarte",
        cat_sub: "Von knuspriger Pizza über saftigen Döner bis zu leckeren Hot Dogs – bei uns ist für jeden Geschmack etwas dabei.",
        cat_p_desc: "Besondere Pizza auf besonderem Boden – mit Liebe zubereitet und für jeden Geschmack etwas dabei! Probieren Sie unsere einzigartigen Kreationen.",
        cat_d_desc: "Besonderer Döner in besonderem Brot – mit Liebe zubereitet und für jeden Geschmack etwas dabei! Probieren Sie unsere einzigartigen Kreationen.",
        cat_h_desc: "Besonderer Hotdog in besonderem Brot – mit Liebe zubereitet und für jeden Geschmack etwas dabei! Probieren Sie unsere einzigartigen Kreationen.",
        cat_order_btn: "Jetzt online bestellen",
        
        steps_title: "So einfach bestellen Sie", steps_sub: "In nur wenigen Schritten zu Ihrem Lieblingsessen – schnell, einfach und bequem",
        step1_title: "1. Wählen Sie Ihr Essen", step1_desc: "Stöbern Sie durch unsere Speisekarte und wählen Sie Ihre Lieblingsgerichte aus.",
        step2_title: "2. Bestellen Sie", step2_desc: "Rufen Sie uns an oder bestellen Sie online – schnell und unkompliziert.",
        step3_title: "3. Genießen Sie!", step3_desc: "Holen Sie Ihr frisch zubereitetes Essen ab oder lassen Sie es sich liefern.",
        
        // Doner Tab
        m_d_sub_1: "Döner Brot & Wraps",
        md_1: "Döner Kebab (Geflügel)", mp_d_1: "6,80 € / Menü: 11,80 €", mi_d_1: "Eisbergsalat, Krautsalat, Tomaten, Zwiebeln.",
        md_2: "Döner Kebab (Kalb/Rind)", mp_d_2: "6,50 € / Menü: 11,50 €", mi_d_2: "Eisbergsalat, Krautsalat, Tomaten, Zwiebeln.",
        md_3: "Dürüm Döner", mp_d_3: "7,50 € / Menü: 12,50 €", mi_d_3: "Eingewickelt mit Eisbergsalat, Krautsalat, Tomaten, Zwiebeln.",
        md_4: "Döner Sandwich (Neu!)", mp_d_4: "7,50 € / Menü: 12,50 €", mi_d_4: "Weiches Brot, ungetoastet.",
        
        m_d_sub_2: "Vegetarisch Brot & Wraps",
        mv_1: "Falafel", mp_v_1: "6,50 € / Menü: 11,50 €", mi_v_1: "Eisbergsalat, Krautsalat, Tomaten, eingelegte Gurken.",
        mv_2: "Döner Vegetarisch", mp_v_2: "6,80 € / Menü: 11,80 €", mi_v_2: "Zwiebeln, Käse, Aubergine und Paprika.",
        
        m_d_sub_3: "Tellergerichte & Boxen",
        mt_1: "Döner Teller", mp_t_1: "9,00 € / Mit Käse: 10,00 €", mi_t_1: "Pommes, Salat, Zwiebeln, Tomaten, Paprika, Fladenbrot.",
        mt_2: "Falafel Teller", mp_t_2: "10,00 € / Mit Käse: 11,00 €", mi_t_2: "Pommes, Salat, Zwiebeln, Tomaten, Paprika, Fladenbrot.",
        mt_3: "Döner/Falafel Box", mp_t_3: "6,50 € / Nur Fleisch: 7,50 €", mi_t_3: "Wahlweise mit Salat oder Pommes.",
        mt_4: "Portion Pommes", mp_t_4: "3,50 €", mi_t_4: "Wahlweise mit Ketchup oder Mayonnaise.",

        // Pizza Tab
        p_hr_1: "Pizza Variation", p_hr_2: "Stück", p_hr_3: "30 cm", p_hr_4: "36 cm",
        pz_1: "Döner", pzi_1: "Dönerfleisch, Zwiebeln, Tomaten, Soße, Käse.",
        pz_2: "Rami (Bestseller)", pzi_2: "Aubergine, Paprika, Knoblauchsoße, Kräutersoße.",
        pz_3: "Margherita", pzi_3: "Tomatensoße und Käse.",
        pz_4: "Spezial", pzi_4: "Geflügelsalami, Putenbrust, Champignons, Peperoni.",
        pz_5: "Salami", pzi_5: "Geflügelsalami.",
        pz_6: "Tonno", pzi_6: "Thunfisch, Zwiebeln.",
        pz_7: "Hawaii", pzi_7: "Ananas, Putenbrust, holländische Soße.",
        pz_8: "Tomate / Mozzarella", pzi_8: "Frische Tomaten, Rucola, Mozzarella.",
        pz_9: "Tomate Feta", pzi_9: "Feta Käse, Tomaten, Rucola, Balsamico.",
        pz_10: "Funghi", pzi_10: "Champignons.",
        pz_11: "Vegetarisch", pzi_11: "Champignons, Peperoni, Paprika, Oliven.",

        // Hotdog Tab
        m_hd_sub_1: "Top Picks (By Taha)",
        mh_1: "Rami Royal (Bestseller)", mph_1: "6,50 €", mi_h_1: "Cocktailsoße, Dönerfleisch, Zwiebeln, Tomaten, Käse.",
        mh_2: "Memo", mph_2: "6,00 €", mi_h_2: "Spezialsoße, doppelt Wurst, Käse, Zwiebeln, Petersilie.",
        mh_3: "Rami 5", mph_3: "5,50 €", mi_h_3: "Spezialsoße, Käse, Röstzwiebeln, Tomaten, eingelegte Gurken.",
        mh_4: "Rami Classic", mph_4: "5,00 €", mi_h_4: "Ketchup, Senf, Käse, Röstzwiebeln.",
        m_hd_sub_2: "Klassiker & Specials",
        mh_5: "Ohne Alles", mph_5: "2,70 €", mi_h_5: "Brot und Würstchen pur.",
        mh_6: "Ketchup / Mayo / Senf", mph_6: "3,20 €", mi_h_6: "Wahlweise eine klassische Soße.",
        mh_7: "Rot / Weiss", mph_7: "3,50 €", mi_h_7: "Ketchup & Mayonnaise.",
        mh_8: "Spezial / Mexico", mph_8: "4,00 € / Mit Käse: 4,50 €", mi_h_8: "Spezialsoße oder mexikanisch scharf.",
        mh_9: "Vegetarisch", mph_9: "4,50 €", mi_h_9: "Spezialsoße, Käse, Röstzwiebeln, Tomaten, Gurken.",
        m_images_title: "Original Speisekarte (Galerie)", m_images_sub: "Zum Vergrößern und Herunterladen auf ein Bild klicken",

        why_title: "Warum wir", why_sub: "Die Gründe, warum unsere Gäste uns seit Jahrzehnten treu bleiben",
        why_c1_title: "Mit Herz und Seele", why_c1_p: "Jedes Gericht wird mit derselben Liebe zubereitet wie für die eigene Familie.",
        why_c2_title: "Familiengeführt", why_c2_p: "Viele unserer Gäste sind seit Jahrzehnten treue Stammkunden.",
        why_c3_title: "Persönlicher Service", why_c3_p: "Bei uns werden Sie oft mit Namen begrüßt – wir kennen unsere Gäste.",
        stat_1: "Jahre Erfahrung", stat_2: "Sterne Bewertung", stat_3: "Frische Zutaten", stat_4: "Zufriedene Gäste",
        
        about_title: "Tradition Seit 1988", about_p1: "Wir sind ein Familienbetrieb, der sich 1988 in Bamberg verliebt hat.",
        about_p2: "Wir verwenden nur die frischesten Zutaten und bereiten unsere Gerichte mit Liebe zu.",
        about_stat_hours: "10:00 - 20:30", about_stat_days: "Mo - Sa", about_stat_location: "Zentrum",
        
        rev_title: "Kundenstimmen",
        footer_motto: "Authentische Pizza, saftige Döner und köstliche Hot Dogs, frisch zubereitet im Herzen von Bamberg.", footer_contact: "Kontakt & Info",
        footer_payment: "Bar, Karte, Apple/Google Pay", footer_outdoor: "Sitzplätze im Freien verfügbar • Keine Reservierung",
        footer_hours_title: "Öffnungszeiten", footer_mo_sa: "Mo - Sa:", footer_hours_open: "10:00 - 20:30", footer_su: "So:", footer_hours_closed: "Geschlossen", map_text: "Mitten im Zentrum",
        nav_maps: "Route & Navigation"
    },
    en: {
        nav_about: "About Us", nav_menu: "Full Menu", nav_why: "Why Us", nav_reviews: "Reviews", nav_contact: "Contact", nav_order: "Order", nav_call: "Call",
        hero_title: "Fresh. Delicious. Fast.", hero_subtitle: "The best Pizza and Döner in Bamberg, since 1988.", hero_order: "Order Now", hero_menu: "Menu",
        cat_title: "Our Products", cat_pizza: "Pizza", cat_doner: "Döner & Kebab", cat_hotdog: "Hotdogs", full_menu_title: "Our Full Menu",
        cat_sub: "From crispy pizza to juicy kebabs to tasty hot dogs - there is something for every taste with us.",
        cat_p_desc: "Special pizza on a special crust - prepared with love and something for every taste! Try our unique creations.",
        cat_d_desc: "Special kebab in special bread - prepared with love and something for every taste! Try our unique creations.",
        cat_h_desc: "Special hot dog in special bread - prepared with love and something for every taste! Try our unique creations.",
        cat_order_btn: "Order Online Now",
        
        steps_title: "How to order", steps_sub: "Your favorite food in just a few steps – fast, easy and convenient",
        step1_title: "1. Choose Your Food", step1_desc: "Browse through our menu and choose your favorite dishes.",
        step2_title: "2. Place Order", step2_desc: "Call us or order online – quick and uncomplicated.",
        step3_title: "3. Enjoy!", step3_desc: "Pick up your freshly prepared food or have it delivered to you.",
        
        // Doner Tab
        m_d_sub_1: "Döner Bread & Wraps",
        md_1: "Döner Kebab (Chicken)", mp_d_1: "6.80 € / Menu: 11.80 €", mi_d_1: "Iceberg lettuce, coleslaw, tomatoes, onions.",
        md_2: "Döner Kebab (Beef/Veal)", mp_d_2: "6.50 € / Menu: 11.50 €", mi_d_2: "Iceberg lettuce, coleslaw, tomatoes, onions.",
        md_3: "Dürüm Döner (Wrap)", mp_d_3: "7.50 € / Menu: 12.50 €", mi_d_3: "Wrapped in flatbread with iceberg lettuce, coleslaw, tomatoes, onions.",
        md_4: "Döner Sandwich (New!)", mp_d_4: "7.50 € / Menu: 12.50 €", mi_d_4: "Soft bread, non-toasted.",
        
        m_d_sub_2: "Vegetarian Bread & Wraps",
        mv_1: "Falafel", mp_v_1: "6.50 € / Menu: 11.50 €", mi_v_1: "Iceberg lettuce, coleslaw, tomatoes, pickles.",
        mv_2: "Döner Vegetarian", mp_v_2: "6.80 € / Menu: 11.80 €", mi_v_2: "Onions, cheese, eggplant, and bell peppers.",
        
        m_d_sub_3: "Platters & Boxes",
        mt_1: "Döner Platter", mp_t_1: "9.00 € / w/ Cheese: 10.00 €", mi_t_1: "Fries, salad, onions, tomatoes, peppers, flatbread.",
        mt_2: "Falafel Platter", mp_t_2: "10.00 € / w/ Cheese: 11.00 €", mi_t_2: "Fries, salad, onions, tomatoes, peppers, flatbread.",
        mt_3: "Döner/Falafel Box", mp_t_3: "6.50 € / Extra Meat: 7.50 €", mi_t_3: "Choice of salad or fries.",
        mt_4: "Large Fries", mp_t_4: "3.50 €", mi_t_4: "Served with ketchup or mayo.",

        // Pizza Tab
        p_hr_1: "Pizza Variation", p_hr_2: "Slice", p_hr_3: "30 cm", p_hr_4: "36 cm",
        pz_1: "Döner", pzi_1: "Döner meat, onions, tomatoes, sauce, cheese.",
        pz_2: "Rami (Bestseller)", pzi_2: "Eggplant, bell pepper, garlic sauce, herb sauce.",
        pz_3: "Margherita", pzi_3: "Tomato sauce and cheese.",
        pz_4: "Spezial", pzi_4: "Poultry salami, turkey breast, mushrooms, pepperoni.",
        pz_5: "Salami", pzi_5: "Poultry salami.",
        pz_6: "Tonno", pzi_6: "Tuna, onions.",
        pz_7: "Hawaii", pzi_7: "Pineapple, turkey breast, hollandaise sauce.",
        pz_8: "Tomato / Mozzarella", pzi_8: "Fresh tomatoes, arugula, mozzarella.",
        pz_9: "Tomato Feta", pzi_9: "Feta cheese, tomatoes, arugula, balsamico.",
        pz_10: "Funghi", pzi_10: "Mushrooms.",
        pz_11: "Vegetarian", pzi_11: "Mushrooms, pepperoni, peppers, olives.",

        // Hotdog Tab
        m_hd_sub_1: "Top Picks (By Taha)",
        mh_1: "Rami Royal (Bestseller)", mph_1: "6.50 €", mi_h_1: "Cocktail sauce, döner meat, onions, tomatoes, cheese.",
        mh_2: "Memo", mph_2: "6.00 €", mi_h_2: "Special sauce, double sausage, cheese, onions, parsley.",
        mh_3: "Rami 5", mph_3: "5.50 €", mi_h_3: "Special sauce, cheese, fried onions, pickles.",
        mh_4: "Rami Classic", mph_4: "5.00 €", mi_h_4: "Ketchup, mustard, cheese, fried onions.",
        m_hd_sub_2: "Classics & Specials",
        mh_5: "Plain", mph_5: "2.70 €", mi_h_5: "Just bread and sausage.",
        mh_6: "Ketchup / Mayo / Mustard", mph_6: "3.20 €", mi_h_6: "Choice of classic sauce.",
        mh_7: "Red / White", mph_7: "3.50 €", mi_h_7: "Ketchup & Mayonnaise.",
        mh_8: "Special / Mexico", mph_8: "4.00 € / w/ Cheese: 4.50 €", mi_h_8: "Special sauce or spicy mexican.",
        mh_9: "Vegetarian", mph_9: "4.50 €", mi_h_9: "Special sauce, cheese, fried onions, tomatoes, pickles.",
        m_images_title: "Original Printed Menu (Gallery)", m_images_sub: "Click on an image to enlarge and download",

        why_title: "Why Choose Us", why_sub: "The reasons why our guests have remained loyal to us for decades",
        why_c1_title: "With Heart and Soul", why_c1_p: "Every dish is prepared with the same love as for our own family.",
        why_c2_title: "Family Tradition", why_c2_p: "Many of our guests have been loyal regulars for decades.",
        why_c3_title: "Personal Service", why_c3_p: "You are often greeted by name - we know our guests.",
        stat_1: "Years Experience", stat_2: "Star Rating", stat_3: "Fresh Ingredients", stat_4: "Happy Guests",
        
        about_title: "Tradition Since 1988", about_p1: "We are a family business that fell in love with Bamberg.",
        about_p2: "We use only the freshest ingredients and prepare our dishes with love.",
        about_stat_hours: "10:00 AM - 8:30 PM", about_stat_days: "Mon - Sat", about_stat_location: "Center",
        
        rev_title: "Reviews",
        footer_motto: "Authentic pizza, juicy kebabs and delicious hot dogs, freshly prepared in the heart of Bamberg.", footer_contact: "Contact & Info",
        footer_payment: "Cash, Card, Apple/Google Pay", footer_outdoor: "Outdoor seating available • No reservation required",
        footer_hours_title: "Opening Hours", footer_mo_sa: "Mon - Sat:", footer_hours_open: "10:00 AM - 8:30 PM", footer_su: "Sun:", footer_hours_closed: "Closed", map_text: "Right in the<br>Center",
        nav_maps: "Route & Navigation"
    }
};

let currentLang = 'de';
const langToggleBtn = document.getElementById('langToggle');
const langDropdown = document.querySelector('.lang-dropdown');
const currentLangIcon = document.getElementById('currentLangIcon');
const currentLangText = document.getElementById('currentLangText');
const langOptions = document.querySelectorAll('.lang-option');

langToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
});

window.addEventListener('click', () => {
    langDropdown.classList.remove('open');
});

const updateLanguageDropdown = (lang) => {
    currentLangIcon.textContent = lang === 'de' ? '🇩🇪' : '🇬🇧';
    currentLangText.textContent = lang === 'de' ? 'DE' : 'EN';
    
    langOptions.forEach(opt => {
        if(opt.getAttribute('data-lang') === lang) opt.classList.add('active');
        else opt.classList.remove('active');
    });
};

const updateLanguage = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[lang][key]) {
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = '';
                element.appendChild(icon);
                element.appendChild(document.createTextNode(' ' + dictionary[lang][key]));
            } else {
                element.innerHTML = dictionary[lang][key]; 
            }
        }
    });
    document.documentElement.lang = lang;
    currentLang = lang;
    updateLanguageDropdown(lang);
};

langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = opt.getAttribute('data-lang');
        updateLanguage(selectedLang);
        langDropdown.classList.remove('open');
    });
});

// --- Tab Interactions ---
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- Render Reviews Marquee ---
const reviews = [
    { name: "Max Müller", text: "Super leckerer Döner! Immer frisch und lecker. Sehr zu empfehlen!" },
    { name: "Sarah Schmidt", text: "Beste Pizza in der Stadt! Knuspriger Teig und frische Zutaten." },
    { name: "Anna Becker", text: "Die Hotdogs sind hammer! Selbstgemacht und sehr lecker." },
    { name: "Florian Schulz", text: "Pizza wie in Italien! Wird mein neuer Lieblings-Imbiss." },
    { name: "Nina Richter", text: "Vegetarische Optionen sind toll! Die Döner Vegetarisch ist mega lecker." },
    { name: "Robert Krüger", text: "Hier gibt es den besten Döner weit und breit!" },
    { name: "Isabella Krause", text: "Die Pizza ist hammer! Wie vom italienischen Meister." },
    { name: "Ramona Ernst", text: "5 Sterne sind noch zu wenig! Absolut perfekt." }
];

const track = document.getElementById('review-track');
if (track) {
    const createStars = () => `<div class="stars">${Array(5).fill('<i data-lucide="star"></i>').join('')}</div>`;
    const generateCards = () => reviews.map(r => `
            <div class="review-card">
                ${createStars()}
                <p class="review-text">"${r.text}"</p>
                <span class="review-author">— ${r.name}</span>
            </div>
        `).join('');
    
    track.innerHTML = generateCards() + generateCards() + generateCards();
    lucide.createIcons();
}

// --- Scroll Animations ---
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

// --- Image Modal Logic ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.querySelector(".close-modal");

if (modal && closeBtn) {
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            downloadBtn.href = this.src;
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
}
