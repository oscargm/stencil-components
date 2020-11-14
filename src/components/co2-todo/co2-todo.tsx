import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'co2-todo',
  styleUrl: 'co2-todo.css',
  shadow: true,
})
export class Co2Todo {
  @Prop() index?: number = 0;

  @Prop({ mutable: true }) task: string = '';

  @Prop({ reflect: true }) isDone?: boolean = false;

  render() {
    return (
      <div class="todo">
        {!!this.index && <span class="todo-section todo-id">{this.index}</span>}
        <span class="todo-section todo-task">{this.task}</span>
        <co2-input
          label="is done?"
          type="checkbox"
          class="todo-section todo-action"
        ></co2-input>
      </div>
      // <Host>
      //   <slot></slot>
      // </Host>
    );
  }
}
