import React, { useEffect, useState } from 'react';
import styles from '../styles/CookieConsentBanner.module.css';

const CookieConsentBanner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = !!localStorage.getItem('cookieConsent');
      setConsentGiven(consent);
    }
  }, []);

  useEffect(() => {
    if (consentGiven) {
      setTimeout(() => {
        localStorage.setItem('cookieConsent', 'true');
      }, 300);
    }
  }, [consentGiven]);

  if (consentGiven) return null;

  return (
    <div className={`${styles['cookie-banner']} ${consentGiven ? styles.exiting : ''}`}>
      <p>Mes naudojame slapukus, kad pagerintume jūsų patirtį. Tęsdami naršymą šioje svetainėje, jūs sutinkate su mūsų slapukų politika.</p>
      <button onClick={() => setConsentGiven(true)}>Sutinku ir uždaryti</button>
    </div>
  );
}

export default CookieConsentBanner;
