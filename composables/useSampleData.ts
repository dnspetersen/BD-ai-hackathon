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
    }
  ];

  return {
    sampleTeamMembers
  };
};


