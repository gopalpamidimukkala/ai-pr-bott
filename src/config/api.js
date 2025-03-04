// API configuration
const isDevelopment = import.meta.env.MODE === 'development';

// Get the API URL from environment variables or use the default for each environment
const API_BASE_URL = isDevelopment 
    ? 'http://localhost:5002'
    : 'https://ai-pr-bot-backend-production.up.railway.app';

// Log environment information
console.log('Current environment:', import.meta.env.MODE);
console.log('Frontend running on:', window.location.origin);
console.log('API Base URL:', API_BASE_URL);

// Throw an error if API_BASE_URL is not set in production
if (!isDevelopment && !API_BASE_URL) {
    throw new Error('VITE_API_URL environment variable is not set in production mode');
}

export const API_ENDPOINTS = {
    GENERATE_CONTENT: `${API_BASE_URL}/api/posts/generate`,
    PHOTO_POST: `${API_BASE_URL}/api/posts/photo`,
    TEXT_POST: `${API_BASE_URL}/api/posts/text`,
    RECENT_POSTS: `${API_BASE_URL}/api/posts/recent`,
    TEST_CONNECTION: `${API_BASE_URL}/api/linkedin/test`,
    TEST: `${API_BASE_URL}/api/test`
};

// Log all endpoints in development
if (isDevelopment) {
    console.log('Available API Endpoints:', API_ENDPOINTS);
}

// Add a function to test the connection
export const testBackendConnection = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.TEST);
        const data = await response.json();
        console.log('Backend connection test:', data);
        return data;
    } catch (error) {
        console.error('Backend connection test failed:', error);
        throw error;
    }
};

export default API_ENDPOINTS; 