import React, { useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-overlay", {
      opacity: 0,
      duration: 1,
    })
      .from(
        ".headline",
        {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.8"
      )
      .from(
        ".cta",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section style={backgroundImage} className="h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 hero-overlay" />

      <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
        <div className="text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold headline leading-tight">
            Weaving Your Dreams into <br /> Unforgettable Adventures
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 headline">
            Discover the captivating allure of Japan — timeless beauty, rich
            culture, and unforgettable memories await.
          </p>

          <div className="cta mt-6 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-3 text-lg font-semibold hover:bg-gray-100 transition">
              Booking Now →
            </button>
            <button className="border border-white px-6 py-3  text-lg font-semibold hover:bg-white hover:text-black transition">
              Explore More ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const backgroundImage = {
  backgroundImage: `url(https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default HeroSection;
