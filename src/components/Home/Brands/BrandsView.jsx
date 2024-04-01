import React from 'react';
import { BrandItem } from './BrandItem';
import { BrandsSlider } from './BrandsSlider';

const brandImages = [
    "/src/assets/images/logo1.png",
    "/src/assets/images/logo2.png",
    "/src/assets/images/logo3.png",
    "/src/assets/images/logo4.png",
    "/src/assets/images/logo5.png",
    "/src/assets/images/logo6.png",
];

const BrandsView = () => {

    return (
        <>
            <section className="w3l-brands py-md-5 py-4">
                <div className="container py-lg-2 HomePageClientLogos">
                    <BrandsSlider>
                        {/* Utilizar map para renderizar las imágenes */}
                        {brandImages.map((src, index) => (
                            <BrandItem key={index} src={src} alt="Brand" />
                        ))}
                    </BrandsSlider>
                </div>
            </section>
        </>
    );
};

export default BrandsView;
