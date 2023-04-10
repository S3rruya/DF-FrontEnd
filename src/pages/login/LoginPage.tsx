import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { FormContainer } from "../../style//containers";
import {
  DefaultButton,
  NavigateButton,
} from "../../style/buttons";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrorsImpl,
} from "react-hook-form";
import * as Inter from "../../InterfacesChart";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    loginFunction,
    errors,
    goRegister,
  }: Inter.iUserContext = useContext(UserContext);
  return (
    <>
      <FormContainer onSubmit={handleSubmit(loginFunction)}>
        <h2>Login</h2>
        <DefaultInput
          type="text"
          label="Email"
          name="email"
          placeholder="Digite aqui seu email"
          registerYup={{ ...register("emailLogin") }}
        />
        <span>{errors.emailLogin?.message}</span>
        <DefaultInput
          type="password"
          label="Senha"
          name="password"
          placeholder="Digite aqui sua senha"
          registerYup={{ ...register("passwordLogin") }}
        />
        <span>{errors.passwordLogin?.message}</span>
        <DefaultButton className="register-button" type="submit">
          Entrar
        </DefaultButton>
        <p>Rapido e grátis, vamos nessa</p>
        <NavigateButton onClick={goRegister}>Cadastre-se</NavigateButton>
      </FormContainer>
    </>
  );
};
