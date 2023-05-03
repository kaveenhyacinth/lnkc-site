import styled, { keyframes } from "styled-components";
import { ITheme } from "../theme/model";

const bouncingAnimation = keyframes`
  to {
    opacity: 0.1;
  }
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => (theme as ITheme).colors.text};
  opacity: 1;
  animation: ${bouncingAnimation} 0.6s infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const BouncingContainer = styled.div<{ size: number; gap: number }>`
  display: flex;
  justify-content: center;

  ${Dot} {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    margin: 4px ${(props) => props.gap}px;
  }
`;

export interface LoaderProps {
  size?: number;
  gap?: number;
}

export const Loader = ({ size = 8, gap = 4 }: LoaderProps) => {
  return (
    <BouncingContainer size={size} gap={gap}>
      <Dot />
      <Dot />
      <Dot />
    </BouncingContainer>
  );
};
