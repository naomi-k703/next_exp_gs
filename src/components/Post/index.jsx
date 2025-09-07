// rafceと入力後　タブキーを押してください🤗
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";

const Post = ({ content, createdAt, author }) => {
  return (
    <div className={styles.post}>
      {/*  */}
      <p>{new Date(createdAt).toLocaleString()}</p>
      <p>{content}</p>
      <p>{author.username}</p>
      {/*  */}
    </div>
  );
};

export default Post;