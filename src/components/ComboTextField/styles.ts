import styled from "styled-components";
import { ITheme } from "../../theme/model";

export const ComboContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 48px;
  max-width: 500px;
  min-width: 450px;

  padding: 0 8px;

  font-family: ${({ theme }) => (theme as ITheme).fonts.OpenSans};

  border-radius: 8px 0 0 8px;
  border: 1px solid ${({ theme }) => (theme as ITheme).colors.button.text};
  border-right-width: 0;
`;

export const InlineButon = styled.button`
  margin: 0;
  height: 50px;
  border: 1px solid ${({ theme }) => (theme as ITheme).colors.button.text};
  border-radius: 0 8px 8px 0;
`;
