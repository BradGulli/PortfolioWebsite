/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_KEY: process.env.OPENAI_KEY
    }
}

module.exports = nextConfig
