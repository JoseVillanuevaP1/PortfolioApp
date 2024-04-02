import React from 'react';
import { Breadcrumbs } from './Breadcumbs';

const BannerInfo = ({ title }) => {
  return (
    <div className="banner-info-grid mt-5">
      <h2 className="w3l-title-breadcrumb">{title}</h2>
    </div>
  );
};

const BannerView = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <section className="w3l-breadcrumb text-center">
      <div className="breadcrumb-bg py-5" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container py-lg-5 mt-5 ServicesPageBanner">
          <BannerInfo title={title} />
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
    </section>
  );
}

export default BannerView;
