// rafceと入力後　タブキーを押してください🤗
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Login = () => {
  return (
    <div className={styles.form}>
      {/*  */}
      <h3 className={styles.form__title}>ログイン</h3>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="text" placeholder="メールアドレスを入力してください" />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" placeholder="パスワードを入力してください" />
      </div>

      <button  button className={styles.form__btn}>
      <ArrowCircleDownIcon color="primary"/>
        ログイン</button>
 
      {/*  */}
    </div>
  );
};

export default Login;