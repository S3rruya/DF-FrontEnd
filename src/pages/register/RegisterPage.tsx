import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { FormContainer } from "../../style/containers";
import { DefaultButton } from "../../style/buttons";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as Inter from "../../InterfacesChart";

export const RegisterPage = () => {
  const {
    goLogin,
    registerFunction,
    handleSubmit,
    register,
    errors,
  }: Inter.iUserContext = useContext(UserContext);
  return (
    <>
      <FormContainer onSubmit={handleSubmit(registerFunction)}>
        <header>
          <button className="back-button" type="button" onClick={goLogin}>
            Voltar
          </button>
        </header>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <DefaultInput
          type="text"
          label="Nome"
          name="name"
          placeholder="Digite aqui seu nome"
          registerYup={{ ...register("nameRegister") }}
        />
        <span>{errors.nameRegister?.message}</span>
        <DefaultInput
          type="text"
          label="Email"
          name="email"
          placeholder="Digite aqui seu email"
          registerYup={{ ...register("emailRegister") }}
        />
        <span>{errors.emailRegister?.message}</span>
        <DefaultInput
          type="password"
          label="Senha"
          name="password"
          placeholder="Digite aqui sua senha"
          registerYup={{ ...register("passwordRegister") }}
        />
        <span>{errors.passwordRegister?.message}</span>

        <DefaultInput
          type="password"
          label="Confirmar Senha"
          name="passwordConfirm"
          placeholder="Digite novamente sua senha"
          registerYup={{ ...register("passwordConfirmRegister") }}
        />
        <span>{errors.passwordConfirmRegister?.message}</span>

        <DefaultInput
          type="text"
          label="Phone"
          name="phone"
          placeholder="Telefone de contato"
          registerYup={{ ...register("phoneRegister") }}
        />

        <DefaultButton className="register-button" type="submit">
          Cadastrar
        </DefaultButton>
      </FormContainer>
    </>
  );
};
