import { Link } from 'react-router-dom';

import type { Artist } from '../data/artists';
import styles from '../styles/ArtistCard.module.css';

type ArtistCardProps = {
  artist: Artist;
  variant?: 'compact' | 'full';
};

export const ArtistCard = ({ artist, variant = 'full' }: ArtistCardProps) => {
  return (
    <article className={styles.card} data-variant={variant}>
      <Link className={styles.link} to={`/artists/${artist.id}`}>
        <div className={styles.imageWrapper}>
          {/* TODO: 아티스트 프로필 이미지 추가 */}
          <div className={styles.imagePlaceholder} aria-hidden="true" />
          <span className={styles.imageAlt}>{artist.profileAlt}</span>
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{artist.name}</h3>
          {variant === 'full' && (
            <p className={styles.summary}>{artist.summary}</p>
          )}
        </div>
      </Link>
    </article>
  );
};
