module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-mart.baemin.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
