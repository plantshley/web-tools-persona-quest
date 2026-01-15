# Google Analytics Setup Guide

This guide will help you set up Google Analytics to track visitors and user behavior in the Universe of Tools Persona Quest app.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Start measuring"** or **"Admin"** (gear icon)
4. Create a new property:
   - **Account name**: "Universe of Tools" (or your preference)
   - **Property name**: "Web Tools Persona Quest"
   - **Time zone**: Your timezone
   - **Currency**: Your currency

## Step 2: Set Up a Data Stream

1. In your property settings, go to **Data Streams**
2. Click **"Add stream"** > **"Web"**
3. Enter your website details:
   - **Website URL**: `https://[your-username].github.io/web-tools-persona-quest/`
   - **Stream name**: "GitHub Pages"
4. Click **"Create stream"**
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 3: Add Your Measurement ID to the App

### Option A: Using .env file (Local Development)

1. Open the `.env` file in the root directory
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   REACT_APP_GA_MEASUREMENT_ID=G-ABC123DEF4
   ```
3. Save the file
4. Restart your development server (`npm start`)

### Option B: Using .env.production (For Deployment)

1. Open the `.env.production` file in the root directory
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   REACT_APP_GA_MEASUREMENT_ID=G-ABC123DEF4
   ```
3. Save and commit this file to git
4. Deploy with `npm run deploy`

**Note**: The `.env` file is gitignored for privacy, but `.env.production` can be committed since the GA ID will be public in your deployed app anyway.

## Step 4: Deploy and Test

1. Update your Measurement ID in `.env.production`
2. Deploy your app:
   ```bash
   npm run deploy
   ```
3. Visit your deployed site and perform some actions
4. Check Google Analytics (Real-time reports) to see if events are being tracked

## What's Being Tracked

### Automatic Tracking
- **Page views**: Every time the app loads
- **User sessions**: Duration and engagement
- **Geographic data**: Where users are located
- **Device info**: Desktop vs mobile, browser types

### Custom Events You Can Add
The analytics utility (`src/utils/analytics.js`) provides functions to track custom events:

```javascript
import { trackQuizEvent, logEvent } from '../utils/analytics';

// Track when quiz starts
trackQuizEvent('quiz_started', {
  planet: 'Visualis'
});

// Track quiz completion
trackQuizEvent('quiz_completed', {
  creature: 'Nebula Neko',
  top_tool: 'Midjourney',
  completion_time_seconds: 120
});

// Track tool clicks
trackQuizEvent('tool_clicked', {
  tool_name: 'Canva',
  tool_url: 'https://canva.com',
  position: 1
});

// Track question answers
trackQuizEvent('question_answered', {
  question_number: 2,
  answer: 'Nebula Neko'
});

// Generic event tracking
logEvent('Navigation', 'Button Click', 'Restart Quiz');
```

## Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Key reports to check:
   - **Real-time**: See current visitors
   - **Reports > Engagement > Events**: See custom events
   - **Reports > User attributes**: Demographics and interests
   - **Reports > Tech > Overview**: Devices and browsers
   - **Reports > Acquisition**: How users found your site

## Privacy Considerations

- IP addresses are anonymized by default (`anonymize_ip: true`)
- Google Analytics only tracks in production mode (not during local development)
- Consider adding a cookie consent banner if required by your jurisdiction (GDPR, CCPA, etc.)

## Troubleshooting

### Analytics not showing data
1. Check that your Measurement ID is correct in `.env.production`
2. Verify the app is in production mode (`npm run build` then `npm run deploy`)
3. Check browser console for any JavaScript errors
4. Use Google Analytics DebugView to see events in real-time
5. Wait 24-48 hours for data to fully populate in reports

### Events not tracking
1. Open browser console and look for "Google Analytics initialized" message
2. Make sure you're testing on the deployed site, not localhost
3. Check that event names follow GA4 naming conventions (no spaces, use underscores)

### Development mode tracking
Analytics is disabled in development (`npm start`) to avoid polluting your data. If you want to test tracking locally, temporarily change this line in `src/utils/analytics.js`:
```javascript
if (MEASUREMENT_ID !== 'G-XXXXXXXXXX' && process.env.NODE_ENV === 'production') {
```
to:
```javascript
if (MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
```

## Additional Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [react-ga4 Documentation](https://github.com/codler/react-ga4)
