/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  optimizeCss: false,
  enableBabelRuntime: true,
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
