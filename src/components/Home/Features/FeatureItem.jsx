import React from 'react'

export const FeatureItem = ({ icon, title, description }) => {
    return (
        <div className="col-sm-6 grids_info d-flex mt-md-5 mt-4">
            <i className={icon}></i>
            <div className="detail ms-3">
                <h4 className="w3l-subtitle">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};