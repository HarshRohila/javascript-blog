import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'note-block',
  styleUrl: 'note-block.css',
  shadow: true,
})
export class NoteBlock {

  @Prop() text: string;

  render() {
    return (
      <p><i><b>Note:</b>{` ${this.text}`}</i></p>
    );
  }

}
