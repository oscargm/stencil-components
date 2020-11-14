import { newE2EPage } from '@stencil/core/testing';

describe('co2-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<co2-button></co2-button>');

    const element = await page.find('co2-button');
    expect(element).toHaveClass('hydrated');
  });
});
