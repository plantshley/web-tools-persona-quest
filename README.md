# Universe of Tools Persona Quest 🌌

An interstellar journey through the cosmos of creativity! This interactive personality quiz helps students and creators discover the perfect web and AI tools for their projects. Embark on a space-themed adventure where you'll explore different planets representing creative domains and meet cosmic creatures that match your personality.

## 🌟 Features

- **Extensive Tool Database**: 120+ carefully curated web and AI tools across 8 major categories
- **Intelligent Recommendation System**: Sophisticated multi-dimensional scoring algorithm that matches users with tools based on:
  - Creative output type (visual, text, code, audio, data, 3D, presentations, research)
  - Personality-based "creature" archetypes
  - Work style and learning preferences
  - Budget constraints and free tier availability
  - AI dependency preferences
  - Collaboration style and time pressure
- **Immersive Space Theme**: Journey through 8 cosmic planets, each representing a creative domain:
  - 🎨 **Visualis**: Visual design and graphics
  - ✍️ **Textara**: Writing and text generation
  - 💻 **Codion**: Coding and web/app building
  - 🎵 **Audiona**: Audio and music creation
  - 📊 **Dataralis**: Data analysis and visualization
  - 📽️ **Presentira**: Presentations and interactive content
  - 🎮 **Dimensio**: 3D modeling, spatial design, and games
  - 📚 **Researa**: Research, knowledge management, and learning
- **Personalized Results**: Top 10 tool recommendations with detailed information including strengths, weaknesses, pricing, and complexity levels
- **Summary Table**: Comprehensive overview of recommendations with attribute matching visualization

## 🎨 Design

The app features an enchanting space-themed aesthetic with:
- Deep cosmic background with twinkling stars
- Planet-themed navigation with unique icons for each domain
- Pastel neon gradients (cyan, purple, pink, yellow)
- Smooth animations and transitions throughout
- Glassmorphism cards with glowing borders
- Responsive design optimized for both desktop and mobile
- Retro-futuristic typography using Silkscreen and Share Tech Mono fonts

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-tools-quiz.git
cd ai-tools-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run the deploy command:
```bash
npm run deploy
```

## 🛠 Customization

### Adding New Tools
Edit the `toolsDatabase` array in `src/utils/toolsDatabase.js` to add new tools with the following structure:

```javascript
{
  id: "unique-id",
  name: "Tool Name",
  url: "https://tool-website.com",
  shortDescription: "Brief description",
  supportType: "visual|text|audio|coding|data",
  category: "category name",
  aiDependency: "ai-only|ai-optional|manual-only",
  price: "free|freemium|paid",
  freeTierAccess: "robust|somewhat-limited|very-limited",
  personaTypeMatch: ["trait1", "trait2", "trait3"],
  timePressure: "low|medium|high",
  strengths: ["strength1", "strength2", "strength3"],
  weaknesses: ["weakness1", "weakness2"],
  complexity: "beginner|intermediate|advanced"
}
```

### Modifying Questions
Update the `quizQuestions` array in `src/components/PersonalityQuiz_tableVer.js` to add or modify quiz questions. Each question should have:
- Unique id
- Question text
- Array of options with scoring for different personality traits and tool attributes

### Updating the Excel Database
Run `node updateExcel.js` to sync the toolsDatabase with the Excel spreadsheet (`Web_Tools_Database.xlsx`). The script creates an "Updates" tab with all tools formatted for easy review.

### Styling Changes
- Colors and themes can be modified in `tailwind.config.js`
- Custom animations are defined in `src/index.css`
- Component-specific styling uses Tailwind utility classes

## 🎯 Quiz Logic

The recommendation algorithm uses a sophisticated multi-factor scoring system:

1. **Question 1 - Planet Selection**: Determines primary support type and creative domain
2. **Question 2 - Creature Archetype**: Identifies specific personality traits, strengths, and sub-categories
3. **Additional Questions**: Refine recommendations based on:
   - Color preferences (aesthetic and work style indicators)
   - Collaboration style (solo vs. team-oriented)
   - Learning approach (dive-in vs. manual-guided)
   - Budget constraints (free vs. paid preferences)
   - AI dependency preferences (AI-only, AI-optional, or manual tools)
   - Time pressure (fast prototyping vs. quality-focused)
   - Motivation (perfection vs. efficiency)

The scoring system assigns weighted points to tools based on:
- **Category match** (4x weight)
- **Persona type match** (5x for Q2 personas, 2x for others)
- **AI dependency match** (4x weight)
- **Price preference** (3x weight)
- **Strengths alignment** (5x for Q2 strengths, 2x for others)
- **Complexity tolerance**
- **Free tier access quality**

## 📊 Tools Included

The quiz includes 120+ tools across categories:

### Visualization & Design
Canva, Figma, FigJam, Miro, Excalidraw, Beautiful.ai, Genially, ArcGIS, QGIS, Tableau, Power BI, Julius AI, Flourish, Infogram, Whimsical, Google Looker Studio, Visio

### Image Generation
Midjourney, DALL-E, Leonardo.ai, Adobe Firefly, Stable Diffusion, Runway ML, Ideogram, Freepik AI

### Writing & Text Generation
ChatGPT, Claude, Gemini, Grammarly, QuillBot, Notion AI, Wordtune, Jasper

### Web & App Builders
Loveable.dev, Bolt.new, Glide, Softr, Flutterflow, Bubble, Webflow, Framer, Wix, Squarespace, Replit

### Speech & Voice Interaction
ElevenLabs, Speechify, Otter.ai, Google Cloud TTS, Descript, Adobe Podcast

### Audio & Music Generation
Suno, Udio, Mubert, Amper, Boomy, Audacity, Artlist.io

### Video Generation & Editing
Runway ML, Pika Labs, Synthesia, HeyGen, CapCut, Adobe Premiere, DaVinci Resolve, Clipchamp

### 3D Modeling & Games
Blender, Daz Studio, Spline, Meshy, Luma AI, Unity, Unreal Engine, Godot, Roblox Studio, Meta Horizon

### Research & Learning Platforms
Notion, Coda, Obsidian, Zotero, Scholarcy, Perplexity, Elicit, Consensus, ChatPDF, Claude

And many more!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌌 Creature Archetypes

Each planet has unique creature companions that represent different creative personalities:

- **Visualis**: Diagramming Druid, Nebula Neko, Video Vampire, Collagist Chimera
- **Textara**: Paper Phoenix, Story Seiryū, Grammar Gremlin, Inspiration Imp, Paraphrase Pixie
- **Codion**: Debugging Druid, App Angel, Web Weaver, Experience Elemental
- **Audiona**: Speech Sprite, Voiceover Veery, Melody Mermaid, Podcast Pulsar
- **Dataralis**: Stat Starling, Chart Chameleon, Synthesis Starfish, Map Marmot
- **Presentira**: Slide Seraph, Frame Firefly, Poll Pegasus, Infographic Imp
- **Dimensio**: Render Raccoon, Generative Griffin, Pixel Pegasus, Spatial Salamander
- **Researa**: Note Nebula, Abstract Axolotl, Focus Firefly, Collaboration Kitsune

## ✨ Acknowledgments

- Built with React and Tailwind CSS
- Icons by custom pixel art and emoji designs
- Cosmic theme inspired by space exploration and creativity
- Created to help engineering and art students discover the perfect tools for their creative adventures
- Developed as part of an Air Quality Lab art + engineering project