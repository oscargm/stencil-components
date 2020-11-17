import { h } from '@stencil/core';
import { Typography, typographyTags, TypographyTypes } from './model';

const getHtml = (type: Typography) => {
  const Tag = typographyTags.get(type);
  return (
    <Tag class={`mdc-typography--${type}`}>
      <slot />
    </Tag>
  );
};

interface TypographyRendererProps {
  type: Typography;
}

export const TypographyRenderer = (props: TypographyRendererProps) => {
  const { type } = props;
  return getHtml(type);
};
