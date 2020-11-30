import React from 'react';
import { action } from '@storybook/addon-actions';
import { StencilComponent } from '../../../../config/storybook/docs-components';
import { ControllableArgTypes } from '../../../../config/storybook/helpers/StoryHelpers';
import metadata from './metadata.json';

export default {
  title: 'Todo',
  argTypes: ControllableArgTypes.fromMetadata(metadata as any)
    .setDefaultValue('index', 1)
    .setDefaultValue('task', 'Some important task to be done Me')
    .setDefaultValue('is-done', false)
    .getArgTypes(),
  parameters: {
    docs: {
      page: () => <StencilComponent metadata={metadata as any} />,
      source: { type: 'code' },
    },
  },
};

interface IProps {
  index: number;
  task: string;
  ['is-done']: boolean;
}

// interface WebComponent extends HTMLElement {}

export const Basic = (props: IProps) => {
  const todo = document.createElement('co2-todo');
  todo.setAttribute('index', String(props.index));
  todo.setAttribute('task', props.task);
  todo.setAttribute('is-done', props['is-done'] ? 'true' : 'false');
  todo.addEventListener('scaleChange', (ev: CustomEvent) => {
    action('changed')(ev.detail);
  });
  return todo;
};
