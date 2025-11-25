import type { TeamMember } from '../types';

export const useSampleData = () => {
  const sampleTeamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      role: 'Full Stack Developer',
      technicalSkills: ['Vue.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      softSkills: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'],
      experienceYears: 7,
      expectedSalary: 95000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'MIT'
      },
      availability: 'available',
      previousProjects: ['E-commerce Platform', 'Social Media App']
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.c@company.com',
      role: 'Frontend Developer',
      technicalSkills: ['React', 'Vue.js', 'JavaScript', 'CSS', 'HTML', 'Figma'],
      softSkills: ['Creativity', 'Attention to Detail', 'Communication', 'Time Management'],
      experienceYears: 4,
      expectedSalary: 75000,
      education: {
        degree: 'Bachelor of Arts',
        field: 'Digital Design',
        institution: 'Stanford University'
      },
      availability: 'available',
      previousProjects: ['Mobile Banking App', 'Dashboard UI']
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.r@company.com',
      role: 'Backend Developer',
      technicalSkills: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      softSkills: ['Problem Solving', 'Critical Thinking', 'Collaboration', 'Adaptability'],
      experienceYears: 6,
      expectedSalary: 88000,
      education: {
        degree: 'Master of Science',
        field: 'Computer Engineering',
        institution: 'Carnegie Mellon University'
      },
      availability: 'available',
      previousProjects: ['API Gateway System', 'Microservices Architecture']
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david.k@company.com',
      role: 'DevOps Engineer',
      technicalSkills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux'],
      softSkills: ['Problem Solving', 'Communication', 'Attention to Detail', 'Reliability'],
      experienceYears: 5,
      expectedSalary: 92000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Information Technology',
        institution: 'UC Berkeley'
      },
      availability: 'available',
      previousProjects: ['Cloud Migration', 'Infrastructure Automation']
    },
    {
      id: '5',
      name: 'Jessica Martinez',
      email: 'jessica.m@company.com',
      role: 'UI/UX Designer',
      technicalSkills: ['Figma', 'Adobe XD', 'Sketch', 'HTML', 'CSS', 'Prototyping'],
      softSkills: ['Creativity', 'Empathy', 'Communication', 'User Research'],
      experienceYears: 5,
      expectedSalary: 78000,
      education: {
        degree: 'Bachelor of Fine Arts',
        field: 'Interaction Design',
        institution: 'Rhode Island School of Design'
      },
      availability: 'available',
      previousProjects: ['Mobile App Redesign', 'Design System Creation']
    },
    {
      id: '6',
      name: 'James Anderson',
      email: 'james.a@company.com',
      role: 'Data Scientist',
      technicalSkills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'R', 'Data Visualization'],
      softSkills: ['Analytical Thinking', 'Communication', 'Problem Solving', 'Curiosity'],
      experienceYears: 4,
      expectedSalary: 85000,
      education: {
        degree: 'PhD',
        field: 'Statistics',
        institution: 'Harvard University'
      },
      availability: 'limited',
      previousProjects: ['Predictive Analytics Platform', 'Recommendation System']
    },
    {
      id: '7',
      name: 'Lisa Thompson',
      email: 'lisa.t@company.com',
      role: 'Project Manager',
      technicalSkills: ['Jira', 'Agile', 'Scrum', 'Risk Management', 'Budgeting'],
      softSkills: ['Leadership', 'Communication', 'Organization', 'Conflict Resolution'],
      experienceYears: 8,
      expectedSalary: 98000,
      education: {
        degree: 'MBA',
        field: 'Business Administration',
        institution: 'Wharton School'
      },
      availability: 'available',
      previousProjects: ['Enterprise Software Launch', 'Product Roadmap Development']
    },
    {
      id: '8',
      name: 'Robert Wilson',
      email: 'robert.w@company.com',
      role: 'Mobile Developer',
      technicalSkills: ['React Native', 'Swift', 'Kotlin', 'iOS', 'Android', 'Firebase'],
      softSkills: ['Problem Solving', 'Teamwork', 'Adaptability', 'Attention to Detail'],
      experienceYears: 3,
      expectedSalary: 72000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Software Engineering',
        institution: 'Georgia Tech'
      },
      availability: 'available',
      previousProjects: ['Food Delivery App', 'Fitness Tracking App']
    },
    {
      id: '9',
      name: 'Amanda Brown',
      email: 'amanda.b@company.com',
      role: 'QA Engineer',
      technicalSkills: ['Selenium', 'Jest', 'Cypress', 'Test Automation', 'API Testing', 'Performance Testing'],
      softSkills: ['Attention to Detail', 'Critical Thinking', 'Communication', 'Patience'],
      experienceYears: 4,
      expectedSalary: 70000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'University of Michigan'
      },
      availability: 'available',
      previousProjects: ['E-commerce Testing Suite', 'Mobile App QA']
    },
    {
      id: '10',
      name: 'Christopher Lee',
      email: 'chris.l@company.com',
      role: 'Security Engineer',
      technicalSkills: ['Cybersecurity', 'Penetration Testing', 'Network Security', 'Python', 'Linux', 'Firewall Management'],
      softSkills: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Ethics'],
      experienceYears: 6,
      expectedSalary: 105000,
      education: {
        degree: 'Master of Science',
        field: 'Cybersecurity',
        institution: 'Johns Hopkins University'
      },
      availability: 'limited',
      previousProjects: ['Security Audit System', 'Incident Response Platform']
    },
    {
      id: '11',
      name: 'Nicole Harper',
      email: 'nicole.h@company.com',
      role: 'Product Manager',
      technicalSkills: ['Product Strategy', 'User Research', 'A/B Testing', 'Analytics', 'SQL', 'Roadmapping'],
      softSkills: ['Strategic Thinking', 'Leadership', 'Communication', 'Stakeholder Management'],
      experienceYears: 6,
      expectedSalary: 110000,
      education: {
        degree: 'MBA',
        field: 'Product Management',
        institution: 'Northwestern University'
      },
      availability: 'available',
      previousProjects: ['SaaS Product Launch', 'Mobile App Growth Strategy']
    },
    {
      id: '12',
      name: 'Kevin Patel',
      email: 'kevin.p@company.com',
      role: 'Solutions Architect',
      technicalSkills: ['System Design', 'Microservices', 'AWS', 'Azure', 'Event-Driven Architecture', 'GraphQL'],
      softSkills: ['Strategic Thinking', 'Communication', 'Problem Solving', 'Mentoring'],
      experienceYears: 10,
      expectedSalary: 135000,
      education: {
        degree: 'Master of Science',
        field: 'Computer Science',
        institution: 'Stanford University'
      },
      availability: 'limited',
      previousProjects: ['Enterprise Architecture Redesign', 'Cloud Migration Strategy']
    },
    {
      id: '13',
      name: 'Rachel Green',
      email: 'rachel.g@company.com',
      role: 'Frontend Developer',
      technicalSkills: ['Angular', 'TypeScript', 'SASS', 'Webpack', 'RxJS', 'Material Design'],
      softSkills: ['Creativity', 'Collaboration', 'Problem Solving', 'Adaptability'],
      experienceYears: 3,
      expectedSalary: 68000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Web Development',
        institution: 'University of Washington'
      },
      availability: 'available',
      previousProjects: ['Corporate Website Redesign', 'Admin Dashboard']
    },
    {
      id: '14',
      name: 'Marcus Johnson',
      email: 'marcus.j@company.com',
      role: 'Database Administrator',
      technicalSkills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Database Optimization', 'Backup & Recovery', 'SQL Server'],
      softSkills: ['Attention to Detail', 'Problem Solving', 'Reliability', 'Documentation'],
      experienceYears: 7,
      expectedSalary: 95000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Information Systems',
        institution: 'University of Texas'
      },
      availability: 'available',
      previousProjects: ['Database Migration', 'Performance Optimization']
    },
    {
      id: '15',
      name: 'Olivia Taylor',
      email: 'olivia.t@company.com',
      role: 'Business Analyst',
      technicalSkills: ['Requirements Analysis', 'Process Modeling', 'Data Analysis', 'Excel', 'Power BI', 'JIRA'],
      softSkills: ['Communication', 'Critical Thinking', 'Stakeholder Management', 'Documentation'],
      experienceYears: 5,
      expectedSalary: 78000,
      education: {
        degree: 'Bachelor of Business Administration',
        field: 'Business Analytics',
        institution: 'University of Pennsylvania'
      },
      availability: 'available',
      previousProjects: ['Business Process Optimization', 'Requirements Documentation']
    },
    {
      id: '16',
      name: 'Daniel Singh',
      email: 'daniel.s@company.com',
      role: 'Cloud Engineer',
      technicalSkills: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation', 'Serverless'],
      softSkills: ['Problem Solving', 'Teamwork', 'Communication', 'Innovation'],
      experienceYears: 5,
      expectedSalary: 98000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Cloud Computing',
        institution: 'Georgia Institute of Technology'
      },
      availability: 'available',
      previousProjects: ['Multi-Cloud Architecture', 'Serverless Application Deployment']
    },
    {
      id: '17',
      name: 'Sophia Williams',
      email: 'sophia.w@company.com',
      role: 'Technical Writer',
      technicalSkills: ['Documentation', 'API Documentation', 'Markdown', 'Git', 'Technical Communication', 'MadCap Flare'],
      softSkills: ['Writing', 'Attention to Detail', 'Communication', 'Empathy'],
      experienceYears: 4,
      expectedSalary: 65000,
      education: {
        degree: 'Bachelor of Arts',
        field: 'Technical Communication',
        institution: 'Arizona State University'
      },
      availability: 'available',
      previousProjects: ['API Documentation Portal', 'User Guide Development']
    },
    {
      id: '18',
      name: 'Brandon Mitchell',
      email: 'brandon.m@company.com',
      role: 'Backend Developer',
      technicalSkills: ['Java', 'Spring Boot', 'Hibernate', 'Kafka', 'RabbitMQ', 'Elasticsearch'],
      softSkills: ['Problem Solving', 'Teamwork', 'Critical Thinking', 'Reliability'],
      experienceYears: 6,
      expectedSalary: 91000,
      education: {
        degree: 'Master of Science',
        field: 'Software Engineering',
        institution: 'University of California, San Diego'
      },
      availability: 'available',
      previousProjects: ['Event-Driven Microservices', 'Payment Processing System']
    },
    {
      id: '19',
      name: 'Maya Reddy',
      email: 'maya.r@company.com',
      role: 'Machine Learning Engineer',
      technicalSkills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLOps', 'Deep Learning'],
      softSkills: ['Analytical Thinking', 'Innovation', 'Communication', 'Collaboration'],
      experienceYears: 4,
      expectedSalary: 115000,
      education: {
        degree: 'PhD',
        field: 'Machine Learning',
        institution: 'MIT'
      },
      availability: 'limited',
      previousProjects: ['Computer Vision System', 'NLP Chatbot']
    },
    {
      id: '20',
      name: 'Nathan Brooks',
      email: 'nathan.b@company.com',
      role: 'Full Stack Developer',
      technicalSkills: ['Angular', 'Node.js', 'MongoDB', 'Express', 'GraphQL', 'Docker'],
      softSkills: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management'],
      experienceYears: 5,
      expectedSalary: 87000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'University of Illinois'
      },
      availability: 'available',
      previousProjects: ['Real-Time Chat Application', 'Content Management System']
    },
    {
      id: '21',
      name: 'Isabella Garcia',
      email: 'isabella.g@company.com',
      role: 'Scrum Master',
      technicalSkills: ['Agile', 'Scrum', 'Kanban', 'JIRA', 'Confluence', 'Facilitation'],
      softSkills: ['Leadership', 'Communication', 'Coaching', 'Conflict Resolution'],
      experienceYears: 6,
      expectedSalary: 89000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Business Management',
        institution: 'Boston University'
      },
      availability: 'available',
      previousProjects: ['Agile Transformation', 'Cross-Functional Team Leadership']
    },
    {
      id: '22',
      name: 'Thomas Anderson',
      email: 'thomas.a@company.com',
      role: 'iOS Developer',
      technicalSkills: ['Swift', 'SwiftUI', 'Objective-C', 'Xcode', 'Core Data', 'ARKit'],
      softSkills: ['Attention to Detail', 'Creativity', 'Problem Solving', 'Teamwork'],
      experienceYears: 5,
      expectedSalary: 93000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Mobile Development',
        institution: 'Carnegie Mellon University'
      },
      availability: 'available',
      previousProjects: ['AR Shopping Experience', 'Lifestyle App']
    },
    {
      id: '23',
      name: 'Priya Sharma',
      email: 'priya.s@company.com',
      role: 'Data Engineer',
      technicalSkills: ['Python', 'Apache Spark', 'Airflow', 'ETL', 'Data Warehousing', 'Snowflake'],
      softSkills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Collaboration'],
      experienceYears: 5,
      expectedSalary: 102000,
      education: {
        degree: 'Master of Science',
        field: 'Data Science',
        institution: 'Columbia University'
      },
      availability: 'available',
      previousProjects: ['Data Pipeline Architecture', 'Real-Time Analytics Platform']
    },
    {
      id: '24',
      name: 'Eric Thompson',
      email: 'eric.t@company.com',
      role: 'Site Reliability Engineer',
      technicalSkills: ['Kubernetes', 'Prometheus', 'Grafana', 'Linux', 'Python', 'Incident Management'],
      softSkills: ['Problem Solving', 'Communication', 'Reliability', 'Stress Management'],
      experienceYears: 6,
      expectedSalary: 110000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Engineering',
        institution: 'Purdue University'
      },
      availability: 'available',
      previousProjects: ['High Availability System', 'Monitoring Infrastructure']
    },
    {
      id: '25',
      name: 'Aisha Mohammed',
      email: 'aisha.m@company.com',
      role: 'UX Researcher',
      technicalSkills: ['User Testing', 'Surveys', 'Interviews', 'Analytics', 'Persona Creation', 'A/B Testing'],
      softSkills: ['Empathy', 'Communication', 'Critical Thinking', 'Presentation'],
      experienceYears: 4,
      expectedSalary: 80000,
      education: {
        degree: 'Master of Arts',
        field: 'Human-Computer Interaction',
        institution: 'University of Michigan'
      },
      availability: 'available',
      previousProjects: ['User Research Study', 'Usability Testing Program']
    },
    {
      id: '26',
      name: 'Alex Chen',
      email: 'alex.c@company.com',
      role: 'Full Stack Developer',
      technicalSkills: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis', 'Docker'],
      softSkills: ['Problem Solving', 'Teamwork', 'Adaptability', 'Communication'],
      experienceYears: 3,
      expectedSalary: 78000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Software Engineering',
        institution: 'University of Toronto'
      },
      availability: 'available',
      previousProjects: ['Blog Platform', 'Task Management App']
    },
    {
      id: '27',
      name: 'Jennifer Walsh',
      email: 'jennifer.w@company.com',
      role: 'Full Stack Developer',
      technicalSkills: ['Ruby on Rails', 'Vue.js', 'MySQL', 'REST APIs', 'Git', 'Jenkins'],
      softSkills: ['Leadership', 'Mentoring', 'Critical Thinking', 'Time Management'],
      experienceYears: 9,
      expectedSalary: 110000,
      education: {
        degree: 'Master of Science',
        field: 'Computer Science',
        institution: 'University of California, Berkeley'
      },
      availability: 'limited',
      previousProjects: ['E-Learning Platform', 'Financial Dashboard']
    },
    {
      id: '28',
      name: 'Tyler Jackson',
      email: 'tyler.j@company.com',
      role: 'Frontend Developer',
      technicalSkills: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'JavaScript', 'Git', 'Storybook'],
      softSkills: ['Creativity', 'Communication', 'Problem Solving', 'Collaboration'],
      experienceYears: 2,
      expectedSalary: 62000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Web Design',
        institution: 'Parsons School of Design'
      },
      availability: 'available',
      previousProjects: ['Portfolio Website', 'Landing Page Design']
    },
    {
      id: '29',
      name: 'Samantha Lee',
      email: 'samantha.l@company.com',
      role: 'Frontend Developer',
      technicalSkills: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Jest', 'Styled Components'],
      softSkills: ['Attention to Detail', 'Teamwork', 'Adaptability', 'User Focus'],
      experienceYears: 6,
      expectedSalary: 88000,
      education: {
        degree: 'Master of Science',
        field: 'Interactive Media',
        institution: 'New York University'
      },
      availability: 'available',
      previousProjects: ['News Portal', 'E-commerce Frontend']
    },
    {
      id: '30',
      name: 'Carlos Rodriguez',
      email: 'carlos.r@company.com',
      role: 'Backend Developer',
      technicalSkills: ['Node.js', 'Express', 'MongoDB', 'Redis', 'GraphQL', 'Microservices'],
      softSkills: ['Problem Solving', 'Communication', 'Reliability', 'Innovation'],
      experienceYears: 4,
      expectedSalary: 82000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'University of Florida'
      },
      availability: 'available',
      previousProjects: ['REST API Development', 'Booking System Backend']
    },
    {
      id: '31',
      name: 'Linda Zhang',
      email: 'linda.z@company.com',
      role: 'Backend Developer',
      technicalSkills: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes', 'Redis', 'Protocol Buffers'],
      softSkills: ['Analytical Thinking', 'Problem Solving', 'Teamwork', 'Documentation'],
      experienceYears: 8,
      expectedSalary: 105000,
      education: {
        degree: 'PhD',
        field: 'Distributed Systems',
        institution: 'Carnegie Mellon University'
      },
      availability: 'limited',
      previousProjects: ['Distributed Cache System', 'High-Performance API']
    },
    {
      id: '32',
      name: 'Ryan Murphy',
      email: 'ryan.m@company.com',
      role: 'DevOps Engineer',
      technicalSkills: ['Jenkins', 'GitLab CI', 'Ansible', 'AWS', 'Monitoring', 'Shell Scripting'],
      softSkills: ['Problem Solving', 'Communication', 'Collaboration', 'Automation'],
      experienceYears: 4,
      expectedSalary: 85000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Systems Engineering',
        institution: 'Virginia Tech'
      },
      availability: 'available',
      previousProjects: ['CI/CD Pipeline Setup', 'Infrastructure as Code']
    },
    {
      id: '33',
      name: 'Hannah Park',
      email: 'hannah.p@company.com',
      role: 'UI/UX Designer',
      technicalSkills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Wireframing', 'User Flows', 'Design Systems'],
      softSkills: ['Creativity', 'Empathy', 'Collaboration', 'Visual Communication'],
      experienceYears: 6,
      expectedSalary: 85000,
      education: {
        degree: 'Master of Fine Arts',
        field: 'Graphic Design',
        institution: 'Pratt Institute'
      },
      availability: 'available',
      previousProjects: ['Healthcare App Design', 'Corporate Branding']
    },
    {
      id: '34',
      name: 'Peter Sullivan',
      email: 'peter.s@company.com',
      role: 'Data Scientist',
      technicalSkills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Statistical Analysis'],
      softSkills: ['Analytical Thinking', 'Communication', 'Curiosity', 'Problem Solving'],
      experienceYears: 3,
      expectedSalary: 75000,
      education: {
        degree: 'Master of Science',
        field: 'Data Science',
        institution: 'University of Washington'
      },
      availability: 'available',
      previousProjects: ['Customer Segmentation', 'Sales Forecasting']
    },
    {
      id: '35',
      name: 'Grace Williams',
      email: 'grace.w@company.com',
      role: 'Project Manager',
      technicalSkills: ['Project Planning', 'Stakeholder Management', 'Agile', 'Budget Management', 'MS Project'],
      softSkills: ['Leadership', 'Communication', 'Decision Making', 'Negotiation'],
      experienceYears: 10,
      expectedSalary: 115000,
      education: {
        degree: 'MBA',
        field: 'Project Management',
        institution: 'Duke University'
      },
      availability: 'limited',
      previousProjects: ['Multi-Million Dollar Software Project', 'Organizational Transformation']
    },
    {
      id: '36',
      name: 'Andrew Kim',
      email: 'andrew.k@company.com',
      role: 'Mobile Developer',
      technicalSkills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'SQLite', 'Push Notifications'],
      softSkills: ['Problem Solving', 'Creativity', 'Teamwork', 'Attention to Detail'],
      experienceYears: 4,
      expectedSalary: 80000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'University of Southern California'
      },
      availability: 'available',
      previousProjects: ['Cross-Platform Messenger', 'Travel App']
    },
    {
      id: '37',
      name: 'Michelle Brown',
      email: 'michelle.b@company.com',
      role: 'QA Engineer',
      technicalSkills: ['Playwright', 'TestNG', 'Postman', 'JIRA', 'Regression Testing', 'Load Testing'],
      softSkills: ['Attention to Detail', 'Communication', 'Analytical Thinking', 'Persistence'],
      experienceYears: 5,
      expectedSalary: 76000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Quality Assurance',
        institution: 'Rochester Institute of Technology'
      },
      availability: 'available',
      previousProjects: ['Automated Testing Framework', 'Quality Metrics Dashboard']
    },
    {
      id: '38',
      name: 'Derek Foster',
      email: 'derek.f@company.com',
      role: 'Security Engineer',
      technicalSkills: ['Security Auditing', 'OWASP', 'Vulnerability Assessment', 'Incident Response', 'SIEM', 'Compliance'],
      softSkills: ['Analytical Thinking', 'Ethics', 'Communication', 'Critical Thinking'],
      experienceYears: 7,
      expectedSalary: 112000,
      education: {
        degree: 'Master of Science',
        field: 'Information Security',
        institution: 'Georgia Tech'
      },
      availability: 'available',
      previousProjects: ['SOC 2 Compliance', 'Security Architecture Review']
    },
    {
      id: '39',
      name: 'Victoria Chen',
      email: 'victoria.c@company.com',
      role: 'Product Manager',
      technicalSkills: ['Product Discovery', 'Market Research', 'Prototyping', 'Data Analysis', 'Customer Interviews', 'OKRs'],
      softSkills: ['Strategic Thinking', 'Communication', 'Empathy', 'Leadership'],
      experienceYears: 5,
      expectedSalary: 102000,
      education: {
        degree: 'MBA',
        field: 'Technology Management',
        institution: 'UCLA Anderson'
      },
      availability: 'available',
      previousProjects: ['Mobile App Launch', 'Feature Prioritization']
    },
    {
      id: '40',
      name: 'Steven Martinez',
      email: 'steven.m@company.com',
      role: 'Solutions Architect',
      technicalSkills: ['Enterprise Architecture', 'Cloud Patterns', 'API Design', 'Domain-Driven Design', 'Architecture Documentation', 'TOGAF'],
      softSkills: ['Strategic Thinking', 'Communication', 'Leadership', 'Problem Solving'],
      experienceYears: 12,
      expectedSalary: 150000,
      education: {
        degree: 'Master of Science',
        field: 'Software Architecture',
        institution: 'MIT'
      },
      availability: 'unavailable',
      previousProjects: ['Banking Platform Redesign', 'IoT Architecture']
    },
    {
      id: '41',
      name: 'Angela Davis',
      email: 'angela.d@company.com',
      role: 'Database Administrator',
      technicalSkills: ['Oracle', 'SQL Tuning', 'Replication', 'High Availability', 'Data Modeling', 'ETL'],
      softSkills: ['Attention to Detail', 'Problem Solving', 'Documentation', 'Reliability'],
      experienceYears: 9,
      expectedSalary: 108000,
      education: {
        degree: 'Master of Science',
        field: 'Database Systems',
        institution: 'University of Maryland'
      },
      availability: 'available',
      previousProjects: ['Database Consolidation', 'Disaster Recovery Planning']
    },
    {
      id: '42',
      name: 'Brian Scott',
      email: 'brian.s@company.com',
      role: 'Business Analyst',
      technicalSkills: ['Business Process Analysis', 'UML', 'User Stories', 'SQL', 'Tableau', 'Requirements Gathering'],
      softSkills: ['Communication', 'Critical Thinking', 'Problem Solving', 'Facilitation'],
      experienceYears: 6,
      expectedSalary: 85000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Business Information Systems',
        institution: 'Indiana University'
      },
      availability: 'available',
      previousProjects: ['CRM Implementation', 'Workflow Optimization']
    },
    {
      id: '43',
      name: 'Maria Gonzalez',
      email: 'maria.g@company.com',
      role: 'Cloud Engineer',
      technicalSkills: ['Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'Cloud Security', 'Cost Optimization'],
      softSkills: ['Problem Solving', 'Innovation', 'Teamwork', 'Communication'],
      experienceYears: 6,
      expectedSalary: 105000,
      education: {
        degree: 'Master of Science',
        field: 'Cloud Architecture',
        institution: 'University of California, Irvine'
      },
      availability: 'available',
      previousProjects: ['Multi-Region Deployment', 'Cloud Cost Reduction']
    },
    {
      id: '44',
      name: 'Kevin O\'Brien',
      email: 'kevin.o@company.com',
      role: 'Technical Writer',
      technicalSkills: ['Technical Writing', 'Documentation Tools', 'API Reference', 'Video Tutorials', 'Content Management', 'XML'],
      softSkills: ['Writing', 'Communication', 'Organization', 'Attention to Detail'],
      experienceYears: 5,
      expectedSalary: 70000,
      education: {
        degree: 'Bachelor of Arts',
        field: 'English',
        institution: 'University of Wisconsin'
      },
      availability: 'available',
      previousProjects: ['Developer Documentation Hub', 'Release Notes Automation']
    },
    {
      id: '45',
      name: 'Diana Kumar',
      email: 'diana.k@company.com',
      role: 'Machine Learning Engineer',
      technicalSkills: ['Python', 'Keras', 'Computer Vision', 'NLP', 'AWS SageMaker', 'Model Deployment'],
      softSkills: ['Innovation', 'Problem Solving', 'Communication', 'Research'],
      experienceYears: 5,
      expectedSalary: 120000,
      education: {
        degree: 'PhD',
        field: 'Artificial Intelligence',
        institution: 'Stanford University'
      },
      availability: 'available',
      previousProjects: ['Image Recognition System', 'Sentiment Analysis Tool']
    },
    {
      id: '46',
      name: 'Jason Wright',
      email: 'jason.w@company.com',
      role: 'Scrum Master',
      technicalSkills: ['Scrum', 'Agile Coaching', 'Team Facilitation', 'Retrospectives', 'Sprint Planning', 'Metrics'],
      softSkills: ['Leadership', 'Coaching', 'Communication', 'Empathy'],
      experienceYears: 7,
      expectedSalary: 95000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Organizational Leadership',
        institution: 'Penn State University'
      },
      availability: 'available',
      previousProjects: ['Agile Team Coaching', 'Scrum Training Program']
    },
    {
      id: '47',
      name: 'Rebecca Turner',
      email: 'rebecca.t@company.com',
      role: 'iOS Developer',
      technicalSkills: ['Swift', 'UIKit', 'SwiftUI', 'Combine', 'CoreML', 'TestFlight'],
      softSkills: ['Creativity', 'Problem Solving', 'Attention to Detail', 'Collaboration'],
      experienceYears: 4,
      expectedSalary: 88000,
      education: {
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        institution: 'University of Virginia'
      },
      availability: 'available',
      previousProjects: ['Health Tracking App', 'Social Network iOS']
    },
    {
      id: '48',
      name: 'William Chang',
      email: 'william.c@company.com',
      role: 'Data Engineer',
      technicalSkills: ['Scala', 'Apache Kafka', 'Apache Flink', 'Data Lakes', 'AWS Redshift', 'Data Modeling'],
      softSkills: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Innovation'],
      experienceYears: 6,
      expectedSalary: 110000,
      education: {
        degree: 'Master of Science',
        field: 'Data Engineering',
        institution: 'Georgia Institute of Technology'
      },
      availability: 'limited',
      previousProjects: ['Streaming Data Platform', 'Data Warehouse Modernization']
    },
    {
      id: '49',
      name: 'Laura Peterson',
      email: 'laura.p@company.com',
      role: 'Site Reliability Engineer',
      technicalSkills: ['Site Reliability', 'Observability', 'Terraform', 'Ansible', 'Disaster Recovery', 'Chaos Engineering'],
      softSkills: ['Problem Solving', 'Communication', 'Stress Management', 'Collaboration'],
      experienceYears: 7,
      expectedSalary: 115000,
      education: {
        degree: 'Master of Science',
        field: 'Systems Engineering',
        institution: 'University of Michigan'
      },
      availability: 'available',
      previousProjects: ['Zero-Downtime Migration', 'SRE Best Practices Implementation']
    },
    {
      id: '50',
      name: 'Omar Hassan',
      email: 'omar.h@company.com',
      role: 'UX Researcher',
      technicalSkills: ['Qualitative Research', 'Quantitative Research', 'Eye Tracking', 'Card Sorting', 'Usability Testing', 'Research Synthesis'],
      softSkills: ['Empathy', 'Critical Thinking', 'Communication', 'Curiosity'],
      experienceYears: 5,
      expectedSalary: 87000,
      education: {
        degree: 'PhD',
        field: 'Cognitive Psychology',
        institution: 'Yale University'
      },
      availability: 'available',
      previousProjects: ['Enterprise UX Research', 'Mobile App User Study']
    }
  ];

  return {
    sampleTeamMembers
  };
};


