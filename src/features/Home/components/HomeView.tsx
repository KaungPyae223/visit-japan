import React from "react";
import Container from "../../../components/Container";

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
 1   From iconic Glico Man to delectable street food, Dotonbori awakens the senses and captures the heart of Osaka's soul.   
`,
    },
    {
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D",
      title: "Kiyomizu Dera Temple",
      japan_title: "清水寺",
      content: `Perched on a hillside overlooking Kyoto, this iconic wooden temple offers breathtaking panoramic views. Renowned for its massive wooden stage and the Otowa Waterfall, Kiyomizu-dera embodies the beauty and serenity of traditional Japan.`,
    },
  ];

  return (
    <Container className={"py-24"}>
      <div>
        <p className="text-4xl text-center tracking-wider font-medium font-poppins">
          Japan: Where Ancient Heritage Meets Modern Spirit
        </p>
        <p className="text-xl mt-4 text-center">
          ( 日本：古代の遺産と現代の精神が出会う場所 )
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {viewData.map((data) => (
            <ViewCard view={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const ViewCard = ({ view }) => {
  return (
    <div>
      <img src={view.img} />
      <p className="text-2xl font-poppins font-medium mt-3 mb-1">
        {view.title}
      </p>
      <p className="text-sm">( {view.japan_title} )</p>
      <p className="text-gray-800 mt-4 text-justify">{view.content}</p>
    </div>
  );
};

export default HomeView;
