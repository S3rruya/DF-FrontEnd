import { useContext } from "react";
import { DefaultButton } from "../../style/buttons";
import { ContactContainer } from "../../style/containers";
import { FaPlus } from "react-icons/fa";
import { ContactContext } from "../../contexts/ContactContext";
import * as Inter from "../../InterfacesChart";
import { DashboardModal } from "../DashboardModal/DashboardModal";

export const ContactList = () => {
  const { contactList, activateModal }: Inter.iContactsContext =
    useContext(ContactContext);

  return (
    <ContactContainer>
      <DashboardModal />
      <header>
        <h3>Contatos</h3>
        <DefaultButton
          onClick={() => {
            activateModal("create");
          }}
        >
          <FaPlus />
        </DefaultButton>
      </header>
      <ul>
        {contactList.length >= 1 ? (
          contactList?.map((item, index) => {
            return (
              <li
                key={index}
                id={item.id}
                onClick={() => {
                  activateModal(
                    "edit",
                    item.email,
                    item.name,
                    item.phone,
                    item.id
                  );
                }}
              >
                <p>{item.name}</p>
                <span className="date">{item.createdAt?.substring(0, 10)}</span>
                <span>{item.email}</span>
                <span>{item.phone}</span>
              </li>
            );
          })
        ) : (
          <h2 style={{ color: "grey" }}>Adicione um contato</h2>
        )}
      </ul>
    </ContactContainer>
  );
};
