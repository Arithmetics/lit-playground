import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';

import './breakable';

@customElement('form-c')
export class FormC extends LitElement {
  @property({type: String, attribute: true})
  name = '';

  @property({type: String, attribute: true})
  breakableTitle = 'default';

  onClick() {
    const element = this.shadowRoot
      ?.getElementById('step-one')
      ?.shadowRoot?.getElementById('breakable');
    console.log(element);
    if (element) {
      element.innerHTML = '<p>broken</p>';
    }
  }

  makeNewBreakable(): TemplateResult {
    return html`<div id="breakable"><p>${this.breakableTitle}</p></div>`;
  }

  render() {
    const breakableBit = this.makeNewBreakable();
    return html`
      <p>this is form c</p>
      <button @click=${this.onClick}>Break it</button>
      <!-- ${breakableBit} -->
      <breakable-el
        id="step-one"
        breakableTitle=${this.breakableTitle}
      ></breakable-el>
    `;
  }
}
