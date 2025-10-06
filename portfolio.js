// Portfolio.js - Optimized & Fast Loading Version
// This script populates the portfolio sections with dynamic content.

document.addEventListener('DOMContentLoaded', () => {

    // ======================================
    // Portfolio Data
    // ======================================

    const education = [
        {
            title: "Bachelor's in Economics",
            institution: "Bacha Khan University Charsadda",
            date: "2021-2025",
            description: "CGPA 3.5/4.00. Thesis: 'Impact of Climate Change on Agriculture Production of Khyber Pakhtunkhwa'. <a href='https://drive.google.com/file/d/1harwAm6_QGf-JVitg50jyX_ZOWtbXg1k/view?usp=sharing' target='_blank' class='text-blue-600 hover:text-blue-800 text-sm font-medium'>View Thesis →</a>"
        },
        {
            title: "Diploma in Information Technology",
            institution: "Government Technical and Vocation Center Umarzai",
            date: "2023-2024",
            description: "Final Grade: 761/1000 (A)."
        },
        {
            title: "Short Courses of Data for Sustainable Development & Climate Change and Development",
            institution: "UNDP & ECI (Empowerment & thru Creative Integration)",
            date: "November 2024 - December 2024",
            description: "City: Islamabad, Country: Pakistan."
        },
        {
            title: "Flood First Responders (Emergency Service Society)",
            institution: "Bacha Khan University Charsadda",
            date: "March 2022 - Current",
            description: "City: Charsadda, Country: Pakistan."
        },
        {
            title: "Sustainable Development Goals (SDGs) Training Program",
            institution: "UNDP with collaboration with Bacha Khan University",
            date: "Ongoing",
            description: "City: Charsadda, Country: Pakistan."
        }
    ];

    const experiences = [
        {
            title: "Summer-Intern",
            company: "State Bank of Pakistan",
            date: "June 2025 - August 2025",
            description: "Worked alongside economists and HR strategists at SBP during a six-week internship focused on hiring systems, team structures, and institutional workflows. Contributed to discussions on talent acquisition and public-sector performance, gaining early exposure to how national policy is shaped from the inside."
        },
        {
            title: "Intern - Economic Research and Policy Analysis",
            company: "ISPR (Ministry of Pakistan)",
            date: "January 2025 - February 2025",
            description: "Led an econometric analysis of national budgets for defense and welfare spending, identifying PKR 2.5M in potential annual savings. Presented findings to senior officials, which were adopted by the Ministry and influenced KP's 2025 welfare budget decisions."
        },
        {
            title: "Facilitator & Mentor",
            company: "Bacha Khan University Charsadda",
            date: "July 29–31, 2024",
            description: "Facilitated the International Conference on Breakthroughs in Pakistan's Economic Development Through Technological Innovation in Agriculture. Coordinated sessions, supported speakers and panelists in real time, and ensured a smooth, professional experience across all three days."
        },
        {
            title: "Research Assistant",
            company: "Bacha Khan University Research Project",
            date: "December 2023 - April 2024",
            description: "Assisted on a flood mitigation research project, reviewing datasets, conducting analysis, and supporting background research. Used Stata, R, and Tableau to clean data, run analysis, and create visuals for local officials."
        },
        {
            title: "Intern-Development and Project Management",
            company: "Building Control Authority (BCA), TMA Karak",
            date: "June 2023 - August 2023",
            description: "Conducted detailed cost and benefit analyses for new building projects within the Karak Area Development Project. Tracked project progress to ensure construction stayed on schedule and aligned with plans, guiding resource allocation."
        },
        {
            title: "Intern-Data Analyst",
            company: "Wilayat Khan Wazir Construction Company",
            date: "January 2022 - July 2022",
            description: "Analyzed commuter travel patterns in Peshawar using Stata and redesigned bus schedules to cut operating costs by 15% and reduce delays by 20%, improving daily commutes."
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
            title: "🌍 Local Climate & Economic Risk Comparison Tool",
            description: "Interactive Streamlit app for analyzing climate risks and economic impacts across different regions. Features real-time data visualization, comparative analysis, and predictive modeling for informed decision-making on climate adaptation and economic resilience.",
            demo: "https://climate-app-owais.streamlit.app/",
            link: "https://climate-app-owais.streamlit.app/",
            tags: ["🔥 NEW", "Climate Analysis", "Economic Modeling", "Python", "Streamlit", "Risk Assessment"],
            featured: true
        },
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

    const research = [
        {
            title: "Impact of Energy Crises on Pakistan's Economy (17th South Asian Economics Student's Meet)",
            journal: "Conference Paper (SAESM)",
            date: "December 2021",
            description: "Presented a research paper on the 'Impact of Energy Crises on Pakistan's Economy' at the SAESM 17 conference, representing the university alongside a classmate. Conducted secondary data analysis to examine the effects of energy shortages on industrial production and economic growth in urban centers like Karachi and Lahore.",
            link: "https://drive.google.com/file/d/1RKF9VK13-dLv5tjBGLyOjPyb1qT_FtXK/view?usp=drive_link",
            demo: "https://econ-owais.github.io/SAESM-Research-paper/"
        }
    ];

    const certificationsData = [
        { title: "Google Project Management", issuer: "Google", link: "https://coursera.org/verify/professional-cert/C7WJTPZCWGEK" },
        { title: "Google Advanced Data Analytics", issuer: "Google", link: "https://coursera.org/verify/professional-cert/U5L3C5HCSDCH" },
        { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/7J8MVY69VAL0" },
        { title: "Financial Markets", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WAHXZ0XBUW8H" },
        { title: "Environmental Economics", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/verify/9JXM7CR7MTXY" },
        { title: "Python for Data Science & AI", issuer: "IBM", link: "https://www.credly.com/badges/f64113dc-7511-4709-ac8b-3dd5f91d7a49" },
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

    // ======================================
    // Element Creation Functions
    // ======================================

    const createExperienceElement = (exp) => {
        const div = document.createElement('div');
        div.className = 'card p-6 md:p-8 space-y-2 hover-lift';
        div.innerHTML = `
            <h3 class="text-2xl font-semibold text-gray-900">${exp.title}</h3>
            <p class="text-gray-700 font-medium">${exp.company}</p>
            <p class="text-sm text-gray-500 italic">${exp.date}</p>
            <p class="text-gray-600 mt-2">${exp.description}</p>
        `;
        return div;
    };

    const createEducationElement = (edu) => {
        const div = document.createElement('div');
        div.className = 'card p-6 md:p-8 space-y-2 hover-lift';
        div.innerHTML = `
            <h3 class="text-2xl font-semibold text-gray-900">${edu.title}</h3>
            <p class="text-gray-700 font-medium">${edu.institution}</p>
            <p class="text-sm text-gray-500 italic">${edu.date}</p>
            <p class="text-gray-600 mt-2">${edu.description}</p>
        `;
        return div;
    };

    const createSkillElement = (skill) => {
        const span = document.createElement('span');
        span.className = 'bg-gray-200 text-blue-600 text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200';
        span.textContent = skill;
        return span;
    };

    const createProjectElement = (proj) => {
        const div = document.createElement('div');
        div.className = `card p-6 md:p-8 space-y-4 hover-lift ${proj.featured ? 'featured-project' : ''}`;
        const tags = proj.tags.map(tag => {
            const isNew = tag.includes('NEW');
            return `<span class="inline-block ${isNew ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200 text-gray-600'} text-xs px-2 py-1 rounded-full mr-2">${tag}</span>`;
        }).join('');
        div.innerHTML = `
            ${proj.featured ? '<div class="ribbon">Featured</div>' : ''}
            <h3 class="text-xl font-semibold text-gray-900">${proj.title}</h3>
            <p class="text-gray-700 mt-2">${proj.description}</p>
            <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
            <div class="mt-4 flex flex-wrap gap-4">
                ${proj.demo && proj.demo !== '#' ? `<a href="${proj.demo}" target="_blank" class="btn-primary">View Live App →</a>` : ''}
                ${proj.link && proj.link !== '#' && proj.link !== proj.demo ? `<a href="${proj.link}" target="_blank" class="btn-secondary">View Dashboard →</a>` : ''}
            </div>
        `;
        return div;
    };

    const createResearchElement = (pub) => {
        const div = document.createElement('div');
        div.className = 'card p-6 md:p-8 space-y-2 hover-lift';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${pub.title}</h3>
            <p class="text-gray-600 mt-1">${pub.journal} - ${pub.date}</p>
            <p class="text-gray-700 mt-4">${pub.description}</p>
            <div class="mt-4 flex flex-wrap gap-4">
                ${pub.demo && pub.demo !== '#' ? `<a href="${pub.demo}" target="_blank" class="btn-primary">View Demo →</a>` : ''}
                ${pub.link && pub.link !== '#' ? `<a href="${pub.link}" target="_blank" class="btn-secondary">Read Paper →</a>` : ''}
            </div>
        `;
        return div;
    };

    const createCertificationElement = (cert) => {
        const div = document.createElement('div');
        div.className = 'card p-6 hover-lift';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${cert.title}</h3>
            <p class="text-gray-700 mt-1">${cert.issuer}</p>
            ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" class="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">Verify Credential →</a>` : ''}
        `;
        return div;
    };

    const createLeadershipElement = (lead) => {
        const div = document.createElement('div');
        div.className = 'card p-6 md:p-8 space-y-2 hover-lift';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${lead.title}</h3>
            <p class="text-gray-700 font-medium">${lead.organization}</p>
            <p class="text-sm text-gray-500 italic">${lead.date}</p>
            <p class="text-gray-600 mt-2">${lead.description}</p>
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
        }
    };

    populateSection(education, 'education-container', createEducationElement);
    populateSection(experiences, 'experience-container', createExperienceElement);
    populateSection(skills, 'skills-container', createSkillElement);
    populateSection(projects, 'projects-container', createProjectElement);
    populateSection(research, 'research-container', createResearchElement);
    populateSection(certificationsData, 'certifications-container', createCertificationElement);
    populateSection(leadership, 'leadership-container', createLeadershipElement);

    // ======================================
    // Smooth Scroll & Back to Top
    // ======================================
    
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'hidden';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
