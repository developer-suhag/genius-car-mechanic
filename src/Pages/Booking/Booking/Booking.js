import React from "react";
import { useParams } from "react-router";
// import { useParams } from 'react-router';

const Booking = () => {
  const { bookingId } = useParams();
  console.log(bookingId);
  return (
    <div>
      <h3>Booking Id {bookingId}</h3>
    </div>
  );
};

export default Booking;
