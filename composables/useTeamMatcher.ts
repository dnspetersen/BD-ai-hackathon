import type { TeamMember, ProjectRequirements, TeamMatch, TeamRecommendation } from '../types';

export const useTeamMatcher = () => {
  /**
   * Calculate the match score for technical skills
   */
  const calculateTechnicalSkillsMatch = (
    memberSkills: string[],
    requiredSkills: string[]
  ): number => {
    if (requiredSkills.length === 0) return 100;
    
    const matchedSkills = requiredSkills.filter(skill =>
      memberSkills.some(memberSkill =>
        memberSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(memberSkill.toLowerCase())
      )
    );
    
    return (matchedSkills.length / requiredSkills.length) * 100;
  };

  /**
   * Calculate the match score for soft skills
   */
  const calculateSoftSkillsMatch = (
    memberSkills: string[],
    requiredSkills: string[]
  ): number => {
    if (requiredSkills.length === 0) return 100;
    
    const matchedSkills = requiredSkills.filter(skill =>
      memberSkills.some(memberSkill =>
        memberSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(memberSkill.toLowerCase())
      )
    );
    
    return (matchedSkills.length / requiredSkills.length) * 100;
  };

  /**
   * Calculate the match score for experience
   */
  const calculateExperienceMatch = (
    memberExperience: number,
    requiredExperience: number
  ): number => {
    if (memberExperience >= requiredExperience) {
      // Bonus for more experience, but cap at 100
      const bonus = Math.min((memberExperience - requiredExperience) * 5, 20);
      return Math.min(100, 80 + bonus);
    } else {
      // Penalize for less experience
      return (memberExperience / requiredExperience) * 80;
    }
  };

  /**
   * Calculate the match score for salary vs budget
   */
  const calculateSalaryMatch = (
    memberSalary: number,
    maxBudgetPerPerson: number
  ): number => {
    if (memberSalary <= maxBudgetPerPerson) {
      // Reward being under budget
      const savingsPercent = ((maxBudgetPerPerson - memberSalary) / maxBudgetPerPerson) * 100;
      return Math.min(100, 80 + savingsPercent * 0.2);
    } else {
      // Penalize for being over budget
      const overagePercent = ((memberSalary - maxBudgetPerPerson) / maxBudgetPerPerson) * 100;
      return Math.max(0, 80 - overagePercent);
    }
  };

  /**
   * Calculate the match score for education
   */
  const calculateEducationMatch = (
    memberEducation: { degree: string; field: string },
    preferredEducation?: string[]
  ): number => {
    if (!preferredEducation || preferredEducation.length === 0) return 80;
    
    const educationString = `${memberEducation.degree} ${memberEducation.field}`.toLowerCase();
    const hasMatch = preferredEducation.some(pref =>
      educationString.includes(pref.toLowerCase()) ||
      pref.toLowerCase().includes(memberEducation.field.toLowerCase())
    );
    
    return hasMatch ? 100 : 60;
  };

  /**
   * Generate reasoning text for the match
   */
  const generateReasoning = (
    member: TeamMember,
    requirements: ProjectRequirements,
    matchDetails: TeamMatch['matchDetails']
  ): string => {
    const reasons: string[] = [];
    
    if (matchDetails.technicalSkillsMatch >= 80) {
      reasons.push(`Strong technical skills match (${matchDetails.technicalSkillsMatch.toFixed(0)}%)`);
    } else if (matchDetails.technicalSkillsMatch >= 50) {
      reasons.push(`Moderate technical skills match (${matchDetails.technicalSkillsMatch.toFixed(0)}%)`);
    } else {
      reasons.push(`Limited technical skills match (${matchDetails.technicalSkillsMatch.toFixed(0)}%)`);
    }
    
    if (matchDetails.experienceMatch >= 90) {
      reasons.push(`Excellent experience level (${member.experienceYears} years)`);
    } else if (matchDetails.experienceMatch >= 70) {
      reasons.push(`Good experience level (${member.experienceYears} years)`);
    }
    
    if (matchDetails.salaryMatch >= 90) {
      reasons.push(`Within budget with room to spare`);
    } else if (matchDetails.salaryMatch >= 70) {
      reasons.push(`Within budget range`);
    } else {
      reasons.push(`Above ideal budget range`);
    }
    
    if (member.availability === 'available') {
      reasons.push(`Currently available`);
    } else if (member.availability === 'limited') {
      reasons.push(`Limited availability`);
    }
    
    return reasons.join('. ') + '.';
  };

  /**
   * Calculate match score for a single team member
   */
  const calculateMemberMatch = (
    member: TeamMember,
    requirements: ProjectRequirements
  ): TeamMatch => {
    const maxBudgetPerPerson = requirements.maxBudget / requirements.teamSize;
    
    const matchDetails = {
      technicalSkillsMatch: calculateTechnicalSkillsMatch(
        member.technicalSkills,
        requirements.requiredTechnicalSkills
      ),
      softSkillsMatch: calculateSoftSkillsMatch(
        member.softSkills,
        requirements.requiredSoftSkills
      ),
      experienceMatch: calculateExperienceMatch(
        member.experienceYears,
        requirements.minExperienceYears
      ),
      salaryMatch: calculateSalaryMatch(
        member.expectedSalary,
        maxBudgetPerPerson
      ),
      educationMatch: calculateEducationMatch(
        member.education,
        requirements.preferredEducation
      )
    };
    
    // Weighted average - technical skills and experience are most important
    const score = (
      matchDetails.technicalSkillsMatch * 0.35 +
      matchDetails.softSkillsMatch * 0.15 +
      matchDetails.experienceMatch * 0.25 +
      matchDetails.salaryMatch * 0.15 +
      matchDetails.educationMatch * 0.10
    );
    
    // Penalty for unavailability
    const availabilityMultiplier = 
      member.availability === 'available' ? 1.0 :
      member.availability === 'limited' ? 0.85 : 0.5;
    
    const finalScore = score * availabilityMultiplier;
    
    const reasoning = generateReasoning(member, requirements, matchDetails);
    
    return {
      member,
      score: finalScore,
      matchDetails,
      reasoning
    };
  };

  /**
   * Find the best team based on project requirements
   */
  const findBestTeam = (
    allMembers: TeamMember[],
    requirements: ProjectRequirements
  ): TeamRecommendation => {
    // Calculate matches for all members
    const allMatches = allMembers
      .map(member => calculateMemberMatch(member, requirements))
      .sort((a, b) => b.score - a.score);
    
    // Select top N members based on team size, but also ensure role diversity
    const selectedTeam: TeamMatch[] = [];
    const roleCount: Record<string, number> = {};
    
    for (const match of allMatches) {
      if (selectedTeam.length >= requirements.teamSize) break;
      
      const role = match.member.role;
      const currentRoleCount = roleCount[role] || 0;
      
      // Prefer diversity - don't take too many of the same role
      const maxPerRole = Math.ceil(requirements.teamSize / 3);
      if (currentRoleCount < maxPerRole || selectedTeam.length >= requirements.teamSize - 2) {
        selectedTeam.push(match);
        roleCount[role] = currentRoleCount + 1;
      }
    }
    
    // If we don't have enough members, fill with best remaining
    if (selectedTeam.length < requirements.teamSize) {
      for (const match of allMatches) {
        if (selectedTeam.length >= requirements.teamSize) break;
        if (!selectedTeam.includes(match)) {
          selectedTeam.push(match);
        }
      }
    }
    
    const totalScore = selectedTeam.reduce((sum, match) => sum + match.score, 0) / selectedTeam.length;
    const totalCost = selectedTeam.reduce((sum, match) => sum + match.member.expectedSalary, 0);
    
    // Calculate coverage analysis
    const allTechnicalSkills = new Set(selectedTeam.flatMap(m => m.member.technicalSkills));
    const technicalSkillsCoverage = (
      requirements.requiredTechnicalSkills.filter(skill =>
        Array.from(allTechnicalSkills).some(ts => 
          ts.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(ts.toLowerCase())
        )
      ).length / requirements.requiredTechnicalSkills.length
    ) * 100;
    
    const allSoftSkills = new Set(selectedTeam.flatMap(m => m.member.softSkills));
    const softSkillsCoverage = (
      requirements.requiredSoftSkills.filter(skill =>
        Array.from(allSoftSkills).some(ss =>
          ss.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(ss.toLowerCase())
        )
      ).length / requirements.requiredSoftSkills.length
    ) * 100;
    
    // Generate pros and cons
    const pros: string[] = [];
    const cons: string[] = [];
    
    // Analyze pros
    if (totalScore >= 90) {
      pros.push('Exceptional overall team match score');
    } else if (totalScore >= 80) {
      pros.push('Strong overall team match score');
    }
    
    if (technicalSkillsCoverage === 100) {
      pros.push('Complete coverage of all required technical skills');
    } else if (technicalSkillsCoverage >= 80) {
      pros.push('Excellent technical skills coverage');
    }
    
    if (softSkillsCoverage === 100) {
      pros.push('Complete coverage of all required soft skills');
    } else if (softSkillsCoverage >= 80) {
      pros.push('Strong soft skills coverage');
    }
    
    if (totalCost <= requirements.maxBudget * 0.85) {
      const savings = requirements.maxBudget - totalCost;
      pros.push(`Well under budget with $${(savings / 1000).toFixed(0)}K savings`);
    } else if (totalCost <= requirements.maxBudget) {
      pros.push('Within project budget');
    }
    
    const avgExperience = selectedTeam.reduce((sum, m) => sum + m.member.experienceYears, 0) / selectedTeam.length;
    if (avgExperience >= requirements.minExperienceYears + 3) {
      pros.push(`Highly experienced team (avg ${avgExperience.toFixed(1)} years)`);
    } else if (avgExperience >= requirements.minExperienceYears + 1) {
      pros.push(`Experienced team (avg ${avgExperience.toFixed(1)} years)`);
    }
    
    if (Object.keys(roleCount).length >= Math.min(requirements.teamSize, 4)) {
      pros.push('Diverse role distribution for balanced team dynamics');
    }
    
    const allAvailable = selectedTeam.every(m => m.member.availability === 'available');
    if (allAvailable) {
      pros.push('All team members are immediately available');
    }
    
    // Analyze cons
    if (totalScore < 70) {
      cons.push('Overall match score below ideal threshold');
    }
    
    if (technicalSkillsCoverage < 100) {
      const missing = requirements.requiredTechnicalSkills.filter(skill =>
        !Array.from(allTechnicalSkills).some(ts => 
          ts.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(ts.toLowerCase())
        )
      );
      if (missing.length > 0) {
        cons.push(`Missing technical skills: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
      }
    }
    
    if (softSkillsCoverage < 100) {
      const missing = requirements.requiredSoftSkills.filter(skill =>
        !Array.from(allSoftSkills).some(ss =>
          ss.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(ss.toLowerCase())
        )
      );
      if (missing.length > 0) {
        cons.push(`Missing soft skills: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
      }
    }
    
    if (totalCost > requirements.maxBudget) {
      const overage = totalCost - requirements.maxBudget;
      cons.push(`Over budget by $${(overage / 1000).toFixed(0)}K (${((overage / requirements.maxBudget) * 100).toFixed(1)}%)`);
    } else if (totalCost > requirements.maxBudget * 0.95) {
      cons.push('Very close to maximum budget with limited flexibility');
    }
    
    if (avgExperience < requirements.minExperienceYears) {
      cons.push(`Team experience below requirement (avg ${avgExperience.toFixed(1)} vs ${requirements.minExperienceYears} years needed)`);
    }
    
    const limitedAvailability = selectedTeam.filter(m => m.member.availability === 'limited');
    if (limitedAvailability.length > 0) {
      cons.push(`${limitedAvailability.length} team member${limitedAvailability.length > 1 ? 's' : ''} with limited availability`);
    }
    
    const unavailable = selectedTeam.filter(m => m.member.availability === 'unavailable');
    if (unavailable.length > 0) {
      cons.push(`${unavailable.length} team member${unavailable.length > 1 ? 's are' : ' is'} currently unavailable`);
    }
    
    if (Object.keys(roleCount).length < 3 && requirements.teamSize >= 4) {
      cons.push('Limited role diversity may create bottlenecks');
    }
    
    const lowScorers = selectedTeam.filter(m => m.score < 70);
    if (lowScorers.length > 0) {
      cons.push(`${lowScorers.length} team member${lowScorers.length > 1 ? 's have' : ' has'} below-average match scores`);
    }
    
    // Ensure we have at least some feedback
    if (pros.length === 0) {
      pros.push('Team meets basic project requirements');
    }
    
    if (cons.length === 0) {
      cons.push('No significant concerns identified');
    }
    
    return {
      team: selectedTeam,
      totalScore,
      totalCost,
      coverageAnalysis: {
        technicalSkillsCoverage,
        softSkillsCoverage,
        roleDistribution: roleCount
      },
      pros,
      cons
    };
  };

  return {
    calculateMemberMatch,
    findBestTeam
  };
};


