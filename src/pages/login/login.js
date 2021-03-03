import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-img" alt="bg"></img>
      </div>
      <div className="right">
        <p className="title">Login</p>

        <Input label="Email" placeholder="Email" />
        <Gap height={18} />

        <Input label="Password" placeholder="Password" />
        <Gap height={21} />
        <Button nama="login" />
        <Gap height={20} />
        <Link nama="daftar" />
      </div>
    </div>
  );
}

export default Register;
