/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
