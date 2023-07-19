import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import CookieConsentBanner from './CookieConsentBanner';

const Footer: React.FC = () => {
  return (
    <footer className={styles.kojelis}>
      <CookieConsentBanner />
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
                <Link href="/home">Pagrindinis</Link>
              </li>
              <li>
                <Link href="/about">Apie mane</Link>
              </li>
              <li>
                <Link href="/custom-furniture">Nestandartinių baldų gamyba</Link>
              </li>
              <li>
                <Link href="/privacy">Privatumas</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
