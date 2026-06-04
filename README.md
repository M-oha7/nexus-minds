# Nexus Minds

A complete, production-ready React app for mind analysis and personalized system building using Claude AI.

## Features

- **Bilingual Support**: Full Arabic/English language switching with RTL/LTR support
- **Mind Analysis Test**: 10 deep questions with reflection cards
- **Claude AI Integration**: Personalized mind type analysis and system building
- **Dark Theme**: Beautiful dark design system with smooth transitions
- **Mobile Responsive**: Fully responsive design for all devices
- **Smooth Animations**: 300ms fade and slide transitions between pages

## Tech Stack

- React 18 + Vite
- React Router for navigation
- i18next for internationalization
- Claude AI API (claude-sonnet-4-20250514)
- Pure CSS (no external UI libraries)

## Design System

- Background: `#0a0a0f`
- Cards: `#0f0f18`
- Border: `#2a2a3a`
- Accent: `#534AB7`
- Accent Light: `#EEEDFE`
- Text Primary: `#e8e4d9`
- Text Secondary: `#7a7a8a`
- Font: system-ui

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Your Claude API Key**:
   - Open `src/utils/claudeAPI.js`
   - Replace `YOUR_ANTHROPIC_API_KEY` with your actual Anthropic API key

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
nexus-minds/
├── src/
│   ├── pages/
│   │   ├── Landing.jsx          # Landing page
│   │   ├── DeepTest.jsx         # 10-question test
│   │   ├── Results.jsx          # Results with Claude AI
│   │   └── PersonalizedSystem.jsx # Personalized system
│   ├── utils/
│   │   └── claudeAPI.js         # Claude AI integration
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # Entry point
│   ├── i18n.js                  # Internationalization config
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages

### 1. Landing Page
- Introduction to the app
- Language toggle (AR/EN)
- Start test button

### 2. Deep Test Page
- 10 questions shown one at a time
- Progress bar
- Reflection cards after each answer
- Smooth transitions

### 3. Results Page
- Mind type analysis from Claude AI
- Personalized description
- Strengths and challenges
- Insight sentence
- Build system button

### 4. Personalized System Page
- Custom system built by Claude AI
- Expandable pattern cards
- Daily routine recommendations
- First step and warning boxes
- Core rule
- Share functionality

## API Integration

The app uses Claude AI API for:
1. **Mind Analysis**: Analyzes the 10 answer tags to determine mind type
2. **System Building**: Creates a personalized system based on mind type and answers

Both features have graceful fallbacks if the API fails.

## Language Support

The app supports:
- Arabic (RTL layout)
- English (LTR layout)

Language can be toggled via the button in the top-right corner.

## Notes

- The app uses Claude Sonnet 4 model (claude-sonnet-4-20250514)
- All transitions are 300ms for smooth UX
- Mobile-first responsive design
- No external UI libraries - pure CSS
- Graceful degradation if API fails

## License

This project is for demonstration purposes.
