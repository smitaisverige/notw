import { articles } from '../../data/news';
import Recent from '../Recent';
import styles from './news-container.module.css';

const NewsContainer = () => {
  // Non-sport, non-world articles
  const nonSportsArticles = articles.filter(
    article => article.category !== 'sport' && article.category !== 'world'
  );

  // Random main article
  const randomMainIndex = Math.floor(Math.random() * nonSportsArticles.length);
  const mainArticle = nonSportsArticles[randomMainIndex];

  // Recent articles (exclude main)
  const recentArticles = nonSportsArticles
    .filter(article => article !== mainArticle)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Breaking news (exclude main + recent)
  const breakingArticles = nonSportsArticles
    .filter(
      article =>
        article !== mainArticle &&
        !recentArticles.includes(article)
    )
    .slice(0, 4);

  // Sports articles
  const sportsArticles = articles
    .filter(article => article.category === 'sport')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className={styles.newsContainer}>

      {/* BREAKING NEWS BAR */}
      {breakingArticles.length > 0 && (
        <section className={styles.breakingNews}>
          <span className={styles.breakingLabel}>Breaking News</span>
          <div className={styles.breakingHeadlines}>
            {breakingArticles.map((article, index) => (
              <span key={index} className={styles.breakingItem}>
                {article.headline}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* MAIN GRID */}
      <div className={styles.newsGrid}>

        {/* LEFT COLUMN */}
        <section className={styles.leftColumn}>
          <h2 className={styles.sectionTitle}>Recent News</h2>
          {recentArticles.map((article, index) => (
            <Recent
              key={index}
              headline={article.headline}
              deck={article.deck}
              category={article.category}
            />
          ))}
        </section>

        {/* MIDDLE COLUMN */}
        <section className={styles.middleColumn}>
          <h2 className={styles.sectionTitle}>Main News</h2>
          <div className={styles.mainArticle}>
            <img
              src={`/images/${mainArticle.image}`}
              alt={mainArticle.headline}
            />
            <h1>{mainArticle.headline}</h1>
            <p>{mainArticle.deck}</p>
            <span className={styles.category}>{mainArticle.category}</span>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className={styles.rightColumn}>
          <h2 className={styles.sectionTitle}>Sports</h2>
          {sportsArticles.map((article, index) => (
            <Recent
              key={index}
              headline={article.headline}
              deck={article.deck}
              category={article.category}
              image={article.image}
            />
          ))}
        </section>

      </div>
    </div>
  );
};

export default NewsContainer;