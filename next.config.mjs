/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.workpointtoday.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'www.tpimagazine.com',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
