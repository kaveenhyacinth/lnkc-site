import {
  CopyButton,
  LongUrlText,
  ResultBoxContainer,
  ShortUrlText,
} from "./styles";
import { ResultBoxProps } from ".";

export const ResultBoxWeb = ({
  url,
  shortUrl,
  isCopied,
  onCopy,
}: ResultBoxProps) => {
  return (
    <ResultBoxContainer>
      <LongUrlText>{url}</LongUrlText>
      <ShortUrlText>{shortUrl}</ShortUrlText>
      <CopyButton onClick={onCopy}>{isCopied ? "Copied" : "Copy"}</CopyButton>
    </ResultBoxContainer>
  );
};
