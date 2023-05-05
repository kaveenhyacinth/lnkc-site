import styled, { css } from "styled-components";
import { device } from "../helpers/device";
import { ITheme } from "../theme/model";

interface LogoProps {
  size?: number;
  spaceTop?: number;
  spaceLeft?: number;
  spaceBottom?: number;
  spaceRight?: number;
}

const Text = styled.p<LogoProps>`
  font-family: ${({ theme }) => (theme as ITheme).fonts.Montserrat};
  font-size: ${(props) => props?.size ?? 24}px;
  font-weight: 800;
  color: ${({ theme }) => (theme as ITheme).colors.link};

  ${(props) =>
    css`
      margin: ${props?.spaceTop ?? 0}px ${props?.spaceRight ?? 0}px
        ${props?.spaceBottom ?? 0}px ${props?.spaceLeft ?? 0}px;
    `}

  @media ${device.tablet} {
    text-align: center;
    font-size: ${(props) => (props?.size ?? 24) + 12}px;
    font-weight: 900;
  }

  span {
    color: ${({ theme }) => (theme as ITheme).colors.primary};
  }
`;

export const Logo = (props: LogoProps) => {
  return (
    <Text {...props}>
      lnkc<span>.</span>
    </Text>
  );
};
