import { DashboardContainer } from "../../style/containers";
import { Line } from "../../style/assets";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactContext, ContactProvider } from "../../contexts/ContactContext";

interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
interface iWorks {
  id: string;
  description: string;
  title: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}
interface iUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechs[];
  works: iWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}
interface iUserContext {
  goLogin(): void;
  userData: iUserData | {};
}
export const DashboardPage = () => {
  const { goLogin, userData }: iUserContext = useContext(UserContext);

  return (
    <>
      <DashboardContainer>
        <span></span>
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
      <ContactProvider>
        <ContactList />
      </ContactProvider>
    </>
  );
};
