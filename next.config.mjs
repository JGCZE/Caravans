/** @type {import('next/dist/next-server/server/config').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd35xwkx70uaomf.cloudfront.net',
        pathname: '/**',  // Všechny obrázky pod touto doménou
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
