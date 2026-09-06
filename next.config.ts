import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "145.223.21.187" },
      { protocol: "https", hostname: "147.79.117.103" },
      { protocol: "https", hostname: "gdkyd.com" },
      { protocol: "https", hostname: "api.gdkyd.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://translate.google.com https://translate.googleapis.com https://*.googleapis.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://*.google.com https://www.google.com.bd https://*.google.com.bd https://*.googlesyndication.com https://api.map.baidu.com http://api.map.baidu.com https://*.baidu.com https://*.bdstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://translate.googleapis.com https://www.gstatic.com https://*.gstatic.com https://*.baidu.com https://*.bdstatic.com",
              "img-src 'self' blob: data: https://145.223.21.187 https://147.79.117.103 https://gdkyd.com https://api.gdkyd.com https://res.cloudinary.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://upload.wikimedia.org https://via.placeholder.com https://translate.google.com https://translate.googleapis.com https://www.gstatic.com https://*.gstatic.com https://www.google.com https://*.google.com https://www.google.com.bd https://*.google.com.bd https://*.googlesyndication.com https://*.doubleclick.net https://*.googleadservices.com https://purecatamphetamine.github.io https://*.baidu.com https://*.bdstatic.com",
              "font-src 'self' data: https://fonts.gstatic.com https://*.gstatic.com",
              "connect-src 'self' https://api.gdkyd.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.google.com https://*.google.com https://www.google.com.bd https://*.google.com.bd https://*.googlesyndication.com https://*.doubleclick.net https://*.g.doubleclick.net https://stats.g.doubleclick.net https://*.googleadservices.com https://translate.googleapis.com https://translate.google.com https://*.googleapis.com https://api.map.baidu.com https://*.baidu.com http://api.map.baidu.com http://*.baidu.com",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://www.googletagmanager.com https://*.googletagmanager.com https://translate.google.com https://*.google.com https://www.google.com.bd https://*.google.com.bd https://bid.g.doubleclick.net https://*.doubleclick.net https://*.baidu.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      }
    ];
  }
};

export default nextConfig;

