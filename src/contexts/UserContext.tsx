import { createContext, useContext, useEffect, useState } from "react";
import * as yup from "yup";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequests } from "../services/requests";
import * as Inter from "../InterfacesChart";
import { ContactContext } from "./ContactContext";

export const userDataEmpty: Inter.iUserData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  contacts: [],
  created_at: "",
  updated_at: "",
};

export const UserContext = createContext({} as Inter.iUserContext);

export const UserProvider = ({ children }: Inter.iUserContextProps) => {
  const { setModalOpen } = useContext(ContactContext);
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  const goRegister = () => navigate("register");
  const goLogin = () => navigate("login");
  const [userData, setUserData] = useState<Inter.iUserData>(userDataEmpty);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@KenzieHub:TOKEN")
  );
  const [userID, setUserID] = useState<string | null>(
    localStorage.getItem("@KenzieHub:USERID")
  );
  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          userRequests.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await userRequests.get(`/users/${userID}`);
          setUserData(data);
        } catch (error) {
          setUserData(userDataEmpty);
          localStorage.clear();
          goLogin();
        }
      } else {
        setUserData(userDataEmpty);
        goLogin();
      }
    };
    getUser();
  }, [token]);

  const formSchema =
    pathName === "/register"
      ? yup.object().shape({
          nameRegister: yup.string().required("Nome obrigatório"),
          emailRegister: yup
            .string()
            .required("Email obrigatório")
            .email("Email inválido"),
          passwordRegister: yup
            .string()
            .required("Senha obrigatória")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
              "Deve conter 8 caracteres, um maiúculo, um minúsculo, um número e um caractere especial"
            ),
          passwordConfirmRegister: yup
            .string()
            .required("Confirmação de senha obrigatória")
            .oneOf([yup.ref("passwordRegister"), null], "Senhas não conferem"),
          phoneRegister: yup.string().required("Telefone obrigatório"),
        })
      : yup.object().shape({
          emailLogin: yup
            .string()
            .required("Email obrigatório")
            .email("Email inválido"),
          passwordLogin: yup.string().required("Senha obrigatória"),
        });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inter.iFormLogin | Inter.iFormRegister>({
    resolver: yupResolver(formSchema),
  });

  const loginFunction = async (data: Inter.iFormLogin): Promise<void> => {
    await userRequests
      .post("/login", {
        email: data.emailLogin,
        password: data.passwordLogin,
      })
      .then((res) => {
        localStorage.setItem("@KenzieHub:USERID", res.data.id);
        setUserID(localStorage.getItem("@KenzieHub:USERID"));
        localStorage.setItem("@KenzieHub:TOKEN", res.data.token);
        setToken(localStorage.getItem("@KenzieHub:TOKEN"));
        navigate("/");
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos");
      });
  };

  const registerFunction = (data: Inter.iFormRegister) => {
    userRequests
      .post("users/", {
        email: data.emailRegister,
        password: data.passwordRegister,
        name: data.nameRegister,
        phone: data.phoneRegister,
      })
      .then((res) => {
        toast.success("Cadastrado com sucesso");
        goLogin();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const editFunction = async (
    event: React.FormEvent<Inter.YourFormElement>
  ) => {
    event.preventDefault();
    userRequests.defaults.headers.authorization = `Bearer ${localStorage.getItem(
      "@KenzieHub:TOKEN"
    )}`;
    await userRequests
      .patch(`users/`, {
        name: event.currentTarget.elements.contactName.value,
        email: event.currentTarget.elements.contactEmail.value,
        phone: event.currentTarget.elements.contactPhone.value,
      })
      .then((res) => {
        toast.success("Usuário editado");
        window.location.reload();
        setModalOpen(false);
      })
      .catch((error) => {
        toast.error(
          error?.response.request.status === 401
            ? "Usuário já extistente."
            : "Error"
        );
      });
  };
  return (
    <UserContext.Provider
      value={{
        handleSubmit,
        register,
        loginFunction,
        registerFunction,
        editFunction,
        goRegister,
        goLogin,
        userData,
        setUserData,
        errors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
