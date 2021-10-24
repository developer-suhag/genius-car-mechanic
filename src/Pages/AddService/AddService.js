import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("service add successfuly");
        reset();
      }
    });
  };
  return (
    <div>
      <h3>Add a service</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <textarea
            {...register("description", { required: true })}
            placeholder="description"
          />
          <input
            type="number"
            placeholder="price"
            {...register("price", { required: true })}
          />
          <input
            type="text"
            placeholder="img"
            {...register("img", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
