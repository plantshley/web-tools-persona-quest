import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Star, ExternalLink } from 'lucide-react';
import AiButton from './animata/button/ai-button.tsx';
import OrbitingItems from './animata/list/orbiting-items.jsx';
import AnimatedBeam from './animata/background/animated-beam.jsx';
import WaveReveal from './animata/text/wave-reveal.tsx';
import BlurryBlob from './animata/background/blurry-blob.tsx';
import { toolsDatabase } from '../utils/toolsDatabase.js';
import { trackQuizEvent } from '../utils/analytics';
import greetingIcon from '../assets/images/icons/greeting.png';
import butterflyIcon from '../assets/images/icons/butterfly.png';
import lambIcon from '../assets/images/icons/lamb.png';
import slugIcon from '../assets/images/icons/slug.png';
import nekoIcon from '../assets/images/icons/neko.png';
import mothIcon from '../assets/images/icons/moth.png';
import waterbearIcon from '../assets/images/icons/waterbear.png';
import crowIcon from '../assets/images/icons/crow.png';
import starsIcon from '../assets/images/icons/stars.png';
import moonIcon from '../assets/images/icons/moon.png';
import starFaceIcon from '../assets/images/icons/star face.png';
import rainbowIcon from '../assets/images/icons/rainbow.png';
import sparkIcon from '../assets/images/icons/spark.png';
import questionIcon from '../assets/images/icons/question.png';
import richIcon from '../assets/images/icons/rich.png';
import curiousIcon from '../assets/images/icons/curious.png';
import hurryIcon from '../assets/images/icons/hurry.png';
import confettiIcon from '../assets/images/icons/confetti_4525688.png';
import celebrateIcon from '../assets/images/icons/celebrate.png';
import bdayPartyIcon from '../assets/images/icons/bday party.png';
import shootingStarIcon from '../assets/images/icons/shooting star.png';
import visualisIcon from '../assets/images/icons/visualis.png';
import textaraIcon from '../assets/images/icons/textara.png';
import codionIcon from '../assets/images/icons/codion.png';
import audioniaIcon from '../assets/images/icons/audionia.png';
import dataralisIcon from '../assets/images/icons/dataralis.png';
import presentiraIcon from '../assets/images/icons/presentira.png';
import dimensioIcon from '../assets/images/icons/dimensio.png';
import researaIcon from '../assets/images/icons/researa.png';
import fireworks2Icon from '../assets/images/icons/fireworks2.png';
import orbitIcon from '../assets/images/icons/orbit.png';
import multiStarsGif from '../assets/images/multi stars.gif';

// Ring Chart Component based on animata.design
const RingChart = ({ percentage, delay = 0 }) => {
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShouldAnimate(true);
		}, delay);
		return () => clearTimeout(timeout);
	}, [delay]);

	const size = 128;
	const strokeWidth = 12;
	const radius = (size / 2) - (strokeWidth / 2);
	const circumference = Math.PI * radius * 2;
	const offset = shouldAnimate
		? circumference * ((100 - percentage) / 100)
		: circumference;

	return (
		<div className="relative w-32 h-32">
			<svg className="transform -rotate-90 w-32 h-32">
				{/* Background circle */}
				<circle
					cx="64"
					cy="64"
					r={radius}
					stroke="rgba(255,255,255,0.2)"
					strokeWidth={strokeWidth}
					fill="none"
				/>
				{/* Progress circle with rainbow gradient */}
				<circle
					cx="64"
					cy="64"
					r={radius}
					stroke="url(#rainbow-gradient)"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={`${circumference}px`}
					strokeDashoffset={`${offset}px`}
					strokeLinecap="round"
					style={{
						transition: 'stroke-dashoffset 1.5s ease-out'
					}}
				/>
				{/* Rainbow gradient definition */}
				<defs>
					<linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#ff3399">
							<animate attributeName="stop-color" values="#ff3399;#ff9933;#ffdd00;#00d4ff;#5599ff;#aa66ff;#ff3399" dur="5s" repeatCount="indefinite" />
						</stop>
						<stop offset="33%" stopColor="#ff9933">
							<animate attributeName="stop-color" values="#ff9933;#ffdd00;#00d4ff;#5599ff;#aa66ff;#ff3399;#ff9933" dur="5s" repeatCount="indefinite" />
						</stop>
						<stop offset="66%" stopColor="#00d4ff">
							<animate attributeName="stop-color" values="#00d4ff;#5599ff;#aa66ff;#ff3399;#ff9933;#ffdd00;#00d4ff" dur="5s" repeatCount="indefinite" />
						</stop>
						<stop offset="100%" stopColor="#aa66ff">
							<animate attributeName="stop-color" values="#aa66ff;#ff3399;#ff9933;#ffdd00;#00d4ff;#5599ff;#aa66ff" dur="5s" repeatCount="indefinite" />
						</stop>
					</linearGradient>
				</defs>
			</svg>
			{/* Percentage text in center */}
			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-3xl font-bold text-white font-share-tech">{percentage}%</span>
			</div>
		</div>
	);
};

// Add Space Grotesk font
const fontUrl = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
if (typeof document !== 'undefined' && !document.getElementById('space-grotesk-font')) {
	const link = document.createElement('link');
	link.id = 'space-grotesk-font';
	link.rel = 'stylesheet';
	link.href = fontUrl;
	document.head.appendChild(link);
}

// Canonical strengths for matching
export const canonicalStrengths = [
	"diagramming",
	"image-generation",
	"video-generation",
	"infographics",
	"technical-writing",
	"creative-writing",
	"proofreading",
	"idea-generation",
	"summarization",
	"debugging",
	"no-code",
	"website-building",
	"automation",
	"speech-tools",
	"voiceover",
	"music-creation",
	"audio-editing",
	"statistics",
	"data-visualization",
	"synthesis",
	"slides",
	"interactive",
	"3d-modeling",
	"prompt-based-3d",
	"game-design",
	"architecture",
	"rendering",
	"simulations",
	"animation",
	"note-taking",
	"motivation",
	"collaboration",
	"templates",
	"real-time-collaboration",
	"easy-templates",
	"beautiful-visualizations",
	"good-at-analysis",
	"long-context",
	"collaborative",
	"community",
	"mapping",
	"clean ui"
];

// Enhanced mapping for strengths synonyms (expanded and improved)
export const strengthSynonyms = {
	"diagramming": ["diagram", "flowchart", "wireframe", "mind map", "visual planning", "schematic", "blueprint"],
	"image-generation": ["image generation", "art", "graphics", "concept art", "photo", "picture", "visual", "illustration", "artwork", "design", "ai art"],
	"video-generation": ["video generation", "video editing", "video", "animation", "avatar video", "text-to-video", "video creation", "film", "movie", "clip"],
	"infographics": ["infographic", "visual report", "charts and maps", "visual storytelling", "poster", "visual summary"],
	"technical-writing": ["technical writing", "documentation", "manual", "process docs", "technical docs", "guide", "instructions", "how-to"],
	"creative-writing": ["creative writing", "story", "fiction", "character building", "narrative", "script", "content creation", "copywriting"],
	"proofreading": ["proofreading", "grammar", "style correction", "writing insights", "editing", "spell check", "language correction"],
	"idea-generation": ["idea generation", "brainstorm", "concept development", "ideation", "creativity", "innovation", "inspiration"],
	"summarization": ["summarization", "summary", "paraphrase", "key insights", "condensing", "abstract", "digest", "overview"],
	"debugging": ["debugging", "bug", "error", "correction", "troubleshooting", "fixing", "code review", "testing"],
	"no-code": ["no-code", "no code", "low-code", "drag & drop", "visual builder", "point and click", "codeless", "visual development"],
	"website-building": ["website building", "web builder", "site builder", "landing page", "web development", "website creation", "web design"],
	"automation": ["automation", "automate", "workflow", "formula system", "scripting", "batch processing", "task automation"],
	"speech-tools": ["speech", "text-to-speech", "speech-to-text", "voice", "audio transcription", "dictation", "voice recognition"],
	"voiceover": ["voiceover", "narration", "voice cloning", "overdub", "voice acting", "audio narration", "speaking"],
	"music-creation": ["music creation", "compose", "background music", "song", "audio generation", "soundtrack", "melody", "beat"],
	"audio-editing": ["audio editing", "audio", "sound", "noise suppression", "audio enhancement", "sound editing", "audio processing"],
	"statistics": ["statistics", "statistical", "data analysis", "analytics", "metrics", "reporting", "insights", "data science"],
	"data-visualization": ["data visualization", "dashboard", "chart", "mapping", "visualization", "graphs", "plots", "visual data"],
	"synthesis": ["synthesis", "synthesizer", "distill", "insight", "combining", "merging", "analysis", "interpretation"],
	"slides": ["slides", "slide deck", "presentation", "slideshow", "powerpoint", "keynote", "deck"],
	"interactive": ["interactive", "poll", "quiz", "engagement", "participatory", "dynamic", "responsive", "engaging", "interaction"],
	"3d-modeling": ["3d modeling", "3d model", "mesh", "3d design", "3d creation", "modeling", "sculpting", "3d art", "textures"],
	"prompt-based-3d": ["prompt-based 3d", "text to 3d", "ai-assisted 3d", "ai 3d", "generative 3d"],
	"game-design": ["game design", "game asset", "gaming", "interactive design", "game creation"],
	"architecture": ["architecture", "building design", "spatial design", "architectural", "construction", "blueprint"],
	"rendering": ["rendering", "render", "visualization", "photorealistic", "ray tracing", "materials", "lighting"],
	"simulations": ["simulation", "simulations", "physics", "interactive simulation", "virtual environment"],
	"animation": ["animation", "animator", "motion", "animated", "movement", "keyframe", "tween"],
	"note-taking": ["note taking", "notes", "knowledge base", "documentation", "organizing", "knowledge management"],
	"motivation": ["motivation", "reminder", "goal tracking", "productivity", "habit", "tracking", "accountability"],
	"collaboration": ["collaboration", "teamwork", "collaborative", "group", "sharing", "cooperative", "joint work"],
	"templates": ["template", "templates", "starter", "preset", "framework", "boilerplate", "format"],
	"real-time-collaboration": ["real-time collaboration", "live collaboration", "simultaneous editing", "concurrent", "live editing"],
	"easy-templates": ["easy templates", "simple templates", "quick start", "ready-made", "pre-built"],
	"beautiful-visualizations": ["beautiful visualizations", "attractive charts", "stunning visuals", "polished", "professional", "elegant"],
	"good-at-analysis": ["good at analysis", "analysis", "analytical", "insight", "deep analysis", "thorough"],
	"long-context": ["long context", "context window", "large input", "extensive", "comprehensive", "detailed"],
	"collaborative": ["collaborative", "collaboration", "teamwork", "shared", "group work", "cooperative"],
	"community": ["community", "forums", "user groups", "social", "networking", "peer support", "sharer"],
	"fast-development": ["fast development", "quick", "rapid", "speedy", "efficient", "fast"],
	"mobile-app": ["mobile app", "mobile", "smartphone", "tablet", "ios", "android"],
	"mapping": ["mapping", "maps", "geographic", "spatial", "location", "gis", "powerful mapping"],
	"clean-ui": ["clean ui", "clean interface", "simple design", "minimalist", "uncluttered", "user-friendly"]
};

// Branching options for Question 2 based on planet (support type)
const branchingQuestions = {
	Visualis: [
		{
			text: "The Diagramming Druid, who sketches dazzling diagrams and flowcharts in the stardust.",
			scores: {
				"strengths-diagramming": 5,
				"category-visualization & design": 2
			}
		},
		{
			text: "The Nebula Neko, who conjures magical images and art from swirling clouds.",
			scores: {
				"creative-expresser": 2,
				"artistic": 2,
				"ai-enthusiast": 5,
				"strengths-image-generation": 5,
				"category-image generation": 10,
			}
		},
		{
			text: "The Video Vampire, who animates from galaxies and crafts stellar videos.",
			scores: {
				"story-teller": 3,
				"supportType-video": 5,
				"video-output": 5,
				"video-creator": 4,
				"content-creator": 3,
				"strengths-video-generation": 5,
				"category-video generation & editing": 5,
			
			
			}
		},
		{
			text: "The Collagist Chimera, who assembles posters, infographics, and mood boards from star fragments.",
			scores: {
				"strengths-infographics": 5,
				"category-visualization & design": 2,
			}
		}
	],
	Textara: [
		{
			text: "The Paper Phoenix, who drafts technical papers and research reports with fiery precision.",
			scores: {
				"professional-writer": 3,
				"strengths-technical-writing": 3,
				"category-writing & text generation": 3,
				"academic-researcher": 3,
				"category-research, knowledge, & learning platforms": 2,
			}
		},
		{
			text: "The Story Seiryū, who weaves tales, poems, and scripts across the cosmos.",
			scores: {
				"story-teller": 3,
				"artistic": 1,
				"strengths-creative-writing": 5,
				"category-writing & text generation": 3,
			}
		},
		{
			text: "The Grammar Gremlin, who polishes grammar, style, and clarity with a twinkle.",
			scores: {
				"perfectionist": 5,
				"professional-writer": 2,
				"strengths-proofreading": 5,
				"category-writing & text generation": 3,
				"editor-focused": 5
			}
		},
		{
			text: "The Inspiration Imp, who sparks ideas, outlines, and cosmic templates.",
			scores: {
				"brainstormer": 4,
				"strengths-idea-generation": 5,
				"category-writing & text generation": 3
			}
		},
		{
			text: "The Paraphrase Pixie, who summarizes and rephrases stardust into clarity.",
			scores: {
				"strengths-summarization": 4,
				"category-writing & text generation": 3,
				"ai-enthusiast": 1, 
				"supportType-text": 5
			}
		}
	],
	Codion: [
		{
			text: "The Debugging Druid, who poofs bugs and writes code at light speed.",
			scores: {
				"code-curious": 4,
				"strengths-debugging": 5,
				"supportType-coding": 4,
				"developer": 3
			}
		},
		{
			text: "The App Angel, who assembles cosmic apps with no-code or low-code magic.",
			scores: {
				"ai-enthusiast": 1,
				"strengths-no-code": 3,
				"category-web & app builders": 3,
				"strengths-mobile-app": 4,
				"developer": 1,
				"prompt-based-user": 1 
			}
		},
		{
			text: "The Web Weaver, who spins interactive websites and landing pages from cosmic silk.",
			scores: {
				"strengths-website-building": 4,
				"strengths-interactive": 1,
				"category-web & app builders": 3,
				"developer": 2
			}
		},
		{
			text: "The Experience Elemental, who summons interactive adventures without a single line of code.",
			scores: {
				"ai-enthusiast": 2,
				"strengths-no-code": 4,
				"category-web & app builders": 2,
				"strengths-interactive": 2,
				"prompt-based-user": 4
			}
		}
	],
	Audiona: [
		{
			text: "The Speech Sprite, who transforms text to speech and speech to text with a cosmic accent.",
			scores: {
				"strengths-speech-tools": 5,
				"category-speech & voice interaction": 1,
				"supportType-audio": 1, 
				"strengths-TTS": 2,
				"strengths-STT": 2

			}
		},
		{
			text: "The Voiceover Veery, who narrates presentations and videos with stellar flair.",
			scores: {
				"story-teller": 3,
				"presentation-focused": 2,
				"strengths-voiceover": 5,
				"category-speech & voice interaction": 3,
			}
		},
		{
			text: "The Melody Mermaid, who composes and mixes music among a sea of stars.",
			scores: {
				"music-lover": 5,
				"strengths-music-creation": 5,
				"category-audio & music generation": 3,
			}
		},
		{
			text: "The Podcast Pulsar, who edits and produces cosmic podcasts.",
			scores: {
				"podcaster": 4,
				"content-creator": 3,
				"strengths-audio-editing": 5,
				"category-audio & music generation": 3,
			}
		}
	],
	Dataralis: [
		{
			text: "The Stat Starling, who analyzes data and calculates cosmic statistics.",
			scores: {
				"data-focused": 1,
				"research-focused": 1,
				"academic-researcher": 1,
				"strengths-statistics": 4,
				"category-research, knowledge, & learning platforms": 2,
				"strengths-good-at-analysis": 4

			}
		},
		{
			text: "The Chart Chameleon, who visualizes data in radiant charts and dashboards.",
			scores: {
				"visual-learner": 3,
				"data-focused": 4,
				"strengths-data-visualization": 4,
				"category-visualization & design": 3,
				//"supportType-visual": 5
			}
		},
		{
			text: "The Synthesis Starfish, who distills information into clear, actionable insights.",
			scores: {
				"strengths-synthesis": 5,
				"strengths-summarization": 3,
				"story-teller": 5, 
				"interactive": 5,
				"category-visualization & design": 1,
				"strengths-data-visualization": 1
			}
		},
		{
			text: "The Map Marmot, who explores geospatial data and cosmic maps.",
			scores: {
				"spatial-thinker": 3,
				"data-focused": 1,
				"strengths-mapping": 5,
				"strengths-data-visualization": 2,
			}
		}
	],
	Presentira: [
		{
			text: "The Slide Seraph, who crafts dazzling slide decks and visual stories for intergalactic audiences.",
			scores: {
				"strengths-slides": 5,
				"supportType-visual": 1,
				//"category-visualization & design": 3,
			}
		},
		{
			text: "The Frame Firefly, who lights up the galaxy with video presentations that swirl through the stars.",
			scores: {
				"supportType-video": 5,
				"video-output": 5,
				"category-video generation & editing": 5,
				"content-creator": 3,
				"video-creator": 4,
				"strengths-video-generation": 5,
			}
		},
		{
			text: "The Poll Pegasus, who builds interactive lessons and presentations with polls and quizzes.",
			scores: {
				"educator": 4,
				"strengths-interactive": 3,
				"engagement-focused": 3,
				"category-research, knowledge, & learning platforms": 5,
				"supportType-research": 2
			}
		},
		{
			text: "The Infographic Imp, who designs posters and infographics to broadcast ideas.",
			scores: {
				"strengths-infographics": 5,
				"category-visualization & design": 3
				
			}
		}
	],
	Dimensio: [
		{
			text: "The Render Raccoon, who sculpts 3D models and cosmic CAD creations.",
			scores: {
				"3d-artist": 4,
				"technical-learner": 1,
				"strengths-3d-modeling": 3,
				"category-3D modeling, spatial design, & video games": 3,
				"patient-learner": 2
			}
		},
		{
			text: "The Generative Griffin, who conjures 3D models from text or image prompts.",
			scores: {
				"ai-enthusiast": 3,
				"quick-starter": 2,
				"rapid-prototyper": 2,
				"prompt-based-user": 4,
				"category-3D modeling, spatial design, & video games": 3,
				
			}
		},
		{
			text: "The Pixel Pegasus, who gallops through galaxies building pixel-perfect video game worlds and assets.",
			scores: {
				"game-developer": 4,
				"strengths-game-design": 4,
				"category-3D modeling, spatial design, & video games": 3,
				"technical-learner": 2, 
				"interactive-creator": 1
				
			}
		},
		{
			text: "The Spatial Salamander, who dreams up cosmic buildings and spatial designs.",
			scores: {
				"strengths-architecture": 5,
				"architect": 5,
				"category-3D modeling, spatial design, & video games": 3,
				"real-estate-focused": 5,
				"strengths-rendering": 5,
				"strengths-simulations": 5
				
			}
		}
	],
	Researa: [
		{
			text: "The Note Nebula, who organizes research and knowledge across the stars.",
			scores: {
				"knowledge-manager": 4,
				"strengths-note-taking": 3,
				"strengths-planning": 2,
				"category-research, knowledge, & learning platforms": 3,
				"citation-focused": 2,
		
			}
		},
		{
			text: "The Abstract Axolotl, who distills cosmic content into clear insights and summaries.",
			scores: {
				"strengths-summarization": 4,
				"category-research, knowledge, & learning platforms": 3,
				"strengths-synthesis": 4, 
				"interactive": 4,
				"strengths-good-at-analysis": 1
			}
		},
		{
			text: "The Focus Firefly, who lights your way through the nebula of distractions with reminders and goals.",
			scores: {

				"productivity-focused": 4,
				"strengths-motivation": 4,
				"strengths-planning": 2,
				"category-research, knowledge, & learning platforms": 3,
			
			}
		},
		{
			text: "The Collaboration Kitsune, who shares and annotates research with fellow wisdom-seekers.",
			scores: {
				"collaborative-worker": 5,
				"strengths-collaborative": 10,
				"strengths-real-time-collaboration": 10

				
			}
		}
	]
};

// Cosmic Star Animation (background)
const StarField = () => {
	const [stars, setStars] = useState([]);
	useEffect(() => {
		const newStars = Array.from({ length: 80 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 2 + 1,
			delay: Math.random() * 2
		}));
		setStars(newStars);
	}, []);
	return (
		<div className="fixed inset-0 pointer-events-none z-0">
			{stars.map(star => (
				<div
					key={star.id}
					className="star twinkle"
					style={{
						position: 'absolute',
						left: `${star.left}%`,
						top: `${star.top}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
						background: 'white',
						borderRadius: '50%',
						opacity: 0.7,
						animation: `twinkle 2s infinite`,
						animationDelay: `${star.delay}s`
					}}
				/>
			))}
			{/* Planets */}
			<div className="planet" style={{position:'fixed',top:'5rem',right:'5rem',width:'4rem',height:'4rem',opacity:0.3,background:'linear-gradient(45deg,#ff6b6b,#4ecdc4)',borderRadius:'50%',animation:'float 6s ease-in-out infinite'}}></div>
			<div className="planet" style={{position:'fixed',bottom:'8rem',left:'4rem',width:'3rem',height:'3rem',opacity:0.2,background:'linear-gradient(45deg,#ff9ff3,#54a0ff)',borderRadius:'50%',animation:'float 7s ease-in-out infinite'}}></div>
			<style>{`
				@keyframes twinkle { 0%,100%{opacity:0.3;} 50%{opacity:1;} }
				@keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-20px);} }
			`}</style>
			</div>
			);
		};
		// ...existing code...
const baseQuizQuestions = [
	{
		id: 1,
		icon: greetingIcon,
		question: "✨ Greetings, cosmic traveler!  Welcome to the universe of web tools. I'm Twinkle, your galactic guide. Choose a use-case planet to begin, and we'll discover the perfect tools for you and your task!",
		   options: [
			   {
				   text: "Visualis: Create stunning visuals, graphics, or eye-catching designs",
				   scores: {
					   "visual-output": 4,
					   "video-output": 3,
					   "supportType-visual": 4,
					   "supportType-video": 4,
					   "category-visualization & design": 4,
					   "category-video generation & editing": 2,
					   "category-image generation": 4
					   
				
				   }
			   },
			   {
				   text: "Textara: Weave stellar text, reports, and documentation, or write intergalactic chronicles",
				   scores: {
					   "text-output": 4,
					   "supportType-text": 4,
					   "category-writing & text generation": 4,
					   "supportType-research": 1
				   }
			   },
			   {
				   text: "Codion: Code wormholes, engineer starships, or build interactive web universes",
				   scores: {
					   "coding-output": 4,
					   "supportType-coding": 4,
					   "category-web & app builders": 4,
				   }
			   },
			   {
				   text: "Audiona: Orchestrate cosmic audio content, music, or soundscapes",
				   scores: {
					   "audio-output": 4,
					   "supportType-audio": 4,
					   "category-audio & music": 4
				   }
			   },
			   {
				   text: "Dataralis: Chart constellations of data and reveal the universe’s secrets",
				   scores: {
					   "data-output": 4,
					   "supportType-data": 4,			
				   }
			   },
			   {
				   text: "Presentira: Broadcast ideas across the galaxy with radiant presentations",
				   scores: {
					   "presentation-output": 4,
					   "video-output": 3,
					   "supportType-visual": 4,
                       "supportType-video": 4,
					   "category-visualization & design": 2,
					   "category-video generation & editing": 2
				   }
			   },
			   {
				   text: "Dimensio: Sculpt sparkling 3D models or design immersive worlds, simulations, and games",
				   scores: {
					   "3d-output": 4,
					   "supportType-3d": 4,
					   "category-3D modeling, spatial design, & video games": 4
				   }
			   },
			   {
				   text: "Researa: Embark on a knowledge or research quest and become a cosmic scholar",
				   scores: {
					   "research-output": 4,
					   "supportType-research": 4,
					   "category-research, knowledge, & learning platforms": 4
				   }
			   }
		   ],
		category: "project-goal"
	},
	{
		id: 2,
		iconMultiple: [butterflyIcon, lambIcon, slugIcon, nekoIcon, mothIcon, waterbearIcon, crowIcon],
		question: "", // Will be set dynamically
		options: [],  // Will be set dynamically
		category: "use-case-narrow"
	},
	{
		id: 3,
		iconMultiple: [moonIcon, starsIcon, starFaceIcon, starsIcon, rainbowIcon],
		question: "You now find yourself falling among a glittering constellation of stars. Which star do you and your new friend land on?",
		options: [
			{ 
				text: "A vibrant rainbow star bursting with bold, eye-catching colors - more sparkle is always better!", 
				scores: { 
					"artistic": 2,
					"creative-expresser": 2,
					"strengths-beautiful-visualizations": 1,
				} 
			},
			{ 
				text: "A pristine white star with clean, professional elegance - simplicity is the ultimate sophistication", 
				scores: { 
					"professional-user": 1,
					"perfectionist": 1,
					"strengths-clean-ui": 2
				} 
			},
			{ 
				text: "A deep blue techno star with digital circuits - give me that sleek, high-tech aesthetic", 
				scores: { 
					"analytical-thinker": 1,
					"strengths-data-visualization": 1, 
					"strengths-clean-ui": 2
				} 
			},
			{ 
				text: "A warm golden star with earthy, cozy tones - natural and approachable vibes", 
				scores: { 
					"collaborative-worker": 1,
					"conversational-learner": 1
				} 
			}
		],
		category: "color-preference"
	},
	{
		id: 4,
		icon: sparkIcon,
		question: "You land with an explosion of sparkling light! Without sparing any time to recover, the creature unveils what looks to be a blueprint for something and asks you to get started. How do you react?",
		options: [
			{ 
				text: "I drift to an empty cloud of stardust to work alone, I'm most productive that way.", 
				scores: { 
					"independent-creator": 3, //no tools mapped to this...
					"self-directed": 3, 
					"focus-driven": 2
				} 
			},
			{
				text: "I see a cluster of star engineers gathering with similar-looking blueprints and join in - I work best collaborating with a team.",
				scores: {
					"collaborative-worker": 2,
					"social-creator": 2,
					"strengths-real-time-collaboration": 1,
					"strengths-collaborative": 1
				}
			},
			{ 
				text: "I ask the creature to help me get started, but I'll probably be able to figure it out after that!", 
				scores: { 
					"brainstormer": 2,
					"self-directed": 2,
					"conversational-learner": 2
				} 
			},
			{ 
				text: "I notice a small 'robot mode' that captures my curiosity... better press it!", 
				scores: { 
					"ai-enthusiast": 4 
				} 
			}
		],
		category: "collaboration-style"
	},
	{
		id: 5,
		icon: questionIcon,
		question: "You're not sure what you've gotten yourself into now, but you might as well follow-through to help your friend. How do you prefer to learn more about the blueprint?",
		options: [
			{
				text: "Dive into the starlight and figure it out as I go!",
				scores: {
					"quick-starter": 2,
					"experimental": 3,
					"idea-tester": 3, 
					"early-adopter": 1
				}
			},
			{
				text: "Ask for a project manual to read the fine print and tutorials first",
				scores: {
					"systematic-builder": 1,
					"patient-learner": 3,
					"technical-learner": 3, 
					"self-directed": 1
				}
			},
			{
				text: "Watch another creature work on it first, then try myself",
				scores: {
					"conversational-learner": 1,
					"visual-learner": 1
				}
			},
			{
				text: "Find the simplest starry explanation and chart a direct course to finish the task",
				scores: {
					"quick-starter": 1,
					"rapid-prototyper": 1,
					"weaknesses-learning curve": 2,
				
				}
			}
		],
		category: "learning-style"
	},
	{
		id: 6,
		icon: richIcon,
		question: "Now that you better understand the task at hand, you realize you might need some special cosmic wares, and you and [creature] head to a starlight market. What's your approach to get what you need?",
		options: [
			{
				text: "Trade stardust for the finest quality cosmic tools",
				scores: {
					"professional-user": 1,
					"freeTierAccess-very-limited": 3,
					"price-paid": 4,
					"quality-focused": 4
				}
			},
			{
				text: "Hunt for free samples and hidden treasures - I'm resourceful!",
				scores: {
					"open-source-advocate": 3,
					"freeTierAccess-robust": 4,
					"price-free": 4
				}
			},
			{
				text: "Free samples first, then decide if it's worth it and come back later",
				scores: {
					"freeTierAccess-somewhat-limited": 3,
					"freeTierAccess-robust": 3,
					"price-freemium": 4
				}
			},
			{
				text: "Whatever gets the job done quickly, but I'll take advantage of sales!",
				scores: {
					"quick-starter": 1,
					"rapid-prototyper": 1,
					"price-freemium": 2,
					"freeTierAccess-robust": 1,
					"price-free": 2,
					 "timePressure-low": 1

				}
			}
		],
		category: "budget-approach"
	},
	{
		id: 7,
		icon: curiousIcon,
		question: "You see that little 'robot mode' button again, glittering with cosmic energy...",
		options: [
			{
				text: "So shiny... must... press... maybe it'll do the work for me",
				scores: {
					"ai-only": 4,
					"ai-enthusiast": 3,
				}
			},
			{
				text: "I tap it cautiously - I don't mind working with a space robot, so long as it doesn't take over!",
				scores: {
					"ai-optional": 4,
				}
			},
			{
				text: "No robots for me! I prefer steering my own ship.",
				scores: {
					"manual-only": 4,
					"manual-preference": 1,
					"ai-optional": 3
				}
			},
			{
				text: "Robot mode sounds cool, but I need to decode its galactic secrets first.",
				scores: {
					"ai-optional": 3,
					"safety-conscious": 1
				}
			}
		],
		category: "ai-comfort"
	},
	{
		id: 8,
		icon: hurryIcon,
		question: "Suddenly, your creaturely pal approaches you like a swirling storm of stars! They tell you there's only 2 hours left to create something impressive from the blueprint. You:",
		options: [
			{
				text: "Summon templates and ideas from the ether and customize at warp speed",
				scores: {
					"timePressure-low": 3,
					"strengths-templates": 3,
				}
			},
			{
				text: "Craft from cosmic dust—originality is best! No need to rush",
				scores: {
					"creative-expresser": 1,
					"self-directed": 1, 
					"artistic": 1,
					"timePressure-high": 3
				}
			},
			{
				text: "Scan the galaxy for inspiration, then create my own constellation",
				scores: {
					"timePressure-medium": 1,
					//"timePressure-high": 1,
					"self-directed": 1, 
				}
			},
			{
				text: "Let the robot helper spark my ideas, then shape them with my own stardust",
				scores: {
					"ai-enthusiast": 2,
					"idea-tester": 1, 
					"brainstormer": 1,
					//"timePressure-low": 2,
					"timePressure-medium": 1
				}
			}
		],
		category: "time-pressure"
	},
	{
		id: 9,
		iconMultiple: [confettiIcon, celebrateIcon, bdayPartyIcon],
		question: "Mission success! As stardust confetti settles around your magnificent creation, your friend turns to you and asks, 'What drives you most in moments like these—when you've accomplished something nebula-nificent?'",
		options: [
			{
				text: "Gazing at something radiant and polished that sparkles with perfection",
				scores: {
					"artistic": 1,
					"creative-expresser": 1,
				}
			},
			{
				text: "Feeling my interstellar knowledge expand like a supernova of new skills",
				scores: {
					"growth-focused": 1, 
					"self-directed": 1, 
					"experimental": 1,
					"multimodal-user": 1
			

				}
			},
			{
				text: "The rush of blazing through challenges at light speed to reach my goal",
				scores: {
					"rapid-prototyper": 1,
					"quick-starter": 1,
					//"timePressure-low": 1, 
					"weaknesses-learning curve": 1
				}
			},
			{
				text: "Sharing this magical moment with fellow star-travelers across the galaxy",
				scores: {
					"strengths-community": 1,
					"strengths-social": 1,
					"accessibility-focused": 1,
					"content-creator": 1, 
					"sharer": 1
				}
			}
		],
		category: "core-motivation"
	}
];

// Helper function to determine dot color for summary table
const getDotColor = (tool, questionIndex, userAnswer, quizQuestions) => {
	if (!userAnswer || userAnswer.scores === undefined) return '⚪'; // Gray for no data

	const userScoreKeys = Object.keys(userAnswer.scores || {});

	// Define opposites based on actual quiz attributes
	const opposites = {
		// Q6 - Budget opposites (price and freeTierAccess)
		// Note: price-freemium is neutral to both price-free and price-paid
		'price-free': ['price-paid'],
		'price-paid': ['price-free'],
		'freeTierAccess-robust': ['freeTierAccess-very-limited'],
		'freeTierAccess-very-limited': ['freeTierAccess-robust'],
		// Q7 - AI Dependency opposites
		'ai-only': ['manual-only', 'manual-preference'],
		'manual-only': ['ai-only', 'ai-enthusiast'],
		'manual-preference': ['ai-only', 'ai-enthusiast'],
		'ai-enthusiast': ['manual-only', 'manual-preference'],
		// Q8 - Time Pressure opposites (timePressure-low/medium/high)
		'timePressure-low': ['timePressure-high'],
		'timePressure-high': ['timePressure-low'],
		// Persona opposites
		'quick-starter': ['patient-learner', 'technical-learner'],
		'rapid-prototyper': ['patient-learner', 'technical-learner'],
		'patient-learner': ['quick-starter', 'rapid-prototyper'],
		'technical-learner': ['quick-starter', 'rapid-prototyper']
	};

	// Get tool attributes based on question
	let toolAttributes = [];

	switch (questionIndex) {
		case 0: // Q1 - Support Type
			toolAttributes = Array.isArray(tool.supportType) ? tool.supportType : [tool.supportType];
			break;
		case 1: // Q2 - Specific use case (personas and strengths)
			// Special handling for specific creatures that require specific strengths
			const creatureRequirements = {
				'debugging druid': { strengths: ['debugging'], personas: [], supportTypes: [], categories: [] },
				'diagramming druid': { strengths: ['diagramming'], personas: [], supportTypes: [], categories: [] },
				'nebula neko': { strengths: ['image-generation'], personas: [], supportTypes: [], categories: ['image generation'] },
				'video vampire': { strengths: [], personas: [], supportTypes: ['video'], categories: [] },
				'story seiryū': { strengths: ['creative-writing'], personas: [], supportTypes: [], categories: [] },
				'grammar gremlin': { strengths: ['proofreading'], personas: ['editor-focused'], supportTypes: [], categories: [] },
				'speech sprite': { strengths: ['speech-tools'], personas: [], supportTypes: [], categories: [] },
				'voiceover veery': { strengths: ['voiceover'], personas: [], supportTypes: [], categories: [] },
				'melody mermaid': { strengths: ['music-creation'], personas: [], supportTypes: [], categories: [] },
				'stat starling': { strengths: ['statistics'], personas: [], supportTypes: [], categories: [] },
				'chart chameleon': { strengths: ['data-visualization'], personas: [], supportTypes: [], categories: [] },
				'map marmot': { strengths: ['mapping'], personas: [], supportTypes: [], categories: [] },
				'frame firefly': { strengths: [], personas: [], supportTypes: ['video'], categories: [] },
				'infographic imp': { strengths: ['infographics'], personas: [], supportTypes: [], categories: [] },
				'generative griffin': { strengths: [], personas: ['prompt-based-user'], supportTypes: [], categories: [] },
				'pixel pegasus': { strengths: [], personas: ['game-developer'], supportTypes: [], categories: [] },
				'focus firefly': { strengths: ['motivation'], personas: [], supportTypes: [], categories: [] },
				'spatial salamander': { strengths: ['simulations'], personas: [], supportTypes: [], categories: [] },
				'slide seraph': { strengths: ['slides'], personas: [], supportTypes: [], categories: [] },
				'collagist chimera': { strengths: ['infographics'], personas: [], supportTypes: [], categories: [] },
				'paper phoenix': { strengths: ['technical-writing'], personas: ['professional-writer', 'academic-researcher'], supportTypes: [], categories: [] },
				'inspiration imp': { strengths: ['idea-generation'], personas: ['brainstormer'], supportTypes: [], categories: [] },
				'paraphrase pixie': { strengths: ['summarization'], personas: ['ai-enthusiast'], supportTypes: [], categories: [] },
				'app angel': { strengths: ['no-code', 'mobile-app'], personas: ['ai-enthusiast', 'developer', 'prompt-based-user'], supportTypes: [], categories: [] },
				'web weaver': { strengths: ['website-building', 'interactive'], personas: ['developer'], supportTypes: [], categories: [] },
				'experience elemental': { strengths: ['no-code', 'interactive'], personas: ['ai-enthusiast', 'prompt-based-user'], supportTypes: [], categories: [] },
				'podcast pulsar': { strengths: ['audio-editing'], personas: ['podcaster', 'content-creator'], supportTypes: [], categories: [] },
				'synthesis starfish': { strengths: ['synthesis', 'data-visualization'], personas: ['story-teller', 'interactive'], supportTypes: [], categories: [] },
				'note nebula': { strengths: ['note-taking', 'planning'], personas: ['knowledge-manager', 'citation-focused'], supportTypes: [], categories: [] },
				'abstract axolotl': { strengths: ['summarization', 'synthesis', 'good-at-analysis'], personas: ['interactive'], supportTypes: [], categories: [] },
				'collaboration kitsune': { strengths: ['collaboration', 'real-time-collaboration', 'community'], personas: ['collaborative-worker'], supportTypes: [], categories: [] },
				'poll pegasus': { strengths: ['interactive'], personas: ['educator', 'engagement-focused'], supportTypes: [], categories: [] }
			};

			// Get the user's Q2 answer text and normalize it
			const q2AnswerText = userAnswer?.text?.toLowerCase() || '';

			// Check if this answer matches any creature requirement
			let creatureMatch = null;
			for (const [creatureName, requirements] of Object.entries(creatureRequirements)) {
				if (q2AnswerText.includes(creatureName)) {
					creatureMatch = requirements;
					break;
				}
			}

			// If this is a creature with specific requirements, only check those requirements
			if (creatureMatch) {
				const hasRequiredStrength = creatureMatch.strengths.length === 0 || creatureMatch.strengths.some(reqStrength => {
					return (tool.strengths || []).some(toolStrength =>
						toolStrength.toLowerCase().includes(reqStrength.toLowerCase())
					);
				});

				const hasRequiredPersona = creatureMatch.personas.length === 0 || creatureMatch.personas.some(reqPersona => {
					return (tool.personaTypeMatch || []).includes(reqPersona);
				});

				const hasRequiredSupportType = creatureMatch.supportTypes.length === 0 || creatureMatch.supportTypes.some(reqType => {
					const toolSupportTypes = Array.isArray(tool.supportType) ? tool.supportType : [tool.supportType];
					return toolSupportTypes.includes(reqType);
				});

				const hasRequiredCategory = creatureMatch.categories.length === 0 || creatureMatch.categories.some(reqCategory => {
					return tool.category?.toLowerCase().includes(reqCategory.toLowerCase());
				});

				// Tool must match at least ONE requirement from EACH specified requirement type
				// (e.g., if creature specifies strengths AND personas, tool needs at least one of each)
				if (hasRequiredStrength && hasRequiredPersona && hasRequiredSupportType && hasRequiredCategory) {
					return '🌕'; // Match
				} else {
					return '🌓'; // Neutral - doesn't have required attribute
				}
			} else {
				// For non-specific creatures, use standard matching
				toolAttributes = [...(tool.personaTypeMatch || []), ...(tool.strengths || [])];
			}
			break;
		case 2: // Q3 - Aesthetic (complexity, UI, personas, and strengths)
			toolAttributes = [tool.complexity];

			// Check for UI/visual strengths
			if (tool.strengths?.includes('Clean UI') || tool.strengths?.includes('clean UI')) {
				toolAttributes.push('clean-ui');
				toolAttributes.push('strengths-clean-ui');
			}
			if (tool.strengths?.some(s => s.toLowerCase().includes('beautiful') && s.toLowerCase().includes('visual'))) {
				toolAttributes.push('strengths-beautiful-visualizations');
			}
			if (tool.strengths?.some(s => s.toLowerCase().includes('data') && s.toLowerCase().includes('visual'))) {
				toolAttributes.push('strengths-data-visualization');
			}

			// Also check personas for Q3 (e.g., collaborative-worker, conversational-learner, artistic, etc.)
			toolAttributes.push(...(tool.personaTypeMatch || []));
			break;
		case 3: // Q4 - Collaboration (strengths and personas)
			// Check collaboration strengths
			if (tool.strengths?.some(s => s.toLowerCase().includes('collaborat'))) {
				toolAttributes.push('collaboration');
				toolAttributes.push('strengths-collaborative');
			}
			if (tool.strengths?.some(s => s.toLowerCase().includes('real-time collab'))) {
				toolAttributes.push('real-time-collaboration');
				toolAttributes.push('strengths-real-time-collaboration');
			}
			// Also check personas (collaborative-worker, brainstormer, ai-enthusiast, etc.)
			toolAttributes.push(...(tool.personaTypeMatch || []));
			break;
		case 4: // Q5 - Learning style (personas)
			toolAttributes = tool.personaTypeMatch || [];
			break;
		case 5: // Q6 - Budget (price and freeTierAccess)
			toolAttributes = [`price-${tool.price}`, `freeTierAccess-${tool.freeTierAccess}`];
			break;
		case 6: // Q7 - AI Preference
			toolAttributes = [tool.aiDependency];
			break;
		case 7: // Q8 - Time Pressure
			toolAttributes = [tool.timePressure];
			// Map complexity to time pressure
			if (tool.complexity === 'beginner') toolAttributes.push('timePressure-low');
			if (tool.complexity === 'advanced') toolAttributes.push('timePressure-high');
			// Check weaknesses for learning curve indicators only
			if (tool.weaknesses?.some(w => w.toLowerCase().includes('learning curve'))) {
				toolAttributes.push('timePressure-high');
			}
			break;
		case 8: // Q9 - Motivation (strengths and personas)
			toolAttributes = [...(tool.strengths || [])];
			// Check for community/social strengths with proper formatting
			if (tool.strengths?.some(s => s.toLowerCase().includes('community'))) {
				toolAttributes.push('strengths-community');
			}
			if (tool.strengths?.some(s => s.toLowerCase().includes('social'))) {
				toolAttributes.push('strengths-social');
			}
			// Also check personas (artistic, creative-expresser, growth-focused, self-directed, etc.)
			toolAttributes.push(...(tool.personaTypeMatch || []));
			break;
		default:
			return '⚪';
	}

	// Check for exact matches (GREEN)
	// Special handling for Q6 (budget) - must match on price specifically, not just freeTierAccess
	if (questionIndex === 5) {
		const userPriceKeys = userScoreKeys.filter(k => k.startsWith('price-'));
		const toolPrice = toolAttributes.find(attr => attr.startsWith('price-'));
		const toolFreeTier = toolAttributes.find(attr => attr.startsWith('freeTierAccess-'));
		const userWantsFree = userPriceKeys.includes('price-free');

		// For price-free users
		if (userWantsFree) {
			if (toolPrice === 'price-free') {
				// Free tool - always match
				return '🌕';
			} else if (toolPrice === 'price-freemium') {
				// Freemium - depends on free tier quality
				if (toolFreeTier === 'freeTierAccess-robust') return '🌕'; // Match - good free tier
				if (toolFreeTier === 'freeTierAccess-somewhat-limited') return '🌓'; // Neutral - limited free tier
				if (toolFreeTier === 'freeTierAccess-very-limited') return '🌑'; // Opposite - barely free
			}
			// price-paid will fall through to opposites check below
		}

		// For price-paid users
		const userWantsPaid = userPriceKeys.includes('price-paid');
		if (userWantsPaid) {
			if (toolPrice === 'price-paid') {
				return '🌕'; // Match - paid tool for paid preference
			} else if (toolPrice === 'price-free' || (toolPrice === 'price-freemium' && toolFreeTier === 'freeTierAccess-robust')) {
				// Free or freemium with robust free tier - low match for paid preference
				return '🌑';
			} else {
				// All other cases (freemium with limited tiers) - moderate match
				return '🌓';
			}
		}

		// For price-freemium users (if they exist in the quiz)
		const userWantsFreemium = userPriceKeys.includes('price-freemium');
		if (userWantsFreemium && toolPrice === 'price-freemium') {
			return '🌕';
		}

		// If no match found, will fall through to check opposites, then neutral
	} else if (questionIndex === 7) {
		// Special handling for Q8 (time pressure)
		const userWantsHighTimePressure = userScoreKeys.includes('timePressure-high');
		const userWantsMediumTimePressure = userScoreKeys.includes('timePressure-medium');
		const userWantsLowTimePressure = userScoreKeys.includes('timePressure-low');

		if (userWantsHighTimePressure) {
			// User chose "Craft from cosmic dust" - wants tools that match high time investment
			// Check if tool has high time pressure OR advanced complexity
			if (toolAttributes.includes('timePressure-high') || tool.complexity === 'advanced') {
				return '🌕'; // Match - tool requires time/complexity
			} else {
				return '🌓'; // Neutral - tool doesn't match high time pressure preference
			}
		}

		if (userWantsMediumTimePressure) {
			// User wants medium time investment tools
			if (toolAttributes.includes('timePressure-medium') || tool.complexity === 'intermediate') {
				return '🌕'; // Match - tool has medium time pressure or intermediate complexity
			} else {
				return '🌓'; // Neutral - doesn't match medium preference
			}
		}

		if (userWantsLowTimePressure) {
			// User wants quick/easy tools - low time investment
			if (toolAttributes.includes('timePressure-low') || tool.complexity === 'beginner') {
				return '🌕'; // Match - tool is quick/easy
			} else if (toolAttributes.includes('timePressure-high') || tool.complexity === 'advanced') {
				return '🌑'; // Low Match - tool requires too much time for quick-start user
			} else {
				return '🌓'; // Neutral - medium complexity
			}
		}

		// Fallback to neutral if no time pressure preference was found
		return '🌓';
	} else {
		// For all other questions, use the standard matching logic
		const hasMatch = userScoreKeys.some(userKey => {
			// Direct match
			if (toolAttributes.includes(userKey)) return true;

			// Handle timePressure- prefix matching
			if (userKey.startsWith('timePressure-') && toolAttributes.includes(userKey)) return true;

			// Check for partial matches in personas/strengths
			const userKeyClean = userKey.toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ');
			return toolAttributes.some(attr => {
				const attrClean = (attr || '').toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ');
				return attrClean.includes(userKeyClean) || userKeyClean.includes(attrClean);
			});
		});

		if (hasMatch) return '🌕'; // Full moon - exact match
	}

	// Special check for weaknesses-learning curve
	// If user response has this score key, they don't want tools with learning curves
	const userHasLearningCurveWeakness = userScoreKeys.includes('weaknesses-learning curve');
	const toolHasLearningCurve = tool.weaknesses?.some(w => w.toLowerCase().includes('learning curve'));

	if (userHasLearningCurveWeakness && toolHasLearningCurve) {
		return '🌑'; // Low Match - user response penalizes learning curves, tool has one
	}

	// Check for opposites (LOW MATCH)
	const hasOpposite = userScoreKeys.some(userKey => {
		const userOpposites = opposites[userKey] || [];
		return toolAttributes.some(attr => {
			// Direct opposite match
			if (userOpposites.includes(attr)) return true;

			// Check for opposite indicators
			// User wants low time pressure but tool has high (medium is neutral)
			if (userKey === 'timePressure-low' && (attr === 'high' || attr === 'timePressure-high')) return true;
			if (userKey === 'timePressure-high' && (attr === 'low' || attr === 'timePressure-low')) return true;
			// Medium time pressure is neutral with both low and high, so we don't mark it as opposite

			// User wants quick start but tool is complex/patient learner
			if ((userKey === 'quick-starter' || userKey === 'rapid-prototyper') &&
				(attr === 'patient-learner' || attr === 'technical-learner' || attr === 'advanced')) return true;

			// User wants manual but tool is AI-only
			if ((userKey === 'manual-only' || userKey === 'manual-preference') && attr === 'ai-only') return true;
			if ((userKey === 'ai-only' || userKey === 'ai-enthusiast') && attr === 'manual-only') return true;

			// Budget opposites
			if (userKey === 'price-free' && attr === 'price-paid') return true;
			if (userKey === 'price-paid' && attr === 'price-free') return true;
			if (userKey === 'freeTierAccess-robust' && attr === 'freeTierAccess-very-limited') return true;
			if (userKey === 'freeTierAccess-very-limited' && attr === 'freeTierAccess-robust') return true;

			return false;
		});
	});

	if (hasOpposite) return '🌑'; // New moon - opposite match

	// Otherwise YELLOW (no match, no opposite)
	return '🌓'; // First quarter moon - neutral/no match
};

// Summary Table Modal Component
const SummaryTableModal = ({ show, onClose, topTools, quizQuestions, answers }) => {
	if (!show) return null;

	// Generate User Journey summary
	const getUserJourney = () => {
		const journey = [];
		answers.forEach((answerIndex, qIndex) => {
			if (quizQuestions[qIndex] && quizQuestions[qIndex].options[answerIndex]) {
				const question = quizQuestions[qIndex];
				const answer = question.options[answerIndex];
				journey.push({
					question: question.question,
					answer: answer.text
				});
			}
		});
		return journey;
	};

	const userJourney = getUserJourney();

	// Get planet name from first question (Q1)
	const getPlanetName = () => {
		if (answers[0] !== undefined && quizQuestions[0] && quizQuestions[0].options[answers[0]]) {
			const answer = quizQuestions[0].options[answers[0]].text;
			// Extract planet name (first word before the colon)
			const planetMatch = answer.match(/^(\w+):/);
			return planetMatch ? planetMatch[1] : 'Unknown';
		}
		return 'Unknown';
	};

	const questionLabels = [
		'Support Type',
		'Use Case',
		'Aesthetic',
		'Collaboration',
		'Learning Style',
		'Budget',
		'AI Preference',
		'Time Pressure',
		'Motivation'
	];

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
			onClick={onClose}
		>
			<div
				className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-lg max-w-7xl w-full max-h-[90vh] overflow-auto p-6 border-2 border-cyan-400"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="relative mb-6">
					<h2 className="text-2xl font-bold text-cyan-300 font-silkscreen text-center">Top 10 Tools Summary</h2>
					<button
						onClick={onClose}
						className="absolute right-0 top-0 text-cyan-300 hover:text-cyan-100 text-2xl font-bold"
					>
						×
					</button>
				</div>

				{/* User Journey Summary */}
				<div className="mb-6 p-4 bg-black bg-opacity-40 rounded-lg border border-purple-500">
					<h3 className="text-xl font-bold text-purple-300 mb-3 font-share-tech">Your Galactic Journey on {getPlanetName()}:</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
						{userJourney.slice(1).map((item, idx) => (
							<div key={idx} className="text-gray-300">
								<span className="text-cyan-400 font-semibold">{questionLabels[idx + 1] || `Q${idx + 2}`}:</span>{' '}
								<span className="text-gray-100">{item.answer.substring(0, 80)}{item.answer.length > 80 ? '...' : ''}</span>
							</div>
						))}
					</div>
				</div>

				{/* Legend */}
				<div className="mb-4 p-3 bg-black bg-opacity-40 rounded-lg border border-cyan-500">
					<p className="text-sm text-gray-300">
						<span className="font-semibold text-cyan-300">Legend:</span>{' '}
						<span className="mx-2">🌕 = Match</span>
						<span className="mx-2">🌓 = Moderate Match or Neutral</span>
						<span className="mx-2">🌑 = Low Match</span>
						<span className="mx-2">⚪ = No data</span>
					</p>
				</div>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="w-full text-sm border-collapse">
						<thead>
							<tr className="bg-purple-900 bg-opacity-60">
								<th className="border border-cyan-500 px-2 py-2 text-cyan-300 font-share-tech text-left sticky left-0 bg-purple-900 z-10">Tool</th>
								<th className="border border-cyan-500 px-2 py-2 text-cyan-300 font-share-tech">%</th>
								{questionLabels.map((label, idx) => (
									<th key={idx} className="border border-cyan-500 px-2 py-2 text-cyan-300 font-share-tech text-center min-w-[60px]">
										{label}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{topTools.slice(0, 10).map((tool, toolIdx) => (
								<tr key={toolIdx} className="hover:bg-purple-800 hover:bg-opacity-40">
									<td className="border border-cyan-500 px-2 py-2 text-gray-100 font-semibold sticky left-0 bg-gray-900 z-10">
										<a
											href={tool.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-cyan-300 hover:text-cyan-100 hover:underline"
										>
											{tool.name}
										</a>
									</td>
									<td className="border border-cyan-500 px-2 py-2 text-center text-cyan-300 font-bold">
										{tool.compatibilityPercentage}%
									</td>
									{answers.map((answerIndex, qIdx) => {
										const userAnswer = quizQuestions[qIdx]?.options[answerIndex];
										const dot = getDotColor(tool, qIdx, userAnswer, quizQuestions);
										return (
											<td key={qIdx} className="border border-cyan-500 px-2 py-2 text-center text-2xl">
												{dot}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Close Button */}
				<div className="mt-6 text-center">
					<button
						onClick={onClose}
						className="px-6 py-2 bg-purple-600 bg-opacity-70 hover:bg-purple-500 hover:bg-opacity-80 text-white font-silkscreen rounded-lg transition-colors"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

const PersonalityQuizApp = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [answers, setAnswers] = useState([]);
   const [showResults, setShowResults] = useState(false);
   const [userScores, setUserScores] = useState({});
   const [quizQuestions, setQuizQuestions] = useState(baseQuizQuestions);
   const [hoveredPlanet, setHoveredPlanet] = useState(null);
   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
   const [showSummaryTable, setShowSummaryTable] = useState(false);
   const [recommendations, setRecommendations] = useState([]);

   // Update window width on resize
   useEffect(() => {
	   const handleResize = () => {
		   setWindowWidth(window.innerWidth);
	   };
	   window.addEventListener('resize', handleResize);
	   return () => window.removeEventListener('resize', handleResize);
   }, []);

   // Helper to get creature name from Q2
   const getCreatureName = () => {
	   if (answers[1] !== undefined && quizQuestions[1].options[answers[1]]) {
		   const creatureText = quizQuestions[1].options[answers[1]].text;
		   // Extract creature name (e.g., "Pixel Pixie" from "The Pixel Pixie, who...")
		   const match = creatureText.match(/^The ([^,]+)/);
		   return match ? match[1] : 'Your Cosmic Companion';
	   }
	   return 'Your Cosmic Companion';
   };

   // Dynamically update question 2 based on answer to question 1 using state
   useEffect(() => {
	   if (currentQuestion === 1 && answers.length > 0) {
		   const planetText = baseQuizQuestions[0].options[answers[0]].text;
		   const planetName = planetText.split(":")[0].trim();
		   const updatedQuestions = [...baseQuizQuestions];
		   updatedQuestions[1] = {
			   ...updatedQuestions[1],
			   question: `You've landed on the planet ${planetName}, where several quirky creatures beckon you. Which cosmic companion do you follow?`,
			   options: branchingQuestions[planetName] || []
		   };
		   setQuizQuestions(updatedQuestions);
	   } else if (currentQuestion === 0) {
		   // Reset to base questions on quiz restart
		   setQuizQuestions(baseQuizQuestions);
	   }
   }, [currentQuestion, answers]);

   // Dynamically update question 6 to include creature name
   useEffect(() => {
	   if (currentQuestion >= 5 && answers.length > 1) {
		   const creatureName = getCreatureName();
		   // Remove "the" or "The" if it's at the start of the creature name
		   const cleanCreatureName = creatureName.replace(/^[Tt]he\s+/, '');
		   const updatedQuestions = [...quizQuestions];
		   updatedQuestions[5] = {
			   ...updatedQuestions[5],
			   question: `Now that you better understand the task at hand, you realize you might need some special cosmic wares, and you and ${cleanCreatureName} head to a starlight market. What's your approach to get what you need?`
		   };
		   setQuizQuestions(updatedQuestions);
	   }
   }, [currentQuestion, answers]);

   // Calculate and store recommendations when results are shown
   useEffect(() => {
	   if (showResults && userScores && Object.keys(userScores).length > 0) {
		   // Calculate top 10 for the summary table using the full scoring logic
		   const top10 = calculateRecommendations(userScores, quizQuestions, answers, 10);
		   setRecommendations(top10);

		   // Track quiz completion event
		   const planet = answers[0] !== undefined ? quizQuestions[0].options[answers[0]].text : 'Unknown';
		   const creature = answers[1] !== undefined ? quizQuestions[1].options[answers[1]].text : 'Unknown';

		   trackQuizEvent('quiz_completed', {
			   planet: planet.split(':')[0].trim(),
			   creature: creature.split(',')[0].replace('The ', '').trim(),
			   top_tool: top10[0]?.name || 'Unknown',
			   top_tool_score: Math.round(top10[0]?.score || 0),
			   total_questions: answers.length,
			   total_tools_recommended: top10.length
		   });
	   }
   }, [showResults, userScores, quizQuestions, answers]);

   // Update scores based on all answers collected so far
   const updateScoresFromAnswers = () => {
	   const newScores = {};
	   answers.forEach((answerIndex, questionIndex) => {
		   if (typeof answerIndex !== 'undefined' && quizQuestions[questionIndex]) {
			   const selectedOption = quizQuestions[questionIndex].options[answerIndex];
			   if (selectedOption && selectedOption.scores) {
				   Object.entries(selectedOption.scores).forEach(([trait, score]) => {
					   newScores[trait] = (newScores[trait] || 0) + score;
				   });
			   }
		   }
	   });
	   setUserScores(newScores);
   };

   const handleAnswer = (optionIndex) => {
	   const newAnswers = [...answers, optionIndex];
	   setAnswers(newAnswers);
	   // Update user scores
	   const selectedOption = quizQuestions[currentQuestion].options[optionIndex];
	   const newScores = { ...userScores };
	   Object.entries(selectedOption.scores).forEach(([trait, score]) => {
		   newScores[trait] = (newScores[trait] || 0) + score;
	   });
	   setUserScores(newScores);

	   // Track question answer event
	   trackQuizEvent('question_answered', {
		   question_number: currentQuestion + 1,
		   question_id: quizQuestions[currentQuestion].id,
		   answer_text: selectedOption.text.substring(0, 100), // Truncate for analytics
		   is_final_question: currentQuestion === quizQuestions.length - 1
	   });

	   if (currentQuestion < quizQuestions.length - 1) {
		   setCurrentQuestion(currentQuestion + 1);
	   } else {
		   setShowResults(true);
	   }
   };

	const calculateRecommendations = (testUserScores = null, testQuestions = null, testAnswers = null, returnCount = 2) => {
		   // Use test parameters if provided, otherwise use state
		   const activeUserScores = testUserScores || userScores;
		   const activeQuestions = testQuestions || quizQuestions;
		   const activeAnswers = testAnswers || answers;

		   // Q1 FILTERING: Find the user's main use-case/goal from the first question
		   const mainGoalOption = activeQuestions[0].options[activeAnswers[0]];
		   // Find all supportType keys in the selected option's scores
		   const mainSupportTypes = Object.keys(mainGoalOption.scores)
			   .filter(key => key.startsWith('supportType-'))
			   .map(key => key.replace('supportType-', ''));

		   // Q2 SECONDARY FILTERING: Check if Q2 (branching question) has more specific supportTypes
		   let secondarySupportTypes = [];
		   if (activeAnswers.length > 1 && activeQuestions[1]) {
			   const q2Option = activeQuestions[1].options[activeAnswers[1]];
			   if (q2Option && q2Option.scores) {
				   secondarySupportTypes = Object.keys(q2Option.scores)
					   .filter(key => key.startsWith('supportType-'))
					   .map(key => key.replace('supportType-', ''));
			   }
		   }

		   // Determine which supportTypes to use for filtering
		   // If Q2 has supportTypes, use those (more specific). Otherwise use Q1 (broader)
		   const filterSupportTypes = secondarySupportTypes.length > 0 ? secondarySupportTypes : mainSupportTypes;

		   // Only consider tools that match at least one of the filter supportTypes
		   // AND filter out AI-only tools if user has manual-only preference
		   const filteredTools = toolsDatabase.filter(tool => {
			   // Check supportType match
			   const supportTypeMatch = Array.isArray(tool.supportType)
				   ? tool.supportType.some(st => filterSupportTypes.includes(st))
				   : filterSupportTypes.includes(tool.supportType);

			   if (!supportTypeMatch) return false;

			   // Filter out AI-only tools if user prefers manual
			   if ((activeUserScores['manual-only'] || activeUserScores['manual-preference']) && tool.aiDependency === 'ai-only') {
				   return false;
			   }

			   // If user chose Dataralis (data-output), exclude image generation tools
			   if (activeUserScores['data-output'] && tool.category === 'image generation') {
				   return false;
			   }

			   return true;
		   });

		// Calculate universal maxPossibleScore ONCE based only on user responses
		// This represents the theoretical perfect tool for this user
		let universalMaxPossibleScore = 0;

		// Q2 personas and strengths arrays
		const q2Personas = [
			'story-teller', 'interactive', 'data-focused', 'visual-learner',
			'knowledge-manager', 'academic-researcher', 'research-focused',
			'content-creator', 'artistic', 'creative-expresser', 'ai-enthusiast',
			'3d-artist', 'game-developer', 'architect', 'spatial-thinker',
			'podcaster', 'music-lover', 'educator',
			'productivity-focused', 'video-creator', 'prompt-based-user',
			'professional-writer', 'perfectionist', 'brainstormer',
			'code-curious', 'developer', 'presentation-focused',
			'engagement-focused', 'technical-learner', 'quick-starter',
			'rapid-prototyper', 'real-estate-focused', 'editor-focused',
			'citation-focused', 'interactive-creator', 'patient-learner', 'collaborative-worker'
		];

		const q2Strengths = [
			'diagramming', 'image-generation', 'video-generation', 'animation', 'infographics',
			'technical-writing', 'creative-writing', 'proofreading', 'idea-generation',
			'summarization', 'debugging', 'no-code', 'mobile-app', 'website-building',
			'interactive', 'speech-tools', 'voiceover', 'music-creation', 'audio-editing',
			'statistics', 'good-at-analysis', 'data-visualization', 'synthesis', 'mapping',
			'slides', '3d-modeling', 'game-design', 'architecture', 'rendering', 'simulations',
			'note-taking', 'planning', 'motivation', 'collaboration', 'community'
		];

		// Category scores (4x weight)
		Object.keys(activeUserScores).forEach(key => {
			if (key.startsWith('category-')) {
				universalMaxPossibleScore += activeUserScores[key] * 4;
			}
		});

		// AI dependency (4x weight for ai-enthusiast, manual-preference, balanced-approach)
		if (activeUserScores['ai-enthusiast']) {
			universalMaxPossibleScore += activeUserScores['ai-enthusiast'] * 4;
			// AI-only bonus
			universalMaxPossibleScore += activeUserScores['ai-enthusiast'] * 3;
		}
		if (activeUserScores['manual-preference']) {
			universalMaxPossibleScore += activeUserScores['manual-preference'] * 4;
			// Manual bonus
			universalMaxPossibleScore += activeUserScores['manual-preference'] * 3;
		}
		if (activeUserScores['balanced-approach']) {
			universalMaxPossibleScore += activeUserScores['balanced-approach'] * 4;
			// Balanced bonus
			universalMaxPossibleScore += activeUserScores['balanced-approach'] * 3;
		}

		// Personas (5x for Q2 personas, 2x for others)
		Object.keys(activeUserScores).forEach(key => {
			if (!key.startsWith('category-') && !key.startsWith('strengths-') &&
				!key.startsWith('price-') && !key.startsWith('timePressure-') &&
				!key.startsWith('freeTierAccess-') && !key.startsWith('supportType-') &&
				key !== 'ai-enthusiast' && key !== 'manual-preference' && key !== 'balanced-approach' &&
				key !== 'budget-conscious' && key !== 'open-source-advocate' &&
				key !== 'collaborative-worker' &&
				key !== 'quick-starter' && key !== 'efficiency-focused') {

				const weight = q2Personas.includes(key) ? 5 : 2;
				universalMaxPossibleScore += activeUserScores[key] * weight;
			}
		});

		// Price preferences (3x weight, mutually exclusive - use max)
		const maxPriceScore = Math.max(
			activeUserScores["price-free"] || 0,
			activeUserScores["price-freemium"] || 0,
			activeUserScores["price-paid"] || 0
		);
		if (maxPriceScore > 0) {
			universalMaxPossibleScore += maxPriceScore * 3;
		}

		// Free tier access (3x weight)
		Object.keys(activeUserScores).forEach(key => {
			if (key.startsWith('freeTierAccess-')) {
				universalMaxPossibleScore += activeUserScores[key] * 3;
			}
		});

		// Legacy budget (3 points max)
		if (activeUserScores['budget-conscious'] || activeUserScores['open-source-advocate']) {
			universalMaxPossibleScore += 3;
		}

		// Collaboration preference
		const maxCollabScore = Math.max(
			activeUserScores["collaborative-worker"] || 0,
		);
		if (maxCollabScore > 0) {
			universalMaxPossibleScore += maxCollabScore * 3;
		}

		// Time pressure (2x weight, mutually exclusive - use max)
		const maxTimeScore = Math.max(
			activeUserScores["timePressure-low"] || 0,
			activeUserScores["timePressure-medium"] || 0,
			activeUserScores["timePressure-high"] || 0
		);
		if (maxTimeScore > 0) {
			universalMaxPossibleScore += maxTimeScore * 2;
		}

		// Strengths (5x for Q2 strengths, 2.5x for partial Q2, 2x for others)
		Object.keys(activeUserScores).forEach(key => {
			if (key.startsWith('strengths-')) {
				const strengthName = key.replace('strengths-', '');
				const weight = q2Strengths.includes(strengthName) ? 5 : 2;
				universalMaxPossibleScore += activeUserScores[key] * weight;
			}
		});

		const toolScores = filteredTools.map(tool => {
			let score = 0;
			let totalPossiblePenalties = 0; // Track maximum possible penalties based on user preferences
			let reasons = {
				supportType: [],
				aiPreference: [],
				pricePreference: [],
				collaborationPreference: [],
				learningStyle: []
			};

			// PRIMARY FACTORS (Highest weight - 5x and 4x)
			// Support type match - Most important
			const toolSupportTypes = Array.isArray(tool.supportType) ? tool.supportType : [tool.supportType];
			const supportTypeMapping = {
				'visual-output': 'visual',
				'text-output': 'text',
				'coding-output': 'coding',
				'audio-output': 'audio',
				'data-output': 'data',
				'3d-output': '3d',
				'presentation-output': 'visual',
				'video-output': 'video',
				'research-output': 'research'
			};
			   let hasMatchingSupportType = false;
			   Object.entries(supportTypeMapping).forEach(([outputType, supportType]) => {
				   if (activeUserScores[outputType]) {
					   // Don't add to maxPossibleScore or score - Q1 is just for filtering
					   const toolSupportsType = toolSupportTypes.includes(supportType);

					   if (toolSupportsType) {
						   hasMatchingSupportType = true;
					   }
					   // No penalties either - filtering already handled this
				   }
			   });

			   // Add support type reason if there's a match
			   if (hasMatchingSupportType && toolSupportTypes.length > 0) {
				   const supportTypeLabel = toolSupportTypes.length === 1
					   ? toolSupportTypes[0]
					   : toolSupportTypes.join('/');
				   reasons.supportType.push(`Great for ${supportTypeLabel} projects`);
			   }
			// Category match (from project-goal/support-type)
			// Check if user has scores for ANY category
			const userCategories = Object.keys(activeUserScores).filter(key => key.startsWith('category-'));
			if (userCategories.length > 0) {
				const maxCategoryScore = Math.max(...userCategories.map(cat => activeUserScores[cat] || 0));

				// Handle both string and array categories
				const toolCategories = Array.isArray(tool.category) ? tool.category : [tool.category];
				const categoryScores = toolCategories
					.map(cat => activeUserScores[`category-${cat}`] || 0)
					.filter(s => s > 0);

				if (categoryScores.length > 0) {
					// Use highest matching category score
					const bestCategoryMatch = Math.max(...categoryScores);
					score += bestCategoryMatch * 4;
					// Don't add generic "matches your interest" reason
				} else {
					// Penalty for category mismatch - user wants different category
					const categoryPenalty = maxCategoryScore * 2;
					score -= categoryPenalty;
					totalPossiblePenalties += categoryPenalty;
				}
			}

			// Q2 Creature Requirement Penalty
			// Apply light penalty for tools that don't meet specific creature strength requirements
			if (activeAnswers.length > 1 && activeQuestions[1]) {
				const q2Answer = activeQuestions[1].options[activeAnswers[1]];
				const q2AnswerText = q2Answer.text.toLowerCase();

				const creatureRequirements = {
					'debugging druid': { strengths: ['debugging'], personas: [], supportTypes: [], categories: [] },
					'diagramming druid': { strengths: ['diagramming'], personas: [], supportTypes: [], categories: [] },
					'nebula neko': { strengths: ['image-generation'], personas: [], supportTypes: [], categories: ['image generation'] },
					'video vampire': { strengths: [], personas: [], supportTypes: ['video'], categories: [] },
					'story seiryū': { strengths: ['creative-writing'], personas: [], supportTypes: [], categories: [] },
					'grammar gremlin': { strengths: ['proofreading'], personas: ['editor-focused'], supportTypes: [], categories: [] },
					'speech sprite': { strengths: ['speech-tools'], personas: [], supportTypes: [], categories: [] },
					'voiceover veery': { strengths: ['voiceover'], personas: [], supportTypes: [], categories: [] },
					'melody mermaid': { strengths: ['music-creation'], personas: [], supportTypes: [], categories: [] },
					'stat starling': { strengths: ['statistics'], personas: [], supportTypes: [], categories: [] },
					'chart chameleon': { strengths: ['data-visualization'], personas: [], supportTypes: [], categories: [] },
					'map marmot': { strengths: ['mapping'], personas: [], supportTypes: [], categories: [] },
					'frame firefly': { strengths: [], personas: [], supportTypes: ['video'], categories: [] },
					'infographic imp': { strengths: ['infographics'], personas: [], supportTypes: [], categories: [] },
					'generative griffin': { strengths: [], personas: ['prompt-based-user'], supportTypes: [], categories: [] },
					'pixel pegasus': { strengths: [], personas: ['game-developer'], supportTypes: [], categories: [] },
					'focus firefly': { strengths: ['motivation'], personas: [], supportTypes: [], categories: [] },
					'spatial salamander': { strengths: ['simulations'], personas: [], supportTypes: [], categories: [] },
					'slide seraph': { strengths: ['slides'], personas: [], supportTypes: [], categories: [] },
					'collagist chimera': { strengths: ['infographics'], personas: [], supportTypes: [], categories: [] },
					'paper phoenix': { strengths: ['technical-writing'], personas: ['professional-writer', 'academic-researcher'], supportTypes: [], categories: [] },
					'inspiration imp': { strengths: ['idea-generation'], personas: ['brainstormer'], supportTypes: [], categories: [] },
					'paraphrase pixie': { strengths: ['summarization'], personas: ['ai-enthusiast'], supportTypes: [], categories: [] },
					'app angel': { strengths: ['no-code', 'mobile-app'], personas: ['ai-enthusiast', 'developer', 'prompt-based-user'], supportTypes: [], categories: [] },
					'web weaver': { strengths: ['website-building', 'interactive'], personas: ['developer'], supportTypes: [], categories: [] },
					'experience elemental': { strengths: ['no-code', 'interactive'], personas: ['ai-enthusiast', 'prompt-based-user'], supportTypes: [], categories: [] },
					'podcast pulsar': { strengths: ['audio-editing'], personas: ['podcaster', 'content-creator'], supportTypes: [], categories: [] },
					'synthesis starfish': { strengths: ['synthesis', 'data-visualization'], personas: ['story-teller', 'interactive'], supportTypes: [], categories: [] },
					'note nebula': { strengths: ['note-taking', 'planning'], personas: ['knowledge-manager', 'citation-focused'], supportTypes: [], categories: [] },
					'abstract axolotl': { strengths: ['summarization', 'synthesis', 'good-at-analysis'], personas: ['interactive'], supportTypes: [], categories: [] },
					'collaboration kitsune': { strengths: ['collaboration', 'real-time-collaboration', 'community'], personas: ['collaborative-worker'], supportTypes: [], categories: [] },
					'poll pegasus': { strengths: ['interactive'], personas: ['educator', 'engagement-focused'], supportTypes: [], categories: [] }
				};

				// Check if this answer matches any creature requirement
				let creatureMatch = null;
				for (const [creatureName, requirements] of Object.entries(creatureRequirements)) {
					if (q2AnswerText.includes(creatureName)) {
						creatureMatch = requirements;
						break;
					}
				}

				// If this is a creature with specific requirements, penalize tools that don't have them
				if (creatureMatch) {
					const hasRequiredStrength = creatureMatch.strengths.length === 0 || creatureMatch.strengths.some(reqStrength => {
						return (tool.strengths || []).some(toolStrength =>
							toolStrength.toLowerCase().includes(reqStrength.toLowerCase())
						);
					});

					const hasRequiredPersona = creatureMatch.personas.length === 0 || creatureMatch.personas.some(reqPersona => {
						return (tool.personaTypeMatch || []).includes(reqPersona);
					});

					const hasRequiredSupportType = creatureMatch.supportTypes.length === 0 || creatureMatch.supportTypes.some(reqType => {
						const toolSupportTypes = Array.isArray(tool.supportType) ? tool.supportType : [tool.supportType];
						return toolSupportTypes.includes(reqType);
					});

					const hasRequiredCategory = creatureMatch.categories.length === 0 || creatureMatch.categories.some(reqCategory => {
						const toolCategories = Array.isArray(tool.category) ? tool.category : [tool.category];
						return toolCategories.some(cat => cat.toLowerCase().includes(reqCategory.toLowerCase()));
					});

					// Tool must match at least ONE requirement from EACH specified requirement type
					if (!hasRequiredStrength || !hasRequiredPersona || !hasRequiredSupportType || !hasRequiredCategory) {
						// Light penalty for not meeting creature requirements
						const creatureMismatchPenalty = 10;
						score -= creatureMismatchPenalty;
						totalPossiblePenalties += creatureMismatchPenalty;
					}
				}
			}

			// AI dependency match
			if (activeUserScores[tool.aiDependency]) {
				score += activeUserScores[tool.aiDependency] * 4;
			}

			// AI dependency mismatch penalty
			// Penalize when user wants AI-only but tool is manual-only (or vice versa)
			if (activeUserScores['ai-only'] && tool.aiDependency === 'manual-only') {
				const aiMismatchPenalty = activeUserScores['ai-only'] * 3;
				score -= aiMismatchPenalty;
				totalPossiblePenalties += aiMismatchPenalty;
			} else if ((activeUserScores['manual-only'] || activeUserScores['manual-preference']) && tool.aiDependency === 'ai-only') {
				const manualMismatchPenalty = (activeUserScores['manual-only'] || activeUserScores['manual-preference']) * 3;
				score -= manualMismatchPenalty;
				totalPossiblePenalties += manualMismatchPenalty;
			}

			// SECONDARY FACTORS (Medium weight - 3x)
			// Persona match (INCREASED TO 4x for Q2 personas - equal weight to category)
			const learningStylePersonas = [
				'experimental', 'idea-tester', 'technical-learner', 'systematic-builder',
				'patient-learner', 'self-directed', 'conversational-learner', 'visual-learner',
				'quick-starter', 'rapid-prototyper'
			];
			const q2Personas = [
				'story-teller', 'interactive', 'data-focused', 'visual-learner',
				'knowledge-manager', 'academic-researcher', 'research-focused',
				'content-creator', 'artistic', 'creative-expresser', 'ai-enthusiast',
				'3d-artist', 'game-developer', 'architect', 'spatial-thinker',
				'podcaster', 'music-lover', 'educator',
				'productivity-focused', 'video-creator', 'prompt-based-user',
				'professional-writer', 'perfectionist', 'brainstormer',
				'code-curious', 'developer', 'presentation-focused',
				'engagement-focused', 'technical-learner', 'quick-starter',
				'rapid-prototyper', 'real-estate-focused', 'editor-focused',
				'citation-focused', 'interactive-creator', 'patient-learner', 'collaborative-worker'
			];

			tool.personaTypeMatch.forEach(persona => {
				if (activeUserScores[persona]) {
					// Use 5x weight for Q2 personas (highest priority), 2x for others
					const weight = q2Personas.includes(persona) ? 5 : 2;
					score += activeUserScores[persona] * weight;

					// Add learning style reason if it's a learning-related persona from Q5
					if (learningStylePersonas.includes(persona)) {
						const personaLabel = persona.replace(/-/g, ' ');
						reasons.learningStyle.push(`Suits your ${personaLabel} approach`);
					}
				}
			});
			// Price preference matching
			if (activeUserScores['price-free']) {
				if (tool.price === 'free') {
					score += activeUserScores['price-free'] * 3;
					reasons.pricePreference.push('Completely free to use');
				} else if (tool.price === 'paid') {
					// Penalty for paid tools when user wants free
					const priceMismatchPenalty = activeUserScores['price-free'] * 2;
					score -= priceMismatchPenalty;
					totalPossiblePenalties += priceMismatchPenalty;
				}
			}
			if (activeUserScores['price-freemium']) {
				if (tool.price === 'freemium') {
					score += activeUserScores['price-freemium'] * 3;
					reasons.pricePreference.push('Freemium pricing model with upgrade options');
				}
			}
			if (activeUserScores["price-paid"]) {
				if (tool.price === "paid") {
					score += activeUserScores["price-paid"] * 3;
					reasons.pricePreference.push("Premium features worth the investment");
				}
			}
			// Free tier preference (from budget-approach)
			if (activeUserScores[`freeTierAccess-${tool.freeTierAccess}`]) {
				score += activeUserScores[`freeTierAccess-${tool.freeTierAccess}`] * 3;
				if (tool.freeTierAccess === 'robust') {
					reasons.pricePreference.push('Generous free tier with extensive features');
				}
			}
			
			// TERTIARY FACTORS (Lower weight - 2x)
			// Time Pressure preference matching (scoring only, no reasons displayed)
			if (activeUserScores['timePressure-low']) {
				if (tool.timePressure === 'low') {
					score += activeUserScores['timePressure-low'] * 2;
				} else if (tool.timePressure === 'high') {
					// Penalty when user needs fast results but tool is slow/complex
					const timePressurePenalty = activeUserScores['timePressure-low'] * 2;
					score -= timePressurePenalty;
					totalPossiblePenalties += timePressurePenalty;
				}
			}
			if (activeUserScores['timePressure-medium']) {
				if (tool.timePressure === 'medium') {
					score += activeUserScores['timePressure-medium'] * 2;
				} else if (tool.timePressure === 'high') {
					// Slight penalty when user wants moderate speed but tool is slow/complex
					const timePressurePenalty = activeUserScores['timePressure-medium'] * 1;
					score -= timePressurePenalty;
					totalPossiblePenalties += timePressurePenalty;
				}
			}
			if (activeUserScores['timePressure-high']) {
				if (tool.timePressure === 'high') {
					score += activeUserScores['timePressure-high'] * 2;
				}
			}
			// Enhanced strengths preference matching with fuzzy matching
			// Q2 strengths get higher weight (3x exact, 1.5x partial) vs other strengths (2x exact, 1x partial)
			if (tool.strengths || tool.shortDescription) {
				Object.keys(activeUserScores).forEach(key => {
					if (key.startsWith('strengths-')) {
						const canonical = key.replace('strengths-', '').replace(/_/g, '-');
						const synonyms = strengthSynonyms[canonical] || [canonical.replace(/-/g, ' ')];
						const allFields = [
							...(tool.strengths || []),
							tool.shortDescription || ''
						].map(s => s.toLowerCase());

						// Q2 strengths from branching questions get higher weight
						const q2Strengths = [
							'diagramming', 'image-generation', 'video-generation', 'animation', 'infographics',
							'technical-writing', 'creative-writing', 'proofreading', 'idea-generation',
							'summarization', 'debugging', 'no-code', 'mobile-app', 'website-building',
							'interactive', 'speech-tools', 'voiceover', 'music-creation', 'audio-editing',
							'statistics', 'good-at-analysis', 'data-visualization', 'synthesis', 'mapping',
							'slides', '3d-modeling', 'game-design', 'architecture', 'rendering', 'simulations',
							'note-taking', 'planning', 'motivation', 'collaboration', 'community'
							
						];
						const isQ2Strength = q2Strengths.includes(canonical);

						// Check for exact matches first (higher score)
						const exactMatch = synonyms.some(syn => allFields.some(f => f.includes(syn.toLowerCase())));
						if (exactMatch) {
							const weight = isQ2Strength ? 5 : 2;
							score += activeUserScores[key] * weight;
							// Don't add generic strength reasons
						} else {
							// Check for partial matches (lower score)
							const partialMatch = synonyms.some(syn => {
								const synWords = syn.toLowerCase().split(' ');
								return synWords.some(word =>
									word.length > 3 && allFields.some(f => f.includes(word))
								);
							});
							if (partialMatch) {
								const weight = isQ2Strength ? 2.5 : 1;
								score += activeUserScores[key] * weight;
								// Don't add generic partial match reasons
							}
						}
					}
				});
			}
			// Complexity match
			if (activeUserScores['quick-starter'] || activeUserScores['efficiency-focused'] || activeUserScores['rapid-prototyper']) {
				if (tool.complexity === 'beginner') {
					score += 2;
					// Don't add duplicate time pressure reason - already handled by timePressure matching
				}
			}
			
			// PENALTIES (Negative scoring - 4x and 3x)
			// Weaknesses avoidance
			if (tool.weaknesses) {
				tool.weaknesses.forEach(weakness => {
					Object.keys(activeUserScores).forEach(key => {
						if (key.startsWith('weaknesses-') && weakness.toLowerCase().includes(key.replace('weaknesses-', '').toLowerCase())) {
							const weaknessPenalty = activeUserScores[key] * 4;
							score -= weaknessPenalty;
							totalPossiblePenalties += weaknessPenalty;
							// Don't add weakness avoidance reasons
						}
					});
				});
			}
			// Price preference (secondary factor - 3x weight already added above)
			
			// Additional persona-based AI dependency matching (lower weight - 3x)
			if (activeUserScores['ai-enthusiast'] && tool.aiDependency === 'ai-only') {
				score += activeUserScores['ai-enthusiast'] * 3;
				reasons.aiPreference.push('Fully AI-powered');
			} else if (tool.aiDependency === 'ai-only') {
				reasons.aiPreference.push('AI-powered tool');
			}

			if (activeUserScores['manual-preference'] && (tool.aiDependency === 'ai-optional' || tool.aiDependency === 'manual-only')) {
				score += activeUserScores['manual-preference'] * 3;
				if (tool.aiDependency === 'ai-optional') {
					reasons.aiPreference.push('AI-use not required');
				} else {
					reasons.aiPreference.push('Manual control for full creative direction');
				}
			} else if (tool.aiDependency === 'manual-only') {
				reasons.aiPreference.push('Full manual control');
			}

			if (activeUserScores['balanced-approach'] && tool.aiDependency === 'ai-optional') {
				score += activeUserScores['balanced-approach'] * 3;
				reasons.aiPreference.push('Flexible AI/manual options');
			} else if (activeUserScores['ai-optional'] && tool.aiDependency === 'ai-optional') {
				reasons.aiPreference.push('AI assistance available if desired');
			} else if (tool.aiDependency === 'ai-optional') {
				reasons.aiPreference.push('Optional AI features');
			}

			// Legacy budget logic (keeping for backwards compatibility)
			if (activeUserScores['budget-conscious'] || activeUserScores['open-source-advocate']) {
				if (tool.price === 'free') {
					score += 3; // Reduced from 5 to avoid double-counting with price-free
					reasons.pricePreference.push('No cost barrier to entry');
				} else if (tool.freeTierAccess === 'robust') {
					score += 2; // Reduced from 3 to avoid double-counting
					reasons.pricePreference.push('Strong free tier available');
				}
			}
			
			// Collaboration filtering (enhanced)
			const collaborationKeywords = ['collaborat', 'team', 'share', 'group', 'real-time collab', 'live edit', 'social'];
			
			const isCollaborativeTool = tool.strengths && tool.strengths.some(s =>
				collaborationKeywords.some(keyword => s.toLowerCase().includes(keyword))
			) || tool.shortDescription && collaborationKeywords.some(keyword => 
				tool.shortDescription.toLowerCase().includes(keyword)
			);
			
			// Strong collaboration preference
			const hasCollaborationStrength = activeUserScores['strengths-collaboration'] ||
				activeUserScores['strengths-real-time-collaboration'] ||
				activeUserScores['strengths-collaborative'];

			if (activeUserScores['collaborative-worker'] && hasCollaborationStrength) {
				if (isCollaborativeTool) {
					score += 3;
					reasons.collaborationPreference.push('Great for teamwork and real-time collaboration');
				}
				// No penalty for solo tools - use-case should take priority
			}

			if (activeUserScores['quick-starter'] || activeUserScores['efficiency-focused']) {
				if (tool.complexity === 'advanced') {
					score -= 5; // Heavy penalty for complex tools when wanting quick start
					totalPossiblePenalties += 5;
					// Don't add penalty reasons
				} else if (tool.complexity === 'intermediate') {
					score -= 2; // Light penalty for medium complexity
					totalPossiblePenalties += 2;
				}
			}
			// Removed penalties for beginner tools - simplicity can be a feature, not a drawback
			return {
				...tool,
				score,
				totalPossiblePenalties,
				reasons: reasons // Already categorized object
			};
		});

		// DEBUG: Log scoring breakdown for top tools
		console.log('=== USER SCORES ===');
		console.log(userScores);
		console.log(`\n=== UNIVERSAL MAX POSSIBLE SCORE: ${universalMaxPossibleScore.toFixed(1)} ===`);
		console.log('\n=== TOP 10 TOOL SCORES ===');
		const sortedForDebug = [...toolScores].sort((a, b) => b.score - a.score).slice(0, 10);

		// Calculate scaling factor for adjusted percentages
		// Calculate min/max from top 10 tools (matching the new scaling system)
		const top10ForScaling = sortedForDebug.slice(0, Math.min(10, sortedForDebug.length));
		const top10RawPercentages = top10ForScaling.map(t =>
			universalMaxPossibleScore > 0 ? (t.score / universalMaxPossibleScore) * 100 : 0
		);
		const minPercentageTop10 = Math.min(...top10RawPercentages);
		const maxPercentageTop10 = Math.max(...top10RawPercentages);

		console.log(`Top 10 Raw Percentage Range: ${minPercentageTop10.toFixed(1)}% - ${maxPercentageTop10.toFixed(1)}%`);
		console.log(`Scaled Display Range: 65% - 95% (for tools above 25% raw)\n`);

		sortedForDebug.forEach(tool => {
			const rawPercentage = universalMaxPossibleScore > 0 ? (tool.score / universalMaxPossibleScore) * 100 : 0;

			// Apply the new threshold-based hybrid scaling
			let displayedPercentage;
			if (rawPercentage >= 25) {
				if (maxPercentageTop10 > minPercentageTop10) {
					displayedPercentage = Math.round(65 + ((rawPercentage - minPercentageTop10) / (maxPercentageTop10 - minPercentageTop10)) * 30);
				} else {
					displayedPercentage = 80;
				}
				displayedPercentage = Math.min(95, Math.max(65, displayedPercentage));
			} else {
				displayedPercentage = Math.round(rawPercentage);
			}

			console.log(`\n${tool.name}:`);
			console.log(`  Final Score: ${tool.score.toFixed(1)}`);
			console.log(`  Universal Max Possible: ${universalMaxPossibleScore.toFixed(1)}`);
			console.log(`  Total Penalties: ${tool.totalPossiblePenalties.toFixed(1)}`);
			console.log(`  Raw Percentage: ${Math.round(rawPercentage)}%`);
			console.log(`  Displayed Percentage: ${displayedPercentage}% ${rawPercentage < 25 ? '(below threshold - showing raw)' : '(scaled 65-95%)'}`);
			console.log(`  Category: ${tool.category}`);
			console.log(`  Personas: ${tool.personaTypeMatch.join(', ')}`);
			console.log(`  Strengths: ${tool.strengths.join(', ')}`);
		});

		// SCORE NORMALIZATION
		// Filter out tools with very low scores (poor matches)
		const minScore = Math.max(...toolScores.map(t => t.score)) * 0.3; // At least 30% of top score
		const viableTools = toolScores.filter(tool => tool.score >= minScore);

		// Sort by score
		const sortedTools = viableTools.sort((a, b) => b.score - a.score);

		// IMPORTANT: Always calculate min/max from top 10 tools for consistency
		// This ensures the same percentages whether we're displaying 2 or 10 tools
		const toolsForMinMax = sortedTools.slice(0, Math.min(10, sortedTools.length));
		const allRawPercentages = toolsForMinMax.map(t => {
			const tScore = Math.max(0, t.score);
			return (tScore / universalMaxPossibleScore) * 100;
		});
		const minPercentage = Math.min(...allRawPercentages);
		const maxPercentage = Math.max(...allRawPercentages);

		// Get the tools we'll actually return
		const toolsToDisplay = sortedTools.slice(0, returnCount);

		// Calculate percentages using threshold-based hybrid scaling
		const finalRecommendations = toolsToDisplay.map((tool, index) => {
			let percentage;

			if (universalMaxPossibleScore > 0 && toolsToDisplay.length > 0) {
				const effectiveScore = Math.max(0, tool.score);

				// Calculate raw percentage (actual match quality)
				const rawPercentage = (effectiveScore / universalMaxPossibleScore) * 100;

				// Option 1: Threshold-based Hybrid Scaling
				// If raw score is above 25%, use relative scaling (65-95%)
				// If below 25%, show raw percentage to indicate truly poor match
				if (rawPercentage >= 25) {
					// Scale to 65-95% range
					if (maxPercentage > minPercentage) {
						percentage = Math.round(65 + ((rawPercentage - minPercentage) / (maxPercentage - minPercentage)) * 30);
					} else {
						// All tools have same score
						percentage = 80;
					}

					// Ensure bounds
					percentage = Math.min(95, Math.max(65, percentage));
				} else {
					// Below 25% threshold - show raw percentage (genuinely poor match)
					percentage = Math.round(rawPercentage);
				}

				// Ensure reasonable bounds
				percentage = Math.min(95, Math.max(0, percentage));
			} else {
				// Fallback if no maxPossibleScore (shouldn't happen)
				percentage = index === 0 ? 95 : 90;
			}

			// Ensure percentage is within bounds and not NaN
			if (isNaN(percentage) || !isFinite(percentage)) {
				percentage = index === 0 ? 95 : 90; // Fallback percentages
			}

			return {
				...tool,
				compatibilityPercentage: percentage
			};
		});

		// Log final recommendations with displayed percentages
		console.log('\n\n=== FINAL TOP 10 RECOMMENDATIONS (WITH DISPLAYED PERCENTAGES) ===');
		finalRecommendations.forEach((tool, idx) => {
			const rawPercentage = universalMaxPossibleScore > 0 ? (tool.score / universalMaxPossibleScore) * 100 : 0;
			console.log(`${idx + 1}. ${tool.name.padEnd(35)} ${tool.compatibilityPercentage}% displayed (${Math.round(rawPercentage)}% raw)`);
		});
		console.log('\n');

		return finalRecommendations;
	};

	const resetQuiz = () => {
		// Track quiz restart event
		trackQuizEvent('quiz_restarted', {
			from_question: currentQuestion + 1,
			had_completed: showResults,
			answers_given: answers.length
		});

		setCurrentQuestion(0);
		setAnswers([]);
		setShowResults(false);
		setUserScores({});
	};

	const getPersonalityInsights = () => {
		const topTraits = Object.entries(userScores)
			.sort(([,a], [,b]) => b - a)
			.slice(0, 3)
			.map(([trait]) => trait.replace('-', ' '));
		return topTraits;
	};

	// TESTING FUNCTION: Expose to window for comprehensive quiz coverage analysis
	useEffect(() => {
		window.testQuizCoverage = (detailedTool = null) => {
			console.log('🚀 Starting Comprehensive Quiz Coverage Analysis...');
			console.log('This will test all Q1/Q2 combinations with representative Q3-Q9 variations');
			if (detailedTool) {
				console.log(`📍 Detailed logging enabled for tool: ${detailedTool}\n`);
			}
			console.log('');

			const toolRecommendationCount = {};
			const toolTopRecommendation = {};
			const toolTop2Count = {}; // Count #1 or #2 appearances
			const toolPercentages = {};
			const scenarioResults = [];
			const toolScenarios = {}; // Track which scenarios lead to each tool
			const supportTypeScenarioCounts = {}; // Track total scenarios per support type

			// Initialize tracking
			toolsDatabase.forEach(tool => {
				toolRecommendationCount[tool.name] = 0;
				toolTopRecommendation[tool.name] = 0;
				toolTop2Count[tool.name] = 0;
				toolPercentages[tool.name] = [];
				toolScenarios[tool.name] = [];
			});

			// Test combinations for Q3-Q9 - expanded to ~768 scenarios
			// We'll test multiple variations across all dimensions
			const testCombinations = [
				// Color preferences (Q3: 4 options)
				// Collaboration styles (Q4: 4 options)
				// Learning styles (Q5: 4 options)
				// Budget approaches (Q6: 4 options)
				// AI comfort (Q7: 4 options)
				// Time pressure (Q8: 4 options)
				// Core motivation (Q9: 4 options)

				// Combination 1: Vibrant + Solo + Dive-in + Free + AI-only + Fast + Efficiency
				{ q3: 0, q4: 0, q5: 0, q6: 1, q7: 0, q8: 0, q9: 2, label: "Vibrant-Solo-Dive-Free-AI-Fast-Efficient" },
				// Combination 2: Clean + Solo + Manual + Free + Manual + Quality + Perfection
				{ q3: 1, q4: 0, q5: 1, q6: 1, q7: 2, q8: 1, q9: 0, label: "Clean-Solo-Manual-Free-Manual-Quality-Perfection" },
				// Combination 3: Tech + Team + Watch + Freemium + Optional + Scan + Learning
				{ q3: 2, q4: 1, q5: 2, q6: 2, q7: 1, q8: 2, q9: 1, label: "Tech-Team-Watch-Freemium-Optional-Scan-Learning" },
				// Combination 4: Warm + Hybrid + Simple + Quick + Cautious + AI-helper + Sharing
				{ q3: 3, q4: 2, q5: 3, q6: 3, q7: 3, q8: 3, q9: 3, label: "Warm-Hybrid-Simple-Quick-Cautious-AIhelper-Sharing" },
				// Combination 5: Vibrant + Team + Dive-in + Paid + AI-only + Fast + Sharing
				{ q3: 0, q4: 1, q5: 0, q6: 0, q7: 0, q8: 0, q9: 3, label: "Vibrant-Team-Dive-Paid-AI-Fast-Sharing" },
				// Combination 6: Clean + Solo + Simple + Free + Manual + Fast + Efficiency
				{ q3: 1, q4: 0, q5: 3, q6: 1, q7: 2, q8: 0, q9: 2, label: "Clean-Solo-Simple-Free-Manual-Fast-Efficient" },
				// Combination 7: Tech + Solo + Manual + Paid + Manual + Quality + Learning
				{ q3: 2, q4: 0, q5: 1, q6: 0, q7: 2, q8: 1, q9: 1, label: "Tech-Solo-Manual-Paid-Manual-Quality-Learning" },
				// Combination 8: Warm + Team + Watch + Freemium + Optional + Scan + Perfection
				{ q3: 3, q4: 1, q5: 2, q6: 2, q7: 1, q8: 2, q9: 0, label: "Warm-Team-Watch-Freemium-Optional-Scan-Perfection" },
				// Combination 9: Vibrant + Hybrid + Simple + Free + AI-only + Quality + Efficiency
				{ q3: 0, q4: 2, q5: 3, q6: 1, q7: 0, q8: 1, q9: 2, label: "Vibrant-Hybrid-Simple-Free-AI-Quality-Efficient" },
				// Combination 10: Clean + Team + Dive-in + Freemium + Manual + Fast + Learning
				{ q3: 1, q4: 1, q5: 0, q6: 2, q7: 2, q8: 0, q9: 1, label: "Clean-Team-Dive-Freemium-Manual-Fast-Learning" },
				// Combination 11: Tech + AI-curious + Manual + Free + Optional + Scan + Sharing
				{ q3: 2, q4: 3, q5: 1, q6: 1, q7: 1, q8: 2, q9: 3, label: "Tech-AICurious-Manual-Free-Optional-Scan-Sharing" },
				// Combination 12: Warm + Solo + Watch + Paid + Cautious + AIhelper + Perfection
				{ q3: 3, q4: 0, q5: 2, q6: 0, q7: 3, q8: 3, q9: 0, label: "Warm-Solo-Watch-Paid-Cautious-AIhelper-Perfection" },
				// Combination 13: Vibrant + Team + Manual + Free + Optional + Fast + Sharing
				{ q3: 0, q4: 1, q5: 1, q6: 1, q7: 1, q8: 0, q9: 3, label: "Vibrant-Team-Manual-Free-Optional-Fast-Sharing" },
				// Combination 14: Clean + Hybrid + Simple + Paid + AI-only + Quality + Learning
				{ q3: 1, q4: 2, q5: 3, q6: 0, q7: 0, q8: 1, q9: 1, label: "Clean-Hybrid-Simple-Paid-AI-Quality-Learning" },
				// Combination 15: Tech + Solo + Dive-in + Freemium + Manual + Scan + Efficiency
				{ q3: 2, q4: 0, q5: 0, q6: 2, q7: 2, q8: 2, q9: 2, label: "Tech-Solo-Dive-Freemium-Manual-Scan-Efficient" },
				// Combination 16: Warm + AI-curious + Watch + Free + Cautious + AIhelper + Perfection
				{ q3: 3, q4: 3, q5: 2, q6: 1, q7: 3, q8: 3, q9: 0, label: "Warm-AICurious-Watch-Free-Cautious-AIhelper-Perfection" },
				// Additional variations to reach 200+ total scenarios
				{ q3: 0, q4: 0, q5: 1, q6: 0, q7: 1, q8: 1, q9: 1, label: "Vibrant-Solo-Manual-Paid-Optional-Quality-Learning" },
				{ q3: 1, q4: 1, q5: 2, q6: 1, q7: 2, q8: 2, q9: 2, label: "Clean-Team-Watch-Free-Manual-Scan-Efficient" },
				{ q3: 2, q4: 2, q5: 3, q6: 2, q7: 3, q8: 3, q9: 3, label: "Tech-Hybrid-Simple-Freemium-Cautious-AIhelper-Sharing" },
				{ q3: 3, q4: 3, q5: 0, q6: 3, q7: 0, q8: 0, q9: 0, label: "Warm-AICurious-Dive-Quick-AI-Fast-Perfection" },
				{ q3: 0, q4: 1, q5: 1, q6: 2, q7: 1, q8: 1, q9: 0, label: "Vibrant-Team-Manual-Freemium-Optional-Quality-Perfection" },
				{ q3: 1, q4: 2, q5: 2, q6: 3, q7: 2, q8: 2, q9: 1, label: "Clean-Hybrid-Watch-Quick-Manual-Scan-Learning" },
				{ q3: 2, q4: 3, q5: 3, q6: 0, q7: 3, q8: 3, q9: 2, label: "Tech-AICurious-Simple-Paid-Cautious-AIhelper-Efficient" },
				{ q3: 3, q4: 0, q5: 0, q6: 1, q7: 0, q8: 0, q9: 3, label: "Warm-Solo-Dive-Free-AI-Fast-Sharing" }
			];

			// Expand with comprehensive combinations for Q4, Q6, Q7, Q8 (all combinations)
			// with varied Q3, Q5, Q9 - generates 512 total scenarios
			for (let q4 = 0; q4 < 4; q4++) {
				for (let q6 = 0; q6 < 4; q6++) {
					for (let q7 = 0; q7 < 4; q7++) {
						for (let q8 = 0; q8 < 4; q8++) {
							testCombinations.push({
								q3: (q4 + q6) % 4,
								q4: q4,
								q5: (q6 + q7) % 4,
								q6: q6,
								q7: q7,
								q8: q8,
								q9: (q7 + q8) % 4,
								label: `Auto-${testCombinations.length}`
							});
							testCombinations.push({
								q3: (q4 + q7) % 4,
								q4: q4,
								q5: (q8 + q6) % 4,
								q6: q6,
								q7: q7,
								q8: q8,
								q9: (q4 + q6) % 4,
								label: `Auto-${testCombinations.length}`
							});
						}
					}
				}
			}

			console.log(`📊 Generated ${testCombinations.length} test combinations for Q3-Q9`);

			// Iterate through all Q1 options
			const q1Questions = baseQuizQuestions[0];
			if (!q1Questions || !q1Questions.options) {
				console.error('❌ Error: Quiz questions not properly initialized');
				return;
			}

			q1Questions.options.forEach((q1Option, q1Index) => {
				// Extract planet name from text like "Planet Visualis: Create cosmic visuals..."
				const planetMatch = q1Option.text.match(/(?:Planet )?([^:,]+)/);
				const planetName = planetMatch ? planetMatch[1].trim() : q1Option.text;
				const branchOptions = branchingQuestions[planetName];

				if (!branchOptions) {
					console.warn(`⚠️ No branching questions found for planet: ${planetName}`);
					return;
				}

				// Extract support types for this Q1 option
				const q1SupportTypes = [];
				if (q1Option.scores) {
					Object.keys(q1Option.scores).forEach(key => {
						if (key.startsWith('supportType-')) {
							q1SupportTypes.push(key.replace('supportType-', ''));
						}
					});
				}

				// Iterate through all Q2 branching options for this planet
				branchOptions.forEach((q2Option, q2Index) => {
					const creatureName = q2Option.text.match(/The ([^,]+)/)?.[1] || 'Unknown';

					// Track scenarios for this support type combination
					const supportTypeKey = q1SupportTypes.join(',');
					if (!supportTypeScenarioCounts[supportTypeKey]) {
						supportTypeScenarioCounts[supportTypeKey] = 0;
					}

					// Test each Q3-Q9 combination
					testCombinations.forEach(combo => {
						supportTypeScenarioCounts[supportTypeKey]++;
						// Build answers array
						const testAnswers = [
							q1Index,
							q2Index,
							combo.q3,
							combo.q4,
							combo.q5,
							combo.q6,
							combo.q7,
							combo.q8,
							combo.q9
						];

						// Calculate user scores
						const testUserScores = {};
						testAnswers.forEach((answerIndex, questionIndex) => {
							const question = questionIndex === 1 ?
								{ options: branchOptions } :
								baseQuizQuestions[questionIndex];

							if (question && question.options && question.options[answerIndex]) {
								const scores = question.options[answerIndex].scores;
								if (scores) {
									Object.keys(scores).forEach(key => {
										testUserScores[key] = (testUserScores[key] || 0) + scores[key];
									});
								}
							}
						});

						// Calculate recommendations using the actual scoring function
						// Build the active questions for this scenario (Q1 base + Q2 branching)
						const activeQuestions = [...baseQuizQuestions];
						activeQuestions[1] = { options: branchOptions };

						const recommendations = calculateRecommendations(testUserScores, activeQuestions, testAnswers);

						// Track results
						const scenarioKey = `${planetName} → ${creatureName} (${combo.label})`;
						scenarioResults.push({
							scenario: scenarioKey,
							combo: combo,
							userScores: testUserScores,
							topTools: recommendations.map(r => ({
								name: r.name,
								percentage: r.compatibilityPercentage,
								score: r.score
							}))
						});

						// Update tool statistics (focus on top 2 only - the actual recommendations)
						recommendations.forEach((tool, index) => {
							if (index < 2) {
								// Top 2 tracking
								toolRecommendationCount[tool.name]++;
								toolPercentages[tool.name].push(tool.compatibilityPercentage);
								toolTop2Count[tool.name]++;

								// Track scenarios for this tool
								toolScenarios[tool.name].push({
									scenario: scenarioKey,
									rank: index + 1,
									percentage: tool.compatibilityPercentage,
									score: tool.score,
									supportTypes: q1SupportTypes
								});

								if (index === 0) {
									toolTopRecommendation[tool.name]++;
								}

								// Detailed logging for specific tool
								if (detailedTool && tool.name === detailedTool && index < 2) {
									console.log(`\n📍 ${detailedTool} ranked #${index + 1} in scenario:`);
									console.log(`   ${scenarioKey}`);
									console.log(`   Score: ${tool.score.toFixed(1)} = ${tool.compatibilityPercentage}%`);
									console.log(`   User scores:`, testUserScores);
								}
							}
						});
					});
				});
			});

			// Generate report
			console.log('\n' + '='.repeat(100));
			console.log('📊 QUIZ COVERAGE ANALYSIS REPORT');
			console.log('='.repeat(100));
			console.log(`\nTotal scenarios tested: ${scenarioResults.length}`);
			console.log(`Total tools in database: ${toolsDatabase.length}\n`);

			// Calculate recommendation rate relative to relevant scenarios
			const toolStats = toolsDatabase.map(tool => {
				const toolSupportTypes = Array.isArray(tool.supportType) ? tool.supportType : [tool.supportType];

				// Find total scenarios that match this tool's support types
				let relevantScenarioCount = 0;
				Object.keys(supportTypeScenarioCounts).forEach(supportTypeKey => {
					const scenarioSupportTypes = supportTypeKey.split(',');
					const hasMatchingSupportType = toolSupportTypes.some(st =>
						scenarioSupportTypes.includes(st)
					);
					if (hasMatchingSupportType) {
						relevantScenarioCount += supportTypeScenarioCounts[supportTypeKey];
					}
				});

				const top2Count = toolTop2Count[tool.name] || 0;
				const top1Count = toolTopRecommendation[tool.name] || 0;
				const avgPercentage = toolPercentages[tool.name].length > 0
					? Math.round(toolPercentages[tool.name].reduce((a, b) => a + b, 0) / toolPercentages[tool.name].length)
					: 0;

				const recommendationRate = relevantScenarioCount > 0
					? ((top2Count / relevantScenarioCount) * 100).toFixed(1)
					: 0;

				return {
					name: tool.name,
					top2Count,
					top1Count,
					relevantScenarios: relevantScenarioCount,
					recommendationRate: parseFloat(recommendationRate),
					avgPercentage
				};
			});

			// Most recommended tools
			console.log('\n🔥 TOP 20 MOST RECOMMENDED TOOLS (in top 2)');
			console.log('-'.repeat(100));
			const sortedByRate = toolStats.sort((a, b) => b.recommendationRate - a.recommendationRate);

			sortedByRate.slice(0, 20).forEach((stat, index) => {
				console.log(`${(index + 1).toString().padStart(2)}. ${stat.name.padEnd(35)} | Rate: ${stat.recommendationRate.toString().padStart(5)}% | #1: ${stat.top1Count.toString().padStart(3)}x | #1or2: ${stat.top2Count.toString().padStart(3)}x/${stat.relevantScenarios}x | Avg: ${stat.avgPercentage}%`);
			});

			// Least recommended tools
			console.log('\n\n❄️  BOTTOM 20 LEAST RECOMMENDED TOOLS (in top 2)');
			console.log('-'.repeat(100));
			sortedByRate.slice(-20).reverse().forEach((stat, index) => {
				const tool = toolsDatabase.find(t => t.name === stat.name);
				console.log(`${(index + 1).toString().padStart(2)}. ${stat.name.padEnd(35)} | Rate: ${stat.recommendationRate.toString().padStart(5)}% | #1or2: ${stat.top2Count.toString().padStart(3)}x/${stat.relevantScenarios}x | Category: ${tool.category}`);
			});

			// Never recommended tools
			console.log('\n\n⚠️  NEVER RECOMMENDED TOOLS (0 appearances in top 2)');
			console.log('-'.repeat(100));
			const neverRecommended = sortedByRate.filter(stat => stat.top2Count === 0);
			if (neverRecommended.length === 0) {
				console.log('✅ All tools appear in at least one scenario!');
			} else {
				neverRecommended.forEach(stat => {
					const tool = toolsDatabase.find(t => t.name === stat.name);
					console.log(`❌ ${stat.name} (0/${stat.relevantScenarios} relevant scenarios)`);
					console.log(`   Category: ${tool.category}`);
					console.log(`   Support Type: ${Array.isArray(tool.supportType) ? tool.supportType.join(', ') : tool.supportType}`);
					console.log(`   Personas: ${tool.personaTypeMatch.slice(0, 3).join(', ')}${tool.personaTypeMatch.length > 3 ? '...' : ''}`);
					console.log(`   AI Dependency: ${tool.aiDependency} | Price: ${tool.price} | Complexity: ${tool.complexity}`);
					console.log('');
				});
			}

			// Sample scenarios
			console.log('\n\n📈 SAMPLE SCENARIO RESULTS');
			console.log('-'.repeat(100));
			const interestingScenarios = [
				scenarioResults.find(s => s.scenario.includes('Spatial Salamander')),
				scenarioResults.find(s => s.scenario.includes('Synthesis Starfish')),
				scenarioResults.find(s => s.scenario.includes('Video Vampire')),
				scenarioResults.find(s => s.scenario.includes('Debugging Druid')),
				scenarioResults.find(s => s.scenario.includes('Nebula Neko')),
				scenarioResults.find(s => s.scenario.includes('Note Nebula'))
			].filter(Boolean);

			interestingScenarios.forEach(scenario => {
				console.log(`\n${scenario.scenario}`);
				console.log('Top 2 Recommendations:');
				scenario.topTools.slice(0, 2).forEach((tool, i) => {
					console.log(`  ${i + 1}. ${tool.name.padEnd(35)} ${tool.percentage}% (score: ${tool.score.toFixed(1)})`);
				});
			});

			console.log('\n' + '='.repeat(100));
			console.log('✅ Analysis complete! Check the detailed output above.');
			console.log('💡 To view scenarios for a specific tool, use: window.getToolScenarios("Tool Name")');
			console.log('💡 To run analysis with detailed logging for a tool: window.testQuizCoverage("Tool Name")\n');

			// Store results for helper function
			window._lastCoverageResults = {
				toolScenarios,
				scenarioResults
			};

			// Return summary object
			return {
				totalScenarios: scenarioResults.length,
				totalTools: toolsDatabase.length,
				neverRecommended: neverRecommended.map(stat => stat.name),
				topTools: sortedByRate.slice(0, 20),
				toolScenarios,
				fullResults: scenarioResults
			};
		};

		// Helper function to view scenarios for a specific tool
		window.getToolScenarios = (toolName) => {
			if (!window._lastCoverageResults) {
				console.error('❌ Run window.testQuizCoverage() first!');
				return;
			}

			const scenarios = window._lastCoverageResults.toolScenarios[toolName];
			if (!scenarios || scenarios.length === 0) {
				console.log(`⚠️ ${toolName} was never recommended in any scenario`);
				return;
			}

			console.log(`\n📊 SCENARIOS FOR: ${toolName}`);
			console.log('='.repeat(100));
			console.log(`Total appearances in top 2: ${scenarios.length}`);
			console.log(`Times ranked #1: ${scenarios.filter(s => s.rank === 1).length}`);
			console.log(`Times ranked #2: ${scenarios.filter(s => s.rank === 2).length}\n`);

			// Group by rank
			const byRank = {};
			scenarios.forEach(s => {
				if (!byRank[s.rank]) byRank[s.rank] = [];
				byRank[s.rank].push(s);
			});

			Object.keys(byRank).sort().forEach(rank => {
				console.log(`\n🏆 Rank #${rank} (${byRank[rank].length} times):`);
				console.log('-'.repeat(100));
				byRank[rank].slice(0, 10).forEach(s => {
					console.log(`  ${s.scenario}`);
					console.log(`    → ${s.percentage}% (score: ${s.score.toFixed(1)})`);
				});
				if (byRank[rank].length > 10) {
					console.log(`  ... and ${byRank[rank].length - 10} more`);
				}
			});

			// Show scenarios with highest percentages
			console.log(`\n\n🔥 TOP 10 HIGHEST COMPATIBILITY SCENARIOS:`);
			console.log('-'.repeat(100));
			scenarios
				.sort((a, b) => b.percentage - a.percentage)
				.slice(0, 10)
				.forEach(s => {
					console.log(`  ${s.percentage}% (Rank #${s.rank}) - ${s.scenario}`);
				});

			return scenarios;
		};

		console.log('💡 Quiz coverage testing available!');
		console.log('   - Run window.testQuizCoverage() to analyze all scenarios');
		console.log('   - Run window.testQuizCoverage("Tool Name") for detailed logging of a specific tool');
		console.log('   - Run window.getToolScenarios("Tool Name") to see which scenarios recommend a tool');
	}, []);

		// Cosmic background and font
		return (
			<div className="relative min-h-screen flex flex-col items-center justify-center p-4" style={{
				fontFamily: `'Space Grotesk', sans-serif`,
				background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)',
				color: 'white',
				overflowX: 'hidden'
			}}>
				<StarField />

				{/* Download table callout - only show on opening page */}
				{currentQuestion === 0 && !showResults && (
					<a
						href={`${process.env.PUBLIC_URL}/Web_Tools_Table.xlsx`}
						download="Web_Tools_Table.xlsx"
						className="
							fixed z-50
							bottom-4 left-1/2 -translate-x-1/2
							md:bottom-auto md:top-4 md:right-4 md:left-auto md:translate-x-0
							px-3 py-1.5
							text-xs text-gray-400 hover:text-purple-300
							bg-gray-900/60 hover:bg-gray-800/80
							backdrop-blur-sm
							border border-gray-700/50 hover:border-purple-400/50
							rounded-full
							transition-all duration-300
							font-atkinson
							opacity-70 hover:opacity-100
							whitespace-nowrap
						"
					>
						Prefer an excel sheet? Download here!🌠
					</a>
				)}

				<div className="max-w-5xl w-full mx-auto z-10 px-4">
					<div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
									<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 font-silkscreen px-4 mx-auto" style={{ maxWidth: '100%' }}>
										<>
											<div className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent leading-tight text-center inline-block w-full animate-slide-in-left">
												Universe of Tools
											</div>
											<div className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent leading-tight text-center inline-block w-full animate-slide-in-right" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
												Persona Quest
											</div>
										</>
									</h1>
						<p className="text-sm sm:text-xs md:text-lg text-gray-300 max-w-2xl mx-auto font-atkinson px-2 text-center italic animate-fade-in" style={{ animationDuration: '1.5s', animationDelay: '0.5s', animationFillMode: 'both' }}>
							Beam through the glittering universe of web and AI tools to discover<br className="hidden md:block" /> the perfect ones for your creative & academic adventures! 💫
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="w-full">
							{!showResults ? (
								<div className="question-card rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full" style={{
									background: 'rgba(255,255,255,0.10)',
									backdropFilter: 'blur(10px)',
									border: '1px solid rgba(255,255,255,0.2)',
									boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)',
									animation: 'slideIn 0.5s ease-out forwards',
									opacity: 1,
									transform: 'translateY(0)'
								}}>
									{currentQuestion === 0 ? (
										// Q1: Orbiting Planets Layout
										<div className="flex flex-col items-center overflow-hidden">
											<div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-white text-center font-share-tech px-2">
												{quizQuestions[currentQuestion].icon && (
													<img
														key={`icon-q1-${currentQuestion}`}
														src={quizQuestions[currentQuestion].icon}
														alt="question icon"
														className="h-20 sm:h-24 md:h-32 w-auto mb-4 mx-auto object-contain animate-fade-in"
													/>
												)}
												{quizQuestions[currentQuestion].question}
											</div>
											<div className="relative w-full max-w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center overflow-visible px-4 sm:px-2" style={{ userSelect: 'none' }}>
												{/* Center Content - Orbit icon or Card + GO button */}
												<div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 10000 }}>
													<div className="flex flex-col items-center justify-center" style={{ pointerEvents: 'none', userSelect: 'none' }}>
														{typeof answers[currentQuestion] !== 'undefined' ? (
															<div className="flex flex-col items-center" style={{ marginTop: windowWidth < 400 ? '0.5rem' : windowWidth < 640 ? '0.75rem' : '2.5rem', pointerEvents: 'none', userSelect: 'none' }}>
																{/* Card when planet selected */}
																<div className="relative rounded-2xl sm:rounded-3xl p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-5 bg-white/20 backdrop-blur-md shadow-2xl text-center overflow-hidden flex flex-col items-center justify-center w-[115px] h-[95px] xs:w-[130px] xs:h-[105px] sm:w-[170px] sm:h-[140px] md:w-[200px] md:h-[165px] lg:w-[230px] lg:h-[180px]" style={{ zIndex: 1, pointerEvents: 'none', userSelect: 'none' }}>
																	<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient opacity-50"></div>
																	<h3 className="relative font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-0.5 xs:mb-1 sm:mb-1.5 md:mb-2 text-white font-silkscreen leading-tight px-1">
																		{quizQuestions[currentQuestion].options[answers[currentQuestion]].text.split(':')[0]}
																	</h3>
																	<p className="relative text-[10px] xs:text-xs sm:text-sm md:text-base text-cyan-100 font-atkinson leading-tight px-1">
																		{quizQuestions[currentQuestion].options[answers[currentQuestion]].text.split(':')[1]}
																	</p>
																</div>
																{/* GO! button below card - slight overlap */}
																<div className="pointer-events-auto" style={{ marginTop: windowWidth < 400 ? '-0.5rem' : windowWidth < 640 ? '-0.75rem' : '-1.25rem', zIndex: 2, position: 'relative', touchAction: 'manipulation', transform: windowWidth < 640 ? 'scale(0.85)' : 'scale(1)' }}>
																	<AiButton
																		onClick={() => {
																			if (currentQuestion < quizQuestions.length - 1) {
																				setCurrentQuestion(currentQuestion + 1);
																			} else {
																				setShowResults(true);
																			}
																		}}
																	>
																		GO!
																	</AiButton>
																</div>
															</div>
														) : (
															/* Orbit icon with multi stars on all sides */
															<div className="relative flex items-center justify-center" style={{ pointerEvents: 'none', userSelect: 'none' }}>
																<img src={multiStarsGif} alt="stars" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain opacity-70 absolute" style={{ transform: 'rotate(90deg)', top: windowWidth < 400 ? '-22px' : windowWidth < 640 ? '-26px' : '-35px', pointerEvents: 'none', userSelect: 'none' }} />
																<img src={multiStarsGif} alt="stars" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain opacity-70 absolute" style={{ left: windowWidth < 400 ? '-22px' : windowWidth < 640 ? '-26px' : '-35px', pointerEvents: 'none', userSelect: 'none' }} />
																<img src={orbitIcon} alt="orbit" className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain relative z-10" style={{ pointerEvents: 'none', userSelect: 'none' }} />
																<img src={multiStarsGif} alt="stars" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain opacity-70 absolute" style={{ right: windowWidth < 400 ? '-22px' : windowWidth < 640 ? '-26px' : '-35px', pointerEvents: 'none', userSelect: 'none' }} />
																<img src={multiStarsGif} alt="stars" className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain opacity-70 absolute" style={{ transform: 'rotate(270deg)', bottom: windowWidth < 400 ? '-22px' : windowWidth < 640 ? '-26px' : '-35px', pointerEvents: 'none', userSelect: 'none' }} />
															</div>
														)}
													</div>
												</div>

												{/* Orbiting Planets (no cards attached) */}
												<div className="pointer-events-auto" style={{ touchAction: 'manipulation', userSelect: 'none', zIndex: 10 }}>
													<OrbitingItems
														radiusPx={windowWidth < 400 ? 100 : windowWidth < 640 ? 120 : windowWidth < 768 ? 200 : 250}
														pauseOnHover={false}
														className="h-[280px] w-[280px] xs:h-[320px] xs:w-[320px] sm:h-[480px] sm:w-[480px] md:h-[520px] md:w-[520px] lg:h-[550px] lg:w-[550px]"
														items={quizQuestions[currentQuestion].options.map((option, idx) => {
															const planetIcons = [visualisIcon, textaraIcon, codionIcon, audioniaIcon, dataralisIcon, presentiraIcon, dimensioIcon, researaIcon];
															const isSelected = answers[currentQuestion] === idx;

															return (
																<button
																	key={idx}
																	onClick={(e) => {
																		e.stopPropagation();
																		const newAnswers = [...answers];
																		if (answers[currentQuestion] === idx) {
																			newAnswers[currentQuestion] = undefined;
																		} else {
																			newAnswers[currentQuestion] = idx;
																		}
																		setAnswers(newAnswers);
																	}}
																	className={`w-16 h-16 xs:w-18 xs:h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-purple-400/40 to-cyan-400/40 flex items-center justify-center p-3 xs:p-3.5 sm:p-4 md:p-5 lg:p-6 transition-all duration-300 ${isSelected ? 'scale-110' : 'hover:scale-105'} pointer-events-auto`}
																	style={{
																		boxShadow: isSelected
																			? '0 0 30px 10px rgba(34, 211, 238, 0.8), 0 0 60px 20px rgba(167, 139, 250, 0.6)'
																			: '0 8px 32px 0 rgba(31,38,135,0.37)',
																		touchAction: 'manipulation',
																		userSelect: 'none'
																	}}
																>
																	<img src={planetIcons[idx]} alt={option.text.split(':')[0]} className="w-full h-full object-contain pointer-events-none" style={{ userSelect: 'none', WebkitUserDrag: 'none' }} />
																</button>
															);
														})}
													/>
												</div>
											</div>
										</div>
									) : (
										// Default question layout for all other questions
										<>
											{currentQuestion === 2 ? (
												<AnimatedBeam>
													<div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white flex flex-col items-center text-center font-share-tech px-2">
														{quizQuestions[currentQuestion].iconMultiple ? (
															<div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap sm:flex-nowrap max-w-full overflow-hidden px-2" style={{ lineHeight: '1.2' }}>
																{quizQuestions[currentQuestion].iconMultiple.map((iconSrc, idx) => (
																	<img
																		key={idx}
																		src={iconSrc}
																		alt={`icon ${idx + 1}`}
																		className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 opacity-0 animate-reveal-down"
																		style={{
																			animationDelay: `${idx * 0.15}s`,
																			animationDuration: '0.6s',
																			animationFillMode: 'forwards'
																		}}
																	/>
																))}
															</div>
														) : quizQuestions[currentQuestion].icon ? (
															<img
																key={`icon-beam-${currentQuestion}`}
																src={quizQuestions[currentQuestion].icon}
																alt="question icon"
																className="h-32 w-auto mb-8 object-contain animate-fade-in"
															/>
														) : (
															<span key={`emoji-beam-${currentQuestion}`} className="text-5xl mb-4 animate-fade-in">{quizQuestions[currentQuestion].emoji || '🌌'}</span>
														)}
														<span>
															{quizQuestions[currentQuestion].question}
														</span>
													</div>
												</AnimatedBeam>
											) : (
												<div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white flex flex-col items-center text-center font-share-tech px-2">
													{quizQuestions[currentQuestion].iconMultiple ? (
														<div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap sm:flex-nowrap max-w-full overflow-hidden px-2" style={{ lineHeight: '1.2' }}>
															{quizQuestions[currentQuestion].iconMultiple.map((iconSrc, idx) => (
																<img
																	key={idx}
																	src={iconSrc}
																	alt={`icon ${idx + 1}`}
																	className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 opacity-0 animate-reveal-up"
																	style={{
																		animationDelay: `${idx * 0.15}s`,
																		animationDuration: '0.6s',
																		animationFillMode: 'forwards'
																	}}
																/>
															))}
														</div>
													) : quizQuestions[currentQuestion].icon ? (
														<img
															key={`icon-${currentQuestion}`}
															src={quizQuestions[currentQuestion].icon}
															alt="question icon"
															className="h-32 w-auto mb-8 object-contain animate-fade-in"
														/>
													) : (
														<span key={`emoji-${currentQuestion}`} className="text-5xl mb-4 animate-fade-in">{quizQuestions[currentQuestion].emoji || '🌌'}</span>
													)}
													<span>
														{quizQuestions[currentQuestion].question}
													</span>
												</div>
											)}
											<div className="grid gap-3 sm:gap-4 mt-6">
												{quizQuestions[currentQuestion].options.map((option, idx) => (
													<button
														key={idx}
														className={`option-btn p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-xl text-left transition-all duration-300 border-2 border-white/30 bg-white/10 hover:bg-white/20 hover:border-cyan-300 text-white font-medium font-atkinson text-xs sm:text-sm md:text-base lg:text-lg ${answers[currentQuestion] === idx ? 'selected' : ''}`}
														style={answers[currentQuestion] === idx ? {
															background: 'rgba(78,205,196,0.3)',
															borderColor: '#4ecdc4',
															color: 'white',
															fontWeight: 600
														} : {}}
														onClick={() => {
															// Allow changing answer for current question
															const newAnswers = [...answers];
															newAnswers[currentQuestion] = idx;
															setAnswers(newAnswers);
														}}
													>
														<div className="font-medium">{option.text}</div>
													</button>
												))}
											</div>
										</>
									)}
												{currentQuestion !== 0 && (
													<div className="flex mt-4 sm:mt-6 justify-between gap-1 xs:gap-2 sm:gap-4">
														{/* Previous button */}
														<button
															className="my-2 sm:my-4 md:my-6 lg:my-8 rainbow-border px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-[30px] xs:h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] text-white whitespace-nowrap"
															onClick={() => {
																if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
															}}
														>
															← Previous
														</button>

														{/* Next or See Results button */}
														{currentQuestion === quizQuestions.length - 1 ? (
															<AiButton
																onClick={() => {
																	if (typeof answers[currentQuestion] === 'undefined') return;
																	updateScoresFromAnswers();
																	setShowResults(true);
																}}
																disabled={typeof answers[currentQuestion] === 'undefined'}
															>
																See Results
															</AiButton>
														) : (
															<button
																onClick={() => {
																	if (typeof answers[currentQuestion] === 'undefined') return;
																	setCurrentQuestion(currentQuestion + 1);
																}}
																disabled={typeof answers[currentQuestion] === 'undefined'}
																className="my-2 sm:my-4 md:my-6 lg:my-8 rainbow-border px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center h-[30px] xs:h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] text-white whitespace-nowrap"
															>
																Next →
															</button>
														)}
													</div>
												)}
								</div>
							) : (
								<div className="result-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8" style={{
									background: 'linear-gradient(135deg, rgba(78,205,196,0.2), rgba(255,107,107,0.2))',
									backdropFilter: 'blur(15px)',
									border: '2px solid rgba(78,205,196,0.5)',
									boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)'
								}}>
									<div className="text-center mb-6 sm:mb-8">
										<h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-cyan-200 font-silkscreen flex flex-col items-center px-2">
											<span>Farewell Gifts from</span>
											<span>{getCreatureName()}!</span>
										</h2>
										<p className="text-xs sm:text-sm md:text-base lg:text-lg text-cyan-100 italic font-share-tech px-2">"These magical tools are perfectly chosen for your unique cosmic style. Use them well on your future adventures across the digital galaxy!"</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
										{recommendations.slice(0, 2).map((tool, idx) => (
											<div key={tool.id} className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-5 md:p-6 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 flex flex-col items-center">
												<h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white font-silkscreen text-center">{tool.name}</h4>
												<p className="text-gray-200 text-center leading-relaxed mb-2 font-atkinson text-xs sm:text-sm md:text-base">{tool.shortDescription || tool.description}</p>
												<div className="mt-4 mb-4 flex flex-col items-center w-full">
													{/* Ring Chart */}
													<RingChart percentage={tool.compatibilityPercentage} delay={idx * 200} />
													<span className="text-xs sm:text-sm text-cyan-200 mt-2 font-share-tech text-center"><span className="not-italic">₊˚⊹♡</span> cosmic compatibility <span className="not-italic">♡⊹˚₊</span></span>
												</div>

												{/* Why This Matches You */}
												{tool.reasons && (
													<div className="w-full mt-3 mb-3">
														<h5 className="text-sm sm:text-base font-bold text-cyan-200 mb-2 font-share-tech">Why This Matches You:</h5>
														<ul className="text-xs sm:text-sm text-cyan-100 space-y-1 font-atkinson">
															{tool.reasons.supportType && tool.reasons.supportType.map((reason, i) => (
																<li key={`support-${i}`} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">❤︎</span>
																	<span className="text-left">{reason}</span>
																</li>
															))}
															{tool.reasons.aiPreference && tool.reasons.aiPreference.map((reason, i) => (
																<li key={`ai-${i}`} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">❤︎</span>
																	<span className="text-left">{reason}</span>
																</li>
															))}
															{tool.reasons.pricePreference && tool.reasons.pricePreference.map((reason, i) => (
																<li key={`price-${i}`} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">❤︎</span>
																	<span className="text-left">{reason}</span>
																</li>
															))}
															{tool.reasons.collaborationPreference && tool.reasons.collaborationPreference.map((reason, i) => (
																<li key={`collab-${i}`} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">❤︎</span>
																	<span className="text-left">{reason}</span>
																</li>
															))}
															{tool.reasons.learningStyle && tool.reasons.learningStyle.map((reason, i) => (
																<li key={`learning-${i}`} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">❤︎</span>
																	<span className="text-left">{reason}</span>
																</li>
															))}
														</ul>
													</div>
												)}

												{/* Strengths */}
												{tool.strengths && tool.strengths.length > 0 && (
													<div className="w-full mt-3 mb-3">
														<h5 className="text-sm sm:text-base font-bold text-green-300 mb-2 font-share-tech">Strengths:</h5>
														<ul className="text-xs sm:text-sm text-gray-100 space-y-1 font-atkinson">
															{tool.strengths.slice(0, 3).map((strength, i) => (
																<li key={i} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">✓</span>
																	<span className="text-left">{strength}</span>
																</li>
															))}
														</ul>
													</div>
												)}

												{/* Weaknesses */}
												{tool.weaknesses && tool.weaknesses.length > 0 && (
													<div className="w-full mt-3 mb-3">
														<h5 className="text-sm sm:text-base font-bold text-orange-300 mb-2 font-share-tech">Considerations:</h5>
														<ul className="text-xs sm:text-sm text-gray-100 space-y-1 font-atkinson">
															{tool.weaknesses.slice(0, 3).map((weakness, i) => (
																<li key={i} className="flex items-start">
																	<span className="mr-2 flex-shrink-0">⚠</span>
																	<span className="text-left">{weakness}</span>
																</li>
															))}
														</ul>
													</div>
												)}

												<a
													href={tool.url}
													target="_blank"
													rel="noopener noreferrer"
													className="mt-4 text-cyan-200 hover:underline font-silkscreen text-xs sm:text-sm md:text-base"
													onClick={() => {
														trackQuizEvent('tool_clicked', {
															tool_name: tool.name,
															tool_url: tool.url,
															tool_rank: idx + 1,
															compatibility_percentage: tool.compatibilityPercentage,
															tool_category: tool.category,
															tool_price: tool.price
														});
													}}
												>
													Chart a Course °⋆.ᯓ★
												</a>
											</div>
										))}
									</div>
									<div className="text-center mt-6 sm:mt-8 space-y-4">
										<button
											onClick={() => setShowSummaryTable(true)}
											className="px-6 py-3 text-white font-silkscreen rounded-lg text-sm sm:text-base rainbow-gradient-button relative overflow-hidden"
										>
											₊˚⊹ View Top 10 Tools Summary ⊹˚₊
										</button>
										<div>
											<AiButton onClick={resetQuiz}>
												Explore Again
											</AiButton>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				{/* Removed copyright footer */}
				</div>
				{/* Custom styles for glass, twinkle, etc. */}
						<style>{`
							.question-card, .result-card {
								transition: box-shadow 0.3s, border 0.3s, background 0.3s;
							}
							.option-btn {
								background: rgba(255,255,255,0.10);
								border: 2px solid rgba(255,255,255,0.3);
								transition: all 0.3s ease;
							}
							.option-btn:hover {
								background: rgba(255,255,255,0.20);
								border-color: #4ecdc4;
								transform: translateY(-2px);
							}
							.option-btn.selected {
								background: rgba(78,205,196,0.3);
								border-color: #4ecdc4;
							}
							@keyframes slideIn { to { transform: translateY(0); opacity: 1; } }
							/* AI Button Glow (Animata style) */
							.ai-glow-btn.ai-glow {
								background: linear-gradient(90deg, #0fffc3 0%, #7e0fff 100%);
								color: #fff;
								box-shadow: 0 0 16px 4px #7e0fff55, 0 0 32px 8px #0fffc355;
								border: none;
							}
							.ai-glow-border {
								position: absolute;
								inset: 0;
								border-radius: 9999px;
								pointer-events: none;
								z-index: 1;
								box-shadow: 0 0 24px 8px #0fffc3, 0 0 48px 16px #7e0fff;
								animation: ai-glow-border 2s linear infinite;
							}
							@keyframes ai-glow-border {
								0% { box-shadow: 0 0 24px 8px #0fffc3, 0 0 48px 16px #7e0fff; }
								50% { box-shadow: 0 0 32px 12px #7e0fff, 0 0 64px 24px #0fffc3; }
								100% { box-shadow: 0 0 24px 8px #0fffc3, 0 0 48px 16px #7e0fff; }
							}
							@keyframes rainbow-glow {
								0% { filter: hue-rotate(0deg); }
								100% { filter: hue-rotate(360deg); }
							}
							@keyframes meteor {
								0% { transform: translateY(-20%) translateX(-50%); opacity: 0; }
								10% { opacity: 1; }
								90% { opacity: 1; }
								100% { transform: translateY(300%) translateX(-50%); opacity: 0; }
							}
							@keyframes reveal-up {
								0% { opacity: 0; transform: translateY(80%); }
								100% { opacity: 1; transform: translateY(0); }
							}
							@keyframes rotate-full {
								0% { transform: rotate(0deg); }
								100% { transform: rotate(360deg); }
							}
							@keyframes reveal-down {
								0% { opacity: 0; transform: translateY(-80%); }
								100% { opacity: 1; transform: translateY(0); }
							}
							@keyframes fade-in {
								0% { opacity: 0; }
								100% { opacity: 1; }
							}
							.rainbow-border {
								position: relative;
								background: transparent;
								border: 2px solid transparent;
								border-radius: 9999px;
								background-clip: padding-box;
								overflow: visible;
							}
							.rainbow-border::before {
								content: '';
								position: absolute;
								inset: -2px;
								border-radius: 9999px;
								padding: 2px;
								background: linear-gradient(90deg, #22d3ee, #a78bfa);
								-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
								-webkit-mask-composite: xor;
								mask-composite: exclude;
								pointer-events: none;
								z-index: 3;
							}
							.rainbow-border::after {
								content: '';
								position: absolute;
								inset: 0;
								border-radius: 9999px;
								background: transparent;
								transition: background 0.3s ease;
								z-index: 2;
							}
							.rainbow-border:hover::after {
								background: rgba(255,255,255,0.10);
							}
							.rainbow-border:hover {
								box-shadow: 0 0 20px 8px rgba(34, 211, 238, 0.4), 0 0 40px 12px rgba(167, 139, 250, 0.3);
							}

							/* Rainbow gradient button animation */
							.rainbow-gradient-button {
								background: linear-gradient(90deg,
									rgba(255, 51, 153, 0.6),
									rgba(255, 153, 51, 0.6),
									rgba(255, 221, 0, 0.6),
									rgba(0, 212, 255, 0.6),
									rgba(85, 153, 255, 0.6),
									rgba(170, 102, 255, 0.6),
									rgba(255, 51, 153, 0.6),
									rgba(255, 153, 51, 0.6),
									rgba(255, 221, 0, 0.6),
									rgba(0, 212, 255, 0.6),
									rgba(85, 153, 255, 0.6),
									rgba(170, 102, 255, 0.6),
									rgba(255, 51, 153, 0.6)
								);
								background-size: 200% 100%;
								animation: rainbow-gradient-animation 15s linear infinite;
								border: none;
								cursor: pointer;
								transition: transform 0.2s ease, box-shadow 0.3s ease;
							}
							.rainbow-gradient-button:hover {
								transform: translateY(-2px);
								box-shadow: 0 8px 24px rgba(255, 51, 153, 0.3), 0 4px 12px rgba(85, 153, 255, 0.3);
							}
							.rainbow-gradient-button:active {
								transform: translateY(0);
							}
							@keyframes rainbow-gradient-animation {
								0% { background-position: 0% 50%; }
								100% { background-position: 200% 50%; }
							}
						`}</style>

			{/* Summary Table Modal */}
			{showResults && recommendations.length > 0 && (
				<SummaryTableModal
					show={showSummaryTable}
					onClose={() => setShowSummaryTable(false)}
					topTools={recommendations}
					quizQuestions={quizQuestions}
					answers={answers}
				/>
			)}
			</div>
	);
}
export default PersonalityQuizApp;