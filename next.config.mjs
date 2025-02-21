/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "www.apple.com",
      "lh3.googleusercontent.com",
      "m.media-amazon.com",
    ],
    // Resimlerin yükleneceği alan adlarını buraya ekleyin
  },
};

export default nextConfig;
