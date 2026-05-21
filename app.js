document.addEventListener('DOMContentLoaded', () => {
  const data = portfolioData;

  // 1. Top Banner
  const topBannerContainer = document.getElementById('top-banner-container');
  if(topBannerContainer) {
    topBannerContainer.innerHTML = `
      <p class="top-banner-text">${data.header.bannerText}</p>
      <div class="top-banner-links">
        ${data.header.bannerLinks.map(link => `<a target="_blank" rel="noopener noreferrer" class="top-banner-link" href="${link.url}">${link.text}</a>`).join('')}
      </div>
    `;
  }

  // 2. Navbar menu
  const navbarMenu = document.getElementById('navbar-menu');
  if(navbarMenu) {
    navbarMenu.innerHTML = data.navbar.links.map(link => 
      `<a class="nav-link" href="${link.url}">${link.text}</a>`
    ).join('');
  }
  
  const navbarBrand = document.getElementById('navbar-brand');
  if(navbarBrand) {
    navbarBrand.textContent = data.navbar.brand;
  }

  // 3. Hero Section
  const bannerImg = document.getElementById('hero-banner-img');
  if(bannerImg) bannerImg.src = data.hero.bannerImg;

  const avatarImg = document.getElementById('hero-avatar-img');
  if(avatarImg) avatarImg.src = data.hero.avatarImg;

  const heroName = document.getElementById('hero-name');
  if(heroName) heroName.textContent = data.hero.name;

  const heroRole = document.getElementById('hero-role');
  if(heroRole) heroRole.textContent = data.hero.role;

  const heroLocation = document.getElementById('hero-location-text');
  if(heroLocation) heroLocation.textContent = data.hero.location;

  const heroCtaBtn = document.getElementById('hero-cta-btn');
  if(heroCtaBtn) heroCtaBtn.href = data.hero.whatsappUrl;
  
  const socialsContainer = document.getElementById('hero-socials');
  if(socialsContainer) {
    socialsContainer.innerHTML = data.hero.socials.map(social => 
      `<a target="_blank" rel="noopener noreferrer" class="social-link" title="${social.name}" href="${social.url}">
        ${social.iconSvg}
      </a>`
    ).join('');
  }

  // 4. About Section
  const aboutHeadline = document.getElementById('about-headline');
  if(aboutHeadline) aboutHeadline.innerHTML = data.about.headline;

  const aboutDesc = document.getElementById('about-desc');
  if(aboutDesc) aboutDesc.textContent = data.about.description;

  const specGrid = document.getElementById('specialization-grid');
  if(specGrid) {
    specGrid.innerHTML = data.about.specializations.map(spec => 
      `<div class="specialization-badge">
        <span class="specialization-text">${spec}</span>
      </div>`
    ).join('');
  }

  // 5. Tech Stack Section
  const techTitle = document.getElementById('techstack-title');
  if(techTitle) techTitle.textContent = data.techStack.title;

  const techSubtitle = document.getElementById('techstack-subtitle');
  if(techSubtitle) techSubtitle.textContent = data.techStack.subtitle;

  const techGroups = document.getElementById('techstack-groups');
  if(techGroups) {
    techGroups.innerHTML = data.techStack.groups.map(group => `
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
  }

  // 6. Featured Projects Section
  const projectsGrid = document.getElementById('projects-grid');
  if(projectsGrid) {
    projectsGrid.innerHTML = data.projects.map(proj => `
      <div class="project-card">
        <div class="project-img-wrapper">
          <img class="project-img" src="${proj.img}" alt="${proj.title}">
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
  }

  // 7. Other Services & Side Projects Section
  const otherServicesList = document.getElementById('other-services-list');
  if(otherServicesList) {
    otherServicesList.innerHTML = data.otherServices.map(service => `
      <div class="tile-item">
        <a class="tile-title-link" href="${service.url}">
          <span class="tile-title">${service.title}</span>
        </a>
        <svg class="tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
      </div>
    `).join('');
  }

  const sideProjectsList = document.getElementById('side-projects-list');
  if(sideProjectsList) {
    sideProjectsList.innerHTML = data.sideProjects.map(proj => `
      <div class="tile-item">
        <a class="tile-title-link" href="${proj.url}" target="_blank" rel="noopener noreferrer">
          <span class="tile-title-large">${proj.title}</span>
        </a>
        <svg class="tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
      </div>
    `).join('');
  }

  // 8. Contact Section
  const contactHeadline = document.getElementById('contact-headline');
  if(contactHeadline) contactHeadline.innerHTML = data.contact.headline;

  const contactDesc = document.getElementById('contact-desc');
  if(contactDesc) contactDesc.textContent = data.contact.description;

  const contactEmail = document.getElementById('contact-email');
  if(contactEmail) {
    contactEmail.textContent = data.contact.email;
    contactEmail.href = "mailto:" + data.contact.email;
  }

  const contactLocation = document.getElementById('contact-location');
  if(contactLocation) contactLocation.textContent = data.contact.location;
  
  const contactSocials = document.getElementById('contact-socials');
  if(contactSocials) {
    contactSocials.innerHTML = data.contact.socials.map(social => `
      <a target="_blank" rel="noopener noreferrer" class="contact-social-link" href="${social.url}">${social.name}</a>
    `).join('');
  }

  const contactCtaBtn = document.getElementById('contact-cta-btn');
  if(contactCtaBtn) contactCtaBtn.href = data.hero.whatsappUrl; // using whatsapp URL from hero data

  // 9. Footer
  const footerText = document.getElementById('footer-text');
  if(footerText) footerText.textContent = data.footer.text;
});