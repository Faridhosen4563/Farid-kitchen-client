import React, { useState } from "react";
import { useEffect } from "react";
import BlogItem from "./BlogItem";

const Blog = () => {
  const [totalData, setTotalData] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://farid-kitchen-server-site.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => {
        setTotalData(data);
        setSpinner(false);
      });
  }, []);

  if (spinner) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="mb-20">
      <h2 className="text-2xl text-center font-medium my-6">
        Welcome to Blog Part
      </h2>
      <div>
        {totalData.map((data) => (
          <BlogItem key={data._id} data={data}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
