import Container from "../../../components/Container";

const HomeAboutUs = () => {
  return (
    <Container className={"py-24 "}>
      <div className="grid grid-cols-4 border">
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">300 +</p>
            <p className="text-2xl font-montserrat mt-3">Trusted Clients</p>
            <p className="mt-0.5">( 信頼できる顧客 )</p>
        </div>

        <div className="col-span-2 row-span-2 col-start-2 border p-9">
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
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">50 +</p>
            <p className="text-2xl font-montserrat mt-3">Partners</p>
            <p className="mt-0.5">( パートナー )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">30 +</p>
            <p className="text-2xl font-montserrat mt-3">Services</p>
            <p className="mt-0.5">( サービス )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">50 +</p>
            <p className="text-2xl font-montserrat mt-3">Professions</p>
            <p className="mt-0.5">( 職業 )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">2013</p>
            <p className="text-2xl font-montserrat mt-3">Since</p>
            <p className="mt-0.5">( 以来 )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">40 +</p>
            <p className="text-2xl font-montserrat mt-3">Awards</p>
            <p className="mt-0.5">( 受賞歴 )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">1000 +</p>
            <p className="text-2xl font-montserrat mt-3">Happy Travelers</p>
            <p className="mt-0.5">( 満足した旅行者 )</p>
        </div>
        <div className="border p-9 flex flex-col items-center justify-center">
            <p className="text-4xl font-medium font-poppins">100 +</p>
            <p className="text-2xl font-montserrat mt-3">Destinations</p>
            <p className="mt-0.5">( 目的地 )</p>
        </div>
      </div>
    </Container>
  );
};

export default HomeAboutUs;
