import { artists } from '../data/artists';
import { text } from '../data/text';
import { ArtistCard } from '../components/ArtistCard';
import styles from '../styles/Artists.module.css';

export const Artists = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{text.artists.title}</h1>
        <p>{text.artists.filterPlaceholder}</p>
      </header>
      <section className={styles.grid}>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </section>
    </div>
  );
};
