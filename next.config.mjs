/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['open.api.nexon.com']
    },
    async rewrites() {
        return [
            {
                source: "/board/news/list", // This will rewrite all routes
                destination: "http://localhost:3000/http://cors-anywhere.herokuapp.com/http://maple.gg/board/news/list"
                // http://cors-anywhere.herokuapp.com/http://maple.gg/:path*
            }
        ]
    }
};

export default nextConfig;
