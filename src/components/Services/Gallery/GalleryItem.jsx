import React from 'react';

export const GalleryItem = ({ imageUrl, serviceLink, serviceName }) => {
    return (
        <div className="col-lg-4 col-sm-6 item">
            <div className="card">
                <div className="card-header p-0 position-relative border-0">
                    <a href={serviceLink}>
                        <img className="d-block img-responsive" src={imageUrl} alt="card-image" />
                    </a>
                </div>
                <div className="card-body service-details">
                    <a href={serviceLink} className="service-heading">{serviceName}</a>
                </div>
            </div>
        </div>
    );
}