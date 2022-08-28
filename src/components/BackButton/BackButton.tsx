import React from 'react';
import { useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './../../pages/InnerPage/InnerPage.scss';

const BackButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <button className="back-button flex-center" onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon fontSize="large" />
        </button>
    );
};

export default BackButton;
