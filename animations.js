// Animation script for UX Researcher Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.expertise-card, .project-card, .expertise-narrative, .method-card, .skills-card, .section-heading');
    
    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to start animation when element is visible
                entry.target.classList.add('animate-fade-in');
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.15, // 15% of the element must be visible
        rootMargin: '0px 0px -50px 0px' // trigger slightly before element is in view
    });
    
    // Start observing elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Hover interactions for cards
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Project card dynamic effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.01)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
            
            // Find and animate the image within the card
            const cardImage = this.querySelector('img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.05)';
            }
            
            // Find and change color of heading
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = '#6172e3'; // primary-color
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            
            // Reset image scale
            const cardImage = this.querySelector('img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1)';
            }
            
            // Reset heading color
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = '#1a202c'; // text color
            }
        });
    });
      // Removed highlight text effect for static display
    
    // Animated links
    const animatedLinks = document.querySelectorAll('.animated-link');
    animatedLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.bi-arrow-right');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.bi-arrow-right');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
    });
    
    // Profile image animation
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.02)';
            this.querySelector('::before').style.transform = 'translate(-8px, -8px)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
            this.querySelector('::before').style.transform = 'translate(0, 0)';
        });
    }
});
