import React, { useEffect, useState } from "react";
import { Button, Gap, PostItem } from "./../../components";
import Axios from "axios";
import "./home.scss";
import { useHistory } from "react-router-dom";

function Home() {
  const [dataBlogs, setDataBlog] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/posts")
      .then((result) => {
        console.log("berhasil terhubung ke server dengan data :", result.data);
        const resApi = result.data;
        setDataBlog(resApi.data);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="home-wrap">
      <div className="buat-wrap">
        <Button nama="blog post" onClick={() => history.push("/buat_post")} />
      </div>
      <Gap height={20} />
      <div className="post-i">
        {dataBlogs.map((blog) => {
          return (
            <PostItem key={blog._id} title={blog.title} body={blog.body} />
          );
        })}
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
