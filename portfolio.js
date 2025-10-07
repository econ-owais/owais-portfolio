// Ultra-Premium Portfolio.js - Complete & Optimized
document.addEventListener('DOMContentLoaded', () => {

    // ======================================
    // Portfolio Data with Core Subjects
    // ======================================

    const education = [
        {
            title: "Bachelor's in Economics",
            institution: "Bacha Khan University Charsadda",
            date: "2021-2025",
            description: "CGPA 3.5/4.00. Thesis: 'Impact of Climate Change on Agriculture Production of Khyber Pakhtunkhwa'. <a href='https://drive.google.com/file/d/1harwAm6_QGf-JVitg50jyX_ZOWtbXg1k/view?usp=sharing' target='_blank' class='text-blue-600 hover:text-blue-800 text-sm font-medium'>View Thesis →</a>",
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
            description: "Final Grade: 761/1000 (A).",
            subjects: [
                "Programming Fundamentals",
                "Database Management",
                "Web Development",
                "Computer Networks",
                "Operating Systems"
            ]
        },
        {
            title: "Short Courses of Data for Sustainable Development & Climate Change",
            institution: "UNDP & ECI (Empowerment & thru Creative Integration)",
            date: "November 2024 - December 2024",
            description: "City: Islamabad, Country: Pakistan.",
            subjects: [
                "Data Analysis for Development",
                "Climate Change Mitigation",
                "Sustainable Development Goals",
                "Policy Research Methods"
            ]
        },
        {
            title: "Flood First Responders (Emergency Service Society)",
            institution: "Bacha Khan University Charsadda",
            date: "March 2022 - Current",
            description: "City: Charsadda, Country: Pakistan.",
            subjects: [
                "Emergency Response",
                "Disaster Management",
                "First Aid & Safety",
                "Community Coordination"
            ]
        },
        {
            title: "Sustainable Development Goals (SDGs) Training Program",
            institution: "UNDP with collaboration with Bacha Khan University",
            date: "Ongoing",
            description: "City: Charsadda, Country: Pakistan.",
            subjects: [
                "SDG Framework & Implementation",
                "Policy Integration",
                "Monitoring & Evaluation",
                "Stakeholder Engagement"
            ]
        }
    ];

    // ONLY INTERNSHIPS - Filtered and ordered by most recent first
const experiences = [
    {
        title: "Summer-Intern",
        company: "State Bank of Pakistan",
        date: "June 2025 - August 2025",
        description: "Worked alongside economists and HR strategists at SBP during a six-week internship focused on hiring systems, team structures, and institutional workflows."
    },
    {
        title: "Intern - Economic Research and Policy Analysis",
        company: "ISPR (Ministry of Pakistan)",
        date: "January 2025 - February 2025",
        description: "Led an econometric analysis of national budgets for defense and welfare spending, identifying PKR 2.5M in potential annual savings. Presented findings to senior officials."
    },
    {
        title: "Research Assistant",
        company: "Bacha Khan University Research Project",
        date: "December 2023 - April 2024",
        description: "Assisted on a flood mitigation research project, reviewing datasets, conducting analysis, and supporting background research using Stata, R, and Tableau."
    },
    {
        title: "Intern-Development and Project Management",
        company: "Building Control Authority (BCA), TMA Karak",
        date: "June 2023 - August 2023",
        description: "Conducted detailed cost and benefit analyses for new building projects within the Karak Area Development Project."
    },
    {
        title: "Intern-Data Analyst",
        company: "Wilayat Khan Wazir Construction Company",
        date: "January 2022 - July 2022",
        description: "Analyzed commuter travel patterns in Peshawar using Stata and redesigned bus schedules to cut operating costs by 15% and reduce delays by 20%."
    }
];

    const skills = [
        "Statistical and econometric software (STATA, SPSS, EViews, R)",
        "Power BI",
        "Python Language - Basic knowledge",
        "Microsoft Office (Outlook, Excel, Word, PowerPoint)",
        "GitHub",
        "Data Visualization (Tableau - Good Standing)",
        "Econometric modeling",
        "Survey design and analysis (Basics in SAS)",
        "Strategic Decision Making",
        "Written and verbal skills",
        "Project management",
        "Team Collaboration and Motivation",
        "Critical thinking",
        "Organizational and planning skills"
    ];

    const projects = [
        {
            title: "Pakistan SDGs Indicators Dashboard",
            description: "Tracks national progress on Sustainable Development Goals using UN and government data.",
            demo: "https://econ-owais.github.io/Pakistan_SDGS-indicator-s-Dashboard/",
            link: "https://econ-owaisali.shinyapps.io/Pakistan-SDGs-Indicators-Dashboard/",
            tags: ["Data Visualization", "R/Shiny", "Sustainable Development"]
        },
        {
            title: "KPK Flood Impact Infographic (Charsadda)",
            description: "Visualizes flood-affected zones to inform infrastructure planning and academic research.",
            demo: "https://econ-owais.github.io/KPK-Flood-Impact-Infographic-/",
            link: "https://econ-owaisali.shinyapps.io/kpk_flood_dashboard/",
            tags: ["Data Visualization", "R/Shiny", "GIS"]
        },
        {
            title: "Healthy Diet Affordability Dashboard",
            description: "Analyzes cost and accessibility of nutritious diets across Pakistan using FAO food price data.",
            demo: "https://econ-owais.github.io/Healthy-Diet-Affordability-Dashboard/",
            link: "https://econ-owaisali.shinyapps.io/Healthy-Diet-Dashboard/",
            tags: ["Data Analysis", "R/Shiny", "Public Health"]
        },
        {
            title: "Pakistan Development Indicators Dashboard",
            description: "Socio-economic trends brought to life with interactive filters and branded design.",
            demo: "https://econ-owais.github.io/pakistan-indicators-dashboard./",
            link: "https://econ-owaisali.shinyapps.io/irrigation_project/",
            tags: ["Data Visualization", "Policy Research"]
        },
        {
            title: "Pakistan Macro Indicators Dashboard",
            description: "Displays inflation, GDP, and trade metrics for economic analysis and decision-making.",
            demo: "https://econ-owais.github.io/Pakistan-Macro-Indicators-Dashboard/",
            link: "https://econ-owaisali.shinyapps.io/Pakistan-macro-indicator-Dashboard/",
            tags: ["Economic Analysis", "Data Visualization", "Macroeconomics"]
        },
        {
            title: "Irrigation Dashboard for Pakistan",
            description: "An intricate dashboard offers water resource analytics for agricultural planning and climate resilience.",
            demo: "https://econ-owaisali.shinyapps.io/irrigation_project/",
            link: "https://econ-owaisali.shinyapps.io/irrigation_project/",
            tags: ["Water Resources", "Agriculture", "Climate Resilience"]
        },
        {
            title: "Urban Planning Traffic Survey for District Charsadda (2040)",
            description: "Co-designed a GIS-based traffic flow model for Charsadda District (2040) by analyzing travel patterns of over 500 commuters. Contributed findings to PEPAC's urban planning report, which was later cited by the KP Government for future development planning.",
            link: "https://mohw.gov.pk/ProjectDetail/Nzk1NGExNWEtYTRkZC00ZTM5LWI2YzAtYTdlYzMwNmQ3NTk5",
            demo: "#",
            tags: ["Urban Planning", "GIS", "Traffic Analysis"]
        }
    ];

    const leadership = [
        {
            title: "District Facilitator & Team Leader",
            organization: "Alahidamat Foundation, Charsadda",
            date: "June 2023 - Current",
            description: "Volunteered with Alahidamat Foundation, Charsadda, supporting community development initiatives.",
            link: "#"
        },
        {
            title: "Vice President (District Leadership Role)",
            organization: "Youth Peace & Research Society",
            date: "February 2020 - Current",
            description: "Led the mobilization of 50+ volunteers to deliver emergency relief (food, hygiene kits, tents) to 200+ flood-affected families in KP. Secured Rs. 300,000 in donations to support home reconstruction efforts. Collaborated with local NGOs (Edhi Foundation, SRSO) to implement WASH programs, improving clean water access for 15 flood-affected villages.",
            link: "#"
        },
        {
            title: "Student Education Ambassador",
            organization: "Bacha Khan University",
            date: "January 2022 - Current",
            description: "Represented my university at national-level seminars and academic events, collaborating with students and ambassadors from top institutions like LUMS, NUST, and GIKI. Led initiatives to promote academic growth, mentorship, and cross-university engagement, impacting 500+ students across KPK.",
            link: "#"
        },
        {
            title: "Head Coordinator",
            organization: "Bacha Khan University Charsadda",
            date: "2021-2022",
            description: "Led and managed a team of volunteers to oversee and organize major university events.",
            link: "#"
        }
    ];

    const topCertifications = [
        { title: "Google Advanced Data Analytics", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/U5L3C5HCSDCH" },
        { title: "Google Project Management", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/C7WJTPZCWGEK" },
        { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/7J8MVY69VAL0" },
        { title: "Statistical Business Analyst", issuer: "SAS", link: "https://www.coursera.org/account/accomplishments/specialization/6TA00Z2AOP6I" },
        { title: "Financial Markets", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WAHXZ0XBUW8H" },
        { title: "AI Awakening & Society", issuer: "Stanford University", link: "https://coursera.org/verify/JHE2TKTJ16DL" }
    ];

    // ======================================
    // Element Creation Functions
    // ======================================

    const createEducationElement = (edu) => {
        const div = document.createElement('div');
        div.className = 'premium-card p-8 hover-lift';
        div.innerHTML = `
            <div class="flex items-start gap-4 mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-graduation-cap text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-gray-900 mb-1">${edu.title}</h3>
                    <p class="text-blue-600 font-semibold text-lg">${edu.institution}</p>
                    <p class="text-gray-500 text-sm mt-1"><i class="fas fa-calendar-alt mr-2"></i>${edu.date}</p>
                </div>
            </div>
            <p class="text-gray-700 mb-4 leading-relaxed">${edu.description}</p>
            ${edu.subjects ? `
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <h4 class="font-bold text-gray-900 mb-3 flex items-center">
                        <i class="fas fa-book-open mr-2 text-blue-600"></i>
                        Core Subjects Studied:
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        ${edu.subjects.map(subject => `
                            <div class="flex items-center gap-2 text-sm text-gray-700">
                                <i class="fas fa-check-circle text-green-500 text-xs"></i>
                                <span>${subject}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
        return div;
    };

    const createExperienceElement = (exp) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="premium-card p-8 hover-lift">
                <div class="flex items-start gap-4 mb-3">
                    <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-briefcase text-white text-xl"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-bold text-gray-900 mb-1">${exp.title}</h3>
                        <p class="text-blue-600 font-semibold">${exp.company}</p>
                        <p class="text-gray-500 text-sm mt-1"><i class="fas fa-calendar mr-2"></i>${exp.date}</p>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed">${exp.description}</p>
            </div>
        `;
        return div;
    };

    const createSkillElement = (skill) => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${skill}`;
        return span;
    };

    const createProjectElement = (proj) => {
        const div = document.createElement('div');
        div.className = 'premium-card p-6 hover-lift relative';
        const tags = proj.tags.map(tag =>
            `<span class="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mr-2 mb-2">${tag}</span>`
        ).join('');
        div.innerHTML = `
            <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-chart-line text-white"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 flex-1">${proj.title}</h3>
            </div>
            <p class="text-gray-700 mb-4">${proj.description}</p>
            <div class="flex flex-wrap mb-4">${tags}</div>
            <div class="flex flex-wrap gap-3">
                ${proj.demo && proj.demo !== '#' ? `<a href="${proj.demo}" target="_blank" class="btn-premium"><i class="fas fa-eye mr-2"></i>View Demo</a>` : ''}
                ${proj.link && proj.link !== '#' ? `<a href="${proj.link}" target="_blank" class="btn-secondary"><i class="fas fa-external-link-alt mr-2"></i>Live App</a>` : ''}
            </div>
        `;
        return div;
    };

    const createCertificationElement = (cert) => {
        const div = document.createElement('div');
        div.className = 'premium-card p-6 hover-lift text-center';
        div.innerHTML = `
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-award text-white text-2xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">${cert.title}</h3>
            <p class="text-blue-600 font-semibold mb-3">${cert.issuer}</p>
            ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" class="text-sm text-blue-600 hover:text-blue-800 font-medium"><i class="fas fa-check-circle mr-1"></i>Verify Credential →</a>` : ''}
        `;
        return div;
    };

    const createLeadershipElement = (lead) => {
        const div = document.createElement('div');
        div.className = 'premium-card p-8 hover-lift';
        div.innerHTML = `
            <div class="flex items-start gap-4 mb-3">
                <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-users text-white text-xl"></i>
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">${lead.title}</h3>
                    <p class="text-blue-600 font-semibold">${lead.organization}</p>
                    <p class="text-gray-500 text-sm mt-1"><i class="fas fa-calendar mr-2"></i>${lead.date}</p>
                </div>
            </div>
            <p class="text-gray-700 leading-relaxed">${lead.description}</p>
        `;
        return div;
    };

    // ======================================
    // Populate Sections
    // ======================================

    const populateSection = (data, containerId, createElementFunction) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
            data.forEach(item => {
                container.appendChild(createElementFunction(item));
            });
        } else {
            console.warn(`Container #${containerId} not found`);
        }
    };

    populateSection(education, 'education-container', createEducationElement);
    populateSection(experiences, 'experience-container', createExperienceElement);
    populateSection(skills, 'skills-container', createSkillElement);
    populateSection(projects, 'projects-container', createProjectElement);
    populateSection(topCertifications, 'certifications-container', createCertificationElement);
    populateSection(leadership, 'leadership-container', createLeadershipElement);

    // ======================================
    // Animated Counters (FIXED!)
    // ======================================
    
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    };

    // Trigger counters when section is visible
    const observeStats = () => {
        const statsSection = document.getElementById('stats');
        if (!statsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.stat-number').forEach(el => {
                        const target = parseInt(el.getAttribute('data-target'));
                        animateCounter(el, target);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    };

    observeStats();

    // ======================================
    // Back to Top Button
    // ======================================
    
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ======================================
    // Smooth Scroll for Links
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

    console.log('✅ Ultra-Premium Portfolio Loaded Successfully!');
});
