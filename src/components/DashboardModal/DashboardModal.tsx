import "../../App.css";
import { ModalContainer } from "../../style/containers";
import { FaWindowClose } from "react-icons/fa";
import { DefaultButton } from "../../style/buttons";
import { DefaultInput } from "../Inputs/DefaultInput";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import * as Inter from "../../InterfacesChart";

export const DashboardModal = () => {
  const {
    modalData,
    modalOpen,
    setModalOpen,
    editContact,
    registerContact,
    deleteContact,
  }: Inter.iContactsContext = useContext(ContactContext);
  const data = modalData;

  if (modalOpen) {
    if ((data as Inter.iModalData).type === "edit") {
      return (
        <ModalContainer>
          <div className="popUpAnim">
            <header>
              <h2>Editar Contato</h2>
              <DefaultButton onClick={() => setModalOpen(false)}>
                <FaWindowClose />
              </DefaultButton>
            </header>
            <form onSubmit={editContact}>
              <DefaultInput
                defaultValue={(data as Inter.iModalData).name}
                label="Nome"
                readOnly={false}
                name="contactName"
              />
              <DefaultInput
                defaultValue={(data as Inter.iModalData).email}
                label="Email"
                readOnly={false}
                name="contactEmail"
              />
              <DefaultInput
                defaultValue={(data as Inter.iModalData).phone}
                label="Telefone"
                readOnly={false}
                name="contactPhone"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10%",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <DefaultButton
                  className="form-button"
                  type="submit"
                  style={{
                    width: "60%",
                    margin: "0",
                  }}
                >
                  Salvar Alterações
                </DefaultButton>
                <DefaultButton
                  className="delete-button"
                  onClick={deleteContact}
                  style={{
                    width: "30%",
                    margin: "0",
                  }}
                >
                  Excluir
                </DefaultButton>
              </div>
            </form>
          </div>
        </ModalContainer>
      );
    } else {
      return (
        <ModalContainer>
          <div className="popUpAnim">
            <header>
              <h2>Cadastrar Contato</h2>
              <DefaultButton onClick={() => setModalOpen(false)}>
                <FaWindowClose />
              </DefaultButton>
            </header>
            <form onSubmit={registerContact}>
              <DefaultInput
                placeholder="Nome"
                label="Nome"
                name="contactName"
                // required={true}
              />
              <DefaultInput
                placeholder="Email"
                label="Email"
                name="contactEmail"
                // required={true}
              />
              <DefaultInput
                placeholder="Telefone"
                label="Telefone"
                name="contactPhone"
                // required={true}
              />
              <DefaultButton className="regist-button" type="submit">
                Cadastrar
              </DefaultButton>
            </form>
          </div>
        </ModalContainer>
      );
    }
  }
  return <></>;
};
