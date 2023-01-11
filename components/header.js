import styles from '../styles/Home.module.css'

const Header = () => (
  <header className={styles.grid}>
    <div></div>
    <a
        href="/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h1 style={{textAlign:"center"}}> Home</h1>
    </a>
    <a
        href="/about"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
    >
        <h1
        style={{textAlign:"center"}}> 
        About</h1>
    </a>
    <div></div>

  </header>
);

export default Header;
