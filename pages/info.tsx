import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Info.module.css';

export default function Info() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img src="marius_valaitis.jpeg" alt="info" className={styles.profile}/>
        <div className={styles.infoText}>
          <p>
          Mano vardas Marius Valaitis. Baigiau Kauno technologijos universitetą, medienos gaminių dizaino ir technologijos specialybę. Esu baldų dizaineris ir gamintojas.<br/><br/>

Labiausiai įkvepia žmogaus gebėjimas kurti. Nuostabus jausmas, kuomet eskizas tampa tikru daiktu. Mėgstu išgyventi visą proceso eigą nuo pradžios iki pabaigos. Eskizavimas, projektavimas, medžiagų parinkimas, gamyba, kulminacija – užbaigtas daikto realizavimas. Tikiu, kad kievienas kurtas daiktas turi dalelę kūrėjo, todėl į kūrybinį procesą sudedu save.<br/><br/>

Dažnai savo kurtuose gaminiuose naudoju seną medieną, medienos likučius ar plokščių atraižas, senus stiklus ar metalus. Man tai yra istorija medžiagoje, per laiką įsispaudęs individualumas.<br/><br/> Šis internetinis puslapis yra mano portfolio, kuriame rasite informaciją apie įgyvendintus projektus. Jeigu turite klausimų, norite sukurti kažką sau ar bendradarbiauti, susisiekim.<br/><br/>

+370 684 23255<br/><br/>

marius@mar-furniture.lt
          </p>
        </div>
      </div>
      <ContactForm header="Susisiekite su manim" 
      formDescription="Baldai yra vienetiniai ir gaminami individualiai, todėl pagal poreikį juos galima koreguoti."
      buttonText="Pateikti" apiPath="/api/createUzklausimai" />
      <Footer />
    </>
  );
}
