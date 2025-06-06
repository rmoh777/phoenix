// Character counter
const userInput = document.getElementById('userInput');
const charCount = document.getElementById('charCount');

userInput.addEventListener('input', function() {
    charCount.textContent = this.value.length;
});

// Get recommendations from Gemini API
async function getRecommendations() {
    const userInputText = document.getElementById('userInput').value.trim();
    
    if (!userInputText) {
        alert('Please enter your mobile plan requirements.');
        return;
    }

    // Show loading state
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    try {
        // First API call - get plan recommendations
        const recommendationPrompt = `You are a mobile plan expert helping someone who might not be familiar with technical terms. Based on this request: "${userInputText}", recommend exactly 3 plan IDs from this list that best match the user's needs. Rank them as "Best", "Great", and "Good". Return ONLY the 3 plan IDs as comma-separated numbers with their rank (example: "1:Best,7:Great,12:Good"). Plans: ${JSON.stringify(MOBILE_PLANS)}`;

        const recommendationResponse = await callGeminiAPI(recommendationPrompt, 0.2, 100);
        
        // Parse the plan IDs and ranks
        const planMatches = recommendationResponse.trim().split(',').map(item => {
            const [id, rank] = item.split(':');
            return { id: parseInt(id.trim()), rank: rank.trim() };
        });

        // Get the actual plan data
        const recommendedPlans = planMatches.map(match => {
            const plan = MOBILE_PLANS.find(p => p.id === match.id);
            return { ...plan, rank: match.rank };
        });

        // Second API call - get explanations
        const explanationPrompt = `You are a friendly mobile plan expert explaining things to someone who might not be familiar with technical terms. 
Use simple, everyday language that a high school student would understand. 
For each of these plans, provide:
1. A brief explanation (1-2 sentences) of why this plan matches the user's needs
2. A short summary of why these 3 plans were selected overall

User's request: "${userInputText}"

Plans:
${recommendedPlans.map(plan => `
Plan ${plan.id} (${plan.rank}):
- Name: ${plan.name}
- Carrier: ${plan.carrier}
- Price: $${plan.price}/mo
- Data: ${plan.data}
- Features: ${plan.features.join(', ')}
- Hotspot: ${plan.hotspot}
`).join('\n')}

Format your response exactly like this:
PLAN_EXPLANATIONS:
${recommendedPlans.map(plan => `Plan ${plan.id}: [Your explanation here]`).join('\n')}

OVERALL_SUMMARY:
[Your summary here]`;

        const explanationResponse = await callGeminiAPI(explanationPrompt, 0.7, 500);
        
        // Parse the explanations
        const explanations = parseExplanations(explanationResponse);
        
        // Display results
        displayResults(recommendedPlans, explanations);
        
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error processing your request. Please try again.');
    } finally {
        // Hide loading state
        document.getElementById('loading').style.display = 'none';
        document.getElementById('questionSection').style.display = 'block';
    }
}

// Call the Gemini API through our serverless endpoint
async function callGeminiAPI(prompt, temperature = 0.7, maxOutputTokens = 500) {
    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                temperature,
                maxOutputTokens
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API returned status ${response.status}`);
        }

        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
}

function displayResults(plans, explanations) {
    // Hide loading
    document.getElementById('loading').style.display = 'none';

    // Create plan cards
    const plansGrid = document.getElementById('plansGrid');
    plansGrid.innerHTML = '';

    plans.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'plan-card';

        const rankClass = {
            'Best': 'rank-best',
            'Great': 'rank-great',
            'Good': 'rank-good'
        }[plan.rank] || 'rank-good';

        // Create features list
        const featuresList = plan.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Add additional features if it's a lifeline plan
        const additionalFeaturesList = plan.isLifeline && plan.additionalFeatures.length > 0 
            ? `<div class="lifeline-features">
                <h4>Additional Benefits:</h4>
                <ul>${plan.additionalFeatures.map(feature => `<li>${feature}</li>`).join('')}</ul>
               </div>`
            : '';

        // Add coverage area if it's a lifeline plan
        const coverageArea = plan.isLifeline 
            ? `<div class="coverage-area">
                <h4>Coverage Area:</h4>
                <p>${plan.coverageArea}</p>
               </div>`
            : '';

        card.innerHTML = `
            <div class="plan-rank ${rankClass}">${plan.rank}</div>
            <div class="plan-carrier">${plan.carrier}</div>
            <div class="plan-name">${plan.name}</div>
            <div class="plan-price">$${plan.price}<span style="font-size: 0.875rem; font-weight: 400;">/mo</span></div>
            <ul class="plan-features">
                ${featuresList}
                ${plan.hotspot !== 'No' && plan.hotspot !== 'Not specified' && plan.hotspot !== 'Not available' ? `<li>${plan.hotspot} hotspot</li>` : ''}
            </ul>
            ${additionalFeaturesList}
            ${coverageArea}
            <div class="plan-explanation">
                ${explanations[plan.id] || 'This plan offers great value for your needs.'}
            </div>
            <a href="${plan.signupUrl}" target="_blank" class="plan-details-btn">Full Plan Details</a>
        `;

        plansGrid.appendChild(card);
    });

    // Show results
    document.getElementById('resultsSection').style.display = 'block';
}

function startOver() {
    location.reload();
} 