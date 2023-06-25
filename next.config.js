/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        appDir: true
    },
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development',
        styledComponents: true
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
