// import { Component, EventEmitter, Event, h, Prop } from '@stencil/core';

// @Component({
//   tag: 'co2-button',
//   styleUrl: 'co2-button.css',
//   shadow: true,
// })
// export class Co2Button {
//   @Prop() text: string;

//   /**
//    * HTML onBlur event
//    */
//   @Event() scaleClick?: EventEmitter<any>;

//   /**
//    * HTML disabled attribute
//    */
//   @Prop({ reflect: true }) isDisabled?: boolean = false;

//   handleClick(event) {
//     this.scaleClick?.emit(event);
//   }
//   render() {
//     return (
//       <button
//         type="submit"
//         class="button"
//         onClick={event => this.handleClick(event)}
//         disabled={this.isDisabled}
//       >
//         {this.text}
//       </button>
//     );
//   }
// }
