var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
const defaultFormState = {
    email: {
        value: '',
        isValid: false,
        errorMessage: '',
        validateField: function () {
            if (this.value.length < 8) {
                this.isValid = false;
                this.errorMessage = 'email must be 8 chars';
            }
            else {
                this.isValid = true;
                this.errorMessage = '';
            }
        },
    },
    password: {
        value: '',
        isValid: false,
        errorMessage: '',
        validateField: async function () {
            console.log('before');
            const xx = wait2();
            console.log('after');
            if (this.value.length < 8) {
                this.isValid = false;
                this.errorMessage = 'password too short, must be 8 chars';
            }
            else {
                this.isValid = true;
                this.errorMessage = 'xx';
            }
        },
    },
    money: {
        value: 0,
        isValid: false,
        errorMessage: '',
        validateField: function () {
            if (this.value > 100) {
                this.isValid = false;
                this.errorMessage = 'money needs to be below 100';
            }
            else {
                this.isValid = true;
                this.errorMessage = '';
            }
        },
    },
    rememberMe: {
        value: false,
        isValid: false,
        errorMessage: '',
        validateField: function () {
            this.isValid = true;
        },
    },
};
async function wait2() {
    await setTimeout(() => {
        console.log('World!');
    }, 2000);
    return 'xx';
}
let MyForm = class MyForm extends LitElement {
    constructor() {
        super(...arguments);
        this.formState = defaultFormState;
        this.formSuccessfullySubmitted = false;
        this.validateFormField = (field) => async () => {
            const newFormState = Object.assign({}, this.formState);
            await newFormState[field].validateField();
            this.formState = newFormState;
        };
        this.onTextInputChange = (field) => (e) => {
            const { value } = e.target;
            this.updateState(field, value);
        };
        this.onNumberInputChange = (field) => (e) => {
            const { value } = e.target;
            this.updateState(field, parseInt(value, 10) || 0);
        };
        this.onBoolInputChange = (field) => (e) => {
            const { checked } = e.target;
            this.updateState(field, checked);
        };
    }
    updateState(field, value) {
        if (typeof this.formState[field].value !== typeof value) {
            return;
        }
        const newFormState = Object.assign({}, this.formState);
        if (typeof value === 'string')
            newFormState[field].value = value;
        if (typeof value === 'boolean')
            newFormState[field].value = value;
        if (typeof value === 'number')
            newFormState[field].value = value;
        this.formState = newFormState;
    }
    async validateAll() {
        for (const key in this.formState) {
            await this.validateFormField(key)();
        }
    }
    submitForm() {
        this.validateAll();
        for (const key in this.formState) {
            const formField = this.formState[key];
            if (!formField.isValid) {
                return;
            }
        }
        this.formSuccessfullySubmitted = true;
    }
    render() {
        return html `
      <div>
        <h4>Here is the form state</h4>
        <ul>
          <li>
            value: "${this.formState.email.value}", valid:
            ${this.formState.email.isValid}
          </li>
          <li>
            value: "${this.formState.password.value}", valid:
            ${this.formState.password.isValid}
          </li>
          <li>
            value: ${this.formState.money.value}, valid:
            ${this.formState.money.isValid}
          </li>
          <li>
            value: ${this.formState.rememberMe.value}, valid:
            ${this.formState.rememberMe.isValid}
          </li>
        </ul>
        <input
          type="email"
          name="email"
          value=${this.formState.email.value}
          @input=${this.onTextInputChange('email')}
          @blur=${this.validateFormField('email')}
        />
        <p>${this.formState.email.errorMessage}</p>
        <input
          type="password"
          name="password"
          value=${this.formState.password.value}
          @input=${this.onTextInputChange('password')}
          @blur=${this.validateFormField('password')}
        />
        <p>${this.formState.password.errorMessage}</p>
        <input
          type="number"
          name="money"
          value=${this.formState.money.value}
          @input=${this.onNumberInputChange('money')}
          @blur=${this.validateFormField('money')}
        />
        <p>${this.formState.money.errorMessage}</p>
        <input
          type="checkbox"
          .checked=${this.formState.rememberMe.value}
          @change=${this.onBoolInputChange('rememberMe')}
          @blur=${this.validateFormField('rememberMe')}
        />
        <p>${this.formState.rememberMe.errorMessage}</p>
        <button @click=${this.submitForm}>Submit</button>
        <p>The form submitted to server?: ${this.formSuccessfullySubmitted}</p>
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], MyForm.prototype, "formState", void 0);
__decorate([
    property({ type: Boolean })
], MyForm.prototype, "formSuccessfullySubmitted", void 0);
MyForm = __decorate([
    customElement('my-form')
], MyForm);
export { MyForm };
//# sourceMappingURL=my-form.js.map