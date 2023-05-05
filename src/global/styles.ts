import styled, { css } from "styled-components";

export const Section = styled.section<{ noMargin?: boolean }>`
  width: 100%;

  margin: 32px 0;
  ${(props) =>
    props?.noMargin &&
    css`
      margin: 0;
    `}

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div<{
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props?.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom}px;
    `};
  ${(props) =>
    props?.paddingTop &&
    css`
      padding-top: ${props.paddingTop}px;
    `};
  ${(props) =>
    props?.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft}px;
    `};
  ${(props) =>
    props?.paddingRight &&
    css`
      padding-right: ${props.paddingRight}px;
    `};
`;
