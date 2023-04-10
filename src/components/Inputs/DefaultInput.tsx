import { DefaultInputContainer } from "../../style/inputs";
import * as Inter from "../../InterfacesChart";

export const DefaultInput = ({
  type = "text",
  label = "",
  placeholder = "",
  name = "",
  required = false,
  value,
  defaultValue,
  readOnly = false,
  registerYup,
}: Inter.iDefaultInput) => {
  return (
    <DefaultInputContainer>
      <label>{label}</label>
      <input
        readOnly={readOnly}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        defaultValue={defaultValue}
        name={name}
        {...registerYup}
      />
    </DefaultInputContainer>
  );
};
