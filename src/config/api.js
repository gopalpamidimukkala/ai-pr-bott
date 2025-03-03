// API configuration
const isDevelopment = import.meta.env.MODE === 'development';

// In development, use localhost if VITE_API_URL is not set
// In production, VITE_API_URL must be set to the Railway URL
const API_BASE_URL = import.meta.env.VITE_API_URL || (isDevelopment ? 'http://localhost:5002' : '');

// Throw an error if API_BASE_URL is not set in production
if (!isDevelopment && !API_BASE_URL) {
    throw new Error('VITE_API_URL environment variable is not set in production mode');
}

export const API_ENDPOINTS = {
    GENERATE_CONTENT: `${API_BASE_URL}/api/posts/generate`,
    PHOTO_POST: `${API_BASE_URL}/api/posts/photo`,
    TEXT_POST: `${API_BASE_URL}/api/posts/text`,
    RECENT_POSTS: `${API_BASE_URL}/api/posts/recent`,
};

export default API_ENDPOINTS; 