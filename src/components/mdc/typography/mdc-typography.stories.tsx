import * as React from 'react';
import { array, text } from '@storybook/addon-knobs';
import { StencilComponent } from '../../../../.storybook/docs-components';
import metadata from './metadata.json';

export const headlines = () => {
  const headlineTypes = [
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'headline5',
    'headline6',
  ];
  const textContent = 'Headline';
  return generateMarkup(headlineTypes, textContent);
};

export const subtitles = () => {
  const textContent = 'Headline';
  const subtitleTypes = ['subtitle1', 'subtitle2'];
  return generateMarkup(subtitleTypes, textContent);
};

export const bodys = () => {
  const textContent = 'Body';
  const bodyTypes = ['body1', 'body2'];
  return generateMarkup(bodyTypes, textContent);
};

export const others = () => {
  const values = ['caption', 'button', 'overline'];
  return generateMarkup(values, values);
};

const generateMarkup = (
  types: string[],
  textContentProps: string | string[],
) => {
  const wrapper = document.createElement('div');
  wrapper.style.width = '100%';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  types.forEach((type, typeIndex) => {
    const typography = document.createElement('co2-typography');
    typography.setAttribute('type', type);
    typeof textContentProps === 'string'
      ? (typography.textContent = text('text content', textContentProps))
      : (typography.textContent = text(
          `text content ${textContentProps[typeIndex]}`,
          textContentProps[typeIndex],
        ));
    wrapper.appendChild(typography);
  });
  return wrapper;
};

export default {
  title: 'Components/Typography',
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};
