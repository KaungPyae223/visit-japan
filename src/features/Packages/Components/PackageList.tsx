import React from "react";
import PackageCard from "../../global/PackageCard";
import Container from "../../../components/Container";

const PackageList = () => {
  const Packages: {
    img: string;
    title: string;
    duration: string;
    Destinations: string;
    contents: string;
  }[] = [
    {
      img: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600&auto=format&fit=crop&q=60",
      title: "Classic Japan Heritage Tour",
      duration: "7",
      Destinations: "Tokyo, Kyoto, Nara, Osaka",
      contents: `Explore Japan’s rich history and cultural wonders with a journey through its iconic heritage sites.`,
    },
    {
      img: "https://images.unsplash.com/photo-1617468871756-fe9616039fe3?w=600&auto=format&fit=crop&q=60",
      title: "Cherry Blossom Adventure",
      duration: "8",
      Destinations: "Tokyo, Mount Fuji, Kyoto",
      contents: `Witness Japan’s breathtaking sakura season with scenic landscapes, seasonal festivals, and vibrant city experiences.`,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=600&auto=format&fit=crop&q=60",
      title: "Traditional & Modern Japan Experience",
      duration: "8",
      Destinations: "Tokyo, Kyoto, Osaka",
      contents: `A perfect blend of Japan’s past and future, exploring historic temples and futuristic cityscapes.`,
    },
    {
      img: "https://images.unsplash.com/photo-1723788504756-b8780df44d03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Spiritual Temples & Zen Journey",
      duration: "6",
      Destinations: "Kyoto, Koyasan, Nara",
      contents: `Unwind in peaceful temple towns, practice Zen meditation, and experience Japan’s sacred Buddhist traditions.`,
    },
    {
      img: "https://images.unsplash.com/photo-1717325218061-6fa3cb09b1f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountains & Onsen Retreat",
      duration: "9",
      Destinations: "Nagano, Hakone, Kusatsu",
      contents: `Escape to Japan’s scenic mountains and relax in traditional hot springs surrounded by nature.`,
    },
    {
      img: "https://images.unsplash.com/photo-1712032865197-8f6e95f985e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tokyo Pop Culture Discovery",
      duration: "5",
      Destinations: "Tokyo",
      contents: `Dive into anime, fashion, gaming, and the electric nightlife of the world’s most futuristic metropolis.`,
    },
    {
      img: "https://images.unsplash.com/photo-1618408329284-97effc3d149a?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Samurai & Castles Trail",
      duration: "7",
      Destinations: "Himeji, Kanazawa, Matsumoto",
      contents: `Step back in time to the age of samurai through iconic castles and preserved warrior culture.`,
    },
    {
      img: "https://images.unsplash.com/photo-1629725593792-727bbe2255b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hokkaido Nature Escape",
      duration: "10",
      Destinations: "Sapporo, Furano, Biei, Hakodate",
      contents: `Discover Japan’s wild northern island with flower fields, snow-capped mountains, and fresh seafood.`,
    },
    {
      img: "https://images.unsplash.com/photo-1612343281188-d6954aa692fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Art & Architecture of Naoshima",
      duration: "4",
      Destinations: "Naoshima, Teshima",
      contents: `A modern art lover’s dream with world-class museums, island art trails, and creative architecture.`,
    },
    {
      img: "https://images.unsplash.com/photo-1664888882993-5bc4b906db5e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Island Hopping in Okinawa",
      duration: "6",
      Destinations: "Naha, Ishigaki, Taketomi",
      contents: `Crystal-clear waters, coral reefs, and Ryukyu culture await on this tropical island escape.`,
    },
    {
      img: "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Culinary Journey Through Japan",
      duration: "8",
      Destinations: "Osaka, Tokyo, Fukuoka",
      contents: `Taste Japan’s most iconic dishes with market tours, ramen tastings, and sushi workshops.`,
    },
    {
      img: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=600&auto=format&fit=crop&q=60",
      title: "Autumn Colors Discovery",
      duration: "7",
      Destinations: "Kyoto, Nikko, Takayama",
      contents: `Marvel at Japan’s fiery fall foliage in serene temples and mountain towns.`,
    },
    {
      img: "https://images.unsplash.com/photo-1729413058428-466d1477d781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Historical Kyushu Exploration",
      duration: "9",
      Destinations: "Fukuoka, Nagasaki, Beppu",
      contents: `Experience southern Japan’s blend of volcanic scenery, samurai history, and cultural fusion.`,
    },
    {
      img: "https://images.unsplash.com/photo-1695747003275-0a0ac0b0645a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ghibli & Anime Trail",
      duration: "6",
      Destinations: "Tokyo, Mitaka, Yokohama",
      contents: `Follow the path of Studio Ghibli and explore locations that inspired beloved Japanese animations.`,
    },
    {
      img: "https://images.unsplash.com/photo-1702806012306-4991650ca93c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Snow Festival & Winter Charm",
      duration: "7",
      Destinations: "Sapporo, Otaru, Niseko",
      contents: `Join the Sapporo Snow Festival and enjoy skiing, snow sculptures, and cozy winter delights.`,
    },
  ];

  return (
    <Container className={" mt-12"}>
      <p className="text-center text-3xl font-poppins py-3">
        Our Travel Packages
      </p>
      <p className="text-center">当社の旅行パッケージ</p>
      <div className="mt-12 grid grid-cols-3 gap-3">
        {Packages.map((data) => (
          <PackageCard packageData={data} />
        ))}
      </div>
    </Container>
  );
};

export default PackageList;
