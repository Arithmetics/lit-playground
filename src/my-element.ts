import {LitElement, html, customElement, property, css} from 'lit-element';
import './cool-element';
import './my-form';

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

  private onChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    console.log(input.checked);
  }

  render() {
    return html`
      <!-- <h1>Hello, ${this.name}!</h1>
      <input
        type="checkbox"
        id="music"
        name="interest"
        value="music"
        @change=${this.onChange}
      />
      <label for="music">Music</label>
      <button @click=${() => this.onClick('World')}>World</button>
      <button @click=${() => this.onClick('Yoyo')}>Yoyo</button>
      <button @click=${() => this.onClick('Bongo')}>Bongo</button>
      <button @click=${() => this.onClick('XXX')}>XXX</button>
      <cool-element name=${this.name}></cool-element> -->
      <my-form></my-form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
