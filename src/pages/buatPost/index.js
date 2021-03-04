import React from "react";
import { Button, Gap, Input, TextArea, UploadImg } from "../../components";
import "./buat_p.scss";

function BuatPost() {
  return (
    <div className="blog-post">
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
