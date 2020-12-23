import React, { FC } from 'react';
import { Description } from '@storybook/addon-docs/blocks';

interface IMarkdownProps {
  content: string;
}

export const Markdown: FC<IMarkdownProps> = ({ content }) => {
  return <Description markdown={content} />;
};
