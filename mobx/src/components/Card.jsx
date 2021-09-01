import React from "react";
import "./Card.css";

const Card = ({ list }) => {
  return (
    <div className="card">
      {list.map((current, key) => {
        return (
          <div className="card-item" key={key}>
            <div>{current.title}</div>
            <div>{current.content}</div>
            <div>{current.writer}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
