import React from 'react';
import { CounterItems } from './CounterItems';

const StatsView = () => {
    const counters = [
        { value: "150", label: "Proyectos Terminados" },
        { value: "250", label: "Horas Trabajadas" },
        { value: "129", label: "Soporte en Línea" },
        { value: "300", label: "Clientes Satisfechos" }
    ];

    return (
        <>
            <CounterItems counters={counters} />
        </>
    );
};

export default StatsView;
