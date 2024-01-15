import React, { useState } from 'react';
import BacklogHeader from '../components/BacklogHeader';
import BacklogQuestions from '../components/BacklogQuestions';
import BacklogThemes from '../components/BacklogThemes';

const Backlog = () => {
    const [activeTab, setActiveTab] = useState('questions');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='flex flex-row'>
            <BacklogHeader onTabChange={handleTabChange} />
            <div className='flex-grow'>
                <img src="./img/grand-logo.PNG" alt="logo" className='ml-auto mr-auto w-1/4 mt-8' />
                {activeTab === 'questions' && <BacklogQuestions />}
                {activeTab === 'themes' && <BacklogThemes />}  {/* Rend le composant des thèmes si l'onglet est 'themes' */}
                {/* Ajoutez d'autres composants ici pour d'autres onglets */}
            </div>
        </div>
    );
};

export default Backlog;
