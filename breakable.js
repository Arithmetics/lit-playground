var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, } from 'lit-element';
let Breakable = class Breakable extends LitElement {
    constructor() {
        super(...arguments);
        this.breakableTitle = 'default';
    }
    render() {
        return html `<div id="breakable"><p>${this.breakableTitle}</p></div>`;
    }
};
__decorate([
    property({ type: String, attribute: true })
], Breakable.prototype, "breakableTitle", void 0);
Breakable = __decorate([
    customElement('breakable-el')
], Breakable);
export { Breakable };
//# sourceMappingURL=breakable.js.map