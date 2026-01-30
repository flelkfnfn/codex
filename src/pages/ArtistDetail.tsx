import { useParams } from 'react-router-dom';

import { artists } from '../data/artists';
import { text } from '../data/text';
import styles from '../styles/ArtistDetail.module.css';

export const ArtistDetail = () => {
  const { id } = useParams();
  const artist = artists.find((member) => member.id === id);

  return (
    <div className={styles.page}>
      <section className={styles.profileSection}>
        <div className={styles.profileImage}>
          {/* TODO: 아티스트 대형 프로필 이미지 추가 */}
          <div className={styles.profileImagePlaceholder} aria-hidden="true" />
          <span className={styles.profileAlt}>
            {artist?.profileAlt ?? '여기에 프로필 이미지 설명 추가'}
          </span>
        </div>
        <div className={styles.profileContent}>
          <h1>{artist?.name ?? text.artistDetail.profileTitle}</h1>
          <p>{artist?.summary ?? '여기에 아티스트 소개 텍스트 추가'}</p>
        </div>
      </section>

      <section className={styles.detailSection}>
        <h2>{text.artistDetail.bioTitle}</h2>
        <p>여기에 상세 소개 텍스트 추가</p>
      </section>

      <section className={styles.detailSection}>
        <h2>{text.artistDetail.conceptTitle}</h2>
        <p>{artist?.concept ?? '여기에 특징/콘셉트/세계관 설명 추가'}</p>
      </section>
    </div>
  );
};
