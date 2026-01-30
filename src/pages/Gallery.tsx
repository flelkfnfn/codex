import { text } from '../data/text';
import styles from '../styles/Gallery.module.css';

const placeholders = Array.from({ length: 12 }, (_, index) => index + 1);

export const Gallery = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{text.gallery.title}</h1>
        <p>여기에 갤러리 소개 텍스트 추가</p>
      </header>
      <section className={styles.grid}>
        {placeholders.map((item) => (
          <article key={item} className={styles.card}>
            {/* TODO: 갤러리 이미지/영상 썸네일 추가 */}
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
            <p className={styles.caption}>여기에 갤러리 캡션 추가</p>
          </article>
        ))}
      </section>
    </div>
  );
};
