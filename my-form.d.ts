import { LitElement } from 'lit-element';
declare type FormField<T> = {
    value: T;
    isValid: boolean;
    errorMessage: string;
    validateField: () => void;
};
declare type LoginForm = {
    email: FormField<string>;
    password: FormField<string>;
    money: FormField<number>;
    rememberMe: FormField<boolean>;
};
export declare class MyForm extends LitElement {
    formState: LoginForm;
    formSuccessfullySubmitted: boolean;
    updateState(field: keyof LoginForm, value: string | number | boolean): void;
    validateFormField: (field: "email" | "password" | "money" | "rememberMe") => () => Promise<void>;
    validateAll(): Promise<void>;
    onTextInputChange: (field: "email" | "password" | "money" | "rememberMe") => (e: Event) => void;
    onNumberInputChange: (field: "email" | "password" | "money" | "rememberMe") => (e: Event) => void;
    onBoolInputChange: (field: "email" | "password" | "money" | "rememberMe") => (e: Event) => void;
    submitForm(): void;
    render(): import("lit-element").TemplateResult;
}
export {};
//# sourceMappingURL=my-form.d.ts.map