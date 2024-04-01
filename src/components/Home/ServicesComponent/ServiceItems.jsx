import React from 'react'
import { ServiceItem } from './ServiceItem';

export const ServiceItems = () => {
    const services = [
        { iconClass: "fas fa-chalkboard", title: "Desarrollo Web", description: "Servicio de desarrollo web personalizado para crear sitios web óptimos, funcionales y atractivos." },
        { iconClass: "fab fa-app-store", title: "Desarrollo de Apps", description: "Desarrollo de aplicaciones personalizadas para cubrir tus necesidades con soluciones innovadoras y eficientes." },
        { iconClass: "fab fa-react", title: "Programación", description: "Servicio de programación para crear soluciones informáticas eficientes y adaptadas a tus requerimientos." }
    ];

    return (
        <div className="row justify-content-center">
            {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    );
}