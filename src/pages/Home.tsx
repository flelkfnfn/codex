import { artists } from '../data/artists';
import { text } from '../data/text';
import { ArtistCard } from '../components/ArtistCard';
import styles from '../styles/Home.module.css';

export const Home = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          {/* TODO: 그룹 대표 이미지 추가 위치 */}
          <div className={styles.heroImagePlaceholder} aria-hidden="true" />
        </div>
        <div className={styles.heroContent}>
          <h1>{text.home.heroTitle}</h1>
          <p>{text.home.heroDescription}</p>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>{text.home.teamImage}</h2>
        <div className={styles.teamImageWrapper}>
          {/* TODO: 팀 단체 이미지 추가 위치 */}
          <div className={styles.teamImagePlaceholder} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.artistPreview}>
        <div className={styles.sectionHeader}>
          <h2>{text.home.artistPreview}</h2>
          <p>여기에 아티스트 섹션 설명 추가</p>
        </div>
        <div className={styles.grid}>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} variant="compact" />
          ))}
        </div>
      </section>
    </div>
  );
};
