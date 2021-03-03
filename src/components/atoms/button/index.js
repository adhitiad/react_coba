import React from "react";
import "./btn.scss";

function Button({ nama, ...rest }) {
  return (
    <div>
      <button className="btn" {...rest}>
        {nama}
      </button>
    </div>
  );
}

export default Button;
