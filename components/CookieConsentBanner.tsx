import React, { useState, useEffect } from 'react';
import styles from '../styles/CookieConsentBanner.module.css';

const CookieConsentBanner: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(null);
    const [bannerStatus, setBannerStatus] = useState('entering');

    useEffect(() => {
      setConsentGiven(!!localStorage.getItem('cookieConsent'));
    }, []);

    useEffect(() => {
      if (consentGiven) {
        setBannerStatus('exiting');
        setTimeout(() => setBannerStatus('exited'), 300);
      }
    }, [consentGiven]);

    if (consentGiven === null || bannerStatus === 'exited') return null;

    const giveConsent = () => {
      localStorage.setItem('cookieConsent', 'true');
      setConsentGiven(true);
    };

    return (
      <div className={`${styles['cookie-banner']} ${styles[bannerStatus]}`}>
        <p>Mes naudojame slapukus, kad pagerintume jūsų patirtį. Tęsdami naršymą šioje svetainėje, jūs sutinkate su mūsų slapukų politika.</p>
        <button onClick={giveConsent}>Sutinku ir uždaryti</button>
      </div>
    );
}

export default CookieConsentBanner;
