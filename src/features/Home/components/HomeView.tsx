import Container from "../../../components/Container";
import { useEffect, useRef } from "react"; // Import useRef and useEffect
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const HomeView = () => {
  const viewData = [
    {
      img: "https://images.unsplash.com/photo-1586963312987-3c96f9ace15a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shibuya Crossing",
      japan_title: "渋谷交差点",
      content: `Shibuya Crossing: A symphony of urban movement where thousands converge
        and diverge with every change of the light. It's a captivating spectacle
        of organized chaos, a microcosm of Tokyo's vibrant energy.`,
    },
    {
      img: "https://images.unsplash.com/photo-1584505489290-96eb4e406d08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3Nha2F8ZW58MHx8MHx8fDA%3D",
      title: "Dotonbori (Osaka)",
      japan_title: "道頓堀",
      content: `Osaka's dazzling entertainment district, a vibrant symphony of neon lights, tantalizing aromas, and boisterous energy.
    From iconic Glico Man to delectable street food, Dotonbori awakens the senses and captures the heart of Osaka's soul.`,
    },
    {
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D",
      title: "Kiyomizu Dera Temple",
      japan_title: "清水寺",
      content: `Perched on a hillside overlooking Kyoto, this iconic wooden temple offers breathtaking panoramic views. Renowned for its massive wooden stage and the Otowa Waterfall, Kiyomizu-dera embodies the beauty and serenity of traditional Japan.`,
    },
  ];

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(".main-title", {
      scrollTrigger: {
        trigger: ".main-title",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".japan-title", {
      scrollTrigger: {
        trigger: ".japan-title",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    cardRefs.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <Container className={"py-24"}>
      <div>
        <p className="text-4xl text-center tracking-wider font-medium font-poppins main-title">
          Japan: Where Ancient Heritage Meets Modern Spirit
        </p>
        <p className="text-xl mt-4 text-center japan-title">
          ( 日本：古代の遺産と現代の精神が出会う場所 )
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {viewData.map((data, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
            >
              <ViewCard view={data} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const ViewCard = ({
  view,
}: {
  view: { img: string; title: string; japan_title: string; content: string };
}) => {
  return (
    <div>
      <img src={view.img} alt={view.title} />{" "}
      {/* Add alt text for accessibility */}
      <p className="text-2xl font-poppins font-medium mt-3 mb-1">
        {view.title}
      </p>
      <p className="text-sm">( {view.japan_title} )</p>
      <p className="text-gray-800 mt-4 text-justify">{view.content}</p>
    </div>
  );
};

export default HomeView;
