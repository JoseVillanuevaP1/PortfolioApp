import React from 'react';
import { NavLink } from 'react-router-dom';

export const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className="breadcrumbs-custom-path AllBreadcrumbs">
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    {index === 0 ? (
                        <NavLink to={breadcrumb.link} rel="nofollow">{breadcrumb.text}</NavLink>
                    ) : (
                        <>
                            &nbsp;&nbsp;»&nbsp;&nbsp;
                            {breadcrumb.text}
                        </>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
};
