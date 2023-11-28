import React from 'react';
import Header from '../components/Header';

const AjoutQuestion = () => {
    return (
        <div>
            <Header />


            <div className='ml-auto mr-auto'>
                <h1 className='inter-extra-bold'>PROPOSITION</h1>

                <div>
                    <div>
                        <label htmlFor="question">Question :</label>
                        <input type="text" name="question" id="question" />
                    </div>
                    <div>
                        <label htmlFor="theme">Thème :</label>
                        <input type="text" name="theme" id="theme" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AjoutQuestion;