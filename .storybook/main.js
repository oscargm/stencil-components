// const path = require('path');
// module.exports = {
//   stories: ['../../src/**/*.stories.@(tsx)'],
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-links',
//     'storybook-readme/register',
//     // '@storybook/addon-storysource',
//     // {
//     //   name: '@storybook/addon-storysource',
//     //   options: {
//     //     loaderOptions: {
//     //       injectStoryParameters: false,
//     //       options: {
//     //         parser: 'typescript',
//     //         uglyCommentsRegex: [/^eslint-.*/, /^tslint-.*/, /^global.*/],
//     //       },
//     //       prettierConfig: {
//     //         printWidth: 160,
//     //         tabWidth: 2,
//     //         bracketSpacing: true,
//     //         trailingComma: 'es5',
//     //         singleQuote: true,
//     //       },
//     //     },
//     //   },
//     // },
//   ],
//   // decorators: ['storybook-readme/html'],
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       test: /\.(js|jsx|ts|tsx)$/,
//       loader: require.resolve('babel-loader'),
//       options: {
//         presets: ['@babel/preset-react', '@babel/preset-typescript'],
//         plugins: ['@babel/plugin-syntax-jsx'],
//       },
//     });
//     config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
//     return config;
//   },
// };

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      'sbconfig/': path.resolve(__dirname, '../.storybook/'),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/variables.scss'),
    });
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-syntax-jsx'],
      },
    });

    // Return the altered config
    return config;
  },
};
