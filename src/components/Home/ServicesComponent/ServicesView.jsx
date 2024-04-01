import React from 'react';
import { ServiceItems } from './ServiceItems';

const ServicesView = () => {
    return (
        <>
            <section className="about-section py-5">
                <div className="container py-lg-5 py-md-4 py-2 HomePageServices">
                    <ServiceTitle />
                    <ServiceItems />
                </div>
            </section>
        </>

    );
}

const ServiceTitle = () => {
    return (
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
            <h3 className="w3l-title-main">¿Qué puedo hacer por ti?</h3>
        </div>
    );
}

export default ServicesView;