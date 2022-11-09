import React from "react";

const BlogItem = ({ data }) => {
  const { Question, Answer } = data;
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-8"
    >
      <div className="collapse-title text-xl font-medium">{Question}</div>
      <div className="collapse-content">
        <p>{Answer}</p>
      </div>
    </div>
  );
};

export default BlogItem;
