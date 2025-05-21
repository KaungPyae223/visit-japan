import { ReactElement, useEffect, useRef, useState } from "react";
import Container from "../../../components/Container";
import { gsap } from "gsap/gsap-core";
import { motion } from "framer-motion";

const HomeExperience = () => {
  const ExperienceData: {
    img: string;
    title: string;
    japanese: string;
    details: string;
  }[] = [
    {
      img: "https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tea Ceremony",
      japanese: "茶道",
      details: `The Japanese tea ceremony (茶道 Sadō or Chanoyu) is a graceful and
      meditative ritual centered around preparing and serving matcha
      (powdered green tea). Rooted in Zen Buddhism, it emphasizes
      harmony, respect, purity, and tranquility. The host carefully
      prepares the tea with deliberate, mindful movements, often
      accompanied by seasonal sweets, in a setting that reflects
      simplicity and natural beauty. More than just drinking tea, the
      ceremony is a spiritual and cultural experience, celebrating the
      moment as unique and unrepeatable—captured in the phrase ichigo
      ichie (一期一会), "one time, one meeting."`,
    },
    {
      img: "https://images.unsplash.com/photo-1570503929936-544ba0b1c8f7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kimono & Yukata Wearing",
      japanese: "着物と浴衣の着付け",
      details: `Wearing a kimono or yukata is a cherished experience that allows visitors to connect with traditional Japanese aesthetics and customs. The kimono, a formal, often intricately designed robe worn on special occasions, and the yukata, a lighter summer garment, are symbols of Japanese elegance and craftsmanship. The process of dressing involves precise layers and techniques, often assisted by a professional, ensuring the outfit fits perfectly and respectfully. Visitors can stroll through historic streets, temples, and festivals while dressed in these garments, enhancing their cultural immersion. It is not only about appearance but also about experiencing the grace and mindfulness associated with traditional Japanese attire.`,
    },
    {
      img: "https://images.unsplash.com/photo-1708789715236-e5060618d118?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Onsen",
      japanese: "温泉",
      details: `Onsen (hot springs) are an essential part of Japanese culture and wellness, offering a deeply relaxing and rejuvenating experience. These natural geothermal baths are scattered throughout Japan, often in scenic mountain or coastal regions. Bathing in an onsen is not just about relaxation; it is a cultural ritual rooted in cleanliness, tranquility, and connection to nature. Visitors must follow specific etiquette such as washing thoroughly before entering the communal bath, maintaining silence, and respecting the serene environment. Many onsen resorts also provide traditional ryokan accommodations and kaiseki meals, making the experience holistic. The mineral-rich waters are believed to have healing properties, promoting health and inner calm.`,
    },
    {
      img: "https://images.unsplash.com/photo-1619082707981-6c8fafea2e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJ1bGxldCUyMHRyYWlufGVufDB8fDB8fHww",
      title: "Bullet Train",
      japanese: "新幹線",
      details: `Riding the Shinkansen, or bullet train, is a modern marvel that showcases Japan’s dedication to precision, efficiency, and innovation. Reaching speeds of up to 320 km/h (200 mph), the Shinkansen offers travelers a seamless and scenic way to explore the country. Inside, the train is quiet, clean, and exceptionally punctual, with a focus on passenger comfort and safety. The experience often includes enjoying a beautifully packed bento box (ekiben) while watching the countryside glide by. Whether traveling from Tokyo to Kyoto or to more remote regions, the bullet train is more than transportation—it represents the harmony of modern technology and traditional hospitality that defines Japan’s spirit.`,
    },
    {
      img: "https://images.unsplash.com/photo-1511364033374-07ffa0c99c4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhbWJvbyUyMEZvcmVzdCUyMGluJTIwQXJhc2hpeWFtYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Bamboo Forest Walk in Arashiyama",
      japanese: "嵐山の竹林散歩",
      details: `Walking through the Arashiyama Bamboo Grove in Kyoto is a serene and almost otherworldly experience. The towering bamboo stalks create a natural corridor that sways gently with the wind, producing a soft, rustling sound known as one of Japan’s “100 Soundscapes.” The path is both visually and spiritually uplifting, often evoking a sense of calm and reflection. As sunlight filters through the bamboo, it casts dynamic shadows and patterns that change with each step. The grove is also near historic temples like Tenryu-ji and scenic spots like the Togetsukyo Bridge, making the visit a perfect blend of nature, culture, and traditional Japanese ambiance.`,
    },
    {
      img: "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ramen Tasting",
      japanese: "ラーメン試食",
      details: `Ramen tasting in Japan is a culinary adventure that highlights the country’s deep love for this hearty noodle soup. Each region offers its unique take—tonkotsu (pork bone broth) in Fukuoka, miso in Hokkaido, soy sauce-based shoyu in Tokyo, and more. Tasting ramen involves exploring flavor, texture, and presentation, from the richness of the broth to the springiness of the noodles and the toppings like chashu (braised pork), nori, and soft-boiled eggs. Ramen shops range from Michelin-starred establishments to bustling street counters, each with its own loyal following. This experience is not just about eating; it’s about discovering Japan’s dedication to craft and flavor in every bowl.`,
    },
    {
      img: "https://images.unsplash.com/photo-1738322786484-759ff301d27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bW8lMjBNYXRjaGVzfGVufDB8fDB8fHww",
      title: "Sumo Wrestling Matches",
      japanese: "相撲試合",
      details: `Attending a sumo match in Japan offers an authentic look into the nation’s oldest sport, steeped in ritual and tradition. Sumo is more than a contest of strength—it’s a ceremonial performance rooted in Shinto practices. Before each bout, wrestlers engage in rituals such as salt-throwing for purification and dramatic foot stomps to ward off evil spirits. The atmosphere in the arena is both electric and respectful, with spectators closely following every movement. Tournaments are held six times a year across Japan, and visiting a match is a chance to witness the discipline, lifestyle, and respect that define sumo culture. It’s a powerful reminder of Japan’s deep reverence for its historical arts and customs.`,
    },
    {
      img: "https://images.unsplash.com/photo-1519652067-cf0f824c0841?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Geisha & Maiko Encounters",
      japanese: "芸者と舞妓の出会い",
      details: `Encountering a geisha or maiko (apprentice geisha) offers a rare and enchanting glimpse into one of Japan’s most iconic and mysterious cultural traditions. These highly trained artists perform classical music, dance, and traditional games in tea houses, often entertaining guests with poise, wit, and elegance. Meeting a geisha involves observing centuries-old etiquette and appreciation for the refinement of Japanese arts. The encounter is usually set in a tranquil environment with tatami rooms and seasonal kaiseki cuisine. Though often private, some cultural programs and dinner performances allow visitors to experience their artistry. It is an intimate, unforgettable moment that embodies the beauty and sophistication of Japanese tradition.`,
    },
  ];

  return (
    <Container className={"py-24"}>
      <div>
        <p className="text-4xl text-center tracking-wider font-medium font-poppins">
          Feel Free and Get Experience Japan Like Never Before
        </p>
        <p className="text-xl mt-4 text-center">
          ( 自由を感じ、かつてない日本を体験する )
        </p>
        <div className="mt-12 grid grid-cols-4 gap-3">
          {ExperienceData.map((item) => (
            <ExperienceCard
              img={item.img}
              title={item.title}
              japanese={item.japanese}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

type ExperienceProps = {
  img: string;
  title: string;
  japanese: string;
  details: string;
};

const ExperienceCard = ({ img, title, japanese, details }: ExperienceProps) => {
  const detailContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(detailContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(detailContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const widowWidth = window.innerWidth;

      const { clientX, clientY } = e;

      if (clientX < widowWidth / 2) moveContainerX(clientX);
      else moveContainerX(clientX - detailContainer.current.clientWidth);

      moveContainerY(clientY - detailContainer.current.clientHeight);
    });
  }, []);

  const detailAnimation = {
    initial: { scale: 0 },
    open: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="border border-gray-300"
    >
      <img src={img} />
      <p className="font-poppins text-lg mt-3 text-center font-medium">
        {title}
      </p>
      <p className="text-sm mt-0.5 mb-3 text-center">( {japanese} )</p>
      <motion.div
        variants={detailAnimation}
        initial={"initial"}
        animate={active ? "open" : "close"}
        ref={detailContainer}
        className="fixed p-3 bg-white border border-gray-300 max-w-[50vw]"
      >
        <div className="border  grid grid-cols-2 gap-5 border-gray-300 p-5">
          <img src={img} className="h-full object-cover" />
          <div>
            <p className="text-xl font-medium">
              {title} ({japanese})
            </p>
            <p className="text-sm text-gray-800 mt-3 text-justify">{details}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeExperience;
