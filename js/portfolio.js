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
            title: "Intern - Economic Research and Policy Analysis",
            company: "ISPR (Ministry of Pakistan)",
            date: "January 2025 - February 2025",
            description: "Led an econometric analysis of national budgets for defense and welfare spending, identifying PKR 2.5M in potential annual savings. Presented findings to senior officials, which were adopted by the Ministry and influenced KP's 2025 welfare budget decisions."
        },
        {
            title: "Summer-Intern",
            company: "State Bank of Pakistan",
            date: "June 2024 - August 2024",
            description: "Contributed to economic research and data analysis, building a dashboard to track inflation and external sector trends for internal reporting. Cleaned and analyzed economic data with R and SQL, supporting monthly brief preparation and a financial inclusion study."
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
            description: "Presented a research paper on the 'Impact of Energy Crises on Pakistan's Economy' at the SAESM 17 conference, representing the university alongside a classmate. Conducted secondary data analysis to examine the effects of energy shortages on industrial production and economic growth in urban centers like Karachi and Lahore. Successfully presented the findings, demonstrating academic research, data analysis, and professional presentation skills.",
            link: "https://drive.google.com/file/d/1RKF9VK13-dLv5tjBGLyOjPyb1qT_FtXK/view?usp=drive_link",
            demo: "https://econ-owais.github.io/SAESM-Research-paper/"
        }
    ];

    const certifications = [
        // LinkedIn Learning
        { title: "Advertising Fundamentals", issuer: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/4z8d2dg5bs8r" },
        { title: "Content and Creative Design", issuer: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/czknn8fg5xqu" },
        { title: "Marketing Strategy", issuer: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/kwmjjy7pi3zh" },

        // Coursera - Google
        { title: "Google Data Analytics", issuer: "Coursera", link: "https://www.credly.com/badges/FN7UVQ16I6A1" },
        { title: "Google Advanced Data Analytics", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/U5L3C5HCSDCH" },
        { title: "Google Project Management", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/C7WJTPZCWGEK" },
        { title: "Google Cybersecurity", issuer: "Coursera", link: "https://www.credly.com/badges/Y0XV43LYGML1" },
        { title: "Google AI Essentials", issuer: "Coursera", link: "https://www.credly.com/badges/NEVH1913206B" },
        { title: "Accelerate Your Job Search with AI", issuer: "Google", link: "https://www.credly.com/badges/FBA8O6X0KEU3" },
        { title: "Agile Project Management", issuer: "Google", link: "https://www.credly.com/badges/QOSM8WRGJRFH" },
        { title: "Analyze Data to Answer Questions", issuer: "Google", link: "https://www.credly.com/badges/WCSVAXZ09K7J" },
        { title: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", link: "https://www.credly.com/badges/75S4073SQAQ7" },
        { title: "Assets, Threats, and Vulnerabilities", issuer: "Google", link: "https://www.credly.com/badges/BGIW3N95QTF7" },
        { title: "Automate Cybersecurity Tasks with Python", issuer: "Google", link: "https://www.credly.com/badges/DX5T7RENBELT" },
        { title: "Capstone: Applying Project Management in the Real World", issuer: "Google", link: "https://www.credly.com/badges/5DM6821NPJOE" },
        { title: "Connect and Protect: Networks and Network Security", issuer: "Google", link: "https://www.credly.com/badges/HL1HMI25C66A" },
        { title: "Data Analysis with R Programming", issuer: "Google", link: "https://www.credly.com/badges/WBSBRPN33R88" },
        { title: "Foundations of Business Intelligence", issuer: "Google", link: "https://www.credly.com/badges/12KV2L2JNWM4" },
        { title: "Foundations of Data Science", issuer: "Google", link: "https://www.credly.com/badges/PPXYT9E9A9O2" },
        { title: "Get Started with Python", issuer: "Google", link: "https://www.credly.com/badges/RG7RF9MR255K" },
        { title: "Go Beyond the Numbers: Translate Data into Insights", issuer: "Google", link: "https://www.credly.com/badges/MEL40Y09DWL7" },
        { title: "Google Prompting Essentials", issuer: "Google", link: "https://www.credly.com/badges/V7QBJMC16Z62" },
        { title: "Play It Safe: Manage Security Risks", issuer: "Google", link: "https://www.credly.com/badges/11FG6S2FNGQF" },
        { title: "Prepare Data for Exploration", issuer: "Google", link: "https://www.credly.com/badges/EUD4KBNP3WUL" },
        { title: "Process Data from Dirty to Clean", issuer: "Google", link: "https://www.credly.com/badges/CSYFH7HL4CQ6" },
        { title: "Project Execution: Running the Project", issuer: "Google", link: "https://www.credly.com/badges/67HVTWZA8BIB" },
        { title: "Project Initiation: Starting a Successful Project", issuer: "Google", link: "https://www.credly.com/badges/JMURYZ9JHO0Y" },
        { title: "Project Planning: Putting It All Together", issuer: "Google", link: "https://www.credly.com/badges/EU4LKLZXX0RI" },
        { title: "Put It to Work: Prepare for Cybersecurity Jobs", issuer: "Google", link: "https://www.credly.com/badges/OJWJY2INPVKL" },
        { title: "Regression Analysis: Simplify Complex Data Relationships", issuer: "Google", link: "https://www.credly.com/badges/WFPA2IB8HGP4" },
        { title: "Share Data Through the Art of Visualization", issuer: "Google", link: "https://www.credly.com/badges/A4H7LFKLY9GN" },
        { title: "Simple Linear Regression for the Absolute Beginner", issuer: "Coursera", link: "https://www.credly.com/badges/9LDW0L15DG23" }, // This one is not from Google directly
        { title: "Sound the Alarm: Detection and Response", issuer: "Google", link: "https://www.credly.com/badges/RZDLFLGZH86U" },
        { title: "Speed Up Data Analysis and Presentation Building", issuer: "Google", link: "https://www.credly.com/badges/9J0K760GSYGH" },
        { title: "The Nuts and Bolts of Machine Learning", issuer: "Google", link: "https://www.credly.com/badges/GJVAR0YZSI1J" },
        { title: "The Power of Statistics", issuer: "Google", link: "https://www.credly.com/badges/ZFS3JHSBKEV1" },
        { title: "Tools of the Trade: Linux and SQL", issuer: "Google", link: "https://www.credly.com/badges/X2VMWSM009IL" },
        { title: "Using Python to Interact with the Operating System", issuer: "Google", link: "https://www.credly.com/badges/7C75RV6DOSH8" },

        // Coursera - Microsoft
        { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/7J8MVY69VAL0" },
        { title: "Data Visualization with Power BI", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/RCHBYQE65AG7" },
        { title: "Data Analysis and Visualization with Power BI", issuer: "Microsoft", link: "https://www.credly.com/badges/0YU83GW1BAZP" },
        { title: "Data Modeling and Architecture", issuer: "Microsoft", link: "https://www.credly.com/badges/KBXT9A7WKK59" },
        { title: "Data Modeling in Power BI", issuer: "Microsoft", link: "https://www.credly.com/badges/1KSQ5C88UIUU" },
        { title: "Data Preparation and Management", issuer: "Microsoft", link: "https://www.credly.com/badges/2LH5DBMAR3KR" },
        { title: "Data Visualization Fundamentals", issuer: "Microsoft", link: "https://www.credly.com/badges/6CKZYOZVZ1D9" },
        { title: "Deploy and Maintain Power BI Assets and Capstone project", issuer: "Microsoft", link: "https://www.credly.com/badges/F2OHDS45E4QT" },
        { title: "Extract, Transform and Load Data in Power BI", issuer: "Microsoft", link: "https://www.credly.com/badges/30O98M15IVKF" },
        { title: "Harnessing the Power of Data with Power BI", issuer: "Microsoft", link: "https://www.credly.com/badges/4WDKQ76AWRSQ" },
        { title: "Microsoft Data Visualization-Professional Certificate", issuer: "Microsoft", link: "https://www.credly.com/badges/RCHBYQE65AG7" },
        { title: "Microsoft Power BI Data Analyst-Professional Certificate", issuer: "Microsoft", link: "https://www.credly.com/badges/7J8MVY69VAL0" },
        { title: "Preparing Data for Analysis with Microsoft Excel", issuer: "Microsoft", link: "https://www.credly.com/badges/U2VBUE2453JX" },
        { title: "Visualization for Data Analysis with Power BI", issuer: "Microsoft", link: "https://www.credly.com/badges/XDFDVWC5VUCT" },


        // Coursera - IBM
        { title: "Python for Data Science & AI", issuer: "IBM", link: "https://www.credly.com/badges/f64113dc-7511-4709-ac8b-3dd5f91d7a49" },
        { title: "Professional Soft Skills", issuer: "IBM", link: "https://www.credly.com/badges/P8C96LIONLC5" },
        { title: "Collaborate Effectively for Professional Success", issuer: "IBM", link: "https://www.credly.com/badges/R04GVWQS26NM" },
        { title: "Delivering Quality Work with Agility", issuer: "IBM", link: "https://www.credly.com/badges/UE90GAN6693L" },
        { title: "Developing Interpersonal Skills", issuer: "IBM", link: "https://www.credly.com/badges/7M94APKHDGY0" },
        { title: "People and Soft Skills for Professional and Personal Success-Professional Certificate", issuer: "IBM", link: "https://www.credly.com/badges/P8C96LIONLC5" },
        { title: "Present with Purpose: Create/Deliver Effective Presentations", issuer: "IBM", link: "https://www.credly.com/badges/7GRLE08FHY33" },
        { title: "Solving Problems with Creative and Critical Thinking", issuer: "IBM", link: "https://www.credly.com/badges/GQEJFW1YJZF8" },
        { title: "Python for Data Science and AI", issuer: "IBM", link: "https://www.credly.com/badges/f64113dc-7511-4709-ac8b-3dd5f91d7a49" },

        // Coursera - SAS
        { title: "Statistical Business Analyst", issuer: "SAS", link: "https://www.coursera.org/account/accomplishments/specialization/6TA00Z2AOP6I" },
        { title: "Analyzing Time Series and Sequential Data-Professional Certificate", issuer: "SAS", link: "https://www.credly.com/badges/LEFUOVWKC9FN" },
        { title: "Building a Large-Scale, Automated Forecasting System", issuer: "SAS", link: "https://www.credly.com/badges/FR70X0C81STN" },
        { title: "Creating Features for Time Series Data", issuer: "SAS", link: "https://www.credly.com/badges/XA8RIXC21GAC" },
        { title: "Introduction to Statistical Analysis: Hypothesis Testing", issuer: "SAS", link: "https://www.credly.com/badges/13YY88J6DACT" },
        { title: "Regression Modeling Fundamentals", issuer: "SAS", link: "https://www.credly.com/badges/2R797Z4SIZSX" },
        { title: "SAS Statistical Business Analyst-Professional Certificate", issuer: "SAS", link: "https://www.credly.com/badges/6TA00Z2AOP6I" },

        // Coursera - Yale University
        { title: "Financial Markets", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WAHXZ0XBUW8H" },
        { title: "The Science of Well-Being", issuer: "Yale University", link: "https://www.credly.com/badges/XMNHJ258QHDS" },

        // Coursera - Stanford University
        { title: "AI Awakening & Society", issuer: "Stanford University", link: "https://coursera.org/verify/JHE2TKTJ16DL" },
        { title: "The AI Awakening: Implications for the Economy and Society", issuer: "Stanford University", link: "https://www.credly.com/badges/JHE2TKTJ16DL" },


        // Coursera - Columbia University
        { title: "Economics of Money & Banking", issuer: "Columbia University", link: "https://coursera.org/verify/UUE8P3S2J2W3" },
        { title: "Economics of Money and Banking", issuer: "Columbia University", link: "https://www.credly.com/badges/UUE8P3S2J2W3" },

        // Coursera - Erasmus University
        { title: "Econometrics: Methods & Applications", issuer: "Erasmus University", link: "https://www.coursera.org/account/accomplishments/verify/W1KWYZR3W64Y" },
        { title: "Econometrics: Methods and Applications", issuer: "Erasmus University", link: "https://www.credly.com/badges/W1KWYZR3W64Y" },

        // Coursera - University of Michigan
        { title: "Environmental Economics", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/verify/9JXM7CR7MTXY" },
        { title: "Act on Climate: Steps to Individual, Community, and Political Action", issuer: "University of Michigan", link: "https://www.credly.com/badges/NG0AP58J0LBR" },
        { title: "Environmental Justice", issuer: "University of Michigan", link: "https://www.credly.com/badges/O44Y0CTGR61I" },
        { title: "GIS: Geographic Information Systems for Sustainability", issuer: "University of Michigan", link: "https://www.credly.com/badges/PTCPGCBIDVAW" },
        { title: "Influencing People", issuer: "University of Michigan", link: "https://www.credly.com/badges/BYY6RN0R4LYC" },
        { title: "Inspiring and Motivating Individuals", issuer: "University of Michigan", link: "https://www.credly.com/badges/CO6S2S9QNPZN" },
        { title: "Leading People and Teams-Professional Certificate", issuer: "University of Michigan", link: "https://www.credly.com/badges/WGAMV4T734Y8" },
        { title: "Leading Teams", issuer: "University of Michigan", link: "https://www.credly.com/badges/UE4LAJ1EZ5X5" },
        { title: "Managing Talent", issuer: "University of Michigan", link: "https://www.credly.com/badges/D9DLW0WBVQDJ" },
        { title: "Sustainability Leadership Development", issuer: "University of Michigan", link: "https://www.credly.com/badges/57JSJOW2X81F" },
        { title: "Using Public Policy for Social Change", issuer: "University of Michigan", link: "https://www.credly.com/badges/YCUL4FG24074" },

        // Coursera - University of Western Australia
        { title: "Agriculture, Economics & Nature", issuer: "University of Western Australia", link: "https://coursera.org/verify/J9LXAREUJXDT" },
        { title: "Agriculture, Economics and Nature", issuer: "University of Western Australia", link: "https://www.credly.com/badges/J9LXAREUJXDT" },

        // Coursera - University of Illinois at Urbana-Champaign
        { title: "Microeconomics Principles", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.coursera.org/account/accomplishments/specialization/F2HGRBKOPFPI" },
        { title: "Leadership and Influence", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/AGMU1STBJPDW" },
        { title: "Leading Teams: Developing as a Leader", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/4QVZ13UXW2OE" },
        { title: "Market Equilibrium, Government Policy & Elasticity", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/W0LK9KB4KA7I" },
        { title: "Microeconomics Principles", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/GEFRAQR63QC9" },
        { title: "Microeconomics Principles-Professional Certificate", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/F2HGRBK0PFPI" },
        { title: "The Theory of the Firm", issuer: "University of Illinois at Urbana-Champaign", link: "https://www.credly.com/badges/7CLHYS4LZPNP" },

        // Coursera - IE Business School
        { title: "Globalization, Economic Growth and Stability", issuer: "IE Business School", link: "https://www.coursera.org/account/accomplishments/specialization/H9CDEQKAZLHP" },
        { title: "Globalization, Economic Growth and Stability-Professional Certificate", issuer: "IE Business School", link: "https://www.credly.com/badges/H9CDEQKAZLHP" },
        { title: "Trade, Immigration and Exchange Rates in a Globalized World", issuer: "IE Business School", link: "https://www.credly.com/badges/8PEBEJZAGMYP" },
        { title: "Understanding economic policymaking", issuer: "IE Business School", link: "https://www.credly.com/badges/N0J2914CBK3C" },

        // Coursera - Rice University
        { title: "A Story of Economics: A Principles Tale", issuer: "Rice University", link: "https://www.credly.com/badges/FVKSUC4ZSPA5" },
        { title: "Principles of Economics: Introduction - Getting to Know You", issuer: "Rice University", link: "https://www.credly.com/badges/1KSW6I3HXJSC" },
        { title: "Principles of Economics: Macroeconomics - The Big Picture", issuer: "Rice University", link: "https://www.credly.com/badges/8VI11BYVOVNY" },
        { title: "Principles of Economics: Microeconomics - Down to Business", issuer: "Rice University", link: "https://www.credly.com/badges/HOR6BL7RAA7I" },

        // Coursera - University of California, Irvine - The Paul Merage School of Business
        { title: "Academic English: Writing", issuer: "University of California, Irvine - The Paul Merage School of Business", link: "https://www.credly.com/badges/GJQ1RQRLZBOT" },
        { title: "Advanced Writing", issuer: "University of California, Irvine - The Paul Merage School of Business", link: "https://www.credly.com/badges/JXESROOEM3HT" },
        { title: "Effective Problem-Solving and Decision-Making", issuer: "University of California, Irvine - The Paul Merage School of Business", link: "https://www.credly.com/badges/SFOZHINQ3JVU" },
        { title: "Getting Started with Essay Writing", issuer: "University of California, Irvine - The Paul Merage School of Business", link: "https://www.credly.com/badges/V3GXUANXDBL9" },
        { title: "Grammar and Punctuation", issuer: "University of California, Irvine - The Paul Merage School of Business", link: "https://www.credly.com/badges/SEQQ6W9W3UKP" },

        // Coursera - University of Amsterdam
        { title: "Basic Statistics", issuer: "University of Amsterdam", link: "https://www.credly.com/badges/06PL75AJHS4U" },
        { title: "Inferential Statistics", issuer: "University of Amsterdam", link: "https://www.credly.com/badges/3TND6Z755G27" },
        { title: "Qualitative Research Methods", issuer: "University of Amsterdam", link: "https://www.credly.com/badges/KCGZI3YXF952" },
        { title: "Quantitative Methods", issuer: "University of Amsterdam", link: "https://www.credly.com/badges/HOP9826WWXAO" },

        // Coursera - EDHEC Business School
        { title: "Science and Engineering of Climate Change", issuer: "EDHEC Business School", link: "https://www.credly.com/badges/NPSGC2F2UXEY" },
        { title: "The Finance of Climate Change", issuer: "EDHEC Business School", link: "https://www.credly.com/badges/OIUTG6EY8K5M" },

        // Coursera - University of London
        { title: "International Business Environment", issuer: "University of London", link: "https://www.credly.com/badges/HYQ5DYSEUWQE" },
        { title: "International Business Essentials-Professional Certificate", issuer: "University of London", link: "https://www.credly.com/badges/DAZOO985NKGQ" },
        { title: "Management Skills for International Business", issuer: "University of London", link: "https://www.credly.com/badges/O4U0TOHTTPQ2" },
        { title: "Quantitative Foundations for International Business", issuer: "University of London", link: "https://www.credly.com/badges/KEOO91VSFSFJ" },

        // Coursera - Meta
        { title: "Data Analysis with Spreadsheets and SQL", issuer: "Meta", link: "https://www.credly.com/badges/DBELMIIT6J9H" },
        { title: "Introduction to Data Analytics", issuer: "Meta", link: "https://www.credly.com/badges/Y2DH2FSPL0XO" },
        { title: "Introduction to Data Management", issuer: "Meta", link: "https://www.credly.com/badges/DRRV1NEKXXXN" },
        { title: "Python Data Analytics", issuer: "Meta", link: "https://www.credly.com/badges/TMKE2YT1QT9K" },
        { title: "Statistics Foundations", issuer: "Meta", link: "https://www.credly.com/badges/YR4P7R517DHI" },

        // Coursera - Other Universities
        { title: "Competitive Strategy", issuer: "Illinois Institute of Technology", link: "https://www.credly.com/badges/LQ1DY83N6QNI" },
        { title: "The Economics of AI", issuer: "University of Virginia", link: "https://www.credly.com/badges/NNFZHJ2ZNK2O" },
        { title: "Microeconomics: The Power of Markets", issuer: "University of Pennsylvania", link: "https://www.credly.com/badges/E3FQ0P9RZRH5" },
        { title: "Monetary Policy in the Asia Pacific", issuer: "The Hong Kong University of Science and Technology", link: "https://www.credly.com/badges/YHNKE0122PFF" },
        { title: "Politics and Economics of International Energy", issuer: "Sciences Po", link: "https://www.credly.com/badges/LVZPVVZIDCB4" },
        { title: "Statistical Inference", issuer: "The Johns Hopkins University", link: "https://www.credly.com/badges/WZJ6KZNIV8MA" },
        { title: "The Sustainable Development Goals – A global, transdisciplinary vision for the future", issuer: "University of Copenhagen", link: "https://www.credly.com/badges/CY7PCPKUDR0O" },
        { title: "Global Diplomacy: the United Nations in the World", issuer: "SOAS University of London", link: "https://www.credly.com/badges/E9PYX85YWFB7" },
        { title: "Greening the Economy: Lessons from Scandinavia", issuer: "Lund University", link: "https://www.credly.com/badges/FHZ5Y6VTLYGY" },
        { title: "Environmental Management & Ethics", issuer: "DTU - Technical University of Denmark", link: "https://www.credly.com/badges/DWC9NYPJGUF8" },
        { title: "Behavioral Finance", issuer: "Duke University", link: "https://www.credly.com/badges/P3ZI3BPZF6AA" },


        // Other Platforms / Awards
        { title: "Prime Minister’s Laptop Award", issuer: "Govt. of Pakistan", link: "#" },
        { title: "The Role of Central Banks and Financial Supervisory Authorities in Governing Sustainable Finance", issuer: "Asian Development Bank Institute", link: "https://www.credly.com/badges/111345-172-689-2363" },
        { title: "Creative Writing", issuer: "DigiSkills.pk", link: "https://www.credly.com/badges/Z7K4QXBMK" },
        { title: "WordPress", issuer: "DigiSkills.pk", link: "https://www.credly.com/badges/XH6ZTYDMK" },
        { title: "Freelancing", issuer: "DigiSkills.pk", link: "https://www.credly.com/badges/N9TPNWCMK" },
        { title: "SAESM Research Paper", issuer: "SAESM", link: "https://econ-owais.github.io/SAESM-Research-paper/" },
        { title: "Data for Sustainable Development & Climate Change and Development", issuer: "UNDP Pakistan", link: "#" },
        { title: "Circular Economy Policy Maker E-Training", issuer: "Asian Development Bank Institute", link: "https://www.credly.com/badges/111345-172-896-6729" },
        { title: "Cybersecurity", issuer: "Asian Development Bank Institute", link: "https://www.credly.com/badges/111345-172-811-1336" },
        { title: "The economics of flood insurance", issuer: "The Open University", link: "https://www.credly.com/badges/DD226_1" },
        { title: "Artificial Intelligence (AI) for Social Impact", issuer: "Asian Development Bank Institute", link: "https://www.credly.com/badges/111345-172-697-8167" },
        { title: "Climate Change and Sovereign Risk", issuer: "Asian Development Bank Institute", link: "https://www.credly.com/badges/111345-172-689-1807" },
        { title: "Data Visualization in Stata", issuer: "Packt", link: "https://www.credly.com/badges/1FWC4C7S9YOU" },
        { title: "Data Visualization with Tableau", issuer: "Tableau Training", link: "https://www.credly.com/badges/OL47X98BAMIE" },
        { title: "R Programming for Statistics and Data Science", issuer: "Packt", link: "https://www.credly.com/badges/1XAMCG9XWHCZ" },
        { title: "Behavior Architecture - Understanding Human Behavior", issuer: "Fractal Marketing & Analytics", link: "https://www.credly.com/badges/W6X9B99L9H6S" },
        { title: "Information Gathering and Vetting", issuer: "Arizona State University", link: "https://www.credly.com/badges/ZI7O4VZTYAGL" },
        { title: "Futures Thinking", issuer: "Arizona State University", link: "https://www.credly.com/badges/J04GYGPUPR87" },
        { title: "Understanding Technology and Data", issuer: "Accenture", link: "https://www.credly.com/badges/Q5BG4GD7NG7V" }
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
        organization: "Alahidamat Foundation, Charsadda",
        date: "February 2020 - Current",
        description: "Served as vice president, leading the mobilization of 50+ volunteers to deliver emergency relief (food, hygiene kits, tents) to 200+ flood-affected families in KP. Secured Rs. 300,000 in donations to support home reconstruction efforts. Collaborated with local NGOs (Edhi Foundation, SRSO) to implement WASH programs, improving clean water access for 15 flood-affected villages.",
        link: "#"
      },
      {
        title: "University Representative - 17th South Asian Economics Student's Meet",
        organization: "Bacha Khan University",
        date: "December 2021",
        description: "Presented a research paper on the 'Impact of Energy Crises on Pakistan's Economy' at the SAESM 17 conference, representing the university alongside a classmate. Successfully presented the findings, demonstrating academic research, data analysis, and professional presentation skills.",
        link: "https://econ-owais.github.io/SAESM-Research-paper/"
      },
      {
        title: "Student Education Ambassador",
        organization: "Bacha Khan University",
        date: "January 2022 - Current",
        description: "Represented my university at national-level seminars and academic events, collaborating with students and ambassadors from top institutions like LUMS, NUST, and GIKI. Led initiatives to promote academic growth, mentorship, and cross-university engagement, impacting 500+ students across KPK.",
        link: "#"
      }
    ];

    // ======================================
    // Element Creation Functions
    // ======================================
    const createExperienceElement = (exp) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${exp.title}</h3>
            <p class="text-gray-600 font-medium">${exp.company}</p>
            <p class="text-sm text-gray-500 mt-1">${exp.date}</p>
            <p class="text-gray-700 mt-4">${exp.description}</p>
        `;
        return div;
    };

    const createEducationElement = (edu) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${edu.title}</h3>
            <p class="text-gray-600 font-medium">${edu.institution}</p>
            <p class="text-sm text-gray-500 mt-1">${edu.date}</p>
            <p class="text-gray-700 mt-4">${edu.description}</p>
        `;
        return div;
    };

    const createSkillElement = (skill) => {
        const span = document.createElement('span');
        span.className = 'bg-gray-200 text-blue-600 text-sm font-medium px-4 py-2 rounded-full shadow-md';
        span.textContent = skill;
        return span;
    };

    const createProjectElement = (proj) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        const tags = proj.tags.map(tag =>
            `<span class="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full mr-2">${tag}</span>`
        ).join('');
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${proj.title}</h3>
            <p class="text-gray-700 mt-2">${proj.description}</p>
            <div class="mt-4 flex flex-wrap gap-2">${tags}</div>
            <div class="mt-4 flex flex-wrap gap-4">
                ${proj.demo && proj.demo !== '#' ? `<a href="${proj.demo}" target="_blank" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">View Demo →</a>` : ''}
                ${proj.link && proj.link !== '#' ? `<a href="${proj.link}" target="_blank" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">View Dashboard →</a>` : ''}
            </div>
        `;
        return div;
    };

    const createResearchElement = (pub) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${pub.title}</h3>
            <p class="text-gray-600 mt-1">${pub.journal} - ${pub.date}</p>
            <p class="text-gray-700 mt-4">${pub.description}</p>
            <div class="mt-4 flex flex-wrap gap-4">
                ${pub.demo && pub.demo !== '#' ? `<a href="${pub.demo}" target="_blank" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">View Demo →</a>` : ''}
                ${pub.link && pub.link !== '#' ? `<a href="${pub.link}" target="_blank" class="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">Read Paper →</a>` : ''}
            </div>
        `;
        return div;
    };

    const createCertificationElement = (cert) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${cert.title}</h3>
            <p class="text-gray-700 mt-1">${cert.issuer}</p>
            ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" class="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">Verify Credential →</a>` : ''}
        `;
        return div;
    };

    const createLeadershipElement = (lead) => {
        const div = document.createElement('div');
        div.className = 'p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]';
        div.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900">${lead.title}</h3>
            <p class="text-gray-600 font-medium">${lead.organization}</p>
            <p class="text-sm text-gray-500 mt-1">${lead.date}</p>
            <p class="text-gray-700 mt-4">${lead.description}</p>
            ${lead.link && lead.link !== '#' ? `<a href="${lead.link}" target="_blank" class="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium">View Details →</a>` : ''}
        `;
        return div;
    };

    // ======================================
    // Populate Sections
    // ======================================

    const populateSection = (data, containerId, createElementFunction) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = ''; // Clear existing content
            data.forEach(item => {
                container.appendChild(createElementFunction(item));
            });
        }
    };

    // Define top 10 certifications for the main page
    const topCertifications = [
        { title: "Google Advanced Data Analytics", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/U5L3C5HCSDCH" },
        { title: "Google Project Management", issuer: "Coursera", link: "https://coursera.org/verify/professional-cert/C7WJTPZCWGEK" },
        { title: "Microsoft Power BI Data Analyst", issuer: "Microsoft", link: "https://learn.microsoft.com/api/credentials/share/en-us/OwaisAliShah/7J8MVY69VAL0" },
        { title: "Statistical Business Analyst", issuer: "SAS", link: "https://www.coursera.org/account/accomplishments/specialization/6TA00Z2AOP6I" },
        { title: "Financial Markets", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WAHXZ0XBUW8H" },
        { title: "AI Awakening & Society", issuer: "Stanford University", link: "https://coursera.org/verify/JHE2TKTJ16DL" },
        { title: "Economics of Money & Banking", issuer: "Columbia University", link: "https://coursera.org/verify/UUE8P3S2J2W3" },
        { title: "Econometrics: Methods & Applications", issuer: "Erasmus University", link: "https://www.coursera.org/account/accomplishments/verify/W1KWYZR3W64Y" },
        { title: "Environmental Economics", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/verify/9JXM7CR7MTXY" },
        { title: "Python for Data Science & AI", issuer: "IBM", link: "https://www.credly.com/badges/f64113dc-7511-4709-ac8b-3dd5f91d7a49" }
    ];

    populateSection(education, 'education-container', createEducationElement);
    populateSection(experiences, 'experience-container', createExperienceElement);
    populateSection(skills, 'skills-container', createSkillElement);
    populateSection(projects, 'projects-container', createProjectElement);
    populateSection(research, 'research-container', createResearchElement);
    populateSection(topCertifications, 'certifications-container', createCertificationElement); // Use topCertifications for index.html
    populateSection(leadership, 'leadership-container', createLeadershipElement);
});

