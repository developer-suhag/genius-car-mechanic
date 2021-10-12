import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('./services.json');
            const data = await res.json();
            setServices(data);
        };
        loadData();
    }, []);
    return (
        <div className="py-5">
            <h3 className="text-green">Services</h3>
            <div className="service-container">
                {services.map((service) => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
