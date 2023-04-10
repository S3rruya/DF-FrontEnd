import styled from "styled-components";

export const DefaultInputContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--gap-0);
  label {
    width: 90%;
    display: inline;
    font-size: var(--font-size-1);
    color: var(--color-grey-0);
  }
  input {
    outline: 0;
    width: calc(var(--default-input-width) - var(--default-input-padding) * 2);
    height: 40px;
    padding: 0 var(--default-input-padding);
    background-color: var(--color-grey-2);
    font-size: var(--font-size-0);
    border: 1px solid transparent;
    border-radius: var(--radius-0);
    color: var(--color-grey-0);
    font-weight: var(--font-regular);
  }
  input::placeholder {
    color: var(--color-grey-1);
    font-weight: var(--font-regular);
  }
  input:focus {
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-0);
  }
`;
