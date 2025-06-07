// Enhanced hover functionality for the website
document.addEventListener('DOMContentLoaded', function() {
  // Add titles to navigation links if they don't have them
  const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
  
  navLinks.forEach(link => {
    if (!link.hasAttribute('title')) {
      // Extract the text content
      const text = link.textContent.trim();
      
      // Create descriptive titles based on the nav item text
      let titleText = '';
      
      switch(text) {
        case 'Home':
          titleText = 'Return to homepage';
          break;
        case 'Work 🚀':
          titleText = 'View my project portfolio';
          break;
        case 'Research 🔍':
          titleText = 'Explore my research work';
          break;
        case 'Writings 📓':
          titleText = 'Read my articles and publications';
          break;
        case 'About':
          titleText = 'Learn more about me';
          break;
        case 'Resume':
          titleText = 'View my professional resume';
          break;
        default:
          titleText = `Visit ${text} page`;
      }
      
      link.setAttribute('title', titleText);
    }
  });
  
  // Enhance social links in the navbar
  const socialLinks = document.querySelectorAll('.navbar-nav a[href^="https://"], .navbar-nav a[href^="mailto:"]');
  
  socialLinks.forEach(link => {
    if (!link.hasAttribute('title')) {
      if (link.href.includes('linkedin')) {
        link.setAttribute('title', 'Connect with me on LinkedIn');
      } else if (link.href.includes('github')) {
        link.setAttribute('title', 'View my code on GitHub');
      } else if (link.href.includes('mailto')) {
        link.setAttribute('title', 'Send me an email');
      }
    }
  });
  
  // Ensure all buttons have proper hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    
    button.addEventListener('mouseout', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Additional specific fixes for font consistency and button text
  // Fix for Resume button
  const resumeButton = document.querySelector('.resume-button');
  if (resumeButton) {
    // Make sure the button text is visible and properly styled
    resumeButton.style.display = 'inline-flex';
    resumeButton.style.alignItems = 'center';
    resumeButton.style.justifyContent = 'center';
    
    const btnText = resumeButton.querySelector('.btn-text');
    if (btnText) {
      btnText.style.display = 'inline-block';
      btnText.style.fontFamily = 'var(--body-font)';
      btnText.style.fontWeight = '600';
      btnText.style.color = 'white';
    }
  }
  
  // Fix for consistent fonts in case study links
  const caseStudyLinks = document.querySelectorAll('.view-project-btn');
  caseStudyLinks.forEach(link => {
    const spanText = link.querySelector('.consistent-font');
    if (spanText) {
      spanText.style.fontFamily = 'var(--body-font)';
      spanText.style.fontSize = '0.95rem';
      spanText.style.fontWeight = '500';
      spanText.style.color = 'var(--primary-color)';
      spanText.style.display = 'inline-block';
    }
  });
  
  // Fix for View All Projects link
  const viewAllLink = document.querySelector('.view-all-link');
  if (viewAllLink) {
    const spanText = viewAllLink.querySelector('.consistent-font');
    if (spanText) {
      spanText.style.fontFamily = 'var(--body-font)';
      spanText.style.fontSize = '1.1rem';
      spanText.style.fontWeight = '500';
      spanText.style.color = 'var(--primary-color)';
      spanText.style.display = 'inline-block';
    }
  }
});
