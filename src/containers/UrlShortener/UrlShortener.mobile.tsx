import { useState } from "react";
import { TextField } from "../../components/TextField";
import { Section } from "../../global/styles";
import { Button } from "../../components/Button";
import { ResultBox } from "../../components/ResultBox";
import { ThankYouContainer } from "./styles";
import { UrlShortenerProps } from ".";

export const UrlShortenerForMobile = ({
  linkData,
  isLoading,
  onSubmit,
}: UrlShortenerProps) => {
  const [url, setUrl] = useState("");

  const handleOnChangeUrl = (value: string) => {
    setUrl(value);
  };

  const handleOnSubmit = () => {
    onSubmit({ url });
  };

  return (
    <Section noMargin>
      <TextField
        placeholder="Drop your complicated URL here..."
        value={url}
        onChange={handleOnChangeUrl}
      />
      <Button title="Shorten" onSubmit={handleOnSubmit} isLoading={isLoading} />
      {linkData?.url && linkData?.shortCode && (
        <ResultBox url={linkData.url} shortCode={linkData.shortCode} />
      )}
      <ThankYouContainer>
        Thanks for using our URL shortener! This is currently in beta and we're
        working hard to improve it. The full version with more features will be
        available soon. Contact us with any feedback or suggestions -{" "}
        <span>we appreciate your support!</span>
      </ThankYouContainer>
    </Section>
  );
};
