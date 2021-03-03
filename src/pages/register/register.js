import React from "react";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import "./register.scss";

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-img"></img>
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Nama Lengkap" placeholder="Nama Lengkap" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Jenis Kelamin" placeholder="jenis Kelamin" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={21} />
        <Button nama="daftar" />
        <Gap height={20} />
        <Link nama="Masuk" />
      </div>
    </div>
  );
}

export default Register;
