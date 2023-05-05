import styled from "styled-components";
import { ITheme } from "../../theme/model";
import { device } from "../../helpers/device";

export const ResultBoxContainer = styled.div`
  height: 100%;
  padding: 0 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  font-family: ${({ theme }) => (theme as ITheme).fonts.OpenSans};

  @media ${device.mobileXL} {
    width: 100%;
    margin-top: 32px;
    flex-direction: column;
  }
`;

export const LongUrlText = styled.p`
  flex: 3;

  text-align: left;
  color: ${({ theme }) => (theme as ITheme).colors.light};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.mobileXL} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: unset;
  }
`;

export const ShortUrlText = styled.p`
  flex: 2;
  text-align: right;
  color: ${({ theme }) => (theme as ITheme).colors.link};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.mobileXL} {
    text-align: left;
  }
`;

export const CopyButton = styled.button`
  width: 64px;
  height: 30px;
  margin: 0;
  padding: 0;

  font-size: 14px;

  @media ${device.mobileXL} {
    width: 100px;
    height: 40px;

    border-left: 1px solid ${({ theme }) => (theme as ITheme).colors.text};
    border-radius: 0 0 8px 0;
  }
`;

export const InfoContainerMobile = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => (theme as ITheme).colors.text};
  border-radius: 8px;
`;

export const InputInfoContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 8px;

  border-top: 1px solid ${({ theme }) => (theme as ITheme).colors.text};
`;
