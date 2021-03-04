import React from "react";
import { Button, Gap, PostItem } from "./../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="home-wrap">
      <div className="buat-wrap">
        <Button nama="blog post" onClick={() => history.push("/buat_post")} />
      </div>
      <Gap height={20} />
      <div className="post-i">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <div className="paginasi">
        <Button nama="Prev" />
        <Gap width={20} />
        <Button nama="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
}

export default Home;
