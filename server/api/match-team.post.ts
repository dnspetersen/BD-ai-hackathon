import type { ProjectRequirements, TeamMember, TeamRecommendation } from '../../types/index';
import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { requirements, teamMembers } = body as {
      requirements: ProjectRequirements;
      teamMembers: TeamMember[];
    };

    if (!requirements || !teamMembers) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing requirements or team members'
      });
    }

    // Import the matching logic (we'll use it server-side)
    const { useTeamMatcher } = await import('../../composables/useTeamMatcher');
    const { findBestTeam } = useTeamMatcher();

    const recommendation = findBestTeam(teamMembers, requirements);

    return {
      success: true,
      data: recommendation
    };
  } catch (error) {
    console.error('Error matching team:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to match team'
    });
  }
});


