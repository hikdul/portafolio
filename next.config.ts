import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/my-bucket/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'asispass.com',
                port: '',
                pathname: '/img/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'http://trendbas.com/',
                port: '',
                pathname: '/img/**',
                search: '',
            }
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);