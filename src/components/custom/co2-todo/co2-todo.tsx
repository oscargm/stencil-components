import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { TypographyTypes } from '../../mdc/typography/model';

@Component({
  tag: 'co2-todo',
  styleUrl: 'co2-todo.scss',
  shadow: true,
})
export class Co2Todo implements ComponentInterface {
  /**
   * Index prop
   */
  @Prop() index?: number = 0;

  /**
   * Todo task text prop
   */
  @Prop() task: string = '';

  /**
   *  isDone prop (checks or unchecks switch)
   */
  @Prop({ reflect: true }) isDone?: boolean;

  render() {
    return (
      <div class="todo">
        {!!this.index ? (
          <co2-typography
            type={TypographyTypes.CAPTION}
            class="todo-section todo-id"
          >
            {this.index}
          </co2-typography>
        ) : null}
        <co2-typography
          type={TypographyTypes.CAPTION}
          class="todo-section todo-task"
        >
          {this.task}
        </co2-typography>
        <co2-switch
          label="is done?"
          is-checked={this.isDone ? 'true' : 'false'}
          class="todo-section todo-action"
        ></co2-switch>
      </div>
    );
  }
}
