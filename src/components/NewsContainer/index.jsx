import { articles } from '../../data/news';
import Recent from '../Recent';
import styles from './news-container.module.css';

const NewsContainer = () => {
  //  Non-sports, non-world articles
  const nonSportsArticles = articles.filter(
    article => article.category !== 'sport' && article.category !== 'world'
  );

  // Random main article
  const randomMainIndex = Math.floor(Math.random() * nonSportsArticles.length);
  const mainArticle = nonSportsArticles[randomMainIndex];

  // Recent articles: exclude mainArticle, pick 4 random
  const recentArticles = nonSportsArticles
    .filter(article => article !== mainArticle)
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 4);

  // Sports articles: pick 2 random sports articles
  const sportsArticles = articles
    .filter(article => article.category === 'sport')
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 2);

  return (
  
    <div className={styles.newsContainer}>
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
            className={styles.mainImage}
          />
          <h1>{mainArticle.headline}</h1>
          <p>{mainArticle.deck}</p>
          <p>{mainArticle.category}</p>
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
            image={article.image} // sports articles get image
          />
        ))}
      </section>
    </div>
  );
};

export default NewsContainer;