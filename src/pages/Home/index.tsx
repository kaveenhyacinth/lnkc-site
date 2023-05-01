import { ReactComponent as HeroImage } from "../../assets/images/hero-image.svg";
import { Copyright } from "../../components/Copyright";
import { Logo } from "../../components/Logo";
import { UrlShortener } from "../../containers/UrlShortener";
import { Section } from "../../global/styles";
import { HeroDesc, HeroTitle, HomeContainer, LogoContainer } from "./styles";

const HERO_SCHEMA = {
  title: `Shorter links, with`,
  sup: `lnkc`,
  desc: `It’s much simpler to share a shorter link than a long, complicated one`,
};

const Home = () => {
  return (
    <HomeContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Section>
        <HeroImage width={250} height={200} />
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
