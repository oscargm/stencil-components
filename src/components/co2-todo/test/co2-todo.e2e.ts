import { newE2EPage } from '@stencil/core/testing';

describe('co2-todo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<co2-todo></co2-todo>');

    const element = await page.find('co2-todo');
    expect(element).toHaveClass('hydrated');
  });
});
