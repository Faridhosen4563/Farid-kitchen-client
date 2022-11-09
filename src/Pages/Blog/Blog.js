import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogItem from "./BlogItem";

const Blog = () => {
  const datas = useLoaderData();
  return (
    <div className="mb-20">
      <h2 className="text-2xl text-center font-medium my-6">
        Welcome to Blog Part
      </h2>
      <div>
        {datas.map((data) => (
          <BlogItem key={data._id} data={data}></BlogItem>
        ))}
      </div>
    </div>
  );
};

export default Blog;
