import React from 'react'

export const ServiceItem = ({ icon, title, description }) => {
    return (
        <div className="about-single">
            <div className="about-icon mb-4">
                <i className={icon}></i>
            </div>
            <div className="about-content">
                <h5 className="mb-3"><a href="#url">{title}</a></h5>
                <p>{description}</p>
            </div>
        </div>
    );
};