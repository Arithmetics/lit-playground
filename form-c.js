var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let FormC = class FormC extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    render() {
        return html `<p>this is form c</p>`;
    }
};
__decorate([
    property({ type: String, attribute: true })
], FormC.prototype, "name", void 0);
FormC = __decorate([
    customElement('form-c')
], FormC);
export { FormC };
//# sourceMappingURL=form-c.js.map