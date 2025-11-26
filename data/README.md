# Sample Data

This directory contains sample data for testing and demonstration purposes.

## Sample Saved Results

The `sampleSavedResults.ts` file contains 4 realistic project team recommendations:

### 1. E-Commerce Platform Redesign
- **Client:** RetailCo Inc.
- **Team Size:** 5 members
- **Budget:** $450K
- **Match Score:** 89.66%
- **Team:** Senior Full Stack Developer, Frontend Developer, Backend Developer, DevOps Engineer, UI/UX Designer

### 2. Healthcare Data Analytics Platform
- **Client:** MediTech Solutions
- **Team Size:** 4 members
- **Budget:** $380K
- **Match Score:** 90.98%
- **Team:** Data Scientist (PhD), Backend Developer, Data Engineer, Frontend Developer

### 3. Mobile Banking Application
- **Client:** FinanceFirst Bank
- **Team Size:** 4 members
- **Budget:** $350K
- **Match Score:** 91.5%
- **Team:** Senior Mobile Developer, Backend Developer, Mobile Developer, QA Engineer

### 4. AI-Powered Content Management System
- **Client:** ContentHub Media
- **Team Size:** 3 members
- **Budget:** $320K
- **Match Score:** 91.87%
- **Team:** Full Stack Developer, ML Engineer, Frontend Developer

## Usage

### Loading Sample Data (Development Only)

During development, you'll see a **Dev Tools** panel in the bottom-right corner of the screen. Use this panel to:

1. **Load Sample Data** - Populates localStorage with the sample saved results
2. **Clear Sample Data** - Removes all saved results from localStorage

### Programmatic Usage

You can also import and use the sample data directly:

```typescript
import { sampleSavedResults, loadSampleData, clearSampleData } from '~/data/sampleSavedResults';

// Load sample data into localStorage
loadSampleData();

// Clear sample data from localStorage
clearSampleData();

// Access the raw data
console.log(sampleSavedResults);
```

## Data Structure

Each saved result includes:

- **id**: Unique identifier
- **savedAt**: ISO timestamp
- **projectRequirements**: Full project details including required skills, budget, team size
- **recommendation**: Complete team recommendation with:
  - Individual team members with detailed profiles
  - Match scores and detailed breakdowns
  - AI reasoning for each selection
  - Coverage analysis (technical skills, soft skills, role distribution)
  - Total cost and overall score

## Development Notes

- The Dev Tools component only appears in development mode (`NODE_ENV === 'development'` or `localhost`)
- Sample data is stored in localStorage under the key: `ai-team-matcher-saved-results`
- Loading sample data will **replace** any existing saved results
- All sample data includes realistic:
  - Team member profiles with education, skills, and experience
  - Project requirements matching real-world scenarios
  - Match scores with detailed breakdowns
  - Coverage analysis showing skill fulfillment

## Adding New Samples

To add new sample data:

1. Follow the `SavedResult` interface structure from `composables/useSavedResults.ts`
2. Ensure all required fields are populated
3. Use realistic data that demonstrates the application's capabilities
4. Include varied project types and team compositions
5. Add the new sample to the `sampleSavedResults` array

