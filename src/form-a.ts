import {LitElement, html, customElement, property} from 'lit-element';

@customElement('form-a')
export class FormA extends LitElement {
  @property({type: String, attribute: true})
  name = '';

  render() {
    return html` <p>this is form a</p>`;
  }
}
