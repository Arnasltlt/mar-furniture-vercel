import { GetServerSideProps } from 'next';
import { getProductByKodas } from '../../lib/airtable';
import ImageGallery from 'react-image-gallery';
import styles from '../../styles/Product.module.css';
import Header from '../../components/Header'; // Import Header component
import Footer from '../../components/Footer';


const ProductPage = ({ product }) => {
  const images = product.gallery.map(img => ({
    original: img.original,
    thumbnail: img.thumbnail,
  }));

  return (
    <div className={styles.container}>
      <Header /> {/* Include Header component here */}
      <h1 className={styles.title}>{product.name}</h1>
      <div className={styles.content}>
        <div className={styles.gallery}>
          <ImageGallery items={images} />
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }} />
     
      </div>
      
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const kodas = context.params.kodas as string;
  const product = await getProductByKodas(kodas);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
