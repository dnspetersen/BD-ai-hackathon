import type { SavedResult } from '../composables/useSavedResults';

export const sampleSavedResults: SavedResult[] = [
  {
    id: '1732636800000-abc123def',
    savedAt: '2024-11-26T14:30:00.000Z',
    projectRequirements: {
      projectName: 'E-Commerce Platform Redesign',
      clientName: 'RetailCo Inc.',
      description: 'Complete redesign and modernization of our e-commerce platform with focus on mobile-first approach, improved checkout flow, and integration with modern payment systems.',
      requiredTechnicalSkills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'GraphQL'],
      requiredSoftSkills: ['Communication', 'Problem Solving', 'Team Leadership', 'Agile Methodology'],
      minExperienceYears: 3,
      maxBudget: 450000,
      teamSize: 5,
      duration: '6 months',
      preferredEducation: ['Bachelor', 'Master']
    },
    recommendation: {
      team: [
        {
          member: {
            id: 'tm-001',
            name: 'Sarah Chen',
            email: 'sarah.chen@example.com',
            role: 'Senior Full Stack Developer',
            technicalSkills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
            softSkills: ['Team Leadership', 'Communication', 'Problem Solving', 'Mentoring'],
            experienceYears: 7,
            expectedSalary: 125000,
            education: {
              degree: 'Master',
              field: 'Computer Science',
              institution: 'Stanford University'
            },
            availability: 'available',
            previousProjects: ['E-commerce Platform', 'Banking App', 'Social Network']
          },
          score: 94.5,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 95,
            salaryMatch: 88,
            educationMatch: 100
          },
          reasoning: 'Perfect match with extensive experience in e-commerce platforms. Strong leadership skills and complete technical stack coverage including React, Node.js, and AWS.'
        },
        {
          member: {
            id: 'tm-002',
            name: 'Michael Rodriguez',
            email: 'michael.r@example.com',
            role: 'Frontend Developer',
            technicalSkills: ['React', 'TypeScript', 'Redux', 'CSS', 'JavaScript', 'Webpack'],
            softSkills: ['Attention to Detail', 'Communication', 'Problem Solving', 'Time Management'],
            experienceYears: 5,
            expectedSalary: 95000,
            education: {
              degree: 'Bachelor',
              field: 'Software Engineering',
              institution: 'MIT'
            },
            availability: 'available',
            previousProjects: ['Mobile Banking', 'Healthcare Portal', 'Marketing Platform']
          },
          score: 89.2,
          matchDetails: {
            technicalSkillsMatch: 83,
            softSkillsMatch: 100,
            experienceMatch: 92,
            salaryMatch: 95,
            educationMatch: 100
          },
          reasoning: 'Strong frontend specialist with React and TypeScript expertise. Excellent attention to detail crucial for e-commerce UI/UX. Good experience level and within budget.'
        },
        {
          member: {
            id: 'tm-003',
            name: 'Aisha Patel',
            email: 'aisha.patel@example.com',
            role: 'Backend Developer',
            technicalSkills: ['Node.js', 'MongoDB', 'GraphQL', 'PostgreSQL', 'Redis', 'Microservices'],
            softSkills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Agile Methodology'],
            experienceYears: 6,
            expectedSalary: 110000,
            education: {
              degree: 'Bachelor',
              field: 'Computer Science',
              institution: 'UC Berkeley'
            },
            availability: 'available',
            previousProjects: ['Payment Gateway', 'Logistics Platform', 'Analytics Dashboard']
          },
          score: 91.8,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 90,
            salaryMatch: 90,
            educationMatch: 100
          },
          reasoning: 'Excellent backend developer with strong GraphQL and MongoDB experience. Previous payment gateway work is highly relevant for e-commerce platform.'
        },
        {
          member: {
            id: 'tm-004',
            name: 'James Wilson',
            email: 'james.w@example.com',
            role: 'DevOps Engineer',
            technicalSkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
            softSkills: ['Problem Solving', 'Communication', 'Automation', 'Team Collaboration'],
            experienceYears: 5,
            expectedSalary: 105000,
            education: {
              degree: 'Bachelor',
              field: 'Information Technology',
              institution: 'Georgia Tech'
            },
            availability: 'available',
            previousProjects: ['Cloud Migration', 'Microservices Platform', 'CI/CD Pipeline']
          },
          score: 87.5,
          matchDetails: {
            technicalSkillsMatch: 83,
            softSkillsMatch: 75,
            experienceMatch: 92,
            salaryMatch: 92,
            educationMatch: 100
          },
          reasoning: 'Solid DevOps engineer with AWS expertise needed for infrastructure. Experience with Docker and CI/CD will ensure smooth deployment pipeline.'
        },
        {
          member: {
            id: 'tm-005',
            name: 'Emma Thompson',
            email: 'emma.t@example.com',
            role: 'UI/UX Designer',
            technicalSkills: ['Figma', 'Adobe XD', 'HTML', 'CSS', 'JavaScript', 'User Research'],
            softSkills: ['Creativity', 'Communication', 'User Empathy', 'Problem Solving'],
            experienceYears: 4,
            expectedSalary: 85000,
            education: {
              degree: 'Bachelor',
              field: 'Design',
              institution: 'RISD'
            },
            availability: 'available',
            previousProjects: ['Mobile App Design', 'E-commerce Redesign', 'SaaS Platform']
          },
          score: 85.3,
          matchDetails: {
            technicalSkillsMatch: 50,
            softSkillsMatch: 100,
            experienceMatch: 85,
            salaryMatch: 98,
            educationMatch: 100
          },
          reasoning: 'Talented designer with previous e-commerce experience. Strong user research skills will help create mobile-first design that improves conversion rates.'
        }
      ],
      totalScore: 89.66,
      totalCost: 520000,
      coverageAnalysis: {
        technicalSkillsCoverage: 100,
        softSkillsCoverage: 100,
        roleDistribution: {
          'Senior Full Stack Developer': 1,
          'Frontend Developer': 1,
          'Backend Developer': 1,
          'DevOps Engineer': 1,
          'UI/UX Designer': 1
        }
      },
      pros: [
        'Strong overall team match score',
        'Complete coverage of all required technical skills',
        'Complete coverage of all required soft skills',
        'Well under budget with $70K savings',
        'Highly experienced team (avg 5.4 years)',
        'Diverse role distribution for balanced team dynamics',
        'All team members are immediately available'
      ],
      cons: [
        'No significant concerns identified'
      ]
    }
  },
  {
    id: '1732550400000-xyz789ghi',
    savedAt: '2024-11-25T10:15:00.000Z',
    projectRequirements: {
      projectName: 'Healthcare Data Analytics Platform',
      clientName: 'MediTech Solutions',
      description: 'Build a HIPAA-compliant data analytics platform for processing and visualizing patient health records with advanced AI-driven insights and predictive modeling.',
      requiredTechnicalSkills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Docker', 'Data Visualization'],
      requiredSoftSkills: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Attention to Detail'],
      minExperienceYears: 5,
      maxBudget: 380000,
      teamSize: 4,
      duration: '8 months',
      preferredEducation: ['Master', 'PhD']
    },
    recommendation: {
      team: [
        {
          member: {
            id: 'tm-006',
            name: 'Dr. Lisa Anderson',
            email: 'lisa.anderson@example.com',
            role: 'Data Scientist',
            technicalSkills: ['Python', 'Machine Learning', 'TensorFlow', 'PyTorch', 'Statistics', 'R'],
            softSkills: ['Analytical Thinking', 'Problem Solving', 'Research', 'Communication'],
            experienceYears: 8,
            expectedSalary: 135000,
            education: {
              degree: 'PhD',
              field: 'Data Science',
              institution: 'MIT'
            },
            availability: 'available',
            previousProjects: ['Medical Imaging AI', 'Drug Discovery Platform', 'Predictive Analytics']
          },
          score: 96.2,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 100,
            salaryMatch: 82,
            educationMatch: 100
          },
          reasoning: 'Outstanding data scientist with PhD and healthcare AI experience. Perfect technical match with TensorFlow and machine learning expertise.'
        },
        {
          member: {
            id: 'tm-007',
            name: 'Kevin Nguyen',
            email: 'kevin.n@example.com',
            role: 'Backend Developer',
            technicalSkills: ['Python', 'Django', 'PostgreSQL', 'SQL', 'Docker', 'Redis', 'API Development'],
            softSkills: ['Problem Solving', 'Attention to Detail', 'Communication', 'Team Collaboration'],
            experienceYears: 6,
            expectedSalary: 115000,
            education: {
              degree: 'Master',
              field: 'Computer Science',
              institution: 'Carnegie Mellon'
            },
            availability: 'available',
            previousProjects: ['Healthcare Portal', 'Financial System', 'API Gateway']
          },
          score: 92.8,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 90,
            salaryMatch: 88,
            educationMatch: 100
          },
          reasoning: 'Strong backend developer with Python and SQL expertise. Previous healthcare portal experience ensures understanding of compliance requirements.'
        },
        {
          member: {
            id: 'tm-008',
            name: 'Rachel Kim',
            email: 'rachel.kim@example.com',
            role: 'Data Engineer',
            technicalSkills: ['Python', 'SQL', 'Apache Spark', 'Data Pipeline', 'ETL', 'Airflow'],
            softSkills: ['Problem Solving', 'Analytical Thinking', 'Attention to Detail', 'Documentation'],
            experienceYears: 5,
            expectedSalary: 110000,
            education: {
              degree: 'Master',
              field: 'Data Engineering',
              institution: 'University of Washington'
            },
            availability: 'available',
            previousProjects: ['Data Warehouse', 'ETL Pipeline', 'Real-time Analytics']
          },
          score: 88.5,
          matchDetails: {
            technicalSkillsMatch: 83,
            softSkillsMatch: 100,
            experienceMatch: 100,
            salaryMatch: 90,
            educationMatch: 100
          },
          reasoning: 'Skilled data engineer with strong ETL and pipeline experience. Will ensure smooth data flow and processing for analytics platform.'
        },
        {
          member: {
            id: 'tm-009',
            name: 'David Martinez',
            email: 'david.m@example.com',
            role: 'Frontend Developer',
            technicalSkills: ['React', 'TypeScript', 'D3.js', 'Data Visualization', 'JavaScript', 'Redux'],
            softSkills: ['Problem Solving', 'Communication', 'User Focus', 'Attention to Detail'],
            experienceYears: 5,
            expectedSalary: 98000,
            education: {
              degree: 'Bachelor',
              field: 'Computer Science',
              institution: 'UT Austin'
            },
            availability: 'available',
            previousProjects: ['Analytics Dashboard', 'Data Visualization Tool', 'Business Intelligence']
          },
          score: 86.4,
          matchDetails: {
            technicalSkillsMatch: 67,
            softSkillsMatch: 100,
            experienceMatch: 100,
            salaryMatch: 95,
            educationMatch: 75
          },
          reasoning: 'Frontend specialist with data visualization expertise using D3.js. Previous analytics dashboard experience is highly relevant for building intuitive visualizations.'
        }
      ],
      totalScore: 90.98,
      totalCost: 458000,
      coverageAnalysis: {
        technicalSkillsCoverage: 100,
        softSkillsCoverage: 100,
        roleDistribution: {
          'Data Scientist': 1,
          'Backend Developer': 1,
          'Data Engineer': 1,
          'Frontend Developer': 1
        }
      },
      pros: [
        'Exceptional overall team match score',
        'Complete coverage of all required technical skills',
        'Complete coverage of all required soft skills',
        'Within project budget',
        'Highly experienced team (avg 6.0 years)',
        'All team members are immediately available',
        'PhD-level expertise for advanced ML requirements'
      ],
      cons: [
        'Over budget by $78K (20.5%)'
      ]
    }
  },
  {
    id: '1732464000000-mno456pqr',
    savedAt: '2024-11-24T08:45:00.000Z',
    projectRequirements: {
      projectName: 'Mobile Banking Application',
      clientName: 'FinanceFirst Bank',
      description: 'Develop a secure, feature-rich mobile banking application for iOS and Android with biometric authentication, real-time transactions, and investment tracking.',
      requiredTechnicalSkills: ['React Native', 'Node.js', 'MongoDB', 'Security', 'Mobile Development', 'REST API'],
      requiredSoftSkills: ['Communication', 'Problem Solving', 'Security Mindset', 'Team Collaboration'],
      minExperienceYears: 4,
      maxBudget: 350000,
      teamSize: 4,
      duration: '5 months',
      preferredEducation: ['Bachelor', 'Master']
    },
    recommendation: {
      team: [
        {
          member: {
            id: 'tm-010',
            name: 'Alex Johnson',
            email: 'alex.j@example.com',
            role: 'Senior Mobile Developer',
            technicalSkills: ['React Native', 'iOS', 'Android', 'JavaScript', 'TypeScript', 'Mobile Security'],
            softSkills: ['Team Leadership', 'Communication', 'Problem Solving', 'Mentoring'],
            experienceYears: 8,
            expectedSalary: 130000,
            education: {
              degree: 'Bachelor',
              field: 'Computer Science',
              institution: 'Cornell University'
            },
            availability: 'available',
            previousProjects: ['Banking App', 'Payment App', 'E-wallet Application']
          },
          score: 95.3,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 100,
            salaryMatch: 85,
            educationMatch: 100
          },
          reasoning: 'Exceptional mobile developer with extensive banking app experience. React Native expertise and previous payment app work make this an ideal match.'
        },
        {
          member: {
            id: 'tm-011',
            name: 'Priya Sharma',
            email: 'priya.s@example.com',
            role: 'Backend Developer',
            technicalSkills: ['Node.js', 'MongoDB', 'REST API', 'Security', 'JWT', 'Express'],
            softSkills: ['Problem Solving', 'Security Mindset', 'Communication', 'Attention to Detail'],
            experienceYears: 6,
            expectedSalary: 108000,
            education: {
              degree: 'Master',
              field: 'Cybersecurity',
              institution: 'NYU'
            },
            availability: 'available',
            previousProjects: ['Financial API', 'Secure Authentication System', 'Payment Gateway']
          },
          score: 93.7,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 95,
            salaryMatch: 90,
            educationMatch: 100
          },
          reasoning: 'Strong backend developer with cybersecurity background. Perfect for banking application with focus on security. Previous financial API experience is crucial.'
        },
        {
          member: {
            id: 'tm-012',
            name: 'Marcus Thompson',
            email: 'marcus.t@example.com',
            role: 'Mobile Developer',
            technicalSkills: ['React Native', 'JavaScript', 'REST API', 'Firebase', 'Mobile Testing'],
            softSkills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
            experienceYears: 4,
            expectedSalary: 92000,
            education: {
              degree: 'Bachelor',
              field: 'Software Engineering',
              institution: 'UCLA'
            },
            availability: 'available',
            previousProjects: ['Travel App', 'Social Media App', 'Fitness Tracker']
          },
          score: 87.2,
          matchDetails: {
            technicalSkillsMatch: 83,
            softSkillsMatch: 75,
            experienceMatch: 100,
            salaryMatch: 95,
            educationMatch: 100
          },
          reasoning: 'Competent mobile developer with React Native skills. Good experience level and within budget. Will complement senior developer well.'
        },
        {
          member: {
            id: 'tm-013',
            name: 'Sofia Garcia',
            email: 'sofia.g@example.com',
            role: 'QA Engineer',
            technicalSkills: ['Mobile Testing', 'Automation', 'Selenium', 'Security Testing', 'API Testing'],
            softSkills: ['Attention to Detail', 'Problem Solving', 'Communication', 'Critical Thinking'],
            experienceYears: 5,
            expectedSalary: 88000,
            education: {
              degree: 'Bachelor',
              field: 'Computer Science',
              institution: 'University of Illinois'
            },
            availability: 'available',
            previousProjects: ['Banking App QA', 'E-commerce Testing', 'API Security Testing']
          },
          score: 89.8,
          matchDetails: {
            technicalSkillsMatch: 67,
            softSkillsMatch: 100,
            experienceMatch: 95,
            salaryMatch: 98,
            educationMatch: 100
          },
          reasoning: 'Experienced QA engineer with banking app and security testing background. Critical for ensuring app security and reliability in financial context.'
        }
      ],
      totalScore: 91.5,
      totalCost: 418000,
      coverageAnalysis: {
        technicalSkillsCoverage: 100,
        softSkillsCoverage: 100,
        roleDistribution: {
          'Senior Mobile Developer': 1,
          'Backend Developer': 1,
          'Mobile Developer': 1,
          'QA Engineer': 1
        }
      },
      pros: [
        'Exceptional overall team match score',
        'Complete coverage of all required technical skills',
        'Complete coverage of all required soft skills',
        'Within project budget',
        'Experienced team (avg 5.8 years)',
        'Diverse role distribution for balanced team dynamics',
        'All team members are immediately available',
        'Strong security focus with cybersecurity background'
      ],
      cons: [
        'Over budget by $68K (19.4%)',
        'Very close to maximum budget with limited flexibility'
      ]
    }
  },
  {
    id: '1732377600000-stu901vwx',
    savedAt: '2024-11-23T16:20:00.000Z',
    projectRequirements: {
      projectName: 'AI-Powered Content Management System',
      clientName: 'ContentHub Media',
      description: 'Create an innovative CMS with AI-powered content recommendations, automated SEO optimization, and real-time collaboration features for content creators.',
      requiredTechnicalSkills: ['Python', 'React', 'NLP', 'PostgreSQL', 'AWS', 'Machine Learning'],
      requiredSoftSkills: ['Innovation', 'Problem Solving', 'Communication', 'Agile Methodology'],
      minExperienceYears: 3,
      maxBudget: 320000,
      teamSize: 3,
      duration: '4 months',
      preferredEducation: ['Bachelor', 'Master']
    },
    recommendation: {
      team: [
        {
          member: {
            id: 'tm-014',
            name: 'Olivia Brown',
            email: 'olivia.b@example.com',
            role: 'Full Stack Developer',
            technicalSkills: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'REST API'],
            softSkills: ['Problem Solving', 'Communication', 'Innovation', 'Agile Methodology'],
            experienceYears: 5,
            expectedSalary: 115000,
            education: {
              degree: 'Master',
              field: 'Computer Science',
              institution: 'Columbia University'
            },
            availability: 'available',
            previousProjects: ['CMS Platform', 'Publishing Tool', 'Collaboration Software']
          },
          score: 92.5,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 92,
            salaryMatch: 88,
            educationMatch: 100
          },
          reasoning: 'Versatile full-stack developer with CMS experience. Strong technical match covering both frontend and backend requirements.'
        },
        {
          member: {
            id: 'tm-015',
            name: 'Daniel Lee',
            email: 'daniel.lee@example.com',
            role: 'ML Engineer',
            technicalSkills: ['Python', 'Machine Learning', 'NLP', 'TensorFlow', 'Scikit-learn', 'API Development'],
            softSkills: ['Problem Solving', 'Analytical Thinking', 'Innovation', 'Communication'],
            experienceYears: 4,
            expectedSalary: 120000,
            education: {
              degree: 'Master',
              field: 'Machine Learning',
              institution: 'University of Toronto'
            },
            availability: 'available',
            previousProjects: ['Text Analysis Tool', 'Recommendation Engine', 'SEO Automation']
          },
          score: 94.8,
          matchDetails: {
            technicalSkillsMatch: 100,
            softSkillsMatch: 100,
            experienceMatch: 85,
            salaryMatch: 85,
            educationMatch: 100
          },
          reasoning: 'Excellent ML engineer with NLP and recommendation engine experience. Previous SEO automation work is directly applicable to content optimization features.'
        },
        {
          member: {
            id: 'tm-016',
            name: 'Hannah Wilson',
            email: 'hannah.w@example.com',
            role: 'Frontend Developer',
            technicalSkills: ['React', 'TypeScript', 'Redux', 'CSS', 'JavaScript', 'Responsive Design'],
            softSkills: ['Communication', 'Problem Solving', 'User Focus', 'Agile Methodology'],
            experienceYears: 4,
            expectedSalary: 95000,
            education: {
              degree: 'Bachelor',
              field: 'Web Development',
              institution: 'University of Michigan'
            },
            availability: 'available',
            previousProjects: ['Publishing Platform', 'Content Editor', 'Collaboration Tool']
          },
          score: 88.3,
          matchDetails: {
            technicalSkillsMatch: 67,
            softSkillsMatch: 100,
            experienceMatch: 85,
            salaryMatch: 98,
            educationMatch: 100
          },
          reasoning: 'Skilled frontend developer with publishing platform experience. Will create intuitive interface for content creators with strong collaboration features.'
        }
      ],
      totalScore: 91.87,
      totalCost: 330000,
      coverageAnalysis: {
        technicalSkillsCoverage: 100,
        softSkillsCoverage: 100,
        roleDistribution: {
          'Full Stack Developer': 1,
          'ML Engineer': 1,
          'Frontend Developer': 1
        }
      },
      pros: [
        'Exceptional overall team match score',
        'Complete coverage of all required technical skills',
        'Complete coverage of all required soft skills',
        'Within project budget',
        'Experienced team (avg 4.3 years)',
        'All team members are immediately available',
        'Strong AI/ML expertise for content recommendations',
        'Previous CMS and publishing platform experience'
      ],
      cons: [
        'Over budget by $10K (3.1%)'
      ]
    }
  }
];

// Helper function to load sample data into localStorage
export const loadSampleData = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('ai-team-matcher-saved-results', JSON.stringify(sampleSavedResults));
      console.log('Sample data loaded successfully!');
      return true;
    } catch (error) {
      console.error('Error loading sample data:', error);
      return false;
    }
  }
  return false;
};

// Helper function to clear sample data
export const clearSampleData = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('ai-team-matcher-saved-results');
      console.log('Sample data cleared!');
      return true;
    } catch (error) {
      console.error('Error clearing sample data:', error);
      return false;
    }
  }
  return false;
};

