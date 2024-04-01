import React from 'react';

export const ContactInfo = ({ phone, email, street }) => {
    return (
        <div className="footer-contact-info mt-4">
            <ul>
                <li>
                    <a href="tel:+12 345 678 900" className="contact-text-sub">
                        <span className="fas fa-phone me-2"></span>{phone}
                    </a>
                </li>
                <li>
                    <a href="#" className="contact-text-sub">
                        <span className="fas fa-envelope me-2"></span>
                        <span className="__cf_email__" data-cfemail="9ff6f1f9f0dffae7fef2eff3fab1fcf0f2">{email}</span>
                    </a>
                </li>
                <li>
                    <p className="contact-text-sub">
                        <span className="fas fa-map-marker me-2"></span>{street}
                    </p>
                </li>
            </ul>
        </div>
    );
}