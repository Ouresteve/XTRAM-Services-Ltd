/* ================= IMPACT COUNTERS ================= */
// ===== IMPACT COUNTERS =====
const counters = document.querySelectorAll(".impact-item h3");

function startCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = target / 200; // 200 steps
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      counter.textContent = target + "+";
      clearInterval(interval);
    } else {
      counter.textContent = Math.floor(count);
    }
  }, 20); // 20ms between updates
}

// Use IntersectionObserver to trigger only when visible
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 } // half visible triggers
);

counters.forEach(counter => observer.observe(counter));


/* ================= TESTIMONIAL AUTO SCROLL ================= */
const track = document.getElementById("testimonialTrack");

let scrollSpeed = 0.5;

function autoScroll() {
  track.scrollLeft += scrollSpeed;

  if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
    track.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();
