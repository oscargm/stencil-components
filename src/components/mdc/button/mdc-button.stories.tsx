import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Button' };

export const playground = () => {
  const isDisabled = boolean('disabled', false);

  return `<co2-button is-disabled="${isDisabled}">Button</co2-button>`;
};
