/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sodkzjewxiwjlogvwnlv.supabase.co",
      },
    ],
  },
};

export default nextConfig;
