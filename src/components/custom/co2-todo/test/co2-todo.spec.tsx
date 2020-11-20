import { newSpecPage } from '@stencil/core/testing';
import { Co2Todo } from '../co2-todo';

describe('co2-todo', () => {
  it('renders empty', async () => {
    const page = await newSpecPage({
      components: [Co2Todo],
      html: `<co2-todo></co2-todo>`,
    });
    expect(page.root).toEqualHtml(`
      <co2-todo>
        <mock:shadow-root>
          <div class="todo">
           <co2-typography class="todo-section todo-task" type="caption"></co2-typography>
           <co2-switch class="todo-action todo-section" is-checked="false" label="is done?"></co2-switch>
         </div>
        </mock:shadow-root>
      </co2-todo>
    `);
  });
  it('renders undone todo with info', async () => {
    const page = await newSpecPage({
      components: [Co2Todo],
      html: `<co2-todo index="1" is-done="false" task="whatever"></co2-todo>`,
    });
    // console.log(page.root.shadowRoot.innerHTML);
    expect(page.root).toEqualHtml(`
      <co2-todo index="1" is-done="false" task="whatever">
        <mock:shadow-root>
          <div class="todo">
            <co2-typography type="caption" class="todo-section todo-id">1</co2-typography>
            <co2-typography type="caption" class="todo-section todo-task">whatever</co2-typography>
            <co2-switch label="is done?" is-checked="false" class="todo-section todo-action"></co2-switch>
          </div>
        </mock:shadow-root>
      </co2-todo>

    `);
  });
  it('renders done todo with info', async () => {
    const page = await newSpecPage({
      components: [Co2Todo],
      html: `<co2-todo index="1" is-done="" task="whatever"></co2-todo>`,
    });
    // console.log(page.root);
    expect(page.root).toEqualHtml(`
      <co2-todo index="1" is-done="" task="whatever">
        <mock:shadow-root>
          <div class="todo">
            <co2-typography type="caption" class="todo-section todo-id">1</co2-typography>
            <co2-typography type="caption" class="todo-section todo-task">whatever</co2-typography>
            <co2-switch label="is done?" is-checked="true" class="todo-section todo-action"></co2-switch>
          </div>
        </mock:shadow-root>
      </co2-todo>
    `);
  });
});
