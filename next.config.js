const path = require('path');
const withVideos = require('next-videos');

module.exports = withVideos({
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_ENV_API_URL,
    platformUrl: process.env.NEXT_PUBLIC_ENV_PLATFORM_URL,
    supportEmail: process.env.NEXT_PUBLIC_ENV_SUPPORT_EMAIL,
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  i18n: {
    locales: ['en-US', 'de-DE', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
    prependData: `@import "resources.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: {and: [/\.(js|ts|md)x?$/]},
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {plugins: [{removeViewBox: false}]},
          },
        },
      ],
    });

    return config;
  },
});
