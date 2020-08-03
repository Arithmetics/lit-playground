var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, } from 'lit-element';
import './form-a';
import './form-b';
import './form-c';
const formLookup = {
    World: { template: html `<form-a></form-a>`, extraMessage: 'xx' },
    Yoyo: { template: html `<form-b></form-b>`, extraMessage: 'yy' },
    Bongo: { template: html `<form-c></form-c>`, extraMessage: 'zz' },
};
let CoolElement = class CoolElement extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.newBreak = 'default new break';
    }
    renderedForm() {
        var _a;
        return (_a = formLookup[this.name]) === null || _a === void 0 ? void 0 : _a.template;
    }
    chosenMessage() {
        var _a;
        return (_a = formLookup[this.name]) === null || _a === void 0 ? void 0 : _a.extraMessage;
    }
    radMan(x) {
        return 8 * Number(x);
    }
    onClick() {
        this.newBreak = Math.random().toString();
    }
    render() {
        console.log(this.chosenMessage());
        return html `
      <button @click=${this.onClick}>refresh new break</button>
      <p>given name ${this.name}</p>
      <!-- ${this.renderedForm()} -->
      <form-c breakableTitle=${this.newBreak}></form-c>
    `;
    }
};
__decorate([
    property({ type: String, attribute: true })
], CoolElement.prototype, "name", void 0);
__decorate([
    property({ type: String, attribute: true })
], CoolElement.prototype, "newBreak", void 0);
CoolElement = __decorate([
    customElement('cool-element')
], CoolElement);
export { CoolElement };
//# sourceMappingURL=cool-element.js.map