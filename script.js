// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        // Add event listeners to language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });

        // Set initial language from localStorage or default to English
        const savedLanguage = localStorage.getItem('preferred-language') || 'en';
        this.switchLanguage(savedLanguage);
    }

    switchLanguage(language) {
        this.currentLanguage = language;
        
        // Update button states
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === language) {
                button.classList.add('active');
            }
        });

        // Update all text elements
        const elementsWithTranslations = document.querySelectorAll('[data-en][data-es]');
        elementsWithTranslations.forEach(element => {
            const text = element.getAttribute(`data-${language}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update document language
        document.documentElement.lang = language;

        // Save preference
        localStorage.setItem('preferred-language', language);

        // Add fade-in animation
        document.body.classList.add('fade-in');
        setTimeout(() => {
            document.body.classList.remove('fade-in');
        }, 500);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Smooth scrolling for any internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add hover effects for skill tags
function initSkillTagEffects() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language switcher
    const languageSwitcher = new LanguageSwitcher();
    
    // Initialize other features
    initSmoothScrolling();
    initScrollAnimations();
    initSkillTagEffects();

    // Add a subtle parallax effect to the background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        document.body.style.backgroundPosition = `center ${rate}px`;
    });

    // Add keyboard navigation for language switching
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            const currentLang = languageSwitcher.getCurrentLanguage();
            const newLang = currentLang === 'en' ? 'es' : 'en';
            languageSwitcher.switchLanguage(newLang);
        }
    });

    console.log('🌟 Guillermo Valin\'s website loaded successfully!');
    console.log('💡 Press Alt+L to quickly switch languages');
});