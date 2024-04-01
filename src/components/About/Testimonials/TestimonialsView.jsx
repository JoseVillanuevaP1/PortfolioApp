import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'

const Testimonials = () => {
    const testimonialData = [
        {
            name: "William Noah",
            role: "Photographer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Benjamin",
            role: "Web designer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Isabella Luna",
            role: "Backend Developer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "William Noah",
            role: "Photographer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Benjamin",
            role: "Web designer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Isabella Luna",
            role: "Backend Developer",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ];

    useEffect(() => {
        // Cleanup function to destroy the carousel when component unmounts
        return () => {
            document.querySelector('.slick-list').removeAttribute('style');
        };
    }, []);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostrar 3 testimonios a la vez
        slidesToScroll: 3, // Desplazar 3 testimonios a la vez
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className="w3l-clients mb-4" id="testimonials">
            <div className="midd-w3 py-5">
                <div className="container py-lg-5 py-md-3 AboutPageTestimonials">

                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-5">
                        <span className="w3l-title-small">Reviews</span>
                        <h3 className="w3l-title-main">My clients and Testimonials</h3>
                    </div>

                    <Slider {...settings}>
                        {testimonialData.map((testimonial, index) => (
                            <div key={index}>
                                <div className="item mx-3">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>{testimonial.quote}</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img src={`https://via.placeholder.com/150/000000/FFFFFF/?text=${testimonial.name}`} className="img-fluid" alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>{testimonial.name}</h3>
                                                    <p className="indentity">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
