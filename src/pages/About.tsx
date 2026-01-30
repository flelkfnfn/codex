import { text } from '../data/text';
import styles from '../styles/About.module.css';

const sections = [
  { title: text.about.world, description: '여기에 세계관 소개 텍스트 추가' },
  { title: text.about.mission, description: '여기에 프로젝트 목적 텍스트 추가' },
  { title: text.about.roadmap, description: '여기에 향후 확장 계획 추가' },
];

export const About = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{text.about.title}</h1>
        <p>여기에 그룹/프로젝트 요약 텍스트 추가</p>
      </header>
      <div className={styles.sections}>
        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};
