import {LitElement, html, customElement, property} from 'lit-element';

@customElement('form-b')
export class FormB extends LitElement {
  @property({type: String, attribute: true})
  name = '';

  render() {
    return html` <p>this is form b</p>`;
  }
}
