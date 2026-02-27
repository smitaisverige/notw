import styles from './recent.module.css'

const Recent = ({ headline, deck, category, image }) => {
  return (
    <div className={styles.recentcard}>
      
      {image && (
        <img 
          src={`/images/${image}`} 
          alt={headline} 
          className={styles.recentImage}
        />
      )}

      <p className={styles.recentheadline}>{headline}</p>
      <p className={styles.recentdeck}>{deck}</p>
      <p className={styles.recentcategory}>{category}</p>
    </div>
  );
}

export default Recent;