import { GetServerSideProps } from 'next';
import { getProductByKodas } from '../../lib/airtable';
import ImageGallery from 'react-image-gallery';
import styles from '../../styles/Product.module.css';
import Header from '../../components/Header'; // Import Header component
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';


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
      <div className={styles.form}>
        <ContactForm header="Klausti kainos" 
        buttonText="Klausti" 
        formDescription="Baldai yra vienetiniai ir gaminami individualiai, todėl pagal poreikį juos galima koreguoti."
        apiPath="/api/createUzklausimai" />
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  
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
