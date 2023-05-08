import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { userRequests } from "../services/requests";
import * as Inter from "../InterfacesChart";

export const ContactContext = createContext({} as Inter.iContactsContext);

export const ContactProvider = ({ children }: Inter.iContactsContextProps) => {
  const [contactList, setContactList] = useState<Inter.iContacts[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Inter.iModalData | null>({});

  useEffect(() => {
    const getUser = async () => {
      try {
        userRequests.defaults.headers.authorization = `Bearer ${localStorage.getItem(
          "@KenzieHub:TOKEN"
        )}`;
        const { data } = await userRequests.get(`/users/contacts/`);
        setContactList(data.contacts);
      } catch (error) {}
    };
    getUser();
  }, [modalOpen]);
  const activateModal = (
    type: string,
    email?: string,
    name?: string,
    phone?: string,
    id?: string
  ) => {
    setModalData({
      name: name,
      email: email,
      type: type,
      phone: phone,
      id: id,
    });
    setModalOpen(true);
  };

  const editContact = async (event: React.FormEvent<Inter.YourFormElement>) => {
    event.preventDefault();
    userRequests.defaults.headers.authorization = `Bearer ${localStorage.getItem(
      "@KenzieHub:TOKEN"
    )}`;
    await userRequests
      .patch(`/users/contacts/${(modalData as Inter.iModalData).id}`, {
        name: event.currentTarget.elements.contactName.value,
        email: event.currentTarget.elements.contactEmail.value,
        phone: event.currentTarget.elements.contactPhone.value,
      })
      .then((res) => {
        toast.success("Contato editado");
        setModalOpen(false);
      })
      .catch((error) => {
        toast.error(
          error?.response.request.status === 401
            ? "Contato já extistente."
            : "Error"
        );
      });
  };
  const registerContact = async (
    event: React.FormEvent<Inter.YourFormElement>
  ) => {
    event.preventDefault();
    userRequests.defaults.headers.authorization = `Bearer ${localStorage.getItem(
      "@KenzieHub:TOKEN"
    )}`;
    await userRequests
      .post("/users/contacts", {
        name: event.currentTarget.elements.contactName.value,
        email: event.currentTarget.elements.contactEmail.value,
        phone: event.currentTarget.elements.contactPhone.value,
      })
      .then((res) => {
        toast.success("Contato criado");
        setModalOpen(false);
      })
      .catch((error) => {
        toast.error(
          error?.response.request.status === 401
            ? "Contato já extistente."
            : "Error"
        );
      });
  };
  const deleteContact = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    userRequests.defaults.headers.authorization = `Bearer ${localStorage.getItem(
      "@KenzieHub:TOKEN"
    )}`;
    await userRequests
      .delete(`/users/contacts/${(modalData as Inter.iModalData).id}`)
      .then((res) => {
        toast.success("Contato deletado");
        setModalOpen(false);
        return res;
      })
      .catch((error) => {
        toast.error(
          error?.response.request.status === 401
            ? "Contato já extistente."
            : "Error"
        );
      });
  };
  return (
    <ContactContext.Provider
      value={{
        contactList,
        setContactList,
        modalOpen,
        setModalOpen,
        modalData,
        setModalData,
        activateModal,
        editContact,
        registerContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
