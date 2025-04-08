import React, { useState, useEffect } from 'react';

import '../loading.scss';

const LoadingSpinner: React.FC = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots.length < 3) {
                    return prevDots + '.';
                } else {
                    return '';
                }
            });
        }, 300);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="loading-spinner-container mt-3">
            <div className="spinner"></div>
            <p className="loading-text">Loading Projects{dots}</p>
        </div>
    );
};

export default LoadingSpinner;
