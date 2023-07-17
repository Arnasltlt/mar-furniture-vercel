import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { getProductsByCategory, getFurnitureCategories } from '../../lib/airtable';
import Link from 'next/link';
import Header from '../../components/Header'; // adjust the import path
import Footer from '../../components/Footer';

interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  kodas: string;
}

interface ICategoryProps {
  products: IProduct[];
}

const Category: NextPage<ICategoryProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products by Category</title>
        <meta name="description" content="List of products by category" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />   {/* Include Header component here */}

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => (
            <Link href={`/products/${product.kodas}`} key={product.id} passHref>
              <div className={styles.card}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={150} // specify your image dimensions
                  height={150}
                />
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getFurnitureCategories();

  const paths = categories.map((category) => ({
    params: { category: category.code.toLowerCase() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryCode = context.params!.category as string;
  const products = await getProductsByCategory(categoryCode);

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // This will regenerate the page once per day
  };
};

export default Category;
