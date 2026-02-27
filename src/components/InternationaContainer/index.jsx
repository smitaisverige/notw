import { articles } from '../../data/news';
import styles from './international.module.css';

const InternationalNews = () => {
  // Filter only world news
  const worldArticles = articles
    .filter(article => article.category === 'world')
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 3); // pick 3 articles

  return (
    <section className={styles.internationalSection}>
      <h2 className={styles.sectionTitle}>International News</h2>
      <div className={styles.grid}>
        {worldArticles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <img
              src={`/images/${article.image}`}
              alt={article.headline}
              className={styles.articleImage}
            />
            <h3 className={styles.headline}>{article.headline}</h3>
            <p className={styles.deck}>{article.deck}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternationalNews;