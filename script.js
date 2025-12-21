// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize demo filter
    if (document.getElementById('demo-grid')) {
        initDemoFilter();
    }
    
    // Initialize contact form
    if (document.getElementById('contactForm')) {
        initContactForm();
    }
    
    // Initialize mobile menu toggle
    initMobileMenu();
});

// Animations
function initAnimations() {
    const animateElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => observer.observe(el));
}

// Demo Filter Functionality
function initDemoFilter() {
    const filterButtons = document.querySelectorAll('.category-btn');
    const demoItems = document.querySelectorAll('.demo-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-green-500', 'text-white'));
            filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'hover:bg-gray-300'));
            this.classList.add('active', 'bg-green-500', 'text-white');
            this.classList.remove('bg-gray-200', 'hover:bg-gray-300');
            
            const filterValue = this.getAttribute('data-category');
            
            // Filter items
            demoItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Contact Form Validation
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let isValid = true;
        const name = document.getElementById('name');
        const websiteType = document.getElementById('websiteType');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Reset errors
        [name, websiteType, email, message].forEach(field => {
            field.classList.remove('error');
            const errorMsg = field.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
                errorMsg.style.display = 'none';
            }
        });
        
        // Validate name
        if (name.value.trim() === '') {
            name.classList.add('error');
            isValid = false;
        }
        
        // Validate website type
        if (!websiteType.value) {
            websiteType.classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            message.classList.add('error');
            isValid = false;
        }
        
        if (isValid) {
            // In a real app, you would send the form data to a server here
            form.reset();
            form.style.display = 'none';
            successMessage.classList.remove('hidden');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });
    }
}
