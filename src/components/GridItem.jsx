import React from "react";

export const GridItem = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};
