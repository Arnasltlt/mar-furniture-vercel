import { FormEvent, useState } from 'react';
import styles from '../styles/ContactForm.module.css';

interface ContactFormProps {
    header: string;
    formDescription: string;
    buttonText: string;
    apiPath: string;
}

export default function ContactForm({ header, buttonText, apiPath, formDescription }: ContactFormProps) {
  const [vardas, setVardas] = useState('');
  const [uzklausa, setUzklausa] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [checkboxState, setCheckboxState] = useState(false); // move this line inside the component

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    const payload = {
      vardas,
      uzklausa,
      email,
      iskur: window.location.href, // This will be the full URL of the current page
      subscribe: checkboxState // Add this line
    };
    
    try {
      const response = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setVardas('');
      setUzklausa('');
      setEmail('');
      setCheckboxState(false); // reset checkbox state
      setSubmissionMessage('Ačiū už užklausą! Susisieksiu kiek galiu greičiau!');
      
    } catch (error) {
      console.error('Error submitting request:', error);
      setSubmissionMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }  

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>{header}</h2>
      <p className={styles.formDescription}>{formDescription}</p>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} required />
          <textarea placeholder="Užklausa" rows={5} value={uzklausa} onChange={(e) => setUzklausa(e.target.value)} required />
          <input type="email" placeholder="El. paštas" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <p className={styles.formDescription}><i>Jūsų vardas ir el. pašto adresas bus naudojami tik norint atsakyti į jūsų užklausą.</i></p>
          <div className={styles.checkboxContainer}>
              <input type="checkbox" checked={checkboxState} onChange={(e) => setCheckboxState(e.target.checked)} />
              <label>Noriu pirmas išgirsti apie mar-furniture baldus/naujienas.</label>
          </div>
          <button type="submit">{buttonText}</button>
      </form>

  
      {submissionMessage && <p className={styles.submissionMessage}>{submissionMessage}</p>}
    </div>
  );
  
}
