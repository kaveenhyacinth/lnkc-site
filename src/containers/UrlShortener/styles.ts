import styled from "styled-components";
import { ITheme } from "../../theme/model";
import { Wrapper } from "../../global/styles";

export const InfoContainerWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 632px;
  min-width: 582px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => (theme as ITheme).colors.button.text};
`;

export const ResultContainer = styled.div`
  height: 64px;
`;

export const ThankYouContainer = styled.div`
  padding: 8px;

  font-family: ${({ theme }) => (theme as ITheme).fonts.OpenSans}, sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => (theme as ITheme).colors.text};
  letter-spacing: 0.2px;

  background-color: ${({ theme }) =>
    (theme as ITheme).colors.infobox.alpha};
  border-top: 1px solid ${({ theme }) => (theme as ITheme).colors.button.text};
  border-radius: 0 0 8px 8px;

  span {
    font-weight: bold;
  }

`;
