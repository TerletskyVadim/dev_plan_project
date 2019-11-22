const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js'],
    blacklistRE: blacklist([
      /react-native-test-native-module\/node_modules\/react-native\/.*/,
    ]),
  },
};
