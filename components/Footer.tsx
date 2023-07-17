import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
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
                <Link href="/home">
                  <a>Pagrindinis</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>Apie mane</a>
                </Link>
              </li>
              <li>
                <Link href="/custom-furniture">
                  <a>Nestandartinių baldų gamyba</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privatumas</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
