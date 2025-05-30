// metro.config.js (CommonJS)
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Modify the config to support .svg files using the svg transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
};

module.exports = config;
