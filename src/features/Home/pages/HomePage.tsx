import HeroSection from "../components/HeroSection";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeBlog from "../components/HomeBlog";
import HomeExperience from "../components/HomeExperience";
import HomeIntro from "../components/HomeIntro";
import HomePackages from "../components/HomePackages";
import HomeReviews from "../components/HomeReviews";
import HomeServices from "../components/HomeServices";
import HomeVideo from "../components/HomeVideo";
import HomeView from "../components/HomeView";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeIntro />
      <HomeServices />
      <HomeView />
      <HomeAboutUs />
      <HomePackages />
      <HomeVideo />
      <HomeExperience />
      <HomeBlog />
      <HomeReviews />
    </div>
  );
};

export default HomePage;
