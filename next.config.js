/** @type {import('next').NextConfig} */
const API_KEY = "ad71abdfdf0290d82e931996aa1a1ed9";

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
}

module.exports = nextConfig
