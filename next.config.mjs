/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rank1pro.com',
            }
        ],
    },
    trailingSlash: true,
};

export default nextConfig;
