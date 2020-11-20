import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const { dirname, join } = require('path');

export const config: Config = {
  namespace: 'co2-web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: './src/variables.scss',
  plugins: [
    sass({
      sourceMap: true,
      includePaths: [
        join(dirname(module.filename), 'node_modules'),
        join(dirname(module.filename), './src/variables.scss'),
      ],
    }),
  ],
};
