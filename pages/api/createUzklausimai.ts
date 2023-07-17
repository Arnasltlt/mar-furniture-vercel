// Inside api/createUzklausimai.js

import Airtable from 'airtable';

export default async function handler(req, res) {
  try {
    const { vardas, uzklausa, email } = req.body;
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appcYcJWTWr6eedym');

    base('Uzklausimai').create([
      {
        "fields": {
          "Vardas": vardas,
          "Uzklausa": uzklausa,
          "email": email
        }
      }
    ], function(err, response) {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred' });
        return;
      }
      if (!response) {
        console.error('Invalid response from Airtable', response);
        res.status(500).json({ message: 'Invalid response from Airtable' });
        return;
      }
      res.status(200).json({ id: response.id });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
}

