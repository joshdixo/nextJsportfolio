/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    FORMSPARK_FORM_ID: '91dkCA3B',
    // FORMSPARK_FORM_ID: 'echo',
  }
}

module.exports = nextConfig
