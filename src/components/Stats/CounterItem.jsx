import React from 'react';

export const CounterItem = ({ counterStarted, value, label, isLastTwo }) => (
    <div className={`col-lg-3 col-6 stats_info counter_grid ${isLastTwo ? 'mt-lg-0 mt-sm-5 mt-5' : ''}`}>
        <p className="counter" data-target={value}>{counterStarted ? value : '0'}</p>
        <h3>{label}</h3>
    </div>
);