import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewRow from "./MyReviewRow";

const MyReview = () => {
  useTitle("MyReview");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingOrder = reviews.filter(
                (review) => review._id !== id
              );
              setReviews(remainingOrder);
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="my-20">
      <div className="my-8">
        {reviews.length === 0 ? (
          <p className="text-2xl font-semibold">Please add some review</p>
        ) : (
          <p className="text-2xl font-semibold">
            Total reviews :{" "}
            <span className="text-3xl font-bold text-orange-600">
              {reviews.length}
            </span>
          </p>
        )}
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Product Name</th>
                <th>Name</th>
                <th>Text</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <MyReviewRow
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                ></MyReviewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
