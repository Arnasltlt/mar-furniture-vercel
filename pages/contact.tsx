import { FormEvent, useState } from 'react';
import { createUzklausimai } from '../lib/airtableForm';

export default function Contact() {
  const [vardas, setVardas] = useState('');
  const [uzklausa, setUzklausa] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const payload = {
      vardas,
      uzklausa,
      email
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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} required />
      <input type="text" placeholder="Uzklausa" value={uzklausa} onChange={(e) => setUzklausa(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}
