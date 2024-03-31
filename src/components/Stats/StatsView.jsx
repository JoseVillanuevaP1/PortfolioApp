import React from 'react';
import { CounterItems } from './CounterItems';

const StatsView = () => {
    const counters = [
        { value: "1500", label: "Proyectos Terminados" },
        { value: "2500", label: "Horas Trabajadas" },
        { value: "1280", label: "Soporte en Línea" },
        { value: "3020", label: "Clientes Satisfechos" }
    ];

    return <CounterItems counters={counters} />;
};

export default StatsView;
