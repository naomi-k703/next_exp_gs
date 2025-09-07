// rafceと入力後　タブキーを押してください🤗
import React,{useState} from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import apiClient from "@/lib/apiClient";
import { Password } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //送信処理
  const handleLogin = async () => {
    try {
      const response = await apiClient.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("入力内容が正しくないため、ログインできません");
    }
  };
  return (
    <div className={styles.form}>
      {/*  */}
      <h3 className={styles.form__title}>ログイン</h3>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="text" placeholder= "メールアドレスを入力してください" onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" placeholder="パスワードを入力してください" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button onClick={handleLogin} button className={styles.form__btn}>
        <ArrowCircleDownIcon color="primary" />
        ログイン
      </button>

      {/*  */}
    </div>
  );
};

export default Login;
