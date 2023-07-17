import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Mar-Furniture Logo"
            width={1654}
            height={709}
            layout="responsive"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
