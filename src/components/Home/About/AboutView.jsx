import React from 'react';
import { AboutInfo } from './AboutInfo';

const AboutView = () => {
    return (
        <>
            <section className="w3l-about py-5" id="about">
                <div className="container py-md-5 py-2 HomePageAbout">
                    <div className="row w3l-row">
                        <AboutImage />
                        <AboutInfo
                            title={'Ingeniero y desarrollador de Software de Perú'}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

const AboutImage = () => {
    return (
        <div className="col-lg-5 my-image pe-lg-5 mb-lg-0 mb-md-5 mb-4">
            <img src="/images/about.jpg" alt="" className="img-fluid" />
        </div>
    );
}

export default AboutView;
