import {LitElement, html, customElement, property} from 'lit-element';

type FormField<T> = {
  value: T;
  isValid: boolean;
  errorMessage: string;
  validateField: () => void;
};

// specific to this component

type LoginForm = {
  email: FormField<string>;
  password: FormField<string>;
  money: FormField<number>;
  rememberMe: FormField<boolean>;
};

const defaultFormState: LoginForm = {
  email: {
    value: '',
    isValid: false,
    errorMessage: '',
    validateField: function () {
      if (this.value.length < 8) {
        this.isValid = false;
        this.errorMessage = 'email must be 8 chars';
      } else {
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
      } else {
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
      } else {
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

async function wait2(): Promise<string> {
  await setTimeout(() => {
    console.log('World!');
  }, 2000);
  return 'xx';
}

@customElement('my-form')
export class MyForm extends LitElement {
  @property({type: Object}) formState: LoginForm = defaultFormState;
  @property({type: Boolean}) formSuccessfullySubmitted = false;

  updateState(field: keyof LoginForm, value: string | number | boolean): void {
    if (typeof this.formState[field].value !== typeof value) {
      return;
    }
    const newFormState = {...this.formState};
    if (typeof value === 'string')
      (newFormState[field].value as string) = value;
    if (typeof value === 'boolean')
      (newFormState[field].value as boolean) = value;
    if (typeof value === 'number')
      (newFormState[field].value as number) = value;

    this.formState = newFormState;
  }

  validateFormField = (field: keyof LoginForm) => async (): Promise<void> => {
    const newFormState = {...this.formState};
    await newFormState[field].validateField();
    this.formState = newFormState;
  };

  async validateAll(): Promise<void> {
    for (const key in this.formState) {
      await this.validateFormField(key as keyof LoginForm)();
    }
  }

  onTextInputChange = (field: keyof LoginForm) => (e: Event) => {
    const {value} = e.target as HTMLInputElement;
    this.updateState(field, value);
  };

  onNumberInputChange = (field: keyof LoginForm) => (e: Event) => {
    const {value} = e.target as HTMLInputElement;
    this.updateState(field, parseInt(value, 10) || 0);
  };

  onBoolInputChange = (field: keyof LoginForm) => (e: Event) => {
    const {checked} = e.target as HTMLInputElement;
    this.updateState(field, checked);
  };

  submitForm(): void {
    this.validateAll();
    for (const key in this.formState) {
      const formField = this.formState[key as keyof LoginForm];
      if (!formField.isValid) {
        return;
      }
    }

    this.formSuccessfullySubmitted = true;
  }

  render() {
    return html`
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
}
