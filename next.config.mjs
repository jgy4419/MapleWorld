/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['open.api.nexon.com']
    }
};

export default nextConfig;