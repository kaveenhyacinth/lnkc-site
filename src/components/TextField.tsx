import styled from "styled-components";
import { ITheme } from "../theme/model";
import { ChangeEvent, InputHTMLAttributes } from "react";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
}

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;

  display: flex;

  border: 1px solid ${({ theme }) => (theme as ITheme).colors.text};
  border-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 8px;
  font-family: ${({ theme }) => (theme as ITheme).fonts.OpenSans};
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => (theme as ITheme).colors.light};
  border-width: 0;
  border-radius: 8px;
`;

export const TextField = ({ value, onChange, ...rest }: TextFieldProps) => {
  const handleOnChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value ?? "");
  };

  return (
    <InputWrapper>
      <Input value={value} onChange={handleOnChangeValue} {...rest} />
    </InputWrapper>
  );
};
