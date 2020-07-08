var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let FormA = class FormA extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    render() {
        return html ` <p>this is form a</p>`;
    }
};
__decorate([
    property({ type: String, attribute: true })
], FormA.prototype, "name", void 0);
FormA = __decorate([
    customElement('form-a')
], FormA);
export { FormA };
//# sourceMappingURL=form-a.js.map