import React from 'react'

export const CounterItem = ({ counterStarted, value, label }) => (
    <div className="col-lg-3 col-6 stats_info counter_grid">
        <p className="counter" data-target={value}>{counterStarted ? value : '0'}</p>
        <h3>{label}</h3>
    </div>
);
