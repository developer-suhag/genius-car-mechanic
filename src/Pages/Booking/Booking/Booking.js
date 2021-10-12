import React from 'react';
import { useParams } from 'react-router';
// import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();
    console.log(serviceID);
    return (
        <div>
            <h3>Booking Id {serviceID}</h3>
        </div>
    );
};

export default Booking;
