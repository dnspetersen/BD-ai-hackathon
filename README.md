# BD-ai-hackathon
The 2025 BairesDev Hackathon - AI-powered team matching solution that helps recruiters and C-level executives find the best team members for projects based on skills, experience, and requirements.

## 🚀 Features

- **Intelligent Landing Page**: Explains the core concept and benefits for recruiters and C-level executives
- **Real-time AI Matching**: Get instant team recommendations as you adjust project requirements
- **Smart Analysis**: AI analyzes technical skills, soft skills, experience, education, and budget fit
- **Interactive UI**: Side-by-side view of requirements and results with auto-update option
- **Member Swapping**: Replace team members with alternatives and compare match scores in real-time
- **Save Results**: Save your favorite team recommendations for later review
- **Saved Results Library**: Browse, compare, and manage all your saved team recommendations
- **Team Browser**: Dedicated page to explore all available team members with advanced filters
- **Detailed Insights**: View match scores, skill coverage, role distribution, and AI reasoning for each recommendation

## 💼 Benefits

### For Recruiters
- 70% faster screening process
- Data-driven decisions with objective scoring
- Improved candidate quality
- Bias reduction in selection
- Real-time availability tracking

### For C-Level Executives
- Strategic resource allocation
- Cost efficiency and budget optimization
- Risk mitigation with validated skill coverage
- Competitive advantage through faster deployment
- Transparent reporting and analytics

## 📁 Project Structure

```
/pages
  - index.vue           # Landing page (explains concept & benefits)
  - find-team.vue       # Team matcher page (requirements + results)
  - team-members.vue    # Browse all team members with filters
  - saved-results.vue   # View and manage saved recommendations

/components
  - ProjectRequirementsForm.vue        # Form to input project needs
  - TeamRecommendationResults.vue      # Display AI results with swap & save
  - TeamMembersView.vue                # Grid view of team members

/server/api
  - match-team.post.ts  # AI matching API endpoint

/composables
  - useTeamMatcher.ts   # Team matching logic
  - useSampleData.ts    # Sample data for testing
  - useSavedResults.ts  # Saved results management
```

## 🎯 How It Works

1. **Learn About the Solution**: Visit the home page to understand how AI-powered matching benefits your organization
2. **Fill Project Requirements**: Enter project name, client name, description, required skills, budget, and team size
3. **Get AI Recommendations**: Click to get recommendations or enable auto-update for real-time results
4. **Review Matches**: See detailed match scores, coverage analysis, and AI reasoning for each recommendation
5. **Swap Members (Optional)**: Click "Change" on any team member to compare and swap with alternatives
6. **Save Results**: Save your best team recommendations for later review and comparison
7. **Manage Saved Results**: View all saved recommendations, expand details, and delete when no longer needed
8. **Export Results**: Download recommendations as JSON for further use

## Nuxt Application
This is a Nuxt 3 application with Tailwind CSS for styling and AI-powered matching capabilities.

### Setup
Install dependencies with your preferred package manager:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production
Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for more details.
