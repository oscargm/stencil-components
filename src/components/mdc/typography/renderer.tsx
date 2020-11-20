import { h } from '@stencil/core';
import { Typography, typographyTags } from './model';

const getHtml = (type: Typography, margin: number) => {
  const Tag = typographyTags.get(type);
  return (
    <Tag class={`mdc-typography--${type} typography-margin-${margin}`}>
      <slot />
    </Tag>
  );
};

interface TypographyRendererProps {
  type: Typography;
  margin: number;
}

export const TypographyRenderer = (props: TypographyRendererProps) => {
  const { type, margin } = props;
  return getHtml(type, margin);
};
