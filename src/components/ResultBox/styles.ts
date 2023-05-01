import styled from "styled-components";
import { ITheme } from "../../theme/model";

export const ResultBoxContainer = styled.div`
  height: 100%;
  padding: 0 8px;
  display: flex;
  gap: 16px;
  align-items: center;

  font-family: ${({ theme }) => (theme as ITheme).fonts.OpenSans};
`;

export const LongUrlText = styled.p`
  flex: 3;

  text-align: left;
  color: ${({ theme }) => (theme as ITheme).colors.light};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShortUrlText = styled.p`
  flex: 2;
  text-align: right;
  color: ${({ theme }) => (theme as ITheme).colors.link};
`;

export const CopyButton = styled.button`
  width: 64px;
  height: 30px;
  margin: 0;
  padding: 0;

  font-size: 14px;
`;
