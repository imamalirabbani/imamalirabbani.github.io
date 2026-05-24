document.addEventListener('DOMContentLoaded', () => {
  // 10. Performance & Scroll Reveal Logic (Intersection Observer)
  // Since all content is pre-rendered statically in index.html, we don't need any dynamic DOM manipulation
  // We only keep the Intersection Observer animation for beautiful scroll reveal, but we exclude above-the-fold content 
  // (such as header, hero section) from having initial opacity 0 to maximize FCP and LCP scores.
  
  const revealElements = document.querySelectorAll('section#about, section#projects, section#side-projects, section#contact, .techstack-group');
  
  revealElements.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // Unobserve to improve performance after animating once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Animates slightly before element fully enters viewport
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Graceful fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }
});
