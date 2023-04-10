import { FormEvent } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

// \/ User
export interface iFormLogin {
  emailLogin: string;
  passwordLogin: string;
}
export interface iFormRegister {
  nameRegister: string;
  emailRegister: string;
  passwordRegister: string;
  passwordConfirmRegister: string;
  phoneRegister: string;
}
export interface iUserContextProps {
  children: React.ReactNode;
}
export interface iContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface iUserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: iContacts[];
  created_at: string;
  updated_at: string;
}
export interface iUserContext {
  handleSubmit: UseFormHandleSubmit<any>;
  register: UseFormRegister<iFormLogin | iFormRegister>;
  loginFunction(data: iFormLogin): void;
  registerFunction(data: iFormRegister): void;
  goRegister(): void;
  goLogin(): void;
  userData: iUserData | {};
  setUserData: React.Dispatch<React.SetStateAction<iUserData | {}>>;
  errors: any;
}
// \/ Tech's Interfaces \/
export interface iContactsContext {
  contactList: iContacts[];
  setContactList: React.Dispatch<React.SetStateAction<iContacts[]>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: iModalData | null;
  setModalData: React.Dispatch<React.SetStateAction<iModalData | null>>;
  activateModal(
    type: string,
    name?: string,
    email?: string,
    id?: string,
    phone?: string

  ): void;
  editContact(event: FormEvent<HTMLFormElement>): void;
  registerContact(event: FormEvent<HTMLFormElement>): void;
  deleteContact(event: { preventDefault: () => void }): void;
}
export interface iContactsContextProps {
  children: React.ReactNode;
}
export interface iModalData {
  type?: string | "";
  name?: string | "";
  email?: string | "";
  phone?: string | "";
  id?: string | "";
}
export interface iOptions {
  value: string;
  label: string;
}

export interface FormElements extends HTMLFormControlsCollection {
  contactName: HTMLInputElement;
  contactEmail: HTMLInputElement;
  contactPhone: HTMLInputElement;
}

export interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export interface iDefaultInput {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  required?: false;
  value?: string;
  defaultValue?: string | number;
  readOnly?: boolean;
  registerYup?: any;
}
