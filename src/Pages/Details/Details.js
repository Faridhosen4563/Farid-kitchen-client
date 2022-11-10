import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Review from "../Review/Review";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [insetId, setInsetId] = useState(null);
  const serviceDetails = useLoaderData();
  const { _id, img, description, name, price, rating, Delivery_time } =
    serviceDetails;

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || form.name.value;
    const photoUrl = user?.photoURL || form.photo.value;
    const date = `${currentDate},${currentTime}`;
    const email = user?.email;
    const message = form.message.value;

    const review = {
      serviceId: _id,
      name,
      photoUrl,
      email,
      date,
      message,
    };

    fetch("https://farid-kitchen-server-site.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review add successfully");
          form.reset();
        }
        setInsetId(data.insertedId);
      });
  };

  useEffect(() => {
    fetch(`https://farid-kitchen-server-site.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [insetId]);

  return (
    <div>
      <div className="my-20">
        <div className="card w-full shadow-xl mb-12">
          <figure>
            <img src={img} alt={name} className="rounded-lg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Price : ${price}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{rating}</div>
              <div className="badge badge-outline">{Delivery_time}</div>
            </div>
          </div>
        </div>
        ;
        <hr />
        <h1 className="text-2xl font-semibold">Review :</h1>
        <hr />
        <div className="my-12">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
        <div>
          {user?.email ? (
            <form onSubmit={handleSubmit} className="my-6">
              <h2>Add your review : </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  defaultValue={user?.displayName}
                  className="input input-bordered input-info w-full"
                />
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  name="photo"
                  defaultValue={user?.photoURL}
                  className="input input-bordered input-info w-full"
                />
                <input
                  type="text"
                  placeholder="Date"
                  defaultValue={`${currentDate},${currentTime}`}
                  className="input input-bordered input-info w-full"
                />
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered input-info w-full"
                />
              </div>
              <textarea
                className="textarea textarea-info h-28 w-full"
                placeholder="Add Your Review"
                name="message"
              ></textarea>
              <button type="submit" className="btn btn-outline btn-info w-full">
                Add Review
              </button>
            </form>
          ) : (
            <p className="text-2xl font-semibold text-center my-4">
              Please{" "}
              <Link to="/login" className="text-orange-500">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
