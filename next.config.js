module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['v5.airtableusercontent.com', 'image.flaticon.com','cutewallpaper.org'],
  },
  env: {
    AIRTABLE_API_KEY: process.env['airtable_api'],
  },
};
