import React from 'react';

import './Loader.scss';

const Loader: React.FC = () => {
    return (
        <div className="loader-layer flex-center">
            <div className="loader" />
        </div>
    );
};

export default Loader;
