// About page animations
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for fade-in animations
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

  // Observe elements
  const animateElements = document.querySelectorAll('.mission-item, .choose-item, .story-content');
  animateElements.forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
  });

  // Add hover effects
  const missionItems = document.querySelectorAll('.mission-item, .choose-item');
  missionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});