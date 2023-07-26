import React from 'react';
import styles from '../styles/StickyBar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const StickyBar: React.FC = () => {
  return (
    <div className={styles.stickyBar}>
      <div className={styles.socialLinks}>
        <a href="http://www.facebook.com/marfurnitureblog" target="_blank" rel="noopener noreferrer">
          <Image src="/f.png" alt="facebook" width={24} height={24} />
        </a>
        <a href="https://www.instagram.com/marfurniture/" target="_blank" rel="noopener noreferrer">
          <Image src="/i.png" alt="instagram" width={24} height={24} />
        </a>
      </div>
      <div className={styles.contactInfo}>
      <a href="tel:+37068423255">+370 684 232 55</a>
      <a href="mailto:Marius@mar-furniture.lt">Marius@mar-furniture.lt</a>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://www.etsy.com/shop/MarFurniture" target="_blank" rel="noopener noreferrer">
          <Image src="/bag.png" alt="etsy" width={24} height={24} />
        </a>
        <Link href="/info">
          <Image src="/info.png" alt="info" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}

export default StickyBar;
