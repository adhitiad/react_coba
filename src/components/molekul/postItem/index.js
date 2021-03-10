import React from "react";
import { useHistory } from "react-router-dom";
// import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import "./post.scss";

function PostItem(props) {
  const history = useHistory();
  return (
    <div className="post-item">
      <img className="img-thumb" src={props.image} alt="post" />
      <div className="content-detail">
        <p className="title">{props.title}</p>
        <p className="author">
          {props.name} - {props.date}
        </p>
        <p className="body">{props.body}</p>
        <Gap height={10} />
        <Button nama="Detail" onClick={() => history.push("/detail-post")} />
      </div>
    </div>
  );
}

export default PostItem;
