// Contact page functionality
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key:", "e1a61131-b156-4681-be87-40bac9764c2d");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
        },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent. We will get back to you soon.");
            this.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
    
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
