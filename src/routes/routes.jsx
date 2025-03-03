import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import TextPost from '../components/posts/TextPost';
import PhotoPost from '../components/posts/PhotoPost';
import SocialMediaAccounts from '../components/SocialMediaAccounts';
import AIModels from '../components/AIModels';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/forgot-password" element={!user ? <ForgotPassword /> : <Navigate to="/" />} />

            {/* Protected Routes */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/text-post" element={user ? <TextPost /> : <Navigate to="/login" />} />
            <Route path="/photo-post" element={user ? <PhotoPost /> : <Navigate to="/login" />} />
            <Route path="/social-media-accounts" element={user ? <SocialMediaAccounts /> : <Navigate to="/login" />} />
            <Route path="/ai-models" element={user ? <AIModels /> : <Navigate to="/login" />} />
            
            {/* Fallback Route */}
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
    );
};

export default AppRoutes; 