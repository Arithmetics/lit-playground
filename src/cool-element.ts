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

  @property({type: String, attribute: true})
  newBreak = 'default new break';

  renderedForm(): TemplateResult {
    return formLookup[this.name]?.template;
  }

  chosenMessage(): string {
    return formLookup[this.name]?.extraMessage;
  }

  radMan(x: string): number {
    return 8 * Number(x);
  }

  onClick() {
    this.newBreak = Math.random().toString();
  }

  render(): TemplateResult {
    console.log(this.chosenMessage());
    return html`
      <button @click=${this.onClick}>refresh new break</button>
      <p>given name ${this.name}</p>
      <!-- ${this.renderedForm()} -->
      <form-c breakableTitle=${this.newBreak}></form-c>
    `;
  }
}
