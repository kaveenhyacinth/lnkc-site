import styled from "styled-components";
import { useCustomTheme } from "../theme/useTheme";

interface LogoProps {
  size?: number;
}

const Text = styled.p<{ size: number; color: string }>`
  font-family: "Montserrat";
  font-size: ${(props) => props.size}px;
  font-weight: 800;
  color: ${(props) => props.color};
`;

export const Logo = ({ size }: LogoProps) => {
  const { colors } = useCustomTheme();
  return (
    <Text size={size ?? 24} color={colors.link}>
      lnkc.
    </Text>
  );
};
