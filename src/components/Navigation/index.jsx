import styles from './nav.module.css'

const Nav = () => {
  return (
   <nav className={styles.nav} >
  <div >
    <ul>
      <li>Home</li>
      <li>World</li>
      <li>Sweden</li>
      <li>Sport</li>
      <li>Entertainment</li>
      <li>Crime</li>
    </ul>

    <p>
      {new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
    </p>
  </div>
</nav>

  );
}

export default Nav