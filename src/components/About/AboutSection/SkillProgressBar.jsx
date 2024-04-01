import React from 'react'

export const SkillProgressBar = ({ title, value }) => {
    return (
        <>
            <h6 className="progress-tittle">
                {title}
            </h6>
            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${value}%` }} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    );
}