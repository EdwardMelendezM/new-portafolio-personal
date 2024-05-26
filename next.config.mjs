/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "edwardmelendezm.github.io",
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
