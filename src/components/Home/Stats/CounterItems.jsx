import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { CounterItem } from './CounterItem';

export const CounterItems = ({ counters }) => {

    const [counterStarted, setCounterStarted] = useState(false);

    const startCounters = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 200;

            let count = 0;
            const updateCount = () => {
                count += increment;
                counter.innerText = Math.ceil(count);
                if (count < target) {
                    requestAnimationFrame(updateCount);
                }
            };

            updateCount();
        });
    };

    const resetCounters = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            counter.innerText = '0';
        });
    };

    const handleWaypointEnter = () => {
        setCounterStarted(true);
        startCounters();
    };

    const handleWaypointLeave = () => {
        setCounterStarted(false);
        resetCounters();
    };

    return (
        <section className="w3l-stats-section py-5" id="stats">
            <div className="container py-lg-5 py-md-4 py-2 HomePageStats">
                <div className="w3l-stats-inner-inf py-lg-4">
                    <div className="row stats-con text-center justify-content-center">
                        <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave} />

                        {counters.map((counter, index) => (
                            <CounterItem
                                key={index}
                                counterStarted={counterStarted}
                                value={counter.value}
                                label={counter.label}
                                isLastTwo={index >= counters.length - 2}
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};