// const path = require('path');
module.exports = {
  stories: ['../../src/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-readme/register',
    // '@storybook/addon-storysource',
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     loaderOptions: {
    //       injectStoryParameters: false,
    //       options: {
    //         parser: 'typescript',
    //         uglyCommentsRegex: [/^eslint-.*/, /^tslint-.*/, /^global.*/],
    //       },
    //       prettierConfig: {
    //         printWidth: 160,
    //         tabWidth: 2,
    //         bracketSpacing: true,
    //         trailingComma: 'es5',
    //         singleQuote: true,
    //       },
    //     },
    //   },
    // },
  ],
  // decorators: ['storybook-readme/html'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-syntax-jsx'],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    return config;
  },
};
