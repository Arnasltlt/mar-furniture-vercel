import { FormEvent, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Info.module.css';

export default function Info() {
  const [vardas, setVardas] = useState('');
  const [uzklausa, setUzklausa] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const payload = {
      vardas,
      uzklausa,
      email,
      iskur: window.location.href // This will be the full URL of the current page
    };
    
    try {
      const response = await fetch('/api/createUzklausimai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log('Record created with id: ', data.id);
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  }  

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
      <div className={styles.formContainer}>
        <h2 className={styles.formHeader}>Susisiekite su manim</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} required />
          <textarea placeholder="Užklausa" rows={5} value={uzklausa} onChange={(e) => setUzklausa(e.target.value)} required />
          <input type="email" placeholder="El. paštas" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Pateikti</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
