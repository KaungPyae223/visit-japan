import { useEffect, useRef, useState } from "react";
import Container from "../../../components/Container";
import gsap from "gsap";

const HomeIntro = () => {
  const IntroCardContent: {
    title: string;
    japan_title: string;
    content: string;
  }[] = [
    {
      title: "🏯 Kyoto Temples & Shrines",
      japan_title: "京都の寺社",
      content: `Discover the rich cultural heritage of Kyoto, home to stunning temples
        like Kinkaku-ji (Golden Pavilion) and the Fushimi Inari Shrine with its
        famous torii gates. `,
    },
    {
      title: "🌸 Cherry Blossom Viewing",
      japan_title: "お花見",
      content: `Experience the magical beauty of Japan’s cherry blossoms in spring. Popular viewing spots include Ueno Park in Tokyo and Maruyama Park in Kyoto. `,
    },
    {
      title: "🏝️ Okinawa’s Tropical Beaches",
      japan_title: "沖縄のトロピカルビーチ",
      content: `Explore the crystal-clear waters and white sandy beaches of Okinawa, a tropical paradise known for its relaxed vibe and unique culture. `,
    },
    {
      title: "🚄 Tokyo’s Modern & Traditional",
      japan_title: "東京のモダンと伝統",
      content: `From the neon-lit streets of Shinjuku to the historic Asakusa district, Tokyo offers a perfect blend of modern city life and traditional Japanese culture. `,
    },
  ];

  useEffect(() => {
    const IntroTimeLine1 = gsap.timeline({
      defaults: { ease: "power2" },
      scrollTrigger: {
        trigger: ".IntroContainer",
        start: "65% bottom",
      },
    });

    const IntroTimeLine2 = gsap.timeline({
      defaults: { ease: "power1" },
      scrollTrigger: {
        trigger: ".IntroContainer",
        start: "65% bottom",
      },
    });

    // Step 1: Animate IntroSidePhoto first
    IntroTimeLine1.from(".IntroSidePhoto", {
      x: 300,
      duration: 3,
      opacity: 0,
    });

    IntroTimeLine2.from(".IntroTitle", {
      y: 50,
      duration: 0.5,
      opacity: 0,
      stagger: 0.5,
    }).from(".IntroCard", {
      y: 50,
      duration: 0.5,
      stagger: {
        amount: 0.5,
        grid: [2, 2],
        axis: "y",
      },

      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <Container className={"grid grid-cols-3 gap-3 py-24 overflow-hidden"}>
      <div className="col-span-2 IntroContainer">
        <p className="text-4xl IntroTitle tracking-wider font-medium font-poppins">
          Japan, A Land of Timeless Beauty
        </p>
        <p className="text-xl IntroTitle mt-4">( 永遠の美を誇る国、日本 )</p>
        <p className="mt-9 pe-12 text-lg IntroTitle">
          We offer a variety of exciting travel packages, from breathtaking
          natural scenery to historic cultural experiences across Japan.
        </p>
        <div className="mt-20 grid grid-cols-2 gap-3">
          {IntroCardContent.map((content) => (
            <div className="bg-neutral-100 IntroCard">
              <IntroCard content={content} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1610894377860-d73415b792b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1aml8ZW58MHx8MHx8fDA%3D)",
        }}
        className="p-3 group overflow-hidden IntroSidePhoto h-full"
      >
        <div className="opacity-0 -translate-y-[50%] group-hover:opacity-100 group-hover:translate-y-0 duration-300">
          <IntroCard
            content={{
              title: "🌿 Mount Fuji",
              japan_title: "富士山",
              content: `Mount Fuji, Japan’s iconic peak, is a must-visit for nature lovers. Whether hiking to the summit or admiring its beauty from afar, it offers an unforgettable experience. `,
            }}
          />
        </div>
      </div>
    </Container>
  );
};

const IntroCard = ({ content }) => {
  return (
    <div className="p-6 bg-neutral-100">
      <p className="text-2xl font-poppins font-medium">{content.title}</p>
      <p className="mt-2 text-sm">( {content.japan_title} )</p>
      <p className="text-justify mt-6 text-gray-800">{content.content}.</p>
    </div>
  );
};

export default HomeIntro;
