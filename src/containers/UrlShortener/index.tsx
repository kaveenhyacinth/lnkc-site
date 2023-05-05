import { DeviceWrapper } from "../../components/DeviceWrapper";
import { UrlShortenerForMobile } from "./UrlShortener.mobile";
import { UrlShortnerForWeb } from "./UrlShortener.web";
import {
  CreateLinkPayloadContract,
  CredateLinkResponseContract,
  useCreateLinkMutation,
} from "../../services/link.service";

export interface UrlShortenerProps {
  linkData: CredateLinkResponseContract | undefined;
  isLoading: boolean;
  onSubmit: (payload: CreateLinkPayloadContract) => void;
}

const ExtendedUrlShortener = DeviceWrapper<UrlShortenerProps>;

export const UrlShortener = () => {
  const [createPost, { data: linkData, isLoading }] = useCreateLinkMutation();

  const handleOnSubmit = (payload: CreateLinkPayloadContract) => {
    createPost(payload);
  };

  return (
    <DeviceWrapper
      web={UrlShortnerForWeb}
      mobile={UrlShortenerForMobile}
      linkData={linkData}
      isLoading={isLoading}
      onSubmit={handleOnSubmit}
    />
  );
};
