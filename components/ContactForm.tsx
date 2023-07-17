import { useState } from 'react';
import { createUzklausimai } from '../lib/airtable';

const ContactForm = () => {
  const [vardas, setVardas] = useState('');
  const [uzklausa, setUzklausa] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUzklausimai(vardas, uzklausa, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vardas:
        <input type="text" value={vardas} onChange={e => setVardas(e.target.value)} />
      </label>
      <label>
        Uzklausa:
        <input type="text" value={uzklausa} onChange={e => setUzklausa(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
