import React from 'react'
import './BrandItem.css';

export const BrandItem = ({ src, alt }) => (
    <div className="brand-item-container">
        <img src={src} alt={alt} className="brand-item-image" />
    </div>
);