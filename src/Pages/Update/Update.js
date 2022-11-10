import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const review = useLoaderData();
  const { serviceId, email, message } = review;
  const [updateReview, setUpdateReview] = useState(review);

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(
      `https://farid-kitchen-server-site.vercel.app/reviews/${review._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("kitchenToken")}`,
        },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review Update Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setUpdateReview({ ...review, [field]: value });
  };

  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-center">
        Update Your Review{" "}
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <input
            type="text"
            placeholder="Type here"
            defaultValue={serviceId}
            className="input input-bordered w-full "
            readOnly
          />
          <input
            type="text"
            placeholder="Type here"
            defaultValue={email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          onBlur={handleBlur}
          className="textarea textarea-bordered w-full h-28 mb-4"
          placeholder="Review"
          name="message"
          defaultValue={message}
        ></textarea>
        <button type="submit" className="btn btn-outline w-full">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default Update;
<h2>Update</h2>;
