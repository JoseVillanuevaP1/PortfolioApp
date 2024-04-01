import React, { useEffect } from 'react';
import './HomeComponentView.css'
import { initTypedTextEffect } from '@utils/typedTextEffect.js';

const HomeComponentView = () => {

    useEffect(() => {

        // Llamada a la función del efecto de texto tipeado
        initTypedTextEffect(["Software Eng.", "Web Developer", "FullStack Dev.", "Freelancer"]);

        // Cleanup function
        return () => {
            clearTimeout();
        };

    }, []);


    return (
        <>
            <section id="home" className="w3l-banner pt-5">
                <div className="container pt-lg-5 pt-md-4">
                    <div className="row pt-lg-5 pt-4">
                        <div className="col-lg-7 banner-info-grid pt-lg-0 pt-5 HomePageHeroHeader">
                            <h1 className="mb-3">Hola, Soy Jose Villanueva</h1>
                            <h3 className="mb-4"> <span className="typed-text"></span><span className="cursor">&nbsp;</span> </h3>
                            <p>Estudiante de Ingeniería especializado en desarrollo y programación de software. ¡Puedo darle a tu negocio un nuevo comienzo de inmediato!</p>

                            <a className="btn btn-primary btn-style mt-5 me-2" href="#url"> Contáctame </a>
                            <a className="btn btn-style transparent-btn mt-5" href="#url"> Mi Portafolio </a>
                        </div>
                        <div className="col-lg-5 text-lg-end my-image mt-lg-0 mt-4">
                            <img src="/src/assets/images/banner.png" className="img-fluid" alt="Banner" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default HomeComponentView;
