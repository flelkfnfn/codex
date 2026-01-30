import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from '../styles/Layout.module.css';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
