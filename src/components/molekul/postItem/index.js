import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./post.scss";

function PostItem() {
  const history = useHistory();
  return (
    <div className="post-item">
      <img className="img-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title"> Title</p>
        <p className="author">Auhor - date</p>
        <p className="body">
          Proident commodo aliquip nisi ea consequat adipisicing ullamco
          occaecat excepteur. Labore sint consequat id nostrud laboris. Pariatur
          ad elit aliquip ipsum in reprehenderit occaecat reprehenderit occaecat
          exercitation aliquip velit. Duis ea nisi incididunt sunt nulla
          exercitation reprehenderit officia id occaecat nulla culpa mollit
          nulla. Adipisicing occaecat eiusmod Lorem in cupidatat irure qui
          consequat ex adipisicing.
        </p>
        <Gap height={10} />
        <Button nama="Detail" onClick={() => history.push("/detail-post")} />
      </div>
    </div>
  );
}

export default PostItem;
