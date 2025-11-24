// Common JavaScript for tutor.new
// Handles navigation, menu toggling, and scroll animations

// Menu toggle functionality
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle('active');
    }
}

// Navigation HTML templates
const navigationHTML = {
    // Mobile menu overlay (full screen on mobile)
    mobileOverlay: `
        <div class="mobile-menu-overlay" id="mobileMenuOverlay">
            <div class="mobile-menu-header" onclick="toggleMenu()">tutor.new</div>
            <div class="mobile-menu-links">
                <a href="so-funktionierts.html" class="nav-link link-how" data-i18n="nav_how">So funktioniert's</a>
                <a href="faq.html" class="nav-link link-faq" data-i18n="nav_faq">FAQ</a>
                <a href="ueber-uns.html" class="nav-link link-about" data-i18n="nav_about">Über uns</a>
                <a href="impressum-agb.html" class="nav-link link-legal" data-i18n="nav_legal">Impressum & AGB</a>
            </div>
        </div>
    `,
    
    // Desktop/mobile header with toggle
    mainHeader: `
        <header>
            <button class="logo-btn" onclick="toggleMenu()">tutor.new</button>
            <nav class="nav-menu" id="navMenu">
                <a href="so-funktionierts.html" class="nav-link link-how" data-i18n="nav_how">So funktioniert's</a>
                <a href="faq.html" class="nav-link link-faq" data-i18n="nav_faq">FAQ</a>
                <a href="ueber-uns.html" class="nav-link link-about" data-i18n="nav_about">Über uns</a>
                <a href="impressum-agb.html" class="nav-link link-legal" data-i18n="nav_legal">Impressum & AGB</a>
            </nav>
        </header>
    `,
    
    // Simple back button for sub-pages
    backHeader: `
        <header><a href="index.html" data-i18n="nav_back">← Zurück zur Startseite</a></header>
    `
};

// Inject navigation based on page type
function initNavigation(pageType = 'main') {
    const container = document.querySelector('.container');
    
    if (pageType === 'main') {
        // Add mobile overlay at the start of container
        container.insertAdjacentHTML('afterbegin', navigationHTML.mobileOverlay);
        // Add main header after mobile overlay
        const mobileOverlay = document.getElementById('mobileMenuOverlay');
        mobileOverlay.insertAdjacentHTML('afterend', navigationHTML.mainHeader);
    } else {
        // Add simple back button for sub-pages
        container.insertAdjacentHTML('afterbegin', navigationHTML.backHeader);
    }
    
    // Trigger i18n update if available
    if (window.i18n && window.i18n.updateContent) {
        window.i18n.updateContent();
        window.i18n.injectSwitcher();
    }
}

// Step scroll animation (for index page)
function initStepScrollAnimation() {
    const steps = document.querySelectorAll('.step');
    
    if (steps.length === 0) return; // Exit if no steps found
    
    function handleStepScroll() {
        const windowHeight = window.innerHeight;
        
        steps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            const stepMiddle = rect.top + (rect.height / 2);
            const stepTop = rect.top;
            const stepBottom = rect.bottom;
            const stepHeight = rect.height;
            
            // Circle animation - activate when step reaches lower in viewport
            if (stepMiddle < windowHeight * 0.85) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
            
            // Line progress animation - smooth fill based on scroll position
            let progress = 0;
            const triggerPoint = windowHeight * 0.75;
            
            if (stepBottom < triggerPoint) {
                // Fully scrolled past
                progress = 100;
            } else if (stepTop < triggerPoint) {
                // Partially scrolled - calculate percentage based on how much is past the trigger
                const scrolledAmount = triggerPoint - stepTop;
                progress = Math.min(100, Math.max(0, (scrolledAmount / stepHeight) * 100));
            } else {
                // Not yet reached
                progress = 0;
            }
            
            step.style.setProperty('--line-progress', progress + '%');
        });
    }
    
    // Run on scroll and on load
    window.addEventListener('scroll', handleStepScroll);
    window.addEventListener('load', handleStepScroll);
}

