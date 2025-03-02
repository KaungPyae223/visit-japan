import HeroSection from "../components/HeroSection";
import HomeExperience from "../components/HomeExperience";
import HomeIntro from "../components/HomeIntro";
import HomePackages from "../components/HomePackages";
import HomeServices from "../components/HomeServices";
import HomeView from "../components/HomeView";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeIntro />
      <HomeServices />
      <HomeView />
      <HomePackages />
      <HomeExperience />
    </div>
  );
};

export default HomePage;
