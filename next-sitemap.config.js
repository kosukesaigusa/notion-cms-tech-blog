/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.npo-mottai.org',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
