import styled from "styled-components";
import { Loader } from "../components/Loader";

const LoaderWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingScreen = () => {
  return (
    <LoaderWrapper>
      <Loader size={16} />
    </LoaderWrapper>
  );
};
