import { ComboTextField } from "../../components/ComboTextField";
import { ResultBox } from "../../components/ResultBox";
import { Section } from "../../global/styles";
import {
  CreateLinkPayloadContract,
  useCreateLinkMutation,
} from "../../services/link.service";
import {
  InfoContainer,
  InfoContainerWrapper,
  ThankYouContainer,
  ResultContainer,
} from "./styles";

export const UrlShortnerForWeb = () => {
  const [createPost, { data: linkData, isLoading }] = useCreateLinkMutation();

  const handleOnSubmit = (payload: CreateLinkPayloadContract) => {
    createPost(payload);
  };

  return (
    <Section noMargin>
      <ComboTextField onSubmit={handleOnSubmit} isLoading={isLoading} />
      {linkData?.url && linkData?.shortCode && (
        <InfoContainerWrapper paddingTop={24}>
          <InfoContainer>
            <ResultContainer>
              <ResultBox url={linkData.url} shortCode={linkData.shortCode} />
            </ResultContainer>
            <ThankYouContainer>
              Thanks for using our URL shortener! This is currently in beta and
              we're working hard to improve it. The full version with more
              features will be available soon. Contact us with any feedback or
              suggestions - <span>we appreciate your support!</span>
            </ThankYouContainer>
          </InfoContainer>
        </InfoContainerWrapper>
      )}
    </Section>
  );
};
