/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source : "/contract",
        destination: "https://www.naver.com",
        permanent: false
      },
      {
        source : "/old-blog/:path",
        destination: "/new-blog/:path",
        //  때에 따라서 :path* 를 쓰면 이후 path에서도 해당 param을 유지함
        permanent: false
      }
    ]
  },
  async rewrites(){
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}
// redirect 옵션 
// http://localhost:3000/contract ==redirect==> https://www.naver.com
// http://localhost:3000/old-blog/123 ==redirect==> http://localhost:3000/new-blog/123
module.exports = nextConfig
