import '../src/variables.scss';
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

export const parameters = {
  // ...
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};
