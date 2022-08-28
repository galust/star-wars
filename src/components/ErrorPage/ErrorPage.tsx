import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './ErrorPage.scss';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box className="error-page flex-center">
            <Typography className="error-page-title">404</Typography>
            <Typography className="error-page-text" mb={3}>
                It seems you entered wrong page
            </Typography>

            <button className="error-button" onClick={() => navigate('/')}>
                Go Home
            </button>
        </Box>
    );
};

export default ErrorPage;
