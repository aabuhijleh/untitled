/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      use: "graphql-tag/loader",
      exclude: /node_modules/,
    });

    return config;
  },
};

module.exports = nextConfig;
