import React from "react";

const Tile = (props) => {
  return (
    <div
      className={props.size}
      style={{
        backgroundImage: `url("${props.bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h2 className="tile-text">{props.title}</h2>
      <div className="description-text">{props.description}</div>
    </div>
  );
};

export default Tile;
