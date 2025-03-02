import React from "react";
import Container from "../../../components/Container";

const HomeExperience = () => {
  const ExperienceData: { img: string; title: string; japanese:string }[] = [
    {
      img: "https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tea Ceremony",
      japanese: "茶道"
    },
    {
      img: "https://images.unsplash.com/photo-1570503929936-544ba0b1c8f7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kimono & Yukata Wearing",
      japanese: "着物と浴衣の着付け"


    },
    {
      img: "https://images.unsplash.com/photo-1708789715236-e5060618d118?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Onsen",
      japanese: "温泉"

    },
    {
      img: "https://images.unsplash.com/photo-1619082707981-6c8fafea2e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJ1bGxldCUyMHRyYWlufGVufDB8fDB8fHww",
      title: "Bullet Train",
      japanese: "新幹線"

    },
    {
      img: "https://images.unsplash.com/photo-1511364033374-07ffa0c99c4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhbWJvbyUyMEZvcmVzdCUyMGluJTIwQXJhc2hpeWFtYXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Bamboo Forest Walk in Arashiyama",
      japanese: "嵐山の竹林散歩"
      
    },
    {
      img: "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ramen  Tasting",
      japanese: "ラーメン試食"

    },
    {
      img: "https://images.unsplash.com/photo-1738322786484-759ff301d27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bW8lMjBNYXRjaGVzfGVufDB8fDB8fHww",
      title: "Sumo Wrestling Matches",
      japanese: "相撲試合"

    },
    {
      img: "https://images.unsplash.com/photo-1519652067-cf0f824c0841?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Geisha & Maiko Encounters",
      japanese: "芸者と舞妓の出会い"
      
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
            <ExperienceCard img={item.img} title={item.title} japanese={item.japanese} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const ExperienceCard = ({ img, title,japanese }) => {
  return (
    <div className="border border-gray-300">
      <img src={img} />
      <p className="font-poppins text-lg mt-3 text-center font-medium">{title}</p>
      <p className="text-sm mt-0.5 mb-3 text-center">( {japanese} )</p>
    </div>
  );
};

export default HomeExperience;
