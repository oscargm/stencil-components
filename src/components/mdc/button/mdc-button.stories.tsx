import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StencilComponent } from '../../../../.storybook/docs-components';
import metadata from './metadata.json';

export const states = () => {
  const isDisabled = boolean('disabled', false);
  const button = document.createElement('co2-button');
  button.setAttribute('is-disabled', isDisabled ? 'true' : 'false');
  button.addEventListener('scaleClick', action('clicked'));
  button.textContent = text('text content', 'button');
  return button;
};

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};
