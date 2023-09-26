const ContentSecurityPolicy = `
  default-src 'self' *.onetrust.com *.graphcms.com *.google-analytics.com *.windows.net *.cloudfront.net *.qzzr.com *.make.com *.amazonaws.com *.riddle.com *.youtube.com ;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com *.onetrust.com *.amazonaws.com *.riddle.com *.twitter.com *.cloudfront.net *.instagram.com *.youtube.com;
  style-src 'self' 'unsafe-inline' *.onetrust.com *.riddle.com ;
  font-src 'self' *.onetrust.com https://fonts.gstatic.com *.riddle.com ;
  img-src 'self' 'unsafe-inline' *.google-analytics.com data: https://www.media.graphcms.com https://www.res.cloudinary.com https://www.images.unsplash.com *.graphassets.com *.onetrust.com *.riddle.com;
`;

const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
  'ionicons'
])

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com', 'res.cloudinary.com', 'images.unsplash.com', 'media.graphassets.com'],
    unoptimized: true
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ]
  }
};
module.exports = withTM(nextConfig);