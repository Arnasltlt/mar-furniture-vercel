import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.kojelis}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h5>Pagrindinė informacija</h5>
            <p> 
              Baldų dizaineris ir gamintojas <br/>
              Marius Valaitis<br/>
              Kiečių g. 90<br/> 
              Kaunas, Lietuva
            </p>
            © 2023 Copyright:
            <a href="https://mar-furniture.lt"> Mar-Furniture</a>
          </div>
          <div className={styles.column}>
            <h5>Nuorodos</h5>
            <ul className={styles.list}>
              <li>
                <a href="/">Pagrindinis</a>
              </li>
              <li>
                <a href="/">Apie mane</a>
              </li>
              <li>
                <a href="/">Nestandartinių baldų gamyba</a>
              </li>
              <li>
                <a href="/privatumas">Privatumas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
