import React from 'react';

const BacklogHeader = ({ onTabChange }) => {
    return (
        <div className='flex flex-row items-center'>
            <div className='w-52 h-screen bg-C6DFDF flex flex-col text-center'>
                <ul className='py-6'>
                    <li className='mb-10'>
                        <h2 className='text-xl font-bold text-white underline'>Backlog</h2>
                    </li>
                    <li className='mb-2' onClick={() => onTabChange('questions')}>
                        <hr className='my-2 border-t border-white' />
                        <h3 className='text-lg font-semibold text-white'>Questions</h3>
                    </li>
                    <li className='mb-2' onClick={() => onTabChange('themes')}>
                        <hr className='my-2 border-t border-white' />
                        <h3 className='text-lg font-semibold text-white'>Thèmes</h3>
                    </li>
                    <li>
                        <hr className='my-2 border-t border-white' />
                        <h3 className='text-lg font-semibold text-white'>Se déconnecter</h3>
                        <hr className='my-2 border-t border-white' />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BacklogHeader;