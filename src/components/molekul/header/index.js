import React from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <h1 className="logo-app" onClick={() => history.push("/")}>
        DwimsApp
      </h1>
      <p className="items">Logout</p>
    </div>
  );
}

export default Header;
