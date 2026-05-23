const portfolioData = {
  header: {
    bannerText: "👋 Available for new freelance projects",
    bannerLinks: [
      { text: "LinkedIn", url: "https://linkedin.com/in/imamalirabbani" },
      { text: "GitHub", url: "https://github.com/imamalirabbani" },
      { text: "Email", url: "mailto:imamalirabbani@gmail.com" }
    ]
  },
  navbar: {
    brand: "Imam Ali Rabbani",
    links: [
      { text: "About", url: "#about" },
      { text: "Projects", url: "#projects" },
      { text: "Contact", url: "#contact" }
    ]
  },
  hero: {
    bannerImg: "./images/BENNER-optimized.jpg",
    avatarImg: "./images/profile.jpg",
    name: "Imam Ali Rabbani",
    role: "Fullstack Developer",
    location: "Cianjur, West Java",
    whatsappUrl: "https://wa.me/6285182235662",
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/imamalirabbani",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
      },
      {
        name: "GitHub",
        url: "https://github.com/imamalirabbani",
        iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>'
      }
    ]
  },
  about: {
    headline: "Hello, I'm Imam — <span class='highlight-bg'>a growing Fullstack Developer</span> building modern and efficient web applications.",
    description: "I focus on frontend, backend, and database development with a detailed, adaptive, and user-experience-oriented approach.",
    specializations: [
      "Realtime Systems", 
      "AI Integration", 
      "Dashboard Analytics", 
      "API Gateway", 
      "WebSocket Engineering"
    ]
  },
  techStack: {
    title: "Tech Stack",
    subtitle: "Technologies and tools I use to build scalable, performant, and robust systems.",
    groups: [
      {
        title: "Frontend",
        items: [
          { icon: "⚛️", name: "React", role: "UI Library" },
          { icon: "▲", name: "Next.js", role: "React Framework" },
          { icon: "🎨", name: "Tailwind CSS", role: "Utility CSS" },
          { icon: "✨", name: "Framer Motion", role: "Animation" }
        ]
      },
      {
        title: "Backend",
        items: [
          { icon: "🟢", name: "Node.js", role: "Runtime" },
          { icon: "⚡", name: "Express", role: "HTTP Framework" },
          { icon: "🗄️", name: "REST API", role: "API Design" },
          { icon: "🔌", name: "Socket.IO", role: "WebSocket" }
        ]
      },
      {
        title: "Database",
        items: [
          { icon: "🐬", name: "MySQL", role: "Relational DB" },
          { icon: "🔴", name: "Redis", role: "Cache & Queue" }
        ]
      },
      {
        title: "DevOps",
        items: [
          { icon: "🐳", name: "Docker", role: "Container" },
          { icon: "⚙️", name: "PM2", role: "Process Manager" },
          { icon: "🌐", name: "Nginx", role: "Web Server" },
          { icon: "☁️", name: "Cloudflare", role: "CDN & Tunnel" }
        ]
      },
      {
        title: "AI & Automation",
        items: [
          { icon: "🤖", name: "OpenAI API", role: "LLM Integration" },
          { icon: "📚", name: "Knowledge Base", role: "AI Context" },
          { icon: "🧠", name: "AI Agent", role: "Automation" },
          { icon: "🔗", name: "Webhooks", role: "Integration" }
        ]
      }
    ]
  },
  projects: [
    {
      img: "./images/CRM-optimized.jpg",
      title: "Aurumvice CRM",
      url: "https://github.com/imamalirabbani/AURUMVICE",
      description: "Omnichannel CRM platform with realtime chat, AI chatbot, and dashboard analytics features.",
      tags: ["Node.js", "CRM"]
    },
    {
      img: "./images/E-COMMERCE-optimized.jpg",
      title: "Aurumvice E-Commerce",
      url: "https://github.com/imamalirabbani/AURUMVICE",
      description: "Aurumvice brand e-commerce website.",
      tags: ["JavaScript", "E-Commerce"]
    }
  ],
  otherServices: [
    { title: "Website Development", url: "mailto:imamalirabbani@gmail.com" },
    { title: "API & Backend Development", url: "mailto:imamalirabbani@gmail.com" },
    { title: "AI Chatbot Integration", url: "mailto:imamalirabbani@gmail.com" },
    { title: "Realtime System Architecture", url: "mailto:imamalirabbani@gmail.com" }
  ],
  sideProjects: [
    { title: "Aurumvice CRM", url: "https://github.com/imamalirabbani/AURUMVICE" },
    { title: "Aurumvice E-Commerce", url: "https://github.com/imamalirabbani/AURUMVICE" }
  ],
  contact: {
    headline: "Let's <span class='highlight-bg'>discuss your next project</span>.",
    description: "I am always open to exciting collaborations, freelance projects, or just sharing ideas about system development.",
    email: "imamalirabbani@gmail.com",
    location: "Cianjur, West Java",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/imamalirabbani" },
      { name: "GitHub", url: "https://github.com/imamalirabbani" },
      { name: "WhatsApp", url: "https://wa.me/6285182235662" }
    ]
  },
  footer: {
    text: "© 2026 Imam Ali Rabbani — Building with quality and integrity."
  }
};