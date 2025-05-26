import Container from "../../../components/Container";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeAboutUs = () => {
  useEffect(() => {
    // Staggered animation for the fact boxes
    gsap.from(".fact-box", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1, // Stagger the animation by 0.1 seconds for each box
      ease: "back.out(1.7)", // A nice bouncy ease
      scrollTrigger: {
        trigger: ".fact-box", // Use the array of elements as the trigger
        start: "top 90%", // When the first fact box enters 90% of the viewport
        end: "bottom 10%",
        toggleActions: "play none none none",
        // markers: true, // Uncomment for debugging
      },
    });
  }, []);

  return (
    <Container className={"py-24"}>
      <div className="grid grid-cols-4 border">
        {/* Fact Box: Trusted Clients */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">300 +</p>
          <p className="text-2xl font-montserrat mt-3">Trusted Clients</p>
          <p className="mt-0.5">( 信頼できる顧客 )</p>
        </div>

        {/* About Us Main Content */}
        <div className="col-span-2 fact-box row-span-2 col-start-2 border p-9">
          <p className="text-4xl text-center tracking-wider font-medium font-poppins">
            About Us
          </p>
          <p className="text-xl mt-2 text-center">( 私たちについて )</p>
          <p className="text-justify mt-12 text-gray-800">
            At Travel Japan, we are dedicated to crafting unforgettable journeys
            that immerse you in the heart of Japan’s rich culture, breathtaking
            landscapes, and vibrant modern life. Whether you dream of strolling
            through Kyoto’s ancient temples, soaking in a serene onsen,
            indulging in world-renowned cuisine, or experiencing the
            electrifying energy of Tokyo, we ensure every moment is seamless and
            extraordinary. Our expertly curated travel experiences blend
            tradition and adventure, offering personalized itineraries, local
            expertise, and exclusive access to Japan’s hidden gems. Let us take
            care of the details while you focus on making memories—because Japan
            isn’t just a destination, it’s an experience like no other.
          </p>
        </div>

        {/* Fact Box: Partners */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">50 +</p>
          <p className="text-2xl font-montserrat mt-3">Partners</p>
          <p className="mt-0.5">( パートナー )</p>
        </div>

        {/* Fact Box: Services */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">30 +</p>
          <p className="text-2xl font-montserrat mt-3">Services</p>
          <p className="mt-0.5">( サービス )</p>
        </div>

        {/* Fact Box: Professions */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">50 +</p>
          <p className="text-2xl font-montserrat mt-3">Professions</p>
          <p className="mt-0.5">( 職業 )</p>
        </div>

        {/* Fact Box: Since */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">2013</p>
          <p className="text-2xl font-montserrat mt-3">Since</p>
          <p className="mt-0.5">( 以来 )</p>
        </div>

        {/* Fact Box: Awards */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">40 +</p>
          <p className="text-2xl font-montserrat mt-3">Awards</p>
          <p className="mt-0.5">( 受賞歴 )</p>
        </div>

        {/* Fact Box: Happy Travelers */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">1000 +</p>
          <p className="text-2xl font-montserrat mt-3">Happy Travelers</p>
          <p className="mt-0.5">( 満足した旅行者 )</p>
        </div>

        {/* Fact Box: Destinations */}
        <div className="border p-9 fact-box flex flex-col items-center justify-center">
          <p className="text-4xl font-medium font-poppins">100 +</p>
          <p className="text-2xl font-montserrat mt-3">Destinations</p>
          <p className="mt-0.5">( 目的地 )</p>
        </div>
      </div>
    </Container>
  );
};

export default HomeAboutUs;
