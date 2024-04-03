import React from 'react';
import { AboutContent } from './AboutContent';
import { SkillProgressBar } from './SkillProgressBar';

const AboutSectionView = () => {
    return (
        <section className="w3l-content-6" id="skills">
            <div className="content-6-mian py-5">
                <div className="container py-lg-5 py-md-4 py-2 AboutPageAbout">
                    <div className="content-info-in row">
                        <div className="content-gd col-lg-5 pe-lg-5 my-image">
                            <img src="/images/about.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="content-gd col-lg-7 mt-lg-0 mt-5 align-self ps-lg-5">

                            <AboutContent />

                            {/* AboutPage Skills Section */}
                            <div className="progress-info mt-5">
                                <SkillProgressBar title="UI/UX Design" value={80} />
                            </div>

                            <div className="progress-info info1">
                                <SkillProgressBar title="Ideas & Technology" value={95} />
                            </div>

                            <div className="progress-info info3">
                                <SkillProgressBar title="Branding Design" value={55} />
                            </div>

                            <div className="progress-info info4 mb-0">
                                <SkillProgressBar title="Responsive Web Design" value={80} />
                            </div>
                            {/* //AboutPage Skills Section */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionView;
