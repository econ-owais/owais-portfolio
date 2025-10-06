// ===============================================
// ULTRA-PREMIUM PORTFOLIO - Enhanced JavaScript
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // ===============================================
  // 1. LOADING SCREEN
  // ===============================================
  const loadingScreen = document.createElement('div');
  loadingScreen.id = 'loading-screen';
  loadingScreen.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <h2 class="loading-text">Owais Ali Shah</h2>
      <p class="loading-subtext">Loading Portfolio...</p>
    </div>
  `;
  document.body.prepend(loadingScreen);

  // Hide loading screen after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000);
  });

  // ===============================================
  // 2. DARK/LIGHT MODE TOGGLE
  // ===============================================
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle?.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle?.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  // ===============================================
  // 3. TYPING ANIMATION FOR HERO SECTION
  // ===============================================
  if (typeof Typed !== 'undefined') {
    const typed = new Typed('#typed-text', {
      strings: [
        'Economics Graduate',
        'Data Analyst',
        'Policy Researcher',
        'Data Scientist',
        'Econometrician'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ===============================================
  // 4. PARTICLES.JS BACKGROUND
  // ===============================================
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#3B82F6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#3B82F6',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    });
  }

  // ===============================================
  // 5. ANIMATED COUNTERS FOR STATISTICS
  // ===============================================
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const animateCounter = (element, target, suffix = '') => {
    if (typeof countUp !== 'undefined') {
      const options = {
        duration: 2.5,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        suffix: suffix
      };
      const counter = new countUp.CountUp(element, target, options);
      if (!counter.error) {
        counter.start();
      }
    }
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statCards = entry.target.querySelectorAll('.stat-number');
        statCards.forEach(card => {
          const target = parseInt(card.getAttribute('data-target'));
          const suffix = card.getAttribute('data-suffix') || '';
          animateCounter(card, target, suffix);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.getElementById('statistics');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ===============================================
  // 6. AOS (ANIMATE ON SCROLL) INITIALIZATION
  // ===============================================
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }

  // ===============================================
  // 7. VANILLA TILT FOR PROJECT CARDS
  // ===============================================
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  }

  // ===============================================
  // 8. SCROLL PROGRESS BAR
  // ===============================================
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  // ===============================================
  // 9. BACK TO TOP BUTTON
  // ===============================================
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===============================================
  // 10. STICKY NAVIGATION
  // ===============================================
  const navbar = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // ===============================================
  // 11. CONTACT FORM VALIDATION
  // ===============================================
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !subject || !message) {
      showFormMessage('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address', 'error');
      return;
    }
    
    if (message.length < 10) {
      showFormMessage('Message must be at least 10 characters long', 'error');
      return;
    }
    
    // Success message (in real scenario, you'd send this to a server)
    showFormMessage('Thank you! Your message has been sent successfully.', 'success');
    contactForm.reset();
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
      messageDiv.textContent = message;
      messageDiv.className = `form-message ${type}`;
      messageDiv.style.display = 'block';
      
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);
    }
  }

  // ===============================================
  // 12. EMAIL COPY TO CLIPBOARD
  // ===============================================
  const copyEmailBtn = document.getElementById('copy-email');
  copyEmailBtn?.addEventListener('click', () => {
    const email = 'owais.ali.shah.econ@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        copyEmailBtn.innerHTML = originalText;
      }, 2000);
    });
  });

  // ===============================================
  // 13. SKILL BARS ANIMATION
  // ===============================================
  const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.skill-progress');
        const percentage = progressBar?.getAttribute('data-percentage');
        if (progressBar && percentage) {
          setTimeout(() => {
            progressBar.style.width = percentage + '%';
          }, 200);
        }
        skillBarsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-bar').forEach(bar => {
    skillBarsObserver.observe(bar);
  });

  // ===============================================
  // 14. TESTIMONIALS CAROUSEL
  // ===============================================
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) {
        testimonial.classList.add('active');
      }
    });
  }

  document.getElementById('testimonial-prev')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
  });

  document.getElementById('testimonial-next')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }, 5000);

  // ===============================================
  // 15. PROJECT FILTER/SEARCH
  // ===============================================
  const projectSearch = document.getElementById('project-search');
  const projectFilter = document.getElementById('project-filter');
  const projectCards = document.querySelectorAll('.project-card');

  function filterProjects() {
    const searchTerm = projectSearch?.value.toLowerCase() || '';
    const filterValue = projectFilter?.value || 'all';

    projectCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
      
      const matchesSearch = title.includes(searchTerm) || tags.some(tag => tag.includes(searchTerm));
      const matchesFilter = filterValue === 'all' || tags.includes(filterValue.toLowerCase());

      if (matchesSearch && matchesFilter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.classList.remove('visible');
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  }

  projectSearch?.addEventListener('input', filterProjects);
  projectFilter?.addEventListener('change', filterProjects);

  // ===============================================
  // 16. MOBILE MENU TOGGLE
  // ===============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
    mobileMenuBtn?.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('active');
      mobileMenuBtn?.classList.remove('active');
    });
  });

  // ===============================================
  // 17. SMOOTH SCROLL FOR ANCHOR LINKS
  // ===============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===============================================
  // 18. PORTFOLIO DATA
  // ===============================================

  const educationData = [
    {
      title: "Bachelor's in Economics",
      institution: "Bacha Khan University, Charsadda",
      duration: "2021–2025",
      location: "Charsadda, Pakistan",
      details: `Final Grade: CGPA 3.5/4.00. Thesis: <a href="https://drive.google.com/file/d/1harwAm6_QGf-JVitg50jyX_ZOWtbXg1k/view?usp=drive_link" target="_blank" class="text-blue-600 hover:underline font-medium">Impact of Climate Change on Agriculture Production of Khyber Pakhtunkhwa</a>`,
      subjects: [
        "Microeconomics & Macroeconomics",
        "Econometrics & Statistical Analysis",
        "Development Economics",
        "Agricultural Economics",
        "Public Finance & Fiscal Policy",
        "International Trade & Global Markets",
        "Environmental Economics",
        "Mathematical Economics",
        "Research Methodology",
        "Pakistan Economy",
        "Monetary Economics",
        "Islamic Economics"
      ]
    },
    {
      title: "Diploma in Information Technology (Grade-A)",
      institution: "Government Technical & Vocational Centre(B) Umerzai, Charsadda",
      duration: "Feb 2023 – Feb 2024",
      location: "Charsadda, Pakistan",
      details: `Relevant coursework: IT fundamentals, programming, database management, and web development`
    },
    {
      title: "Intermediate in Pre-Engineering",
      institution: "Government Degree College Achni Payan, Peshawar",
      duration: "2019–2021",
      location: "Peshawar, Pakistan",
      details: ``,
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English"
      ]
    },
    {
      title: "Matriculation",
      institution: "New Iqra High School Umarzai",
      duration: "2019",
      location: "Umarzai",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English"
      ]
    }
  ];

  const experienceData = [
    {
      title: "Summer Internship",
      institution: "State Bank of Pakistan",
      duration: "June 2025 - August 2025",
      location: "Peshawar, Pakistan",
      details: "Worked alongside economists and HR strategists at SBP during a six-week internship focused on hiring systems, team structures, and institutional workflows. Contributed to discussions on talent acquisition and public-sector performance, gaining early exposure to how national policy is shaped from the inside. This experience sparked my long-term drive to blend data, design, and strategy for public impact."
    },
    {
      title: "Intern – Economic Research and Policy Analysis",
      institution: "Inter-Services Public Relations (ISPR), Ministry of Pakistan",
      duration: "January - February 2025",
      location: "Peshawar, Pakistan",
      details: "Analyzed defense versus welfare spending through a comprehensive econometric analysis using Stata and R for a key policy brief. This work identified PKR 2.5M in potential annual savings, which was subsequently adopted by the Ministry. Collaborated with a 5-member team to present these findings to senior officials, directly contributing to the decisions for KP's 2025 welfare budget."
    },
    {
      title: "Facilitator & Mentor",
      institution: "Bacha Khan University Charsadda",
      duration: "July 29–31, 2024",
      location: "Charsadda, Pakistan",
      details: "Facilitated the International Conference on Breakthroughs in Pakistan's Economic Development Through Technological Innovation in Agriculture – A Policy Approach. Coordinated sessions, supported speakers and panelists in real time, and ensured a smooth, professional experience across all three days. Mentored student volunteers, blending logistics with strategic guidance throughout the event."
    },
    {
      title: "Research Assistant",
      institution: "Bacha Khan University Charsadda",
      duration: "December 2023 - April 2024",
      location: "Charsadda, Pakistan",
      details: "Assisted a professor in a flood mitigation research project, focusing on the high-risk data for the Charsadda region. Managed the end-to-end data lifecycle, including reviewing and cleaning datasets, conducting in-depth analysis, and supporting background research. Produced clear and compelling data visuals and analyses using Stata, R, and Tableau with a high degree of autonomy."
    },
    {
      title: "Intern-Development and Project Management",
      institution: "Building Control Authority (BCA), TMA Karak",
      duration: "June - August 2023",
      location: "Karak, Pakistan",
      details: "Collaborated directly with the district architect on the Karak Area Development Project, performing detailed cost and benefit analyses to inform the design and construction of new buildings. Managed project progress by actively tracking construction schedules, ensuring all phases remained on track and aligned with initial project blueprints."
    },
    {
      title: "Intern-Data Analyst",
      institution: "Wilayat Khan Wazir Construction Company",
      duration: "January - July 2022",
      location: "Peshawar, Pakistan",
      details: "Redesigned bus schedules in collaboration with transport authorities based on a detailed study of commuter travel patterns using Stata. This project optimized routes around peak hours and passenger demand, resulting in a 15% reduction in operating costs and a 20% decrease in delays, improving the daily commute for thousands."
    }
  ];

  const academicProjectsData = [
    {
      title: "Local Climate & Economic Risk Comparison Tool",
      duration: "Completed",
      details: `Interactive tool for analyzing climate risks and economic impacts across different regions. Features real-time data visualization, comparative analysis, and predictive modeling for informed decision-making on climate adaptation and economic resilience.
      <br><br>
      <a href="https://climate-app-owais.streamlit.app/" target="_blank" class="text-blue-600 hover:underline font-medium">View App →</a>`,
      tags: ["Climate Analysis", "Economic Modeling", "Python", "Streamlit", "Data Visualization", "Risk Assessment"]
    },
    {
      title: "SDG Indicators Dashboard",
      duration: "Completed",
      details: `This dashboard tracks national progress on Sustainable Development Goals by leveraging UN and government data, providing a comprehensive and up-to-date view of key indicators.
      <br><br>
      <a href="https://econ-owais.github.io/Pakistan_SDGS-indicator-s-Dashboard/" target="_blank" class="text-blue-600 hover:underline font-medium">View Demo</a> | 
      <a href="https://econ-owaisali.shinyapps.io/Pakistan-SDGs-Indicators-Dashboard/" target="_blank" class="text-blue-600 hover:underline font-medium">View App</a>`
    },
    {
      title: "Flood Impact Infographic (Charsadda)",
      duration: "Completed",
      details: `This infographic visualizes flood-prone zones to inform infrastructure planning and academic research. The interactive map helps stakeholders quickly identify and assess areas at risk.
      <br><br>
      <a href="https://econ-owais.github.io/KPK-Flood-Impact-Infographic-/" target="_blank" class="text-blue-600 hover:underline font-medium">View Demo</a> | 
      <a href="https://econ-owaisali.shinyapps.io/kpk_flood_dashboard/" target="_blank" class="text-blue-600 hover:underline font-medium">View App</a>`
    },
    {
      title: "Healthy Diet Affordability Dashboard",
      duration: "Completed",
      details: `This dashboard analyzes the cost and accessibility of nutritious diets using FAO food price data. It helps users understand the economic barriers to healthy eating.
      <br><br>
      <a href="https://econ-owais.github.io/Healthy-Diet-Affordability-Dashboard/" target="_blank" class="text-blue-600 hover:underline