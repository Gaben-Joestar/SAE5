import React, { useState, useEffect } from 'react';
import BacklogHeader from '../components/BacklogHeader';
import BacklogQuestions from '../components/BacklogQuestions';
import BacklogThemes from '../components/BacklogThemes';
import Cookies from 'js-cookie';
import BacklogLogin from '../components/BacklogLogin';

const Backlog = () => {
    const [activeTab, setActiveTab] = useState('questions');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const handleLogout = () => {
        // Supprimez le token des cookies et déconnectez l'utilisateur
        Cookies.remove('authToken');
        setIsLoggedIn(false);
    };

    return (
        <div className='flex flex-row'>

            {isLoggedIn ? (
                <>
                    <BacklogHeader onTabChange={handleTabChange} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
                    <div className='flex-grow'>
                        <img src="./img/grand-logo.PNG" alt="logo" className='ml-auto mr-auto w-1/4 mt-8' />
                        {activeTab === 'questions' && <BacklogQuestions />}
                        {activeTab === 'themes' && <BacklogThemes />}
                    </div>
                </>
            ) : (
                <BacklogLogin />
            )}

        </div>
    );
};

export default Backlog;
