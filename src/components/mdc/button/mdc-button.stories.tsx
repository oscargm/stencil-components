// import { storiesOf } from '@storybook/html';
// import readme from './readme.md';
// storiesOf('Components/Button', module)
//   .addParameters({ notes: readme })
//   .add(
//     'Enabled',
//     (): string => `
//     <div style="width:100%">
//       <co2-button is-disabled="false">
//         Button
//       </co2-button>
//     </div>
//   `,
//   )
//   .add(
//     'Disabled',
//     (): string => `
//     <div style="width:100%">
//       <co2-button is-disabled="true">
//         Button
//       </co2-button>
//     </div>
//   `,
//   );

import React from 'react';
import { action } from '@storybook/addon-actions';
import { StencilComponent } from '../../../../config/storybook/docs-components';
import { ControllableArgTypes } from '../../../../config/storybook/helpers/StoryHelpers';
import metadata from './metadata.json';

export default {
  title: 'Button',
  argTypes: ControllableArgTypes.fromMetadata(metadata as any)
    .setDefaultValue('is-disabled', false)
    .getArgTypes(),
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};

interface IProps {
  ['is-disabled']: number;
}

export const Enabled = (props: IProps): HTMLElement => {
  const button = document.createElement('co2-button');
  button.setAttribute('is-disabled', props['is-disabled'] ? 'true' : 'false');
  button.addEventListener('scaleClick', action('clicked'));
  button.textContent = 'Button';
  return button;
};
