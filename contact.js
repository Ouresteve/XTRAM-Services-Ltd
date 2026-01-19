// Contact page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Form submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // For demo purposes, show success message
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    this.reset();
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe contact items and form
  const animateElements = document.querySelectorAll('.contact-item, .form-container');
  animateElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });

  // Add hover effects
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});