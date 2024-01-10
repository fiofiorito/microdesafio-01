/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.computerhoy.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
