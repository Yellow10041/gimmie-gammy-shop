/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    additionalData: `
      @import "@/styles/vars.scss"; 
    `
  }
}

module.exports = nextConfig
