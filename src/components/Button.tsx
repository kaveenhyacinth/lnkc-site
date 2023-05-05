import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Loader } from "./Loader";
import { device } from "../helpers/device";

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "title" | "onClick" | "onClickCapture"
  > {
  title: string;
  isLoading?: boolean;
  onSubmit: () => void;
}

const StyledButton = styled.button`
  width: 100%;

  @media ${device.mobileXL} {
    margin-top: 8px;
  }
`;

export const Button = ({ onSubmit, title, isLoading = false }: ButtonProps) => {
  return (
    <StyledButton disabled={isLoading} onClick={onSubmit}>
      {isLoading ? <Loader /> : title}
    </StyledButton>
  );
};
