import { useMemo } from "react";
import { ReactComponent as HeroImage } from "../../assets/images/hero-image.svg";
import { Copyright } from "../../components/Copyright";
import { Logo } from "../../components/Logo";
import { UrlShortener } from "../../containers/UrlShortener";
import { Section } from "../../global/styles";
import { useDevice } from "../../hooks/useDevice";
import { HeroDesc, HeroTitle, HomeContainer, LogoContainer } from "./styles";
import { DEVICE_TYPE, device } from "../../helpers/device";

const HERO_SCHEMA = {
  title: `Shorter links, with`,
  sup: `lnkc`,
  desc: `It’s much simpler to share a shorter link than a long, complicated one`,
};

const Home = () => {
  const { deviceType } = useDevice();

  const isSmall = useMemo(
    () => [DEVICE_TYPE.TABLET, DEVICE_TYPE.MOBILE].includes(deviceType),
    [deviceType]
  );

  return (
    <HomeContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Section>
        <HeroImage width={isSmall ? 150 : 250} height={isSmall ? 120 : 200} />
      </Section>
      <Section noMargin>
        <HeroTitle>
          {HERO_SCHEMA.title} <span>{HERO_SCHEMA.sup}</span>
        </HeroTitle>
        <HeroDesc>{HERO_SCHEMA.desc}</HeroDesc>
      </Section>
      <Section>
        <UrlShortener />
      </Section>
      <Copyright />
    </HomeContainer>
  );
};

export default Home;
