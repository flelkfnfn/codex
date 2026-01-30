import { text } from '../data/text';
import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sns}>
        <span className={styles.snsLabel}>{text.footer.sns}</span>
        {/* TODO: SNS 아이콘 컴포넌트 추가 */}
        <div className={styles.snsIcons} aria-hidden="true" />
      </div>
      <p className={styles.copy}>{text.footer.copyright}</p>
    </footer>
  );
};
