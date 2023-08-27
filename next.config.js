/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "kr", "id-ID"],
    defaultLocale: "en-US",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
