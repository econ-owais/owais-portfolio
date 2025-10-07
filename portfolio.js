// Portfolio.js - Ultra-Premium Version with Core Subjects
document.addEventListener('DOMContentLoaded', () => {

    // ======================================
    // Portfolio Data with Core Subjects
    // ======================================

    const education = [
        {
            title: "Bachelor's in Economics",
            institution: "Bacha Khan University Charsadda",
            date: "2021-2025",
            grade: "CGPA 3.5/4.00",
            description: "Thesis: 'Impact of Climate Change on Agriculture Production of Khyber Pakhtunkhwa'",
            thesis_link: "https://drive.google.com/file/d/1harwAm6_QGf-JVitg50jyX_ZOWtbXg1k/view?usp=sharing",
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
            title: "Diploma in Information Technology",
            institution: "Government Technical and Vocation Center Umarzai",
            date: "2023-2024",
            grade: "Grade A (761/1000)",
            description: "Comprehensive IT training covering modern technologies",
            subjects: [
                "Computer Fundamentals",
                "Programming Basics",
                "Database Management",
                "Web Development",
                "Microsoft Office Suite",
                "Networking Fundamentals"
            ]
        },
        {
            title: "Intermediate in Pre-Engineering",
            institution: "Government Degree College Achni Payan, Peshawar",
            date: "2019-2021",
            description: "Science foundation with focus on analytical thinking",
            subjects: [
                "Mathematics",
                "Physics",
                "Chemistry",
                "English",
                "Computer Science"
            ]
        },
        {
            title: "Short Courses - Data for Sustainable Development & Climate Change",
            institution: "UNDP & ECI (Empowerment through Creative Integration)",
            date: "November 2024 - December 2024",
            description: "Specialized training in sustainable development and climate policy",
            subjects: [
                "Data for SDGs",
                "Climate Change Analysis",
                "Policy Development",
                "Sustainable Development Goals"
            ]
        },
        {
            title: "Sustainable Development Goals (SDGs) Training Program",
            institution: "UNDP with collaboration with Bacha Khan University",
            date: "Ongoing",
            description: "Comprehensive SDGs framework and implementation strategies",
            subjects: [
                "SDG Framework",
                "Goal Implementation",
                "Monitoring & Evaluation",
                "Policy Integration"
            ]
        }
    ];

    const experiences = [
        {
            title: "Summer Intern",
            company: "State Bank of Pakistan",
            date: "June 2025 - August 2025",
            location: "Peshawar, Pakistan",
            description: "Worked alongside economists and HR strategists at SBP during a six-week internship focused on hiring systems, team structures, and institutional workflows. Contributed to discussions on talent acquisition and public-sector performance, gaining early exposure to how national policy is shaped from the inside."
        },
        {
            title: "Intern - Economic Research and Policy Analysis",
            company: "ISPR (Ministry of Pakistan)",
            date: "January 2025 - February 2025",
            location: "Peshawar, Pakistan",
            description: "Led an econometric analysis of national budgets for defense and welfare spending, identifying PKR 2.5M in potential annual savings. Presented findings to senior officials, which were adopted by the Ministry and influenced KP's 2025 welfare budget decisions."
        },
        {
            title: "Facilitator & Mentor",
            company: "Bacha Khan University Charsadda",
            date: "July 29-31, 2024",
            location: "Charsadda, Pakistan",
            description: "Facilitated the International Conference on Breakthroughs in Pakistan's Economic Development Through Technological Innovation in Agriculture. Coordinated sessions, supported speakers and panelists, and mentored student volunteers."
        },
        {
            title: "Research Assistant",
            company: "Bacha Khan University Research Project",
            date: "December 2023 - April 2024",
            location: "Charsadda, Pakistan",
            description: "Assisted on a flood mitigation research project, reviewing datasets, conducting analysis, and supporting background research. Used Stata, R, and Tableau to clean data, run analysis, and create visuals for local officials."
        },
        {
            title: "Intern - Data Analyst",
            company: "Wilayat Khan Wazir Construction Company",
            date: "January 2022 - July 2022",
            location: "Peshawar, Pakistan",
            description: "Analyzed commuter travel patterns in Peshawar using Stata and redesigned bus schedules to cut operating costs by 15% and reduce delays by 20%, improving daily commutes."
        }
    ];

    const skills = [
        { name: "STATA", icon: "fa-chart-line" },
        { name: "R Programming", icon: "fa-code" },
        { name: "SPSS", icon: "fa-chart-bar" },
        { name: "EViews", icon: "fa-chart-area" },
        { name: "Power BI", icon: "fa-chart-pie" },
        { name: "Python", icon: "fa-python" },
        { name: "Tableau", icon: "fa-table" },
        { name: "SQL", icon: "fa-database" },
        { name: "GitHub", icon: "fa-github" },
        { name: "Excel", icon: "fa-file-excel" },
        { name: "Econometric Modeling", icon: "fa-calculator" },
        { name: "Project Management", icon: "fa-tasks" },
        { name: "Critical Thinking", icon: "fa-brain" },
        { name: "Team Collaboration", icon: "fa-users" }
    ];

    const projects = [
        {
            title: "🌍 Climate & Economic Risk Tool",
            description: "Interactive Streamlit app analyzing climate risks and economic impacts across regions with real-time data visualization.",
            link: "https://climate-app-owais.streamlit.app/",
            tags: ["Python", "Streamlit", "Climate Analysis"],
            featured: true
        },
        {
            title: "Pakistan SDGs Indicators Dashboard",
            description: "Tracks national progress on Sustainable Development Goals using UN and government data.",
            link: "https://econ-owaisali.shinyapps.io/Pakistan-SDGs-Indicators-Dashboard/",
            tags: ["R/Shiny", "SDGs", "Data Viz"]
        },
        {
            title: "KPK Flood Impact Infographic",
            description: "Visualizes flood-affected zones to inform infrastructure planning and academic research.",
            link: "https://econ-owaisali.shinyapps.io/kpk_flood_dashboard/",
            tags: ["R/Shiny", "GIS", "Climate"]
        },
        {
            title: "Healthy Diet Affordability Dashboard",
            description: "Analyzes cost and accessibility of nutritious diets across Pakistan using FAO food price data.",
            link: "https://econ-owaisali.shinyapps.io/Healthy-Diet-Dashboard/",
            tags: ["R/Shiny", "Public Health"]
        },
        {
            title: "Pakistan Macro Indicators Dashboard",
            description: "Displays inflation, GDP, and trade metrics for economic analysis and decision-making.",
            link: "https://econ-owaisali.shinyapps.io/Pakistan-macro-indicator-Dashboard/",
            tags: ["R/Shiny", "Macroeconomics"]
        },
        {
            title: "Irrigation Dashboard for Pakistan",
            description: "Water resource analytics for agricultural planning and climate resilience.",
            link: "https://econ-owaisali.shinyapps.io/irrigation_project/",
            tags: ["R/Shiny", "Agriculture"]
        },
        {
            title: "Urban Planning Traffic Survey",
            description: "GIS-based traffic flow model for Charsadda District (2040) analyzing 500+ commuter patterns.",
            link: "https://mohw.gov.pk/ProjectDetail/Nzk1NGExNWEtYTRkZC00ZTM5LWI2YzAtYTdlYzMwNmQ3NTk5",
            tags: ["GIS", "Urban Planning"]
        }
    ];

    const leadership = [
        {
            title: "District Facilitator & Team Leader",
            organization: "Alahidamat Foundation, Charsadda",
            date: "June 2023 - Current",
            description: "Volunteered with Alahidamat Foundation, Charsadda, supporting community development initiatives and emergency relief operations."
        },
        {
            title: "Vice President (District Leadership Role)",
            organization: "Youth Peace & Research Society",
            date: "February 2020 - Current",
            description: "Led mobilization of 50+ volunteers to deliver emergency relief to 200+ flood-affected families. Secured Rs. 300,000 in donations and implemented WASH programs improving clean water access for 15 villages."
        },
        {
            title: "Student Education Ambassador",
            organization: "Bacha Khan University",
            date: "January 2022 - Current",
            description: "Represented university at national seminars, collaborating with students from LUMS, NUST, and GIKI. Led initiatives promoting academic growth and mentorship, impacting 500+ students across KPK."
        },
        {
            title: "Head Coordinator",
            organization: "Bacha Khan University Charsadda",
            date: "2021-2022",
            description: "Led and managed volunteer teams to oversee and organize major university events, coordinating multiple large-scale initiatives."
        }
    ];

    const topCertifications = [
        { title: "Google Advanced Data Analytics", issuer: "Google", link: "https://coursera.org/verify/professional-cert/U5L3C5HCSDCH" },
        { title: "Google Project Management", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/C7WJTPZCWGEK" },
        { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/7J8MVY69VAL0" },
        { title: "Financial Markets", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WAHXZ0XBUW8H" },
        { title: "Environmental Economics", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/verify/9JXM7CR7MTXY" },
        { title: "Python for Data Science & AI", issuer: "IBM", link: "https://www.credly.com/badges/f64113dc-7511-4709-ac8b-3dd5f91d7a49" }
    ];

    // ======================================
    // Populate Functions
    // ======================================

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map(skill => `
            <span class="skill-tag">
                <i class="fas ${skill.icon}"></i>
                ${skill.name}
            </span>
        `).join('');
    }

    // Education with Core Subjects
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
        educationContainer.innerHTML = education.map(edu => `
            <div class="education-card">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">${edu.title}</h3>
                        <p class="text-lg font-semibold text-blue-600 mb-1">
                            <i class="fas fa-university mr-2"></i>${edu.institution}
                        </p>
                        <p class="text-sm text-gray-500">
                            <i class="fas fa-calendar mr-2"></i>${edu.date}
                            ${edu.grade ? `<span class="ml-4"><i class="fas fa-star mr-2"></i>${edu.grade}</span>` : ''}
                        </p>
                    </div>
                </div>
                <p class="text-gray-700 mb-4">${edu.description}</p>
                ${edu.thesis_link ? `
                    <a href="${edu.thesis_link}" target="_blank" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-4">
                        <i class="fas fa-file-pdf"></i> View Thesis →
                    </a>
                ` : ''}
                ${edu.subjects ? `
                    <div class="subjects-grid">
                        ${edu.subjects.map(subject => `
                            <div class="subject-tag">
                                <i class="fas fa-check-circle"></i>
                                ${subject}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    // Experience
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        experienceContainer.innerHTML = experiences.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="glass-card p-8">
                    <div class="text-sm font-semibold text-blue-600 mb-2">
                        <i class="fas fa-calendar-alt mr-2"></i>${exp.date}
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">${exp.title}</h3>
                    <p class="text-lg font-semibold text-purple-600 mb-1">
                        <i class="fas fa-building mr-2"></i>${exp.company}
                    </p>
                    <p class="text-sm text-gray-500 mb-4">
                        <i class="fas fa-map-marker-alt mr-2"></i>${exp.location}
                    </p>
                    <p class="text-gray-700 leading-relaxed">${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(proj => `
            <div class="glass-card p-8 relative">
                ${proj.featured ? '<div class="featured-badge"><i class="fas fa-star mr-2"></i>FEATURED</div>' : ''}
                <h3 class="text-2xl font-bold text-gray-900 mb-4">${proj.title}</h3>
                <p class="text-gray-700 mb-6 leading-relaxed">${proj.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${proj.tags.map(tag => `
                        <span class="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="${proj.link}" target="_blank" class="btn-premium">
                    <i class="fas fa-external-link-alt"></i> View Project
                </a>
            </div>
        `).join('');
    }

    // Leadership
    const leadershipContainer = document.getElementById('leadership-container');
    if (leadershipContainer) {
        leadershipContainer.innerHTML = leadership.map(lead => `
            <div class="glass-card p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">${lead.title}</h3>
                <p class="text-lg font-semibold text-purple-600 mb-1">
                    <i class="fas fa-users mr-2"></i>${lead.organization}
                </p>
                <p class="text-sm text-gray-500 mb-4">
                    <i class="fas fa-calendar mr-2"></i>${lead.date}
                </p>
                <p class="text-gray-700 leading-relaxed">${lead.description}</p>
            </div>
        `).join('');
    }

    // Certifications
    const certificationsContainer = document.getElementById('certifications-container');
    if (certificationsContainer) {
        certificationsContainer.innerHTML = topCertifications.map(cert => `
            <div class="glass-card p-8">
                <h4 class="text-xl font-bold text-gray-900 mb-2">${cert.title}</h4>
                <p class="text-lg font-semibold text-blue-600 mb-4">
                    <i class="fas fa-award mr-2"></i>${cert.issuer}
                </p>
                <a href="${cert.link}" target="_blank" class="btn-premium">
                    <i class="fas fa-external-link-alt"></i> Verify
                </a>
            </div>
        `).join('');
    }

    // ======================================
    // Animated Counter
    // ======================================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    };

    animateCounters();

    // ======================================
    // Scroll Animations
    // ======================================
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    };

    observeElements();

    // ======================================
    // Back to Top Button
    // ======================================
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ======================================
    // Smooth Scroll
    // ======================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    console.log('✨ Ultra-Premium Portfolio Loaded Successfully!');
});
