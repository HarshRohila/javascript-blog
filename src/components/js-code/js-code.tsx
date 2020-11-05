import { Component, h, Prop } from '@stencil/core';
import Prism from 'prismjs';

@Component({
  tag: 'js-code',
  styleUrl: 'prism.css',
  // shadow: true,
})
export class JsCode {

  @Prop() code: string;

  componentDidRender() {
    Prism.highlightAll();
  }

  render() {
    return (
      <pre><code class="language-javascript">{this.code}</code></pre>
    );
  }

}
