import React from 'react'

export const SkillItem = ({ title, progress }) => {
    return (
        <div className="progress-info">
            <h6 className="progress-tittle">{title}</h6>
            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    );
};