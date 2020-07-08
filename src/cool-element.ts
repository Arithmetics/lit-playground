import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from 'lit-element';
import './form-a';
import './form-b';
import './form-c';

interface FormConfiguration {
  template: TemplateResult;
  extraMessage: string;
}

const formLookup: Record<string, FormConfiguration> = {
  World: {template: html`<form-a></form-a>`, extraMessage: 'xx'},
  Yoyo: {template: html`<form-b></form-b>`, extraMessage: 'yy'},
  Bongo: {template: html`<form-c></form-c>`, extraMessage: 'zz'},
};

@customElement('cool-element')
export class CoolElement extends LitElement {
  @property({type: String, attribute: true})
  name = '';

  renderedForm(): TemplateResult {
    return formLookup[this.name]?.template;
  }

  chosenMessage(): string {
    return formLookup[this.name]?.extraMessage;
  }

  render(): TemplateResult {
    console.log(this.chosenMessage());
    return html`
      <p>given name ${this.name}</p>
      <!-- ${this.name === 'World' ? html`<form-a></form-a>` : null}
      ${this.name === 'Yoyo' ? html`<form-b></form-b>` : null}
      ${this.name === 'Bongo' ? html`<form-c></form-c>` : null} -->
      ${this.renderedForm()}
    `;
  }
}
