var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, } from 'lit-element';
import './breakable';
let FormC = class FormC extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.breakableTitle = 'default';
    }
    onClick() {
        var _a, _b, _c;
        const element = (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('step-one')) === null || _b === void 0 ? void 0 : _b.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById('breakable');
        console.log(element);
        if (element) {
            element.innerHTML = '<p>broken</p>';
        }
    }
    makeNewBreakable() {
        return html `<div id="breakable"><p>${this.breakableTitle}</p></div>`;
    }
    render() {
        const breakableBit = this.makeNewBreakable();
        return html `
      <p>this is form c</p>
      <button @click=${this.onClick}>Break it</button>
      <!-- ${breakableBit} -->
      <breakable-el
        id="step-one"
        breakableTitle=${this.breakableTitle}
      ></breakable-el>
    `;
    }
};
__decorate([
    property({ type: String, attribute: true })
], FormC.prototype, "name", void 0);
__decorate([
    property({ type: String, attribute: true })
], FormC.prototype, "breakableTitle", void 0);
FormC = __decorate([
    customElement('form-c')
], FormC);
export { FormC };
//# sourceMappingURL=form-c.js.map