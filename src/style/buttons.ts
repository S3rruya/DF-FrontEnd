import styled from "styled-components";

export const DefaultButton = styled.button`
  margin: var(--gap-0) auto var(--gap-2) auto;
  width: 90%;
  height: var(--default-button-height);
  color: white;
  background-color: var(--color-primary);
  /* padding: var(--default-button-padding); */
  border: 0px;
  border-radius: calc(var(--radius-0) * 0.5);
  cursor: pointer;
  font-size: var(--font-size-title);
  font-weight: var(--font-bold);
  :hover {
    background-color: var(--color-primary-focus);
  }
`;
export const NavigateButton = styled(DefaultButton)`
  background-color: var(--color-grey-1);
  :hover {
    background-color: var(--color-grey-2);
  }
`;
