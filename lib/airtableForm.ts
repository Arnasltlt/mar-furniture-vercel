import Airtable from 'airtable';

const api_secret = process.env.AIRTABLE_API_KEY;
const base_secret = process.env.AIRTABLE_BASE;

const base = new Airtable({ apiKey: api_secret }).base('appcYcJWTWr6eedym');

export const createUzklausimai = async (vardas: string, uzklausa: string, email: string) => {
  return new Promise<string>((resolve, reject) => {
    base('Uzklausimai').create(
      [
        {
          fields: {
            Vardas: vardas,
            Uzklausa: uzklausa,
            email: email,
          },
        },
      ],
      function (err, records) {
        if (err) {
          reject(err);
          return;
        }
        if (records && records.length > 0) {
          const record = records[0];
          resolve(record.id);
        } else {
          reject(new Error('Failed to create record.'));
        }
      }
    );
  });
};
