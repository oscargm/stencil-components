import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const basicTheme = create({
  base: 'light',
  brandTitle: 'OscarGM Stencil components',
  brandUrl: 'https://github.com/oscargm/stencil-components',
  brandImage: null,
});

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: basicTheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
});
