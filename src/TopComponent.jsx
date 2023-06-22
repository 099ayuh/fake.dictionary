import React, { useState } from 'react'
import './Search.css'
const Audio = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className='topContainer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" className="icon header__icon header__icon--logo"><g fill="none" fillRule="evenodd" stroke="#6573f3" strokeLinecap="round" strokeWidth="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"></path><path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"></path><path d="M11 9h12"></path></g></svg>
            {/* dropdown to change font */}
            {/* dark/light mode toggle button */}
            {/* a sun/moon icon */}

           {/*  <div className={isDarkMode ? 'dark' : 'light'}>
                <span onClick={toggleDarkMode}
                    className={isDarkMode ? 'fas fa-moon dark-icon' : 'fas fa-sun light-icon'}>
                </span>
            </div> */}
        </div>
    )
}

export default Audio;
