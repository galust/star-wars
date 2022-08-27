import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Characters = lazy(() => import('./pages/Characters/Characters'));
const InnerPage = lazy(() => import('./pages/InnerPage/InnerPage'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

const Router: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/character/:id" element={<InnerPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
