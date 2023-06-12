module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigators': ['./src/navigators'],
          '@screens': ['./src/screens'],
          '@store': ['./src/store'],
          '@theme': ['./src/theme'],
          '@assets': ['./src/assets'],
          '@translations': ['./src/translations'],
          '@services': ['./src/services'],
          '@typings': ['./src/typings'],
        },
      },
    ],
  ],
};
