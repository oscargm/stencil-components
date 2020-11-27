import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { JsonDocs } from '@stencil/core/internal';
import fs from 'fs';
const { dirname, join } = require('path');

export const config: Config = {
  namespace: 'co2-web-components',
  buildEs5: true,
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
    {
      type: 'docs-custom',
      generator: async (docs: JsonDocs) => {
        await Promise.all(
          docs.components.map(c => {
            const fullpath = join(c.dirPath, '/metadata.json');
            const content = JSON.stringify(c);
            let contentSame = false;
            if (fs.existsSync(fullpath)) {
              const currentData = fs.readFileSync(fullpath, 'utf-8');
              contentSame = currentData === content;
            }
            return contentSame
              ? true
              : fs.writeFile(fullpath, content, err => {});
          }),
        );
      },
    },
    // reactOutputTarget({
    //   componentCorePackage: 'component-library',
    //   proxiesFile: '../component-library-react/src/components.ts',
    // }),
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
