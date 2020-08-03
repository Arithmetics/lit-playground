import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';

@customElement('breakable-el')
export class Breakable extends LitElement {
  @property({type: String, attribute: true})
  breakableTitle = 'default';

  render() {
    return html`<div id="breakable"><p>${this.breakableTitle}</p></div>`;
  }
}
