/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "i.ytimg.com",
          },
          {
            protocol: 'https',
            hostname: "yt3.googleusercontent.com",
          },
        ],
      },
};

export default nextConfig;
