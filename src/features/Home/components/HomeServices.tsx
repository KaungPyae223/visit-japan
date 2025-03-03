import { useEffect } from "react";
import Container from "../../../components/Container";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const HomeServices = () => {
  const ServiceData: {
    icon: string;
    title: string;
    japan_title: string;
    content: string;
    left: string;
  }[] = [
    {
      icon: "✈️",
      title: "Flight Bookings",
      japan_title: "フライト予約",
      content: `Hassle-free domestic and international flight reservations at the
            best prices.`,
      left: "ms-0",
    },
    {
      icon: "📍",
      title: "Custom Tour Packages",
      japan_title: "カスタムツアーパッケージ",
      content: `Personalized travel itineraries for solo travelers, families, and groups`,
      left: "ms-9",
    },
    {
      icon: "🎎",
      title: "Guided City Tours",
      japan_title: "ガイド付き市内ツアー",
      content:
        "Explore Tokyo, Kyoto, Osaka, and more with professional guides.",
      left: "ms-16",
    },
    {
      icon: "💼",
      title: "Business & Corporate Travel",
      japan_title: "ビジネスおよび法人旅行",
      content:
        "Seamless arrangements for conferences, meetings, and incentive trips.",
      left: "ms-9",
    },
    {
      icon: "📞",
      title: "24/7 Customer Support",
      japan_title: "24時間年中無休のカスタマーサポート",
      content:
        "Assistance before, during, and after your trip for a worry-free experience.",
      left: "ms-0",
    },
  ];

  useEffect(() => {
    const ServiceTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".ServiceContainer",
        start: "75% bottom",
      },
    });

    ServiceTimeLine.from(".ServiceTitle", { opacity: 0, duration: 0.7 })
    .from(".ServiceCard",{x:-50,duration:0.7,opacity:0,stagger:{
      amount:0.5,
      grid:[5,0],
      axis:"y",
      from:"center"
    }});
  });

  return (
    <Container className={"py-24 grid grid-cols-3 gap-12 ServiceContainer"}>
      <div className="flex  flex-col items-center justify-center ServiceTitle">
        <p className="text-4xl tracking-wider font-medium font-poppins">
          Our Services
        </p>
        <p className="text-xl mt-4">( 当社のサービス )</p>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-start gap-12">
        {ServiceData.map((data) => (
          <div className="ServiceCard">
            <ServiceCard service={data} />
          </div>
        ))}
      </div>
    </Container>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className={service.left}>
      <div className="flex flex-row items-center gap-6">
        <div className="w-16 text-xl h-16 rounded-full flex items-center justify-center bg-neutral-200">
          {service.icon}
        </div>
        <div>
          <p className="text-2xl font-poppins flex items-center gap-3 font-medium mb-1">
            {service.title}{" "}
            <span className="text-lg">( {service.japan_title} )</span>{" "}
          </p>
          <p className="text-gray-800 mt-3">{service.content}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
