import React from 'react';
import { GalleryItem } from './GalleryItem';

// Componente principal para la galería de servicios
const GalleryView = () => {
  const galleryItems = [
    { imageUrl: "./images/blog1.jpg", serviceLink: "#", serviceName: "Discuss the project" },
    { imageUrl: "./images/blog2.jpg", serviceLink: "#", serviceName: "Develop & elaborate" },
    { imageUrl: "./images/blog3.jpg", serviceLink: "#", serviceName: "Final approvement" },
    { imageUrl: "./images/blog4.jpg", serviceLink: "#", serviceName: "Final approvement" },
    { imageUrl: "./images/blog5.jpg", serviceLink: "#", serviceName: "Discuss the project" },
    { imageUrl: "./images/blog6.jpg", serviceLink: "#", serviceName: "Develop & elaborate" },
  ];

  return (
    <div className="service-section py-5">
      <div className="container py-lg-5 py-md-4 py-2 ServicesPageImageServices">
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
          <h3 className="w3l-title-main">Innovative solutions to boost your creative projects</h3>
        </div>
        <div className="row justify-content-center gy-3">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              serviceLink={item.serviceLink}
              serviceName={item.serviceName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
