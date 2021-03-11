import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

function UploadImg() {

  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file"></input>
    </div>
  );
}

export default UploadImg;
