import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --toastify-toast-background: #121214;

    --color-primary: #56568B;
    --color-primary-focus: #5959D8;
    --color-primary-negative: #59323F;
    --color-grey-4: #2B2B31 ;
    --color-grey-3: #464663 ;
    --color-grey-2: #5959AF;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-negative: #E83F5B;
    --color-sucess: #3FE864;

    --font-size-h2: 18px;
    --font-size-0: 16px;
    --font-size-1: 12px;
    --font-size-2: 14px;

    --font-bolder: 700;
    --font-bold: 600;
    --font-regular: 400;

    --gap-0: 10px;
    --gap-1: 20px;
    --gap-2: 30px;

    --radius-0: 6px;
    
    --default-input-width: 90%;
    --default-input-padding: 3%;

    --default-button-height: 50px;

    --dashboard-max-width: 660px;
    --dashboard-width: 80vw;
  }
`;
