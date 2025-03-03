import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/components/Home';
import TextPost from '../src/components/posts/TextPost';
import PhotoPost from '../src/components/posts/PhotoPost';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text-post" element={<TextPost />} />
            <Route path="/photo-post" element={<PhotoPost />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes; 