import styled, { keyframes } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: var(--gap-0) auto;
  width: 90vw;
  max-width: 370px;
  min-height: 220px;
  border-radius: var(--radius-0);
  background-color: var(--color-grey-3);
  gap: var(--gap-0);

  header {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    display: flex;
    background-color: var(--color-grey-4);
    align-items: center;
    justify-content: space-between;
  }
  .loginImg {
    margin: auto;
  }
  header > img {
    margin-top: var(--gap-2);
  }
  header > button {
    margin-top: var(--gap-2);
    background-color: var(--color-grey-3);
    border: 0;
    border-radius: var(--radius-0);
    padding: var(--gap-0) var(--gap-1);
    color: var(--color-grey-0);
    cursor: pointer;
  }
  header > button:hover {
    margin-top: var(--gap-2);
    background-color: var(--color-grey-2);
    border: 0;
    border-radius: var(--radius-0);
    padding: var(--gap-0) var(--gap-1);
    color: var(--color-grey-0);
    cursor: pointer;
  }
  h2 {
    margin-top: var(--gap-2);
    font-size: var(--font-size-h2);
    color: var(--color-grey-0);
    text-align: center;
    font-weight: var(--font-bold);
  }
  p {
    margin: 0;
    margin-bottom: var(--gap-1);
    font-size: var(--font-size-1);
    color: var(--color-grey-1);
    text-align: center;
  }
  span {
    font-size: var(--font-size-1);
    color: var(--color-negative);
    width: 90%;
    margin: calc(var(--gap-0) * (-1)) auto 0 auto;
  }
`;

export const DashboardContainer = styled.header`
  flex-wrap: wrap;
  margin: auto;
  width: var(--dashboard-width);
  max-width: var(--dashboard-max-width);
  display: flex;
  justify-content: space-between;
  button {
    margin: auto 0;
    background-color: var(--color-grey-3);
    border: 0;
    border-radius: var(--radius-0);
    padding: var(--gap-0) var(--gap-1);
    color: var(--color-grey-0);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-grey-2);
  }
  img {
    margin-top: var(--gap-2);
  }
`;

export const ContactContainer = styled.main`
  margin: calc(var(--gap-1) * -1) auto;
  width: var(--dashboard-width);
  min-width: 182px;
  max-width: var(--dashboard-max-width);
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  header > h3 {
    color: var(--color-grey-0);
    font-weight: var(--font-regular);
  }
  button {
    padding-top: 0.25em;
    margin: 0;
    width: 1.6em;
    height: 1.5em;
    background-color: var(--color-grey-3);
    font-size: 1.2em;
  }
  ul {
    padding: var(--gap-1) 0;
    padding: var(--gap-1);
    background-color: var(--color-grey-3);
    border-radius: calc(var(--radius-0) * 2);
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - (var(--gap-1) * 2));
    min-height: 10vh;
    gap: var(--gap-1);
    flex-wrap: wrap;
  }
  li {
    width: 31%;
    min-width: 140px;
    height: 7em;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.2em;
    background-color: var(--color-grey-4);
    border-radius: var(--radius-0);
    color: var(--color-grey-0);
    transition: ease 0.2s;
    cursor: pointer;
  }
  li:hover {
    transform: scale(1.03) translateY(calc(var(--gap-0) * -0.2));
    background-color: var(--color-grey-2);
  }
  p {
    font-size: var(--font-size-0);
    font-weight: var(--font-bolder);
    margin-bottom: 5px;
  }
  span {
    font-size: var(--font-size-2);
    color: var(--color-grey-1);
  }
  span.date {
    margin-bottom: 5px;
  }
  div.UserPlate {
    display: flex;
    align-items: center;
    gap: 1em;
    color: white;
    text-align: center;
  }
  .pen {
    background-color: var(--color-grey-3);
    padding: 0.3em;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .pen:hover {
    background-color: var(--color-grey-2);
    cursor: pointer;
    scale: 110%;
  }
  div.UserPlate div {
    display: flex;
    flex-direction: column;
  }
  div.UserPlate h3 {
    color: var(--color-grey-0);
    margin: 1em 0 0 0;
  }
  div.UserPlate span {
    color: var(--color-grey-0);
    font-size: 0.75em;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000062;
  z-index: 2;
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60vw;
    max-width: 320px;
    min-height: 10vh;
    max-height: 650vh;
    background-color: var(--color-grey-3);
    border-radius: var(--radius-0);
    gap: var(--gap-1);
  }
  header {
    background-color: var(--color-grey-2);
    display: flex;
    align-items: center;
    padding: 0 var(--gap-1);
    border-top-left-radius: var(--radius-0);
    border-top-right-radius: var(--radius-0);
  }
  h2 {
    font-size: var(--font-title);
    color: var(--color-grey-0);
  }
  header > button {
    background-color: #ffffff00;
    color: var(--color-primary);
  }
  header > button:hover {
    background-color: #ffffff00;
    color: var(--color-grey-0);
  }
  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--gap-1);
  }
  div > button,
  .regist-button {
    font-size: var(--font-size-2);
    font-weight: var(--font-bold);
    width: 90%;
    height: 40px;
    margin: 0 auto var(--gap-1) auto;
    background-color: var(--color-primary);
  }
  div > button:hover,
  .regist-button:hover {
    background-color: var(--color-primary-focus);
  }
  .delete-button {
    background-color: var(--color-grey-1);
  }
  .delete-button:hover {
    background-color: var(--color-grey-2);
  }
`;
