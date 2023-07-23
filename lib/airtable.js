import Airtable from 'airtable';
const api_secret = process.env.AIRTABLE_API_KEY
const base_secret = process.env.AIRTABLE_BASE

const base = new Airtable({ apiKey: api_secret }).base(base_secret);

export const getFurnitureCategories = async () => {
  const records = await base('Homepage').select({
    maxRecords: 10,
  }).firstPage();

  return records.map(record => ({
    id: record.id,
    name: record.get('Name'),
    imageUrl: record.get('Picture')[0].url,
    code: record.get('kodas'),
  }));
};

export const getProductsByCategory = async (categoryCode) => {
  const records = await base('Produktai').select({
    filterByFormula: `{baldas} = '${categoryCode}'`,
  }).firstPage();

  return records.map(record => ({
    id: record.id,
    name: record.get('Pavadinimas'),
    imageUrl: record.get('Thumbnail') ? record.get('Thumbnail')[0].thumbnails.large.url : null,
    kodas: record.get('kodas'),
  }));
};

export const getProductByKodas = async (kodas) => {
  const records = await base('Produktai').select({
    maxRecords: 1,
    filterByFormula: `{kodas} = '${kodas}'`,
  }).firstPage();

  if (records.length > 0) {
    const record = records[0];
    return {
      id: record.id,
      name: record.get('Pavadinimas'),
      description: record.get('Aprasymas'),
      category: record.get('baldo_tipas') || null, // fetch category info and return null if not present
      gallery: record.get('Galerija')
        ? record.get('Galerija').map(image => ({
          original: image.url,
          thumbnail: image.thumbnails?.small?.url || image.url,
        }))
        : [],
    };
  }
};


export const getCategoryByKodas = async (kodas) => {
  const records = await base('Homepage').select({
    maxRecords: 1,
    filterByFormula: `{kodas} = '${kodas}'`,
  }).firstPage();

  if (records.length > 0) {
    const record = records[0];
    return {
      id: record.id,
      name: record.get('Name'),
      imageUrl: record.get('Picture')[0].url,
      code: record.get('kodas'),
    };
  }
};


