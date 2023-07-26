import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { getProductsByCategory, getFurnitureCategories, getCategoryByKodas } from '../../lib/airtable';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  kodas: string;
}

interface ICategoryProps {
  products: IProduct[];
  categoryName: string;
}

const Category: NextPage<ICategoryProps> = ({ products, categoryName }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mar-Furniture {categoryName}</title>
        <meta name="description" content={`List of ${categoryName} products`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => (
            <Link href={`/products/${product.kodas}`} key={product.id} passHref>
              <div className={styles.card}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <h4 className={styles.categoryName}>{product.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getFurnitureCategories();

  const paths = categories.map((category) => {
    if (typeof category?.code === "string") {
      return {
        params: { category: category.code.toLowerCase() },
      };
    } else {
      return {
        params: { category: "" },
      };
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const categoryCode = context.params.category;
  const products = await getProductsByCategory(categoryCode);
  const category = await getCategoryByKodas(categoryCode);

  if (!products || !category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
      categoryName: category.name,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Category; // Added this line
