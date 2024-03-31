import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandsView = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '3rem',
        speed: 1500,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="w3l-brands py-md-5 py-4">
            <div className="container py-lg-2 HomePageClientLogos">
                <div className="align-items-center" id='brands-slider-container'>
                    <Slider {...settings}>
                        <div>
                            <img src="/src/assets/images/logo1.png" alt="Brand" />
                        </div>
                        <div>
                            <img src="/src/assets/images/logo2.png" alt="Brand" />
                        </div>
                        <div>
                            <img src="/src/assets/images/logo3.png" alt="Brand" />
                        </div>
                        <div>
                            <img src="/src/assets/images/logo4.png" alt="Brand" />
                        </div>
                        <div>
                            <img src="/src/assets/images/logo5.png" alt="Brand" />
                        </div>
                        <div>
                            <img src="/src/assets/images/logo6.png" alt="Brand" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BrandsView;
