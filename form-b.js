var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let FormB = class FormB extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    render() {
        return html ` <p>this is form b</p>`;
    }
};
__decorate([
    property({ type: String, attribute: true })
], FormB.prototype, "name", void 0);
FormB = __decorate([
    customElement('form-b')
], FormB);
export { FormB };
//# sourceMappingURL=form-b.js.map