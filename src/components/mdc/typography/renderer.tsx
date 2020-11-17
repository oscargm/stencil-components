import { h } from '@stencil/core';
import { Typography, TypographyTypes } from './model';

const spanRenderer = (type: Typography) => (
  <span class={`mdc-typography--${type}`}>
    <slot />
  </span>
);
const paragraphRenderer = (type: Typography) => (
  <p class={`mdc-typography--${type}`}>
    <slot />
  </p>
);

// IMPROVEME: Find a better way to do this
const renderer = {
  [TypographyTypes.HEADLINE_1]: () => (
    <h1 class={`mdc-typography--${TypographyTypes.HEADLINE_1}`}>
      <slot />
    </h1>
  ),
  [TypographyTypes.HEADLINE_2]: () => (
    <h2 class={`mdc-typography--${TypographyTypes.HEADLINE_2}`}>
      <slot />
    </h2>
  ),
  [TypographyTypes.HEADLINE_3]: () => (
    <h3 class={`mdc-typography--${TypographyTypes.HEADLINE_3}`}>
      <slot />
    </h3>
  ),
  [TypographyTypes.HEADLINE_4]: () => (
    <h4 class={`mdc-typography--${TypographyTypes.HEADLINE_4}`}>
      <slot />
    </h4>
  ),
  [TypographyTypes.HEADLINE_5]: () => (
    <h5 class={`mdc-typography--${TypographyTypes.HEADLINE_5}`}>
      <slot />
    </h5>
  ),
  [TypographyTypes.HEADLINE_6]: () => (
    <h6 class={`mdc-typography--${TypographyTypes.HEADLINE_6}`}>
      <slot />
    </h6>
  ),
  [TypographyTypes.SUBTITLE_1]: () => spanRenderer(TypographyTypes.SUBTITLE_1),
  [TypographyTypes.SUBTITLE_2]: () => spanRenderer(TypographyTypes.SUBTITLE_2),
  [TypographyTypes.BODY_1]: () => paragraphRenderer(TypographyTypes.BODY_1),
  [TypographyTypes.BODY_2]: () => paragraphRenderer(TypographyTypes.BODY_2),
  [TypographyTypes.CAPTION]: () => spanRenderer(TypographyTypes.CAPTION),
  [TypographyTypes.BUTTON]: spanRenderer(TypographyTypes.BUTTON),
  [TypographyTypes.OVERLINE]: spanRenderer(TypographyTypes.OVERLINE),
};

interface TypographyRendererProps {
  type: Typography;
}

export const TypographyRenderer = (props: TypographyRendererProps) => {
  const { type } = props;
  return renderer[type]();
};
