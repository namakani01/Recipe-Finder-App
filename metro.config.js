const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Wrap the default config with Reanimated's Metro config
const reanimatedConfig = wrapWithReanimatedMetroConfig(defaultConfig);

// Optionally, merge with custom configurations (if any)
module.exports = mergeConfig(reanimatedConfig, config);
