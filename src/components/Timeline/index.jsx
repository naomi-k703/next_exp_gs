// rafceと入力後　タブキーを押してください🤗
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button } from "@mui/material";

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {/*  */}

      <form >
        <textarea name="" id="" placeholder="本文を入力してください"></textarea>

        <Button size="large" variant="outlined" color="success">
          送信</Button>

      </form>
      {/*  */}
    </div>
  );
};

export default Timeline;