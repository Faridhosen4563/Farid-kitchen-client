import React, { useEffect, useState } from "react";

const MyReviewRow = ({ review, handleDelete }) => {
  const [product, setProduct] = useState({});
  const { _id, email, message, name, serviceId } = review;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [serviceId]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-lg w-16 h-16">
              <img src={product.img} alt={product.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.name}</div>
            <div className="text-sm opacity-50">{serviceId}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{message}</td>
      <th>
        <button className="btn btn-outline">Update</button>
      </th>
    </tr>
  );
};

export default MyReviewRow;
