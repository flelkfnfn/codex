import { NavLink } from 'react-router-dom';

import { text } from '../data/text';
import styles from '../styles/Header.module.css';

const navItems = [
  { to: '/', label: text.navigation.home },
  { to: '/artists', label: text.navigation.artists },
  { to: '/about', label: text.navigation.about },
  { to: '/gallery', label: text.navigation.gallery },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        {/* TODO: 로고 이미지 또는 SVG 삽입 위치 */}
        <div className={styles.logoPlaceholder} aria-hidden="true" />
        <span className={styles.brandText}>여기에 그룹 이름 추가</span>
      </div>
      <nav aria-label="Primary">
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink className={styles.navLink} to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
