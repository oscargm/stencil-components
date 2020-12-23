import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StencilComponent } from '../../../../.storybook/docs-components';
import metadata from './metadata.json';

export const states = () => {
  const isDisabled = boolean('disabled', false);
  const placeholder = text('placeholder', 'Custom placeholder');
  const value = text('value', '');
  const textArea = document.createElement('co2-textarea');
  textArea.setAttribute('is-disabled', isDisabled ? 'true' : 'false');
  textArea.setAttribute('custom-placeholder', placeholder);
  textArea.setAttribute('value', value);
  textArea.addEventListener('scaleChange', action('changed'));
  textArea.addEventListener('scaleBlur', action('onBlur'));
  return textArea;
};

export default {
  title: 'Components/TextArea',
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};
