import React from "react";
import Container from "../../../components/Container";

const HomeVideo = () => {
  return (
    <Container className={"py-24"}>
      <p className="text-4xl text-center tracking-wider font-medium font-poppins">
        Sharing Our Excellent Journey Experiences
      </p>
      <p className="text-xl mt-4 text-center">
        ( 素晴らしい旅の経験を分かち合う )
      </p>
      <iframe
        className="w-full aspect-video mt-12"
        src="https://www.youtube.com/embed/IuTDuvYr7f0?si=VRpQSrqm9vy3XDqN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default HomeVideo;
