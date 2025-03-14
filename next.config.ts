import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.thegamesdb.net",
        port: "",
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
