import ReactGA from 'react-ga4';

// Initialize Google Analytics
const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-PF7YQKP864';

export const initGA = () => {
  // Only initialize if we have a valid measurement ID and we're not in development
  if (MEASUREMENT_ID !== 'G-XXXXXXXXXX' && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        anonymize_ip: true, // Anonymize IP addresses for privacy
      },
    });
    console.log('Google Analytics initialized');
  } else if (process.env.NODE_ENV === 'development') {
    console.log('Google Analytics disabled in development mode');
  }
};

// Track page views
export const logPageView = (path) => {
  if (MEASUREMENT_ID !== 'G-XXXXXXXXXX' && process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

// Track custom events
export const logEvent = (category, action, label = null, value = null) => {
  if (MEASUREMENT_ID !== 'G-XXXXXXXXXX' && process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track quiz-specific events
export const trackQuizEvent = (eventName, eventParams = {}) => {
  if (MEASUREMENT_ID !== 'G-XXXXXXXXXX' && process.env.NODE_ENV === 'production') {
    ReactGA.event(eventName, eventParams);
  }
};

// Example quiz events you can track:
// trackQuizEvent('quiz_started', { planet: 'Visualis' });
// trackQuizEvent('quiz_completed', { creature: 'Nebula Neko', top_tool: 'Midjourney' });
// trackQuizEvent('tool_clicked', { tool_name: 'Canva', tool_url: 'https://canva.com' });
