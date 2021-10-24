import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
// import { useParams } from 'react-router';

const Booking = () => {
  const { bookingId } = useParams();
  console.log(bookingId);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h3>Booking Id {bookingId}</h3>
      <h4>book: {service?.name}</h4>
    </div>
  );
};

export default Booking;
