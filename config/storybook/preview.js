export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      xs: {
        name: 'Device XS (iPhone 6/7/8)',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      md: {
        name: 'Device MD (iPad)',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      lg: {
        name: 'Device LG (iPad Pro)',
        styles: {
          width: '1024px',
          height: '1366px',
        },
      },
      xl: {
        name: 'Device XL (Laptop)',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
    },
  },
};
