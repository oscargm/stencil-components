import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StencilComponent } from '../../../../.storybook/docs-components';
import metadata from './metadata.json';

export const states = () => {
  const isChecked = boolean('checked', false);
  const label = text('label', 'co2-switch');
  const switchComponent = document.createElement('co2-switch');
  switchComponent.setAttribute('label', label);
  switchComponent.setAttribute('is-checked', isChecked ? 'true' : 'false');
  switchComponent.addEventListener('scaleChange', action('changed'));
  return switchComponent;
};

export default {
  title: 'Components/switch',
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};
