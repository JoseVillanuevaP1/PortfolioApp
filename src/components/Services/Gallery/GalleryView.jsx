import React from 'react';
import { GalleryItem } from './GalleryItem';

// Componente principal para la galería de servicios
const GalleryView = () => {
  const galleryItems = [
    { imageUrl: "https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/blog3.jpg", serviceLink: "#url1", serviceName: "Discuss the project" },
    { imageUrl: "https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/blog4.jpg", serviceLink: "#url2", serviceName: "Develop & elaborate" },
    { imageUrl: "https://wp.w3layouts.com/ui-portfolio/wp-content/themes/ui-portfolio/assets/images/blog6.jpg", serviceLink: "#url3", serviceName: "Final approvement" }
  ];

  return (
    <div className="service-section py-5">
      <div className="container py-lg-5 py-md-4 py-2 ServicesPageImageServices">
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
          <h3 className="w3l-title-main">Innovative solutions to boost your creative projects</h3>
        </div>
        <div className="row justify-content-center">
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
