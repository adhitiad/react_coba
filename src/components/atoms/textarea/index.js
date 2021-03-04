import React from "react";
import "./text_a.scss";

function TextArea({ ...rest }) {
  return (
    <div>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
}

export default TextArea;
