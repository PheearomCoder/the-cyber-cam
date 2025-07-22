document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Update button text for accessibility
            const isOpen = navLinks.classList.contains('active');
            navToggle.textContent = isOpen ? 'Close' : 'Menu';
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.textContent = 'Menu';
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.textContent = 'Menu';
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(10, 25, 47, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--primary-color)';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Contact form validation and handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrorMessages();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;

            // Validate name
            if (!name.value.trim()) {
                showError('name', 'Name is required.');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError('name', 'Name must be at least 2 characters long.');
                isValid = false;
            }

            // Validate email
            if (!email.value.trim()) {
                showError('email', 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError('email', 'Please enter a valid email address.');
                isValid = false;
            }

            // Validate message
            if (!message.value.trim()) {
                showError('message', 'Message is required.');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError('message', 'Message must be at least 10 characters long.');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                showSuccessMessage();
                contactForm.reset();
            } else {
                // Focus on first error field
                const firstErrorField = contactForm.querySelector('.form-group.error input, .form-group.error textarea');
                if (firstErrorField) {
                    firstErrorField.focus();
                }
            }
        });

        // Real-time validation
        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(field);
            });

            field.addEventListener('input', function() {
                // Clear error when user starts typing
                const formGroup = field.closest('.form-group');
                if (formGroup.classList.contains('error')) {
                    clearFieldError(field.id);
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Helper functions
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        const errorElement = document.getElementById(`error-${fieldId}`);
        
        formGroup.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        const formGroup = field.closest('.form-group');
        const errorElement = document.getElementById(`error-${fieldId}`);
        
        formGroup.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        const formGroups = document.querySelectorAll('.form-group');
        
        errorElements.forEach(el => el.textContent = '');
        formGroups.forEach(group => group.classList.remove('error'));
    }

    function validateField(field) {
        const fieldId = field.id;
        const value = field.value.trim();

        switch (fieldId) {
            case 'name':
                if (!value) {
                    showError(fieldId, 'Name is required.');
                } else if (value.length < 2) {
                    showError(fieldId, 'Name must be at least 2 characters long.');
                } else {
                    clearFieldError(fieldId);
                }
                break;
            case 'email':
                if (!value) {
                    showError(fieldId, 'Email is required.');
                } else if (!isValidEmail(value)) {
                    showError(fieldId, 'Please enter a valid email address.');
                } else {
                    clearFieldError(fieldId);
                }
                break;
            case 'message':
                if (!value) {
                    showError(fieldId, 'Message is required.');
                } else if (value.length < 10) {
                    showError(fieldId, 'Message must be at least 10 characters long.');
                } else {
                    clearFieldError(fieldId);
                }
                break;
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = `
            background: var(--success-color);
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
        `;
        successDiv.textContent = 'Thank you for your message! We\'ll get back to you soon.';

        // Insert success message before the form
        contactForm.parentNode.insertBefore(successDiv, contactForm);

        // Remove success message after 5 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.parentNode.removeChild(successDiv);
            }
        }, 5000);

        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.textContent = 'Menu';
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(10, 25, 47, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--primary-color)';
            header.style.backdropFilter = 'none';
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Initialize ARIA attributes
    if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-controls', 'nav-links');
    }

    if (navLinks) {
        navLinks.setAttribute('id', 'nav-links');
    }

    console.log('SALA Cyber website initialized successfully!');
});

// Error handling for the entire application
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // In a production environment, you might want to send this to a logging service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // In a production environment, you might want to send this to a logging service
});
