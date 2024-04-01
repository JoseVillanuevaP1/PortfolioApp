import React from 'react';

export const Testimonial = ({ quote, name, role, image }) => {
  return (
    <>
      <div className="testimonial-content">
        <div className="testimonial">
          <blockquote>
            <q>{quote}</q>
          </blockquote>
          <div className="testi-des">
            <div className="test-img">
              <img src={image} className="img-fluid" alt="client-img" />
            </div>
            <div className="peopl align-self">
              <h3>{name}</h3>
              <p className="indentity">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

