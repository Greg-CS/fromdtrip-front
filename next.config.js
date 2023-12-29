/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    STRIPE_SK: process.env.STRIPE_SK,
    MONGODB_URI: process.env.MONGODB_URI,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
  }
}
