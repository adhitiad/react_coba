import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Gap,
  Input,
  Link,
  TextArea,
  UploadImg,
} from "../../components";
import "./buat_p.scss";

function BuatPost() {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link nama="kembali" onClick={() => history.push("/")} />
      <p className="judul">Buat Post</p>
      <Input label="Judul Post" />
      <UploadImg />
      <TextArea />
      <Gap height={15} />
      <div className="btn-post">
        <Button nama="simpan" />
      </div>
      <Gap height={15} />
    </div>
  );
}

export default BuatPost;
