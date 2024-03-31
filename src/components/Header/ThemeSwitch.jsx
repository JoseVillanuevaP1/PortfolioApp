import React, { useEffect } from 'react';
import { switchTheme } from '@utils/theme-change';


export const ThemeSwitch = () => {
    useEffect(() => {
        
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        toggleSwitch.addEventListener('change', switchTheme, false);

        return () => {
            toggleSwitch.removeEventListener('change', switchTheme);
        };
    }, []);

    return (
        <div className="cont-ser-position DarkandLight">
            <nav className="navigation">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="mode-container">
                            <i className="gg-sun"></i>
                            <i className="gg-moon"></i>
                        </div>
                    </label>
                </div>
            </nav>
        </div>
    );
}