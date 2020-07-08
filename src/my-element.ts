import {LitElement, html, customElement, property, css} from 'lit-element';
import './cool-element';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property({type: String, reflect: true})
  name = 'World';

  private onClick(newName: string): void {
    console.log('cliked');
    this.name = newName;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${() => this.onClick('World')}>World</button>
      <button @click=${() => this.onClick('Yoyo')}>Yoyo</button>
      <button @click=${() => this.onClick('Bongo')}>Bongo</button>
      <button @click=${() => this.onClick('XXX')}>XXX</button>
      <cool-element name=${this.name}></cool-element>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
