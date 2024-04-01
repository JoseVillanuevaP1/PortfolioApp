import React from 'react';
import NavigationMenu from './NavigationMenu';
import { SearchButton } from './SearchButton';
import { ThemeSwitch } from './ThemeSwitch';


const Logo = () => {
    return (
        <h1>
            <a className="navbar-brand" href="#">
                <i className="fab fa-github"></i> Mi Portafolio
            </a>
        </h1>
    );
}

const HireMeButton = () => {
    return (
        <div className="header-btn mx-lg-2 HeaderButton">
            <a className="btn btn-style btn-primary mr-lg-5" href="#"> Contáctame </a>
        </div>
    );
}

const HeaderView = () => {
    return (
        <header id="site-header" className="main-header fixed-top">
            <div className="container w3HeaderLogoEd">
                <nav className="navbar navbar-expand-lg stroke">

                    {/* Logo */}
                    <Logo />

                    <button className="navbar-toggler collapsed bg-gradient" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        {/* Menu Item */}
                        <NavigationMenu />

                        {/* Botón de Contratación */}
                        <HireMeButton />

                        {/* Botón de Búsqueda */}
                        <SearchButton />

                        {/* Interruptor de Tema */}
                        <ThemeSwitch />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderView;
