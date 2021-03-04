import React from "react";
import "./btn.scss";

function Button({ nama, ...rest }) {
  return (
    <button className="btn" {...rest}>
      {nama}
    </button>
  );
}

export default Button;
