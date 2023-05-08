import { DashboardContainer } from "../../style/containers";
import { Line } from "../../style/assets";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactContext, ContactProvider } from "../../contexts/ContactContext";
import * as Inter from "../../InterfacesChart";
import { iContactsContext, iUserData } from "../../InterfacesChart";
import { BsFillPencilFill } from "react-icons/bs";
import { DashboardModal } from "../../components/DashboardModal/DashboardModal";

interface iUserContext {
  goLogin(): void;
  userData: iUserData;
}
export const DashboardPage = () => {
  const { goLogin, userData }: iUserContext = useContext(UserContext);
  const { contactList, activateModal }: Inter.iContactsContext =
    useContext(ContactContext);

  return (
    <ContactProvider>
      <DashboardContainer>
        <span></span>
        {/* <div className={"UserPlate"}>
          <span>{userData.name}</span>
          <BsFillPencilFill
            className="pen"
            onClick={() => {
              activateModal(
                "editContact",
                userData.name,
                userData.email,
                userData.id,
                userData.phone
              );
            }}
          />
        </div> */}

        <button
          onClick={() => {
            localStorage.clear();
            goLogin();
          }}
        >
          Sair
        </button>
      </DashboardContainer>
      <Line />
      <ContactList />
    </ContactProvider>
  );
};
