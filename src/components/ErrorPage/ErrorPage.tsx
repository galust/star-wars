import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <div>404</div>
            <div>It seems you entered wrong page</div>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
};

export default ErrorPage;
