import Container from "../../../components/Container";
import HomeAboutUs from "../../Home/components/HomeAboutUs";
import AboutIntro from "../components/AboutIntro";
import MessageFromCEO from "../components/MessageFromCEO";
import RegionPartner from "../components/RegionPataner";

const AboutPage = () => {
  return (
    <Container className="">
      <AboutIntro />
      <MessageFromCEO />
      <HomeAboutUs />
      <RegionPartner />
    </Container>
  );
};

export default AboutPage;
