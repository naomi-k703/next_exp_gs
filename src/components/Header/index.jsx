// rafceと入力後　タブキーを押してください🤗
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
    // !!token は tokenの値を 明示的に boolean型(true false)に変換するテクニックです🤗
    // tokenがあれば true なければ falseになる🤗

    // この下は消さない🤗
  }, []);

  const logout = () => {
    // ログイン成功時の乗車券（トークン）を削除します🤗
    localStorage.removeItem("token");
    setIsAuth(false);
    router.push("/login");
  };

  return (
    <div className={styles.header}>
      {/*  */}
      <ul>
        <li>
          {isAuth ? ( //trueの時は乗車券（トークン）を持っている時=ログイン成功している🤗
            <div onClick={logout}>
              <AccessibilityIcon />
              ログアウト
            </div>
          ) : (
            <Link href="/login">
              <AccessibilityIcon />
              ログイン
            </Link>
          )}
        </li>
        <li>
          <Link href="/signup">
            <AirplanemodeActiveIcon />
            登録
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
};

export default Header;