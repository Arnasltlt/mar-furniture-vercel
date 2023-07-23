import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getFurnitureCategories } from '../lib/airtable';
import Header from '../components/Header';
import Footer from '../components/Footer';// import Header here

interface IFurnitureCategory {
  id: string;
  name: string;
  imageUrl: string;
  code: string;
}

interface IHomeProps {
  furnitureCategories: IFurnitureCategory[];
}

const Home: NextPage<IHomeProps> = ({ furnitureCategories }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furniture Portfolio</title>
        <meta name="description" content="A portfolio of our furniture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />   {/* Use Header component here */}

      <main className={styles.mainContent}>
        <div className={styles.grid}>
          {furnitureCategories.map(category => (
            <Link href={`/categories/${category.code}`} key={category.id} passHref>
              <div className={styles.card}>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={100}
                  height={100}
                />
                <h4 className={styles.categoryName}>{category.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const furnitureCategories = await getFurnitureCategories();

  return {
    props: {
      furnitureCategories,
    },
  };
};

export default Home;
