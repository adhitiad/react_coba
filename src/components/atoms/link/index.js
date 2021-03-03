import React from "react";
import "./link.scss";

function Link({ nama, onClick }) {
  return (
    <p className="link" onClick={onClick}>
      {nama}
    </p>
  );
}

export default Link;
