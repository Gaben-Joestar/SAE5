import React from 'react';

const ProgressBar = ({ percentage }) => {
    return (
        <div className='progress-bar' style={{ '--progress': `${percentage}%` }}>
        </div>
    );
};

export default ProgressBar;