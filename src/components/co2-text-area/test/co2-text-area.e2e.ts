import { newE2EPage } from '@stencil/core/testing';

describe('co2-text-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<co2-text-area></co2-text-area>');

    const element = await page.find('co2-text-area');
    expect(element).toHaveClass('hydrated');
  });
});
