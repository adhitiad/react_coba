import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Link } from "../../components";
import "./detil.scss";

function DetailBlog() {
  const history = useHistory();
  return (
    <div className="detail-wrap">
      <Link nama="kembali" onClick={() => history.push("/")} />
      <img className="img-cover" src={LoginBg} alt="detil" />
      <p className="judul-detil">Judul</p>
      <p className="author-detil">Author - Date</p>
      <p className="konten-detil">
        Commodo officia do minim ex ad sunt commodo do amet proident fugiat
        sunt. In ex aute ut labore minim magna minim fugiat. Exercitation labore
        adipisicing duis anim id consequat ad sunt sit. Magna ullamco nostrud
        cillum elit qui elit. Fugiat consectetur aute officia nostrud aute esse
        sit eu irure commodo do irure ea incididunt. Aute sit culpa mollit irure
        aliquip cillum laboris sint officia magna occaecat. Aute sit ad quis
        minim laboris qui laborum.
      </p>
    </div>
  );
}

export default DetailBlog;
