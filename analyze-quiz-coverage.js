// Quiz Coverage Analysis Script
// This script tests different quiz response combinations to see which tools get recommended

const toolsDatabase = require('./src/utils/toolsDatabase.js');

// Simplified version of the scoring logic from PersonalityQuiz.js
// You'll need to update this if the scoring logic changes significantly

const branchingQuestions = {
	Visualis: [
		{ name: "Diagramming Druid", scores: { "strengths-diagramming": 5, "category-visualization & design": 2 } },
		{ name: "Nebula Neko", scores: { "creative-expresser": 2, "artistic": 2, "ai-enthusiast": 3, "strengths-image-generation": 4, "category-image generation": 4 } },
		{ name: "Video Vampire", scores: { "story-teller": 3, "supportType-video": 5, "video-output": 5, "video-creator": 4, "strengths-video-generation": 5, "category-video generation & editing": 5, "strengths-animation": 3 } },
		{ name: "Collagist Chimera", scores: { "strengths-infographics": 5, "category-visualization & design": 2 } }
	],
	Textara: [
		{ name: "Paper Phoenix", scores: { "professional-writer": 3, "strengths-technical-writing": 3, "category-writing & text generation": 3, "academic-researcher": 2 } },
		{ name: "Story Seiryū", scores: { "story-teller": 3, "artistic": 1, "strengths-creative-writing": 4, "category-writing & text generation": 3 } },
		{ name: "Grammar Gremlin", scores: { "detail-oriented": 1, "documentation-focused": 2, "perfectionist": 1, "professional-writer": 2, "strengths-proofreading": 5, "category-writing & text generation": 3 } },
		{ name: "Inspiration Imp", scores: { "brainstormer": 3, "strengths-idea-generation": 3, "category-writing & text generation": 3 } },
		{ name: "Paraphrase Pixie", scores: { "strengths-summarization": 4, "category-writing & text generation": 3, "ai-enthusiast": 1 } }
	],
	Codion: [
		{ name: "Debugging Druid", scores: { "code-curious": 4, "strengths-debugging": 5, "supportType-coding": 4 } },
		{ name: "App Angel", scores: { "ai-enthusiast": 1, "strengths-no-code": 3, "category-web & app builders": 3, "strengths-mobile-app": 4, "developer": 2, "prompt-based-user": 1 } },
		{ name: "Web Weaver", scores: { "strengths-website-building": 4, "strengths-interactive": 1, "category-web & app builders": 3, "developer": 1 } },
		{ name: "Experience Elemental", scores: { "ai-enthusiast": 2, "game-developer": 4, "strengths-no-code": 4, "category-web & app builders": 2, "strengths-interactive": 2, "prompt-based-user": 4 } }
	],
	Audiona: [
		{ name: "Speech Sprite", scores: { "strengths-speech-tools": 5, "category-speech & voice interaction": 3, "supportType-audio": 5 } },
		{ name: "Voiceover Veery", scores: { "story-teller": 3, "presentation-focused": 2, "strengths-voiceover": 5, "category-speech & voice interaction": 3 } },
		{ name: "Melody Mermaid", scores: { "music-lover": 4, "strengths-music-creation": 5, "category-audio & music generation": 3 } },
		{ name: "Podcast Pulsar", scores: { "podcaster": 4, "content-creator": 3, "strengths-audio-editing": 5, "category-audio & music generation": 3 } }
	],
	Dataralis: [
		{ name: "Stat Starling", scores: { "data-focused": 1, "research-oriented": 1, "academic-researcher": 1, "strengths-statistics": 4, "category-research, knowledge, & learning platforms": 2, "strengths-good-at-analysis": 4 } },
		{ name: "Chart Chameleon", scores: { "visual-learner": 3, "data-focused": 2, "strengths-data-visualization": 4, "category-visualization & design": 3, "supportType-visual": 5 } },
		{ name: "Synthesis Starfish", scores: { "strengths-synthesis": 5, "story-teller": 5, "interactive": 5 } },
		{ name: "Map Marmot", scores: { "spatial-thinker": 3, "data-focused": 1, "strengths-mapping": 5, "strengths-data-visualization": 2 } }
	],
	Presentira: [
		{ name: "Slide Seraph", scores: { "strengths-slides": 1, "category-visualization & design": 3 } },
		{ name: "Frame Firefly", scores: { "supportType-video": 5, "video-output": 5, "category-video generation & editing": 5, "content-creator": 3, "video-creator": 4, "strengths-video-generation": 5, "ai-enthusiast": 2 } },
		{ name: "Poll Pegasus", scores: { "educator": 4, "strengths-interactive": 3, "engagement-focused": 3, "category-research, knowledge, & learning platforms": 5, "supportType-research": 2 } },
		{ name: "Infographic Imp", scores: { "strengths-infographics": 3, "category-visualization & design": 3 } }
	],
	Dimensio: [
		{ name: "Render Raccoon", scores: { "3d-artist": 4, "technical-learner": 1, "strengths-3d-modeling": 3, "category-3d modeling, spatial design, & video games": 3 } },
		{ name: "Generative Griffin", scores: { "ai-enthusiast": 3, "quick-starter": 1, "prompt-based-user": 4, "category-3d modeling, spatial design, & video games": 3, "rapid-prototyper": 1 } },
		{ name: "Pixel Pegasus", scores: { "game-developer": 4, "strengths-game-design": 4, "category-3d modeling, spatial design, & video games": 3, "technical-learner": 1 } },
		{ name: "Spatial Salamander", scores: { "strengths-architecture": 5, "architect": 5, "category-3d modeling, spatial design, & video games": 3, "real-estate-focused": 5, "strengths-Real-time rendering": 5, "simulations": 3 } }
	],
	Researa: [
		{ name: "Note Nebula", scores: { "knowledge-manager": 4, "strengths-note-taking": 3, "strengths-planning": 2, "category-research, knowledge, & learning platforms": 3 } },
		{ name: "Abstract Axolotl", scores: { "strengths-summarization": 4, "category-research, knowledge, & learning platforms": 3, "ai-enthusiast": 1, "strengths-synthesis": 4 } },
		{ name: "Focus Firefly", scores: { "productivity-focused": 2, "strengths-motivation": 4, "strengths-planning": 2, "category-research, knowledge, & learning platforms": 2 } },
		{ name: "Collaboration Kitsune", scores: { "collaborative-worker": 5, "strengths-collaboration": 5, "strengths-community": 3, "strengths-real-time-collaboration": 5 } }
	]
};

// Q1 options (planets)
const q1Options = [
	{ name: "Visualis", scores: { "visual-output": 4, "supportType-visual": 4 } },
	{ name: "Textara", scores: { "text-output": 4, "supportType-text": 4 } },
	{ name: "Codion", scores: { "coding-output": 4, "supportType-coding": 4 } },
	{ name: "Audiona", scores: { "audio-output": 4, "supportType-audio": 4 } },
	{ name: "Dataralis", scores: { "data-output": 4, "supportType-data": 4 } },
	{ name: "Presentira", scores: { "presentation-output": 4, "supportType-visual": 4 } },
	{ name: "Dimensio", scores: { "3d-output": 4, "supportType-3d": 4 } },
	{ name: "Researa", scores: { "research-output": 4, "supportType-research": 4 } }
];

// Other question options (simplified - just key variations)
const otherQuestions = {
	colorPreference: [
		{ name: "vibrant", scores: { "artistic": 2, "creative-expresser": 2 } },
		{ name: "clean", scores: { "professional-user": 1, "perfectionist": 1 } }
	],
	collaboration: [
		{ name: "solo", scores: { "solo-worker": 4, "independent-creator": 3 } },
		{ name: "team", scores: { "collaborative-worker": 4, "team-player": 3 } }
	],
	learning: [
		{ name: "dive-in", scores: { "quick-starter": 2, "experimental": 3 } },
		{ name: "manual", scores: { "systematic-builder": 1, "patient-learner": 3, "technical-learner": 3 } }
	],
	budget: [
		{ name: "free", scores: { "price-free": 4, "freeTierAccess-robust": 4 } },
		{ name: "paid", scores: { "price-paid": 4, "professional-user": 1 } }
	],
	aiPreference: [
		{ name: "ai-only", scores: { "ai-only": 4, "ai-enthusiast": 3 } },
		{ name: "manual", scores: { "manual-only": 4, "manual-preference": 1 } }
	],
	timePressure: [
		{ name: "fast", scores: { "timePressure-low": 3, "quick-starter": 1 } },
		{ name: "quality", scores: { "timePressure-high": 3, "perfectionist": 2 } }
	],
	motivation: [
		{ name: "perfection", scores: { "perfectionist": 3, "artistic": 2 } },
		{ name: "efficiency", scores: { "productivity-focused": 2, "efficiency-focused": 2 } }
	]
};

console.log("Starting Quiz Coverage Analysis...\n");
console.log("=" .repeat(80));

// Track tool recommendation frequency
const toolRecommendationCount = {};
const toolTopRecommendation = {};
const scenarioResults = [];

// Initialize counts
toolsDatabase.forEach(tool => {
	toolRecommendationCount[tool.name] = 0;
	toolTopRecommendation[tool.name] = 0;
});

// Test key scenarios (not exhaustive, but representative)
let scenarioCount = 0;

q1Options.forEach(q1 => {
	const branchOptions = branchingQuestions[q1.name];
	if (!branchOptions) return;

	branchOptions.forEach(q2 => {
		// Test a few key combinations for each Q1/Q2 pair
		const testCombos = [
			{ collab: "solo", learning: "dive-in", budget: "free", ai: "ai-only", time: "fast", motivation: "efficiency" },
			{ collab: "team", learning: "manual", budget: "paid", ai: "manual", time: "quality", motivation: "perfection" },
			{ collab: "solo", learning: "manual", budget: "free", ai: "manual", time: "fast", motivation: "efficiency" }
		];

		testCombos.forEach(combo => {
			scenarioCount++;

			// Build user scores
			const userScores = { ...q1.scores, ...q2.scores };
			Object.keys(combo).forEach(key => {
				const option = otherQuestions[key === 'collab' ? 'collaboration' : key === 'ai' ? 'aiPreference' : key].find(o => o.name === combo[key]);
				Object.assign(userScores, option.scores);
			});

			// Run simplified scoring (you may need to copy more logic from PersonalityQuiz.js)
			const results = scoreTools(userScores, q1.name);

			// Track results
			scenarioResults.push({
				scenario: `${q1.name} → ${q2.name}`,
				combo: combo,
				topTools: results.slice(0, 5).map(r => ({ name: r.name, percentage: r.percentage }))
			});

			results.slice(0, 5).forEach((tool, index) => {
				toolRecommendationCount[tool.name]++;
				if (index === 0) toolTopRecommendation[tool.name]++;
			});
		});
	});
});

console.log(`\nTested ${scenarioCount} different quiz scenarios\n`);
console.log("=" .repeat(80));

// Analyze results
console.log("\n📊 TOOL RECOMMENDATION FREQUENCY");
console.log("=" .repeat(80));

const sortedByFrequency = Object.entries(toolRecommendationCount)
	.sort(([,a], [,b]) => b - a);

console.log("\n🔥 Most Recommended Tools (Top 20):");
sortedByFrequency.slice(0, 20).forEach(([tool, count], index) => {
	const topCount = toolTopRecommendation[tool];
	console.log(`${(index + 1).toString().padStart(2)}. ${tool.padEnd(30)} - Appeared ${count.toString().padStart(3)}x in top 5 (${topCount}x as #1)`);
});

console.log("\n❄️  Least Recommended Tools (Bottom 20):");
sortedByFrequency.slice(-20).reverse().forEach(([tool, count], index) => {
	const topCount = toolTopRecommendation[tool];
	console.log(`${(index + 1).toString().padStart(2)}. ${tool.padEnd(30)} - Appeared ${count.toString().padStart(3)}x in top 5 (${topCount}x as #1)`);
});

console.log("\n⚠️  NEVER RECOMMENDED TOOLS:");
const neverRecommended = sortedByFrequency.filter(([, count]) => count === 0);
if (neverRecommended.length === 0) {
	console.log("✅ All tools appear in at least one scenario!");
} else {
	neverRecommended.forEach(([tool]) => {
		const toolData = toolsDatabase.find(t => t.name === tool);
		console.log(`  - ${tool}`);
		console.log(`    Category: ${toolData.category}`);
		console.log(`    Personas: ${toolData.personaTypeMatch.join(', ')}`);
		console.log(`    Support Type: ${Array.isArray(toolData.supportType) ? toolData.supportType.join(', ') : toolData.supportType}`);
	});
}

console.log("\n" + "=".repeat(80));
console.log("📈 SAMPLE SCENARIOS WITH RESULTS");
console.log("=" .repeat(80));

// Show a few interesting scenarios
const interestingScenarios = [
	scenarioResults.find(s => s.scenario.includes("Spatial Salamander")),
	scenarioResults.find(s => s.scenario.includes("Synthesis Starfish")),
	scenarioResults.find(s => s.scenario.includes("Video Vampire")),
	scenarioResults.find(s => s.scenario.includes("Debugging Druid")),
	scenarioResults.find(s => s.scenario.includes("Note Nebula"))
].filter(Boolean);

interestingScenarios.forEach(scenario => {
	console.log(`\n${scenario.scenario}`);
	console.log(`Preferences: ${JSON.stringify(scenario.combo)}`);
	console.log("Top 5 Tools:");
	scenario.topTools.forEach((tool, i) => {
		console.log(`  ${i + 1}. ${tool.name.padEnd(30)} ${tool.percentage}%`);
	});
});

console.log("\n" + "=".repeat(80));
console.log("Analysis complete!");

// Helper function: Simplified scoring (based on PersonalityQuiz.js logic)
function scoreTools(userScores, planetName) {
	// Extract support types for filtering
	const mainSupportTypes = [];
	Object.keys(userScores).forEach(key => {
		if (key.startsWith('supportType-')) {
			mainSupportTypes.push(key.replace('supportType-', ''));
		}
	});

	// Filter tools by support type
	const filteredTools = toolsDatabase.filter(tool => {
		const supportTypeMatch = Array.isArray(tool.supportType)
			? tool.supportType.some(st => mainSupportTypes.includes(st))
			: mainSupportTypes.includes(tool.supportType);
		return supportTypeMatch;
	});

	// Score each tool (simplified version)
	const toolScores = filteredTools.map(tool => {
		let score = 0;
		let maxPossibleScore = 0;

		// Category match (4x weight)
		const userCategories = Object.keys(userScores).filter(key => key.startsWith('category-'));
		if (userCategories.length > 0) {
			const maxCategoryScore = Math.max(...userCategories.map(cat => userScores[cat] || 0));
			maxPossibleScore += maxCategoryScore * 4;
			if (userScores[`category-${tool.category}`]) {
				score += userScores[`category-${tool.category}`] * 4;
			}
		}

		// Persona match (5x for Q2 personas, 2x for others)
		const q2Personas = [
			'story-teller', 'interactive', 'data-focused', 'visual-learner',
			'knowledge-manager', 'research-oriented', 'academic-researcher',
			'content-creator', 'artistic', 'creative-expresser', 'ai-enthusiast',
			'3d-artist', 'game-developer', 'architect', 'spatial-thinker',
			'podcaster', 'music-lover', 'educator', 'collaborative-worker',
			'productivity-focused', 'video-creator', 'prompt-based-user',
			'professional-writer', 'detail-oriented', 'documentation-focused',
			'perfectionist', 'brainstormer', 'code-curious', 'developer',
			'presentation-focused', 'engagement-focused', 'technical-learner',
			'quick-starter', 'rapid-prototyper', 'real-estate-focused', 'simulations'
		];

		tool.personaTypeMatch.forEach(persona => {
			if (userScores[persona]) {
				const weight = q2Personas.includes(persona) ? 5 : 2;
				maxPossibleScore += userScores[persona] * weight;
				score += userScores[persona] * weight;
			}
		});

		// AI dependency match (4x weight)
		if (userScores[tool.aiDependency]) {
			maxPossibleScore += userScores[tool.aiDependency] * 4;
			score += userScores[tool.aiDependency] * 4;
		}

		// Price preference (3x weight)
		if (userScores['price-free'] && tool.price === 'free') {
			maxPossibleScore += userScores['price-free'] * 3;
			score += userScores['price-free'] * 3;
		}

		// Strengths matching (5x for Q2 strengths, 2x for others)
		Object.keys(userScores).forEach(key => {
			if (key.startsWith('strengths-')) {
				const strengthName = key.replace('strengths-', '');
				const hasStrength = tool.strengths && tool.strengths.some(s =>
					s.toLowerCase().includes(strengthName.replace(/-/g, ' '))
				);
				if (hasStrength) {
					const weight = 5; // Simplified - assume all are Q2 strengths
					maxPossibleScore += userScores[key] * weight;
					score += userScores[key] * weight;
				}
			}
		});

		const percentage = maxPossibleScore > 0 ? Math.round((score / maxPossibleScore) * 100) : 0;

		return {
			name: tool.name,
			score,
			maxPossibleScore,
			percentage
		};
	});

	// Sort by score
	return toolScores.sort((a, b) => b.score - a.score);
}
