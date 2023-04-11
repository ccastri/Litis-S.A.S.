/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
};

module.exports = {
  async headers() {
    return [
      {
        // Allow requests from any origin
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        // Allow cookies to be sent from the client to the server
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig
