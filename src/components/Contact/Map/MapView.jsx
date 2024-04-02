import React from 'react';

const MapView = () => {
    const iframeStyle = {
        border: "0"
    };

    return (
        <section>
            <div className="map mt-5 ContactPageMap text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62390.720077055856!2d-76.94702894729072!3d-12.219815813341835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1712031391118!5m2!1ses-419!2spe" height="450" style={iframeStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default MapView;