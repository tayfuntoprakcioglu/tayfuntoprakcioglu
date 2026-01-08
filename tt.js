/* =========================== 
   TAYFUN TOPRAKCIOGLU - PORTFOLIO
   Main JavaScript File
   =========================== */

(function () {
  'use strict';

  // =========================== LANGUAGE SYSTEM ===========================
  var currentLang = (navigator.language || '').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  var translations = {};

  // Load translations from external JSON file
  function loadTranslations(callback) {
    // Use 'no-cache' to ensure fresh content
    fetch('ttlang.json', { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('Failed to load translations');
        return response.json();
      })
      .then(function (data) {
        translations = data;
        if (callback) callback();
      })
      .catch(function (error) {
        console.error('Error loading translations:', error);
        // FULL FALLBACK to ensure everything works even if JSON fails
        translations = {
          tr: {
            "role": "Full Stack Developer & Digital Creator",
            "intro": "Modern web teknolojileri ve yaratıcı tasarımlarla kullanıcı odaklı dijital çözümler geliştiriyorum.",
            "btnProjects": "Projelerimi Gör",
            "btnContact": "İletişime Geç",
            "aboutTitle": "Hakkımda",
            "aboutP1": "Merhaba! Ben Tayfun Toprakçıoğlu, yazılım geliştirme, UI/UX tasarımı ve sosyal medya uzmanlığı alanlarında çalışmalar yapan bir Full Stack Developer'ım.",
            "aboutP2": "Modern web teknolojileriyle kullanıcı dostu, performanslı ve estetik çözümler üretmeyi seviyorum. Her proje benim için yeni bir öğrenme fırsatı ve yaratıcılığımı konuşturabileceğim bir tuval.",
            "aboutP3": "Clean code, best practices ve kullanıcı deneyimi prensiplerini her zaman ön planda tutuyorum.",
            "stat1": "SOSYAL MEDYA PAYLAŞIMI YAPMAYA DEVAM EDİYOR..",
            "stat2": "AKTİF KİTAP SEKTÖRÜ DENEYİMİ.",
            "stat3": "KİTAP KAPAK FOTOĞRAFI, BANNER VE SLAYT TASARIMI.",
            "stat4": "YILINDAN BERİ AÇIK KAYNAK KOD YAZIYOR..",
            "skillsTitle": "Deneyimler",
            "skill1Name": "Frontend Development",
            "skill1Desc": "Modern ve responsive kullanıcı arayüzleri geliştiriyorum.",
            "skill2Name": "Backend Development",
            "skill2Desc": "Ölçeklenebilir ve güvenli backend sistemleri kuruyorum.",
            "skill3Name": "UI/UX Design",
            "skill3Desc": "Kullanıcı odaklı ve estetik tasarımlar oluşturuyorum.",
            "skill4Name": "Cloud & DevOps",
            "skill4Desc": "Modern deployment ve infrastructure yönetimi.",
            "skill5Name": "Mobile Development",
            "skill5Desc": "Cross-platform mobil uygulamalar geliştiriyorum.",
            "skill6Name": "Big Data Data & Analytics AI",
            "skill6Desc": "Büyük veri işleme ve yapay zeka çözümleri.",
            "skill7Name": "Sosyal Medya Yönetimi",
            "skill7Desc": "Sosyal medya stratejisi ve içerik yönetimi.",
            "skill8Name": "Cybersecurity",
            "skill8Desc": "Güvenlik testleri ve veri koruma çözümleri.",
            "projectsTitle": "Projeler",
            "pixelboostBadge": "4x Çözünürlük",
            "pixelboostSubtitle": "Resimlerinizi Geliştirin",
            "pixelboostDesc": "Profesyonel yapay zeka destekli görsel büyütme. Düşük çözünürlüklü görsellerinizi gelişmiş algoritmalar ile muhteşem yüksek kaliteli görsellere dönüştürün. Ücretsiz, hızlı ve tamamen gizli.",
            "pixelboostStat1": "Büyütme",
            "pixelboostStat2": "Ücretsiz",
            "pixelboostStat3": "Gizli",
            "socialgenSubtitle": "Sosyal Medya Tasarım Aracı",
            "socialgenDesc": "Basit sosyal medya görseli oluşturma aracı (Beta). Temel drag & drop özelliklerine sahip minimal tasarım editörü. Şablonlar, şekiller ve text araçları ile hızlıca Instagram ve diğer platformlar için görseller hazırlayın. Henüz geliştirme aşamasında, temel özelliklerle hızlı tasarım deneyimi sunar.",
            "socialgenFeature1": "Drag & Drop",
            "socialgenFeature2": "Şablonlar",
            "socialgenFeature3": "Export",
            "ibanTitle": "IBAN Doğrulayıcı",
            "ibanSubtitle": "Dünya Geneli IBAN Formatlama ve Doğrulama",
            "ibanDesc": "70+ ülke için IBAN doğrulama ve formatlama aracı. Anlık kontrol toplamı doğrulaması ile IBAN numaralarını anında kontrol edin. Tüm doğrulama işlemleri tarayıcınızda gerçekleşir, verileriniz güvende. Türkiye, Almanya, İngiltere, Fransa ve daha fazlası için tam destek.",
            "ibanFeature1": "Ülke",
            "ibanFeature2": "Anlık Doğrulama",
            "ibanFeature3": "Gizli",
            "sponsorTitle": "Çalışmalarımı Destekle",
            "sponsorDesc": "Açık kaynak projelerime katkı sağlamak ve çalışmalarımı beğendiyseniz destekleyebilirsiniz!",
            "sponsorBtn": "GitHub Sponsors",
            "contactTitle": "İletişime Geçin",
            "contactSubtitle": "Benimle iletişime geçmek için aşağıdaki kanallardan ulaşabilirsiniz.",
            "contactEmail": "E-posta",
            "labelName": "İsim",
            "labelEmail": "Email",
            "labelMessage": "Mesaj",
            "submitBtn": "Gönder",
            "navHome": "Ana Sayfa",
            "navAbout": "Hakkımda",
            "navSkills": "Deneyimler",
            "navProjects": "Projeler",
            "navContact": "İletişim",
            "navDonate": "Bağış Yap",
            "donateModalTitle": "Bağışınızla Destekleyin",
            "donateModalDesc": "Açık kaynak projelerime katkıda bulunun",
            "githubDesc": "Aylık veya tek seferlik destek",
            "donateFooter": "❤️ Her türlü destek çok değerli!"
          },
          en: {
            "role": "Full Stack Developer & Digital Creator",
            "intro": "Building user-centric digital solutions with modern web technologies and creative design.",
            "btnProjects": "View Projects",
            "btnContact": "Get In Touch",
            "aboutTitle": "About Me",
            "aboutP1": "Hello! I'm Tayfun Toprakçıoğlu, a Full Stack Developer working in software development, UI/UX design, and social media expertise.",
            "aboutP2": "I love creating user-friendly, performant, and aesthetic solutions with modern web technologies. Every project is a new learning opportunity and a canvas for my creativity.",
            "aboutP3": "I always prioritize clean code, best practices, and user experience principles.",
            "stat1": "CONTINUES TO SHARE ON SOCIAL MEDIA..",
            "stat2": "ACTIVE BOOK INDUSTRY EXPERIENCE.",
            "stat3": "BOOK COVER PHOTO, BANNER AND SLIDE DESIGN.",
            "stat4": "WRITING OPEN SOURCE CODE SINCE..",
            "skillsTitle": "Experience",
            "skill1Name": "Frontend Development",
            "skill1Desc": "Building modern and responsive user interfaces.",
            "skill2Name": "Backend Development",
            "skill2Desc": "Creating scalable and secure backend systems.",
            "skill3Name": "UI/UX Design",
            "skill3Desc": "Crafting user-centric and aesthetic designs.",
            "skill4Name": "Cloud & DevOps",
            "skill4Desc": "Modern deployment and infrastructure management.",
            "skill5Name": "Mobile Development",
            "skill5Desc": "Developing cross-platform mobile applications.",
            "skill6Name": "Big Data & Analytics AI",
            "skill6Desc": "Big data processing and artificial intelligence solutions.",
            "skill7Name": "Social Media Management",
            "skill7Desc": "Social media strategy and content management.",
            "skill8Name": "Cybersecurity",
            "skill8Desc": "Security testing and data protection solutions.",
            "projectsTitle": "Projects",
            "pixelboostBadge": "4x Resolution",
            "pixelboostSubtitle": "Enhance Your Images",
            "pixelboostDesc": "Professional AI-powered image upscaling. Transform your low-resolution images into stunning high-quality visuals with advanced algorithms. Free, fast, and completely private.",
            "pixelboostStat1": "Upscale",
            "pixelboostStat2": "Free",
            "pixelboostStat3": "Private",
            "socialgenSubtitle": "Social Media Design Tool",
            "socialgenDesc": "Simple social media visual creator (Beta). Minimal design editor with basic drag & drop features. Quickly create visuals for Instagram and other platforms with templates, shapes, and text tools. Still in development, offering a fast design experience with core features.",
            "socialgenFeature1": "Drag & Drop",
            "socialgenFeature2": "Templates",
            "socialgenFeature3": "Export",
            "ibanTitle": "IBAN Validator",
            "ibanSubtitle": "Global IBAN Formatting and Validation",
            "ibanDesc": "IBAN validation and formatting tool for 70+ countries. Instantly verify IBAN numbers with real-time checksum validation. All validation happens in your browser, your data stays secure. Full support for Turkey, Germany, UK, France, and more.",
            "ibanFeature1": "Countries",
            "ibanFeature2": "Real-time Check",
            "ibanFeature3": "Private",
            "sponsorTitle": "Support My Work",
            "sponsorDesc": "If you appreciate my open-source contributions and work, you can support me!",
            "sponsorBtn": "GitHub Sponsors",
            "contactTitle": "Get In Touch",
            "contactSubtitle": "Feel free to reach out through any of the following channels.",
            "contactEmail": "Email",
            "labelName": "Name",
            "labelEmail": "Email",
            "labelMessage": "Message",
            "submitBtn": "Send Message",
            "navHome": "Home",
            "navAbout": "About",
            "navSkills": "Experience",
            "navProjects": "Projects",
            "navContact": "Contact",
            "navDonate": "Donate",
            "donateModalTitle": "Support with Your Donation",
            "donateModalDesc": "Contribute to my open-source projects",
            "githubDesc": "Monthly or one-time support",
            "donateFooter": "❤️ Every support is valuable!"
          }
        };
        if (callback) callback();
      });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    var t = translations[lang];

    if (!t) {
      console.warn('Language not found:', lang);
      return;
    }

    Object.keys(t).forEach(function (key) {
      var el = document.getElementById(key);
      if (el) el.textContent = t[key];
    });

    document.getElementById('langTR').classList.toggle('active', lang === 'tr');
    document.getElementById('langEN').classList.toggle('active', lang === 'en');
    document.documentElement.setAttribute('lang', lang);

    if (typeof updateNavbarLinks === 'function') updateNavbarLinks();
    if (typeof updateQuoteLanguage === 'function') updateQuoteLanguage();
  }

  // Initialize language system after loading translations
  loadTranslations(function () {
    var savedLang = localStorage.getItem('lang') || currentLang;
    setLanguage(savedLang);
  });

  document.getElementById('langTR').addEventListener('click', function () { setLanguage('tr'); });
  document.getElementById('langEN').addEventListener('click', function () { setLanguage('en'); });

  // =========================== SCROLL ANIMATIONS ===========================
  var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card, .skill-card, .project-card').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });

  // =========================== SECTION TRACKING ===========================
  var sections = document.querySelectorAll('section[id]');
  var floatingLinks = document.querySelectorAll('.floating-nav a');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
  var desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-links a:not(.btn-donate)');

  function updateActiveSection() {
    var scrollPos = window.pageYOffset + 250;
    var current = 'hero';

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    [floatingLinks, mobileNavLinks, desktopNavLinks].forEach(function (navLinks) {
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  // =========================== DESKTOP NAVBAR HIDE/SHOW ===========================
  var desktopNav = document.getElementById('desktopNav');
  var lastScrollY = 0;

  window.addEventListener('scroll', function () {
    if (window.innerWidth >= 1024) {
      var currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        desktopNav.classList.add('hidden');
      } else {
        desktopNav.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    }
  }, { passive: true });

  // =========================== GLITCH EFFECT ===========================
  var nameEl = document.getElementById('name');
  function glitch() {
    nameEl.classList.add('glitch');
    setTimeout(function () {
      nameEl.classList.remove('glitch');
      setTimeout(glitch, 3000 + Math.random() * 2000);
    }, 500);
  }
  setTimeout(glitch, 2000);

  // =========================== HELLO CYCLE ===========================
  var hello = document.getElementById('hello');
  var msgs = ['Merhaba 👋', 'Hello 👋', 'Hola 👋', 'Bonjour 👋', 'Ciao 👋'];
  var msgIndex = 0;
  setInterval(function () {
    hello.textContent = msgs[msgIndex];
    msgIndex = (msgIndex + 1) % msgs.length;
  }, 2000);

  // =========================== FORM HANDLING ===========================
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = e.target.querySelector('button');
      var originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>' + (currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...') + '</span>';

      setTimeout(function () {
        btn.innerHTML = '<i class="fas fa-check"></i> <span>' + (currentLang === 'tr' ? 'Gönderildi!' : 'Sent!') + '</span>';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        e.target.reset();

        setTimeout(function () {
          btn.disabled = false;
          btn.innerHTML = originalText;
          btn.style.background = '';
        }, 3000);
      }, 2000);
    });
  }

  // =========================== SMOOTH SCROLL ===========================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // =========================== QUOTES ROTATION ===========================
  var quotes = {
    tr: [
      { text: "Bir bilgisayar, akıl için bir bisiklet gibidir.", author: "Steve Jobs" },
      { text: "Teknoloji, insanları bir araya getirdiğinde en iyisidir.", author: "Matt Mullenweg" },
      { text: "Hesaplamanın amacı içgörü kazanmaktır, sayılar değil.", author: "Richard Hamming" },
      { text: "Yazılım yemek gibidir: sade olanı her zaman daha iyidir.", author: "Chef Gusteau" }
    ],
    en: [
      { text: "A computer is like a bicycle for the mind.", author: "Steve Jobs" },
      { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
      { text: "The purpose of computing is insight, not numbers.", author: "Richard Hamming" },
      { text: "Software is like food: simpler is always better.", author: "Chef Gusteau" }
    ]
  };

  var currentQuoteIdx = 0;
  var currentQuoteSet = currentLang === 'tr' ? quotes.tr : quotes.en;

  window.updateQuoteLanguage = function () {
    currentQuoteSet = currentLang === 'tr' ? quotes.tr : quotes.en;
    currentQuoteIdx = Math.floor(Math.random() * currentQuoteSet.length);
    showQuote();
  };

  function showQuote() {
    var quoteEl = document.getElementById('quote-text');
    if (!quoteEl || currentQuoteSet.length === 0) return;

    var q = currentQuoteSet[currentQuoteIdx];
    var html = '"' + q.text + '" <span style="display:block; margin-top:12px; font-size:0.9em; color:var(--muted); font-family:ui-monospace">— ' + q.author + '</span>';

    quoteEl.style.opacity = '0';
    setTimeout(function () {
      quoteEl.innerHTML = html;
      quoteEl.style.transition = 'all 0.6s ease';
      quoteEl.style.opacity = '1';
    }, 300);

    currentQuoteIdx = (currentQuoteIdx + 1) % currentQuoteSet.length;
    setTimeout(showQuote, 15000);
  }

  currentQuoteIdx = Math.floor(Math.random() * currentQuoteSet.length);
  showQuote();


  // =========================== NAVBAR TRANSLATIONS ===========================
  window.updateNavbarLinks = function () {
    var isEn = currentLang === 'en';
    var links = [
      { id: 'navLinkHome', tr: 'Anasayfa', en: 'Home' },
      { id: 'navLinkAbout', tr: 'Hakkımda', en: 'About' },
      { id: 'navLinkSkills', tr: 'Deneyimler', en: 'Experience' },
      { id: 'navLinkProjects', tr: 'Projeler', en: 'Projects' },
      { id: 'navLinkContact', tr: 'İletişim', en: 'Contact' }
    ];

    links.forEach(function (link) {
      var el = document.getElementById(link.id);
      if (el) {
        el.childNodes[0].textContent = isEn ? link.en : link.tr;
      }
    });
  };

  setTimeout(updateNavbarLinks, 50);

  // =========================== MOBILE SECTION TRACKING ===========================
  var mobileHeader = document.getElementById('mobileSectionHeader');
  var sectionTitles = {
    hero: { tr: 'Anasayfa', en: 'Home' },
    about: { tr: 'Hakkımda', en: 'About' },
    skills: { tr: 'Deneyimler', en: 'Experience' },
    projects: { tr: 'Projeler', en: 'Projects' },
    contact: { tr: 'İletişim', en: 'Contact' }
  };

  function updateMobileUI(sectionId) {
    if (mobileHeader && sectionTitles[sectionId]) {
      mobileHeader.textContent = sectionTitles[sectionId][currentLang];
    }

    mobileNavLinks.forEach(function (item) {
      item.classList.toggle('active', item.getAttribute('href') === '#' + sectionId);
    });
  }

  if ('IntersectionObserver' in window) {
    var mobileObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) updateMobileUI(entry.target.id);
      });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) {
      mobileObserver.observe(section);
    });
  }

  setTimeout(function () { updateMobileUI('hero'); }, 100);


  // === DONATE MODAL ===
  setTimeout(function () {
    var modal = document.getElementById('donateModal');
    if (!modal) return;

    var closeBtn = document.getElementById('closeModal');
    var overlay = modal.querySelector('.donate-modal-overlay');
    var donateBtns = document.querySelectorAll('.btn-donate');

    function openModal(e) {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    donateBtns.forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Copy button functionality - click on entire box
    modal.addEventListener('click', function (e) {
      var donateOption = e.target.closest('.donate-option');
      if (!donateOption) return;

      // Only for crypto and wise (not GitHub)
      var copyData = donateOption.getAttribute('data-address') || donateOption.getAttribute('data-tag');
      if (!copyData) return;

      e.preventDefault();
      e.stopPropagation();

      var textarea = document.createElement('textarea');
      textarea.value = copyData;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        donateOption.classList.add('copied');
        setTimeout(function () {
          donateOption.classList.remove('copied');
        }, 2000);
      } catch (err) { }

      document.body.removeChild(textarea);
    });


    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }, 100);

})();
