import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const Delivery_time = form.Delivery_time.value;
    const description = form.description.value;

    const service = {
      name,
      price,
      img,
      rating,
      Delivery_time,
      description,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Service Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-center">Add New Service</h2>
      <form onSubmit={handleAddService} className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="img"
            placeholder="PhotoUrl"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="rating"
            placeholder="rating"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="Delivery_time"
            placeholder="Delivery Time"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full h-24 my-6"
          placeholder="Description"
          name="description"
        ></textarea>
        <button type="submit" className="btn btn-outline w-full">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
