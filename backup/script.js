// Keep active submenu item based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Get current file name from URL
    const currentPath = window.location.href;
    let fileName = 'index.html';
    
    // Extract filename from the path
    if (currentPath.includes('/')) {
        fileName = currentPath.split('/').pop();
    }
    
    // Handle case where there's no filename (directory index)
    if (!fileName || fileName === '') {
        fileName = 'index.html';
    }
    
    // Remove any query parameters or hash
    if (fileName.includes('?')) {
        fileName = fileName.split('?')[0];
    }
    if (fileName.includes('#')) {
        fileName = fileName.split('#')[0];
    }
    
    // Remove all active classes from submenu
    document.querySelectorAll('.sub-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    document.querySelectorAll('.sub-menu a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === fileName) {
            link.classList.add('active');
        }
    });
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        contactForm.reset();
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Intersection Observer for fade-in animation
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

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Image Gallery Function
function showMainImage(src) {
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = src;
    }
}

// Make showMainImage available globally
window.showMainImage = showMainImage;

// Add click handlers to sub-images
document.addEventListener('DOMContentLoaded', function() {
    const subImages = document.querySelectorAll('.sub-images img');
    subImages.forEach(img => {
        img.addEventListener('click', function() {
            showMainImage(this.src);
        });
    });
});

// Floating call button pulse animation
const floatingButton = document.querySelector('.floating-call-button');
if (floatingButton) {
    // Add pulse animation after 2 seconds
    setTimeout(() => {
        floatingButton.style.animation = 'pulse 2s infinite';
    }, 2000);
    
    // Remove animation on hover
    floatingButton.addEventListener('mouseenter', () => {
        floatingButton.style.animation = 'none';
    });
    
    floatingButton.addEventListener('mouseleave', () => {
        floatingButton.style.animation = 'pulse 2s infinite';
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
        50% {
            box-shadow: 0 4px 25px rgba(211, 47, 47, 0.6);
        }
        100% {
            box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
        }
    }
`;
document.head.appendChild(style);

// Scroll hint click event
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
    scrollHint.style.cursor = 'pointer';
    scrollHint.addEventListener('click', () => {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            const offsetTop = productsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}