import { useEffect } from "react";
import Container from "../../../components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackageCard from "../../global/PackageCard";

gsap.registerPlugin(ScrollTrigger);

const HomePackages = () => {
  const Packages: {
    img: string;
    title: string;
    duration: string;
    Destinations: string;
    contents: string;
  }[] = [
    {
      img: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3lvdG98ZW58MHx8MHx8fDA%3D",
      title: "Classic Japan Heritage Tour",
      duration: "7",
      Destinations: "Tokyo, Kyoto, Nara, Osaka",
      contents: `Explore Japan’s rich history and cultural wonders with a journey through its iconic heritage sites.`,
    },
    {
      img: "https://images.unsplash.com/photo-1617468871756-fe9616039fe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlcnl8ZW58MHx8MHx8fDA%3D",
      title: "Cherry Blossom Adventure",
      duration: "8",
      Destinations: "Tokyo, Mount Fuji, Kyoto",
      contents: `Witness Japan’s breathtaking sakura season with scenic landscapes, seasonal festivals, and vibrant city experiences.`,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      title: "Traditional & Modern Japan Experience",
      duration: "8",
      Destinations: "Tokyo, Kyoto, Osaka",
      contents: `A perfect blend of Japan’s past and future, exploring historic temples and futuristic cityscapes.`,
    },
  ];

  useEffect(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 30%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });

    gsap.from([".left-bth", ".right-bth",".title"], {
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 30%",
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <Container className={"py-24 service-container"}>
      <div className="flex flex-row justify-between items-center">
        <div className="title">
          <p className="text-4xl  tracking-wider font-medium font-poppins">
            Our Top Packages
          </p>
          <p className="text-xl mt-4">( 弊社のトップパッケージ )</p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex left-bth items-center justify-center w-12 h-12 rounded-full border border-gray-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex right-bth items-center justify-center w-12 h-12 rounded-full border border-gray-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-3">
        {Packages.map((data) => (
          <PackageCard packageData={data} />
        ))}
      </div>
    </Container>
  );
};



export default HomePackages;
