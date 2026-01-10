/* =========================================
   DONATE MODULE (STANDARD LIBRARY)
   Version: 1.1.0
   Author: Tayfun Toprakçıoğlu
   ========================================= */

const DonateModule = {
    modalId: 'donateModal',
    currentLang: 'en',

    // HTML Şablonu
    template: `
    <div class="modal" id="donateModal">
        <div class="modal-content">
            <button class="modal-close"><i class="fas fa-times"></i></button>
            
            <div class="modal-header">
                <h3 data-donate-i18n="title">Support with Donation</h3>
                <p class="modal-desc" data-donate-i18n="desc">Contribute to open source projects</p>
            </div>
    
            <div class="donate-options">
                <!-- 1. GitHub Sponsors -->
                <a href="https://github.com/sponsors/tayfuntoprakcioglu" target="_blank" class="donate-option">
                    <div class="option-icon github">
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="option-info">
                        <span class="option-title" data-donate-i18n="githubTitle">GitHub Sponsors</span>
                        <span class="option-desc" data-donate-i18n="githubDesc">Monthly or one-time support</span>
                    </div>
                    <div class="action-icon">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>

                <!-- 2. Crypto -->
                <div class="donate-option copy-trigger" data-copy="0xb329b6ba44d3a8fee4b8a8a5bf0133e314fe7482">
                    <div class="option-icon crypto">
                        <i class="fas fa-dollar-sign"></i> 
                    </div>
                    <div class="option-info">
                        <span class="option-title" data-donate-i18n="cryptoTitle">Crypto (USDT - ERC20)</span>
                        <span class="option-desc address">0xb329b6ba44d3a8fee4b8a8a5bf0133e314fe7482</span>
                    </div>
                    <div class="action-icon">
                        <i class="far fa-copy"></i>
                    </div>
                </div>

                <!-- 3. Wise -->
                <div class="donate-option copy-trigger" data-copy="@tayfunt53">
                    <div class="option-icon wise">
                        <i class="fas fa-money-bill-wave"></i>
                    </div>
                    <div class="option-info">
                        <span class="option-title" data-donate-i18n="wiseTitle">Wise (Multi-currency)</span>
                        <span class="option-desc highlight">@tayfunt53</span>
                    </div>
                    <div class="action-icon">
                        <i class="far fa-copy"></i>
                    </div>
                </div>
            </div>
    
            <div class="modal-footer">
                <span data-donate-i18n="footer">Every support is valuable!</span>
            </div>
        </div>
    </div>
    `,

    // Çeviriler
    translations: {
        tr: {
            title: "Bağışınızla Destekleyin",
            desc: "Açık kaynak projelerime katkıda bulunun",
            githubTitle: "GitHub Sponsors",
            githubDesc: "Aylık veya tek seferlik destek",
            cryptoTitle: "Kripto (USDT - ERC20)",
            wiseTitle: "Wise (Çoklu Para Birimi)",
            footer: "❤️ Her türlü destek çok değerli!",
            copied: "Kopyalandı!",
            buttonText: "Destek Ol"
        },
        en: {
            title: "Support with Donation",
            desc: "Contribute to my open-source projects",
            githubTitle: "GitHub Sponsors",
            githubDesc: "Monthly or one-time support",
            cryptoTitle: "Crypto (USDT - ERC20)",
            wiseTitle: "Wise (Multi-currency)",
            footer: "❤️ Every support is valuable!",
            copied: "Copied!",
            buttonText: "Donate"
        }
    },

    // HTML Enjekte Et
    injectHTML: function () {
        if (!document.getElementById(this.modalId)) {
            const range = document.createRange();
            // body'nin en sonuna ekle
            const fragment = range.createContextualFragment(this.template);
            document.body.appendChild(fragment);
        }
    },

    initLanguage: function () {
        // Tarayıcı dili kontrolü
        const browserLang = navigator.language || navigator.userLanguage;
        this.currentLang = browserLang.startsWith('tr') ? 'tr' : 'en';

        this.applyTranslations();
    },

    applyTranslations: function () {
        const t = this.translations[this.currentLang];

        const elements = document.querySelectorAll(`[data-donate-i18n]`);

        elements.forEach(el => {
            const key = el.getAttribute('data-donate-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });
    },

    open: function () {
        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('active'), 10);
            document.body.style.overflow = 'hidden';
        }
    },

    close: function () {
        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.style.display = 'none', 300);
            document.body.style.overflow = '';
        }
    },

    copyToClipboard: function (text, element) {
        if (!navigator.clipboard) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            this.showCopySuccess(element);
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            this.showCopySuccess(element);
        }).catch(err => {
            console.error('Copy failed', err);
        });
    },

    showCopySuccess: function (element) {
        element.classList.add('success');

        const iconContainer = element.querySelector('.action-icon i');
        const originalIconClass = iconContainer.className;

        iconContainer.className = 'fas fa-check';

        setTimeout(() => {
            element.classList.remove('success');
            iconContainer.className = originalIconClass;
        }, 2000);
    },

    init: function () {
        // 1. Önce HTML'i Sayfaya Göm
        this.injectHTML();

        // 2. Dili Algıla ve Çevir
        this.initLanguage();

        const modal = document.getElementById(this.modalId);
        if (!modal) return;

        // 3. Event Listener'ları Ekle
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.addEventListener('click', () => this.close());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) this.close();
        });

        // Trigger Butonlarını Yakala
        // Bu butonlar sayfada her zaman olmayabilir, document üzerinden delegate edelim
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-trigger="donate"]');
            if (trigger) {
                e.preventDefault();
                this.open();
            }
        });

        // Kopyalama İşlemleri
        const copyTriggers = modal.querySelectorAll('.copy-trigger');
        copyTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const textToCopy = trigger.getAttribute('data-copy');
                if (textToCopy) {
                    this.copyToClipboard(textToCopy, trigger);
                }
            });
        });
    }
};

// DOM Hazır Olduğunda Başlat
document.addEventListener('DOMContentLoaded', () => {
    DonateModule.init();
});
