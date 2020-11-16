import { newE2EPage } from '@stencil/core/testing';

describe('co2-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<co2-input></co2-input>');
    const element = await page.find('co2-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<co2-input></co2-input>');
    const component = await page.find('co2-input');
    const element = await page.find('co2-input >>> input');
    expect(element.getAttribute('type')).toEqual(`text`);

    component.setProperty('name', 'someInput');
    await page.waitForChanges();
    expect(element.getAttribute('name')).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
