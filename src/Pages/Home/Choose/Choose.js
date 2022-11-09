import React from "react";
import fast from "../../../assets/image/choose/fast-delivery.jpg";
import good from "../../../assets/image/choose/good-food.jpg";
import various from "../../../assets/image/choose/various.png";

const Choose = () => {
  return (
    <div className="my-20 bg-gray-400 py-20 rounded-lg">
      <div className="text-center ">
        <p className="font-thin font-serif text-xl text-green-400 mb-6">
          My benefits
        </p>
        <p className="text-5xl font-bold mb-6">Why customers choose me</p>
        <p className="w-1/2 mx-auto">
          Educating the customers is another way to help them select the product
          that best fits their needs, the more customers know about a product,
          the better it suits them to make a purchase decision
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="card w-96">
          <figure className="px-10 pt-10">
            <img src={good} alt="Shoes" className="h-52 w-52 rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Good Food</h2>
            <p>
              We believe good food speaks for itself. That’s why we create
              global small plates in a casual environment with one goal: taste
              without borders.
            </p>
          </div>
        </div>
        <div className="card w-96">
          <figure className="px-10 pt-10">
            <img src={various} alt="Shoes" className="h-52 w-52 rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Various Item</h2>
            <p>
              I am provide lots of dishes, they are prepare by me.Like chicken,
              beef, fish and biriyani. This dishes are awesome. Every people
              love this
            </p>
          </div>
        </div>
        <div className="card w-96">
          <figure className="px-10 pt-10">
            <img src={fast} alt="Shoes" className="h-52 w-52 rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fast Delivery</h2>
            <p>
              My delivery is so fast. I am always try to fast delivery as can as
              possible. This why people love my cloud kitchen.In future i will
              try my delivery also more fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
