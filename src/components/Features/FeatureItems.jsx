import React from "react";
import { FeatureItem } from "./FeatureItem";

const features = [
    { icon: "fas fa-leaf", title: "Spring Boot & Cloud", description: "Desarrollo Web con Spring Boot y servicios en la nube." },
    { icon: "fab fa-laravel", title: "Laravel Framework", description: "Construcción de aplicaciones web seguras con Laravel." },
    { icon: "fab fa-react", title: "React JS & Native", description: "Interfaces dinámicas con React JS y React Native." },
    { icon: "fab fa-angular", title: "Angular JS", description: "Aplicaciones web SPA escalables con Angular JS." },
    { icon: "fab fa-node-js", title: "Node JS", description: "Backend rápido y escalable con Node.js y Express.js." },
    { icon: "fab fa-python", title: "Python & Django", description: "Desarrollo web seguro y eficiente con Python y Django." }
];


export const FeatureItems = () => {
    return (
        <div className="row two-grids">
            {features.map((feature, index) => (
                <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
        </div>
    );
};