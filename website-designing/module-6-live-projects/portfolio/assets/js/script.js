document.addEventListener("DOMContentLoaded", () => {
    
    // Components Loading (Handles header and footer injected via vanilla JS)
    async function loadComponents() {
        try {
            // Load components using fetch
            // NOTE: If testing locally via file:// on some browsers, fetch might fail due to CORS. 
            // In that case, use VS Code Live Server.
            
            const headerRes = await fetch("components/header.html");
            if (headerRes.ok) document.getElementById("header-placeholder").innerHTML = await headerRes.text();

            const navbarRes = await fetch("components/navbar.html");
            if (navbarRes.ok) {
                const navPlaceholder = document.getElementById("navbar-placeholder");
                if (navPlaceholder) navPlaceholder.innerHTML = await navbarRes.text();
            }

            const footerRes = await fetch("components/footer.html");
            if (footerRes.ok) document.getElementById("footer-placeholder").innerHTML = await footerRes.text();

            // Initialize all features AFTER components are fully loaded
            initTheme();
            initMobileMenu();
            updateActiveLink();
            initStickyHeader();
            
        } catch (error) {
            console.error("Failed loading components. Please use a local server like VS Code Live Server.", error);
            // Fallback warning for users opening file directly
            if (window.location.protocol === 'file:') {
                document.body.insertAdjacentHTML('afterbegin', '<div style="background:#ef4444;color:white;padding:15px;text-align:center;z-index:9999;position:relative;"><strong>Notice:</strong> Please run this site using a local server (like VS Code Live Server) to load the Navigation components successfully!</div>');
            }
        }
    }

    loadComponents().then(() => {
        // Preloader Logic
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Trigger hero load animations
                    document.querySelectorAll('.reveal-on-load').forEach(el => el.classList.add('active'));
                    
                    // Trigger Typing Animation after load
                    initTyping();
                }, 500);
            }
        }, 800);
        
        // Set copyright year (scripts in HTML components don't run via innerHTML)
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Load Google Translate after footer is injected into DOM
        initGoogleTranslate();

        initScrollAnimations();
        initScrollToTop();
    });

    // Theme Toggle Functionality
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        // Check for saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (!mobileMenuBtn || !closeMenuBtn || !mobileMenu) return;

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; 
        });

        const closeMenu = () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        };

        closeMenuBtn.addEventListener('click', closeMenu);

        // Close on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Active Link Detection
    function updateActiveLink() {
        // Find current page name path
        let currentPath = window.location.pathname.split('/').pop();
        if(currentPath === '') currentPath = 'index.html';
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if(linkHref === currentPath) {
                link.classList.add('text-primary');
                link.classList.remove('text-slate-600', 'dark:text-slate-300');
                
                // Add dot indicator under active link
                const span = document.createElement('span');
                span.className = 'absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full indicator';
                
                // Prevent multiple indicators
                if(!link.querySelector('.indicator')) {
                    link.style.position = 'relative';
                    link.appendChild(span);
                }
            } else {
                link.classList.remove('text-primary');
                link.classList.add('text-slate-600', 'dark:text-slate-300');
                const indicator = link.querySelector('.indicator');
                if(indicator) indicator.remove();
            }
        });
    }

    // Sticky transparent to solid Header
    function initStickyHeader() {
        const header = document.getElementById('main-header');
        if (!header) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-sm', 'bg-white/90', 'dark:bg-slate-900/90', 'nav-scrolled');
                header.classList.remove('bg-transparent', 'dark:bg-transparent', 'py-6');
                header.classList.add('py-4');
            } else {
                header.classList.remove('shadow-sm', 'bg-white/90', 'dark:bg-slate-900/90', 'nav-scrolled', 'py-4');
                header.classList.add('bg-transparent', 'dark:bg-transparent', 'py-6');
            }
        });
    }

    // Intersection Observer for scroll animations (fade up, progress, counters)
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Generic reveal
                    entry.target.classList.add('active');
                    
                    // If counter wrapper, animate children
                    if (entry.target.classList.contains('counter-wrap')) {
                        animateCounters(entry.target);
                    }
                    
                    // If progress bar wrapper, animate bars
                    if (entry.target.classList.contains('progress-wrap')) {
                        animateProgressBars(entry.target);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .counter-wrap, .progress-wrap').forEach(el => {
            observer.observe(el);
        });
    }

    // Counter Animation Logic
    function animateCounters(container) {
        const counters = container.querySelectorAll('.counter');
        const speed = 100;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                    if(counter.getAttribute('data-plus') === "true") {
                        counter.innerText += "+";
                    }
                }
            };
            updateCount();
        });
    }

    // Progress Bar Logic
    function animateProgressBars(container) {
        const bars = container.querySelectorAll('.width-anim');
        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
    }

    // Typing Effect dynamically on index.html
    function initTyping() {
        const typingElement = document.getElementById('typing-text');
        if (typingElement) {
            const words = ["Frontend Developer", "UI/UX Enthusiast", "Web Designer"];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeEffect() {
                const currentWord = words[wordIndex];
                
                if (isDeleting) {
                    typingElement.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingElement.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 40 : 120; // Editing speed vs tying speed

                if (!isDeleting && charIndex === currentWord.length) {
                    typeSpeed = 2000; // Pause at end of word
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeSpeed = 400; // Pause before new word
                }

                setTimeout(typeEffect, typeSpeed);
            }

            typeEffect();
        }
    }

    // Scroll To Top Logic
    function initScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.id = 'scrollToTopBtn';
        scrollBtn.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-primary to-accent hover:from-secondary hover:to-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 transition-all filter drop-shadow-md';
        scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ─────────────────────────────────────────────
    //  Google Translate – loaded dynamically via JS
    //  (script tags injected via innerHTML never run)
    // ─────────────────────────────────────────────
    function initGoogleTranslate() {
        // If the target element doesn't exist in the DOM yet, bail out
        const el = document.getElementById('google_translate_element');
        if (!el) return;

        // Avoid loading twice on SPA-style reloads
        if (window._gtLoaded) {
            // API already loaded; just reinitialise the widget
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    { pageLanguage: 'en', autoDisplay: false },
                    'google_translate_element'
                );
            }
            return;
        }
        window._gtLoaded = true;

        // Expose the callback Google calls after its script loads
        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',     // source language
                    // MULTILANGUAGE: leaving includedLanguages empty = ALL languages
                    // To restrict, e.g. Hindi + French only:
                    // includedLanguages: 'hi,fr,es,de,ja,zh-CN',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                },
                'google_translate_element'
            );
        };

        // Dynamically append the Google Translate API <script>
        const script = document.createElement('script');
        script.type  = 'text/javascript';
        script.src   = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
    }

    // Event Listeners for statically rendered HTML (contact, projects)

    // Project Modal Logic (projects.html)
    const modal = document.getElementById('projectModal');
    if (modal) {
        const closeBtn = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalTech = document.getElementById('modalTech');
        const modalLink = document.getElementById('modalLink');
        const overlay = modal.querySelector('.modal-overlay');

        document.querySelectorAll('.project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modalTitle.textContent = btn.getAttribute('data-title');
                modalDesc.textContent = btn.getAttribute('data-desc');
                modalTech.textContent = btn.getAttribute('data-tech');
                modalLink.href = btn.getAttribute('data-link');
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // prevent bg scroll
            });
        });

        const closeModal = () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        };

        if(closeBtn) closeBtn.addEventListener('click', closeModal);
        if(overlay) overlay.addEventListener('click', closeModal);
        
        // Close on esc key
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
    }

    // Contact form validation (contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                const errorMsg = input.parentElement.nextElementSibling || input.nextElementSibling;
                
                if (!input.value.trim()) {
                    input.classList.add('border-red-500', 'focus:ring-red-500');
                    input.classList.remove('focus:ring-primary/50', 'focus:border-primary');
                    if(errorMsg && errorMsg.classList.contains('error-msg')) errorMsg.classList.remove('hidden');
                    isValid = false;
                } else {
                    input.classList.remove('border-red-500', 'focus:ring-red-500');
                    input.classList.add('focus:ring-primary/50', 'focus:border-primary');
                    if(errorMsg && errorMsg.classList.contains('error-msg')) errorMsg.classList.add('hidden');
                    
                    // Email Regex checking
                    if(input.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if(!emailRegex.test(input.value)) {
                            input.classList.add('border-red-500', 'focus:ring-red-500');
                            if(errorMsg && errorMsg.classList.contains('error-msg')) {
                                errorMsg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid email format';
                                errorMsg.classList.remove('hidden');
                            }
                            isValid = false;
                        }
                    }
                }
            });

            if (isValid) {
                const btn = contactForm.querySelector('button[type="submit"]');
                const span = btn.querySelector('span');
                const originalText = span.textContent;
                const icon = btn.querySelector('i');
                const originalIcon = icon.className;
                
                span.textContent = 'Sending...';
                icon.className = 'fa-solid fa-spinner fa-spin';
                btn.disabled = true;
                btn.classList.add('opacity-70', 'cursor-not-allowed');

                // Simulate form submission delay
                setTimeout(() => {
                    const successMsg = document.getElementById('formSuccess');
                    contactForm.reset();
                    
                    // Add success classes to button temporarily
                    span.textContent = 'Sent Successfully';
                    icon.className = 'fa-solid fa-check';
                    btn.classList.remove('from-primary', 'to-accent');
                    btn.classList.add('from-green-500', 'to-green-600');
                    
                    successMsg.classList.remove('hidden');
                    successMsg.classList.add('flex');
                    
                    setTimeout(() => {
                        span.textContent = originalText;
                        icon.className = originalIcon;
                        btn.disabled = false;
                        btn.classList.remove('opacity-70', 'cursor-not-allowed', 'from-green-500', 'to-green-600');
                        btn.classList.add('from-primary', 'to-accent');
                        
                        successMsg.classList.add('hidden');
                        successMsg.classList.remove('flex');
                    }, 4000);
                }, 1500);
            }
        });
        
        // Remove error states dynamically on input
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('border-red-500', 'focus:ring-red-500');
                input.classList.add('focus:ring-primary/50', 'focus:border-primary');
                const errorMsg = input.parentElement.nextElementSibling || input.nextElementSibling;
                if(errorMsg && errorMsg.classList.contains('error-msg')) errorMsg.classList.add('hidden');
            });
        });
    }
});
