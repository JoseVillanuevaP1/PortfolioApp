import React, { useEffect } from 'react';
import { moveNavigation, toggleSearch, closeNav } from '@utils/search.js';

export const SearchButton = () => {

    useEffect(() => {

        moveNavigation();
        const resizeListener = () => {
            !window.requestAnimationFrame ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };

    }, []);

    const handleSearchClick = (event) => {
        event.preventDefault();
        toggleSearch();
        closeNav();
    };

    return (
        <div id="search-right">
            <ul className="cd-header-buttons px-lg-2 HeaderSearch">
                <li>
                    <a className="cd-search-trigger" href="#cd-search" onClick={handleSearchClick}>
                        <span></span>
                    </a>
                </li>
            </ul>
            <div id="cd-search" className="cd-search">
                <form>
                    <input name="s" type="search" placeholder="¿Qué estas buscando?..." />
                </form>
            </div>
        </div>
    );
};
