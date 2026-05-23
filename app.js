document.addEventListener('DOMContentLoaded', () => {
  const data = portfolioData;

  // Helper function to safely update text/HTML or attribute
  const updateEl = (id, prop, value) => {
    const el = document.getElementById(id);
    if (el) el[prop] = value;
  };

  // Helper function to safely update innerHTML
  const updateHTML = (id, html) => updateEl(id, 'innerHTML', html);

  // 1. Top Banner
  if (data.header) {
    const linksHTML = data.header.bannerLinks.map(link => 
      `<a target="_blank" rel="noopener noreferrer" class="top-banner-link" href="${link.url}">${link.text}</a>`
    ).join('');
    updateHTML('top-banner-container', `
      <p class="top-banner-text">${data.header.bannerText}</p>
      <div class="top-banner-links">${linksHTML}</div>
    `);
  }

  // 2. Navbar Menu & Brand
  if (data.navbar) {
    updateHTML('navbar-menu', data.navbar.links.map(link => 
      `<a class="nav-link" href="${link.url}">${link.text}</a>`
    ).join(''));
    updateEl('navbar-brand', 'textContent', data.navbar.brand);
  }

  // 3. Hero Section
  if (data.hero) {
    updateEl('hero-banner-img', 'src', data.hero.bannerImg);
    updateEl('hero-avatar-img', 'src', data.hero.avatarImg);
    updateEl('hero-name', 'textContent', data.name || data.hero.name);
    updateEl('hero-role', 'textContent', data.hero.role);
    updateEl('hero-location-text', 'textContent', data.hero.location);
    updateEl('hero-cta-btn', 'href', data.hero.whatsappUrl);

    const socialsHTML = data.hero.socials.map(social => 
      `<a target="_blank" rel="noopener noreferrer" class="social-link" title="${social.name}" href="${social.url}">
        ${social.iconSvg}
      </a>`
    ).join('');
    updateHTML('hero-socials', socialsHTML);
  }

  // 4. About Section
  if (data.about) {
    updateHTML('about-headline', data.about.headline);
    updateEl('about-desc', 'textContent', data.about.description);
    
    const specsHTML = data.about.specializations.map(spec => 
      `<div class="specialization-badge"><span class="specialization-text">${spec}</span></div>`
    ).join('');
    updateHTML('specialization-grid', specsHTML);
  }

  // 5. Tech Stack Section
  if (data.techStack) {
    updateEl('techstack-title', 'textContent', data.techStack.title);
    updateEl('techstack-subtitle', 'textContent', data.techStack.subtitle);

    const groupsHTML = data.techStack.groups.map(group => `
      <div class="techstack-group">
        <h3 class="techstack-group-title">${group.title}</h3>
        <div class="techstack-grid">
          ${group.items.map(item => `
            <div class="tech-card">
              <div class="tech-icon-box">${item.icon}</div>
              <div class="tech-info">
                <h4 class="tech-name">${item.name}</h4>
                <p class="tech-role">${item.role}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    updateHTML('techstack-groups', groupsHTML);
  }

  // 6. Featured Projects Section
  if (data.projects) {
    const projectsHTML = data.projects.map(proj => `
      <div class="project-card">
        <div class="project-img-wrapper">
          <img class="project-img" src="${proj.img}" alt="${proj.title}" loading="lazy" decoding="async" width="1672" height="941">
        </div>
        <div class="project-details">
          <a class="project-title-link" href="${proj.url}" target="_blank" rel="noopener noreferrer">
            <h4>${proj.title}</h4>
          </a>
          <div class="project-desc-wrapper">
            <p class="project-desc">${proj.description}</p>
          </div>
          <div class="project-tags">
            ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
    updateHTML('projects-grid', projectsHTML);
  }

  // 7. Other Services & Side Projects Section
  if (data.otherServices) {
    const servicesHTML = data.otherServices.map(service => `
      <div class="tile-item">
        <a class="tile-title-link" href="${service.url}">
          <span class="tile-title">${service.title}</span>
        </a>
        <svg class="tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
      </div>
    `).join('');
    updateHTML('other-services-list', servicesHTML);
  }

  if (data.sideProjects) {
    const sideHTML = data.sideProjects.map(proj => `
      <div class="tile-item">
        <a class="tile-title-link" href="${proj.url}" target="_blank" rel="noopener noreferrer">
          <span class="tile-title-large">${proj.title}</span>
        </a>
        <svg class="tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
      </div>
    `).join('');
    updateHTML('side-projects-list', sideHTML);
  }

  // 8. Contact Section
  if (data.contact) {
    updateHTML('contact-headline', data.contact.headline);
    updateEl('contact-desc', 'textContent', data.contact.description);
    updateEl('contact-email', 'textContent', data.contact.email);
    updateEl('contact-email', 'href', "mailto:" + data.contact.email);
    updateEl('contact-location', 'textContent', data.contact.location);

    const contactSocialsHTML = data.contact.socials.map(social => 
      `<a target="_blank" rel="noopener noreferrer" class="contact-social-link" href="${social.url}">${social.name}</a>`
    ).join('');
    updateHTML('contact-socials', contactSocialsHTML);
    updateEl('contact-cta-btn', 'href', data.hero?.whatsappUrl || '#');
  }

  // 9. Footer
  if (data.footer) {
    updateEl('footer-text', 'textContent', data.footer.text);
  }

  // 10. Performance & Scroll Reveal Logic (Intersection Observer)
  const revealElements = document.querySelectorAll('section, .techstack-group, .project-card, .side-projects-row');
  
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
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Animates slightly before element fully enters viewport
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Graceful fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }
});