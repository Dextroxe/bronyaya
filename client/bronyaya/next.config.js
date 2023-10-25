/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    domains: ["enka.network", "cdn.wanderer.moe"],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: require.resolve("canvas"),
    };

    return config;
  },
};

module.exports = nextConfig;
