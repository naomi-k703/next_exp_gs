import Link from "next/link";
import styles from "./404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>ページが見つかりませんでした</p>
      <p className={styles.subtext}>URLが間違っているか、ページが削除された可能性があります。</p>
      <Link href="/" className={styles.link}>
        ホームに戻る
      </Link>
    </div>
  );
}
