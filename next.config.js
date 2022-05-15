/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // for extranel Image optimization 
  },
  redirects: async ()=>{
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true
      }
    ];
  }
}

module.exports = nextConfig
