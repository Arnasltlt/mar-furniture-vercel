import Airtable from 'airtable';

const api_secret = process.env.AIRTABLE_API_KEY
const base_secret = process.env.AIRTABLE_BASE

const base = new Airtable({ apiKey: api_secret }).base(base_secret);

export const createUzklausimai = async (vardas: string, uzklausa: string, email: string) => {
  return new Promise((resolve, reject) => {
    base('Uzklausimai').create([
      {
        "fields": {
          "Vardas": vardas,
          "Uzklausa": uzklausa,
          "email": email
        }
      }
    ], function(err, record) {
      if (err) {
        reject(err);
        return;
      }
      resolve(record.getId());
    });
  });
};
