import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelte = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h3>manage services</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h5>{service?.name}</h5>
          <button onClick={() => handleDelte(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
