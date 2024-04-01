import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BrandsSlider = ({ children }) => {
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
        <div className="align-items-center" id='brands-slider-container'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};