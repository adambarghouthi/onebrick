const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    i18n: {
      locales: ['en', 'ar'],
      defaultLocale: 'en',
    },
  };

  return withBundleAnalyzer(config);
};
