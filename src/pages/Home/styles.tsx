import styled from "styled-components";
import { ITheme } from "../../theme/model";

export const HomeContainer = styled.div`
  height: calc(100vh - 36px);
  padding: 36px 128px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
`;

/**
 * HERO SECTION
 */
export const HeroTitle = styled.p`
  font-family: "Montserrat";
  font-size: 48px;
  font-weight: 800;
  text-align: center;

  span {
    color: ${({ theme }) => (theme as ITheme).colors.primary};
  }
`;

export const HeroDesc = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  text-align: center;
`;
