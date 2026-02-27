import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = ({ title }) => {
  return (
<header className={styles.header}>
  <div className={styles.left}>
    <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} />
    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
    <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
  </div>

  <h1 className={styles.headertitle}>{title}</h1>

  <div className={styles.phone}>
    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
    <span>+46769769769</span>
  </div>
</header>
  );
};

export default Header