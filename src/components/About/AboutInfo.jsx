import React from 'react';
import { MyInfo } from './MyInfo';

// Componente para los enlaces de redes sociales en la sección "Acerca de"
const FollowSocial = () => {
    return (
        <ul className="follow-social mt-lg-5 mt-4">
            <li><h5 className="me-md-3">Sígueme en:</h5></li>
            <li><a href="https://www.behance.net/"><span className="fab fa-github"></span></a></li>
            <li><a href="https://in.linkedin.com/company/w3layouts"><span className="fab fa-linkedin-in"></span></a></li>
            <li><a href="https://facebook.com/w3layouts"><span className="fab fa-facebook-f"></span></a></li>
            <li><a href="https://twitter.com/W3layouts"><span className="fab fa-twitter"></span></a></li>
        </ul>
    );
}

export const AboutInfo = ({ title }) => {
    return (
        <div className="col-lg-7 w3l-about-info px-lg-4 align-center">
            <h6 className="w3l-title-small mb-1">Mi Biografia</h6>
            <h3 className="w3l-title-main mb-2">{title}</h3>
            <p className="my-4 pe-lg-5">Estudiante de Ingeniería especializado en desarrollo y programación de software. ¡Puedo darle a tu negocio un nuevo comienzo de inmediato! ¡Contáctame y hablaremos de futuros proyectos!</p>
            <MyInfo
                name={'Jose Moises Villanueva'}
                phone={'+51 926 856 094'}
                email={'jmvilla2301@gmail.com'}
                street={'Lima, Peru'}
            />
            <FollowSocial />
            <div className="w3l-btn">
                <a href="#" className="btn btn-style btn-primary mt-lg-5 mt-4 me-md-3">Contáctame</a>
                <a href="#" className="btn btn-style btn-secondary mt-lg-5 mt-4">Descargar CV</a>
            </div>
        </div>
    );
}