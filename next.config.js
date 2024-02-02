/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL,
  },
  images: {
    domains: ["*"],
  },
  reactStrictMode: false,
  sassOptions: {
    additionalData: `
      @import "@/styles/vars.scss"; 
    `,
  },
};

module.exports = nextConfig;
