import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useForm } from "react-hook-form";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

const Signup = () => {

  const router = useRouter();

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

   // 登録処理🤗
   const onSubmit = async (data) => {
    console.log(data)
    try {
      await apiClient.post("/api/auth/register", {
        username: data.name,
        email: data.email,
        password: data.password
      });

      // 登録成功後画面をログイン画面に飛ばす
      setTimeout(() => {
        router.push("/");
      }, 2000);
      // 2秒後に画面遷移をして、ログインページへ飛ばす
    } catch (error) {
      console.log("新規登録エラー:", error); //デベロッパーツールのコンソールにエラーを表示しています🤗
    }
    // この下は消さない
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log("送信データ:", data);
  //   alert("アカウント作成処理を開始します！");
  // };

  // パスワードの値を取得（確認用と比較するため）
  const password = watch("password");

  return (
    <div className={styles.form}>
      <h3 className={styles.form__title}>アカウント作成</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* メールアドレス */}
        <div className={styles.form__item}>
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="text"
            placeholder="メールアドレスを入力してください"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "有効なメールアドレスを入力してください",
              },
            })}
          />
          {errors.email && <p className={styles.form__error}>{errors.email.message}</p>}
        </div>

        {/* お名前 */}
        <div className={styles.form__item}>
          <label htmlFor="name">お名前</label>
          <input
            id="name"
            type="text"
            placeholder="お名前を入力してください"
            {...register("name", { required: "お名前は必須です" })}
          />
          {errors.name && <p className={styles.form__error}>{errors.name.message}</p>}
        </div>

        {/* パスワード */}
        <div className={styles.form__item}>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="password"
            placeholder="パスワードを入力してください"
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 1,
                message: "1文字以上のパスワードを入力してください",
              },
            })}
          />
          {errors.password && <p className={styles.form__error}>{errors.password.message}</p>}
        </div>

        {/* パスワード確認 */}
        <div className={styles.form__item}>
          <label htmlFor="confirmPassword">パスワード（確認）</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="もう一度パスワードを入力してください"
            {...register("confirmPassword", {
              required: "確認用パスワードは必須です",
              validate: (value) =>
                value === password || "パスワードが一致しません",
            })}
          />
          {errors.confirmPassword && (
            <p className={styles.form__error}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* 送信ボタン */}
        <button  type="submit" className={styles.form__btn}>
          <ArrowCircleDownIcon color="primary" />
          ログイン
        </button>
      </form>
    </div>
  );
};

export default Signup;
