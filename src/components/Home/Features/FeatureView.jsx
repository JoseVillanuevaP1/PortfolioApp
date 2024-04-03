import React from 'react';
import { FeatureItems } from './FeatureItems';


const FeatureView = () => {
    return (

        <>
            <section className="w3l-whychooseus pt-5" id="about1">
                <div className="container pt-lg-0 pt-md-4 pt-2 HomePageFeaturesWithPhoto">
                    <div className="row align-items-center">
                        <div className="col-lg-7 pe-lg-5 align-items-center">
                            <FeatureItems />
                        </div>
                        <div className="col-lg-5 ps-lg-5 my-image mt-lg-0 mt-4">
                            <img src="/images/banner.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default FeatureView;
