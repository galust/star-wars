import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Characters />} />
        </Routes>
    );
};

export default Router;
