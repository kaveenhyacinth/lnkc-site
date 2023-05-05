import {
  CopyButton,
  InfoContainerMobile,
  InputInfoContainer,
  LongUrlText,
  ResultBoxContainer,
  ResultContainer,
  ShortUrlText,
} from "./styles";
import { ResultBoxProps } from ".";

export const ResultBoxMobile = ({
  url,
  shortUrl,
  isCopied,
  onCopy,
}: ResultBoxProps) => {
  return (
    <ResultBoxContainer>
      <InfoContainerMobile>
        <InputInfoContainer>
          <LongUrlText>{url}</LongUrlText>
        </InputInfoContainer>
        <ResultContainer>
          <ShortUrlText>{shortUrl}</ShortUrlText>
          <CopyButton onClick={onCopy}>
            {isCopied ? "Copied" : "Copy"}
          </CopyButton>
        </ResultContainer>
      </InfoContainerMobile>
    </ResultBoxContainer>
  );
};
