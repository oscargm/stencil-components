import { boolean as booleanKnob } from '@storybook/addon-knobs';
export const boolean = (prop, value, standalone = true) => {
  const knob = booleanKnob(prop, value);
  const propValue = (standalone && knob) || !standalone ? prop : '';
  const attrValue = standalone ? '' : `="${knob}"`;
  return `${propValue}${attrValue}`;
};
