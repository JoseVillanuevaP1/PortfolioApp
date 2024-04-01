import React from 'react'

export const ServiceItem = ({ iconClass, title, description }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="about-single">
                <div className="about-icon mb-4">
                    <i className={iconClass}></i>
                </div>
                <div className="about-content">
                    <h5 className="mb-3"><a href="#">{title}</a></h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
