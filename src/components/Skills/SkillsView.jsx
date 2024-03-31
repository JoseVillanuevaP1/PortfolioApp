import React from 'react';
import { SkillItem } from './SkillItem';

const SkillsView = () => {
    return (
        <section className="w3l-skills py-5" id="skills">
            <div className="container py-lg-5 py-md-4 py-3 HomePageSkills">
                <div className="row">
                    <div className="col-lg-6 pe-lg-5 mt-2">
                        <img src="/src/assets/images/about1.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5 w3l-content-6 px-lg-4 align-self-center">
                        <h6 className="w3l-title-small mb-2">Mis Habilidades</h6>
                        <h3 className="w3l-title-main">Habilidades descatadas</h3>
                        <p className="my-4">Me especializo en Desarrollo de Software, y me apasiona crear trabajos o aplicaciones con Java, PHP, javaScript y más. Siempre estoy dispuesto a impresionar al público con mi creatividad.</p>
                        <SkillItem title="Java, Spring Boot & Cloud" progress={80} />
                        <SkillItem title="PHP & Laravel" progress={90} />
                        <SkillItem title="React, Angular, Vue" progress={60} />
                        <SkillItem title="MySql, SQL & MongoDB" progress={80} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsView;
