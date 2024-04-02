import React from 'react';
import { ServiceItem } from './ServiceItem';

const ServicesListView = () => {
  const services = [
    { icon: "fas fa-chalkboard", title: "Web Development", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." },
    { icon: "fab fa-app-store", title: "App development", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." },
    { icon: "fas fa-camera-retro", title: "Photography", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." },
    { icon: "fas fa-search", title: "Seo Marketing", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." },
    { icon: "fab fa-buromobelexperte", title: "Responsive design", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." },
    { icon: "fas fa-users", title: "Digital Marketing", description: "Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan." }
  ];

  return (
    <section className="about-section py-5">
      <div className="container py-lg-5 py-md-4 py-2 ServicesPageServices">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mt-lg-5 mt-4">
              <ServiceItem icon={service.icon} title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListView;
