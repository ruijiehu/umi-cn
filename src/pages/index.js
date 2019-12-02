import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>咋回事儿啊，怎么不自动生成路由</li>
        <li>
            Getting Started
        </li>
      </ul>
    </div>
  );
}
