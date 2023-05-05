import styled from "styled-components";
import { ITheme } from "../../theme/model";
import { device } from "../../helpers/device";

export const HomeContainer = styled.div`
  height: calc(100vh - 36px);
  margin: 36px 128px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    margin: 36px 64px 0;
  }

  @media ${device.tablet} {
    height: calc(100vh - 40px);
    margin: 40px 16px 0px;
  }
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

  @media ${device.mobileL} {
    font-size: 24px;
  }

  span {
    color: ${({ theme }) => (theme as ITheme).colors.primary};
  }
`;

export const HeroDesc = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
  text-align: center;

  @media ${device.mobileL} {
    padding: 0 48px;
    font-size: 12px;
  }
`;

export const CopyrightContainer = styled.div`
  @media ${device.tablet} {
    flex: 1;
  }
`;
