import {LitElement, html, customElement, property} from 'lit-element';

@customElement('form-c')
export class FormC extends LitElement {
  @property({type: String, attribute: true})
  name = '';

  render() {
    return html`<p>this is form c</p>`;
  }
}
