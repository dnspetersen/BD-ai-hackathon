export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  technicalSkills: string[];
  softSkills: string[];
  experienceYears: number;
  expectedSalary: number;
  education: {
    degree: string;
    field: string;
    institution: string;
  };
  availability: 'available' | 'limited' | 'unavailable';
  previousProjects?: string[];
}

export interface ProjectRequirements {
  projectName: string;
  description: string;
  requiredTechnicalSkills: string[];
  requiredSoftSkills: string[];
  minExperienceYears: number;
  maxBudget: number;
  teamSize: number;
  duration: string;
  preferredEducation?: string[];
}

export interface TeamMatch {
  member: TeamMember;
  score: number;
  matchDetails: {
    technicalSkillsMatch: number;
    softSkillsMatch: number;
    experienceMatch: number;
    salaryMatch: number;
    educationMatch: number;
  };
  reasoning: string;
}

export interface TeamRecommendation {
  team: TeamMatch[];
  totalScore: number;
  totalCost: number;
  coverageAnalysis: {
    technicalSkillsCoverage: number;
    softSkillsCoverage: number;
    roleDistribution: Record<string, number>;
  };
}


