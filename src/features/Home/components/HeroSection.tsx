import React, { useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the white box (with text) fading in from above
    tl.from(".hero-white-background", {
      opacity: 0,
      duration: 0.3,
      delay: 0.3
    }).from(".headline",{
      opacity: 0,
      y:50,
      duration: 1,
      stagger: 0.3
    }).from(".japan",{
      opacity:0,
      duration:1,
      ease:"power3.out"
    })
      
  }, []);

  return (
    <div style={backgroundImage} className="h-screen">
      <div className="h-screen bg-black bg-opacity-15 w-full grid grid-cols-3">
        <div className="flex items-center justify-center flex-col">
          <div className="bg-white hero-white-background p-4 px-6 rounded-lg">
            <p className="text-3xl headline text-center font-medium mb-3 text-black font-poppins">
              A Land of Timeless Beauty
            </p>
            <p className="text-center headline ">時代を超越した美しさの国</p>
          </div>

          <p className="text-[120px] japan mt-9 font-bold text-white font-montserrat">
            日本
          </p>
          <p className="text-6xl japan font-extrabold text-white font-montserrat">
            JAPAN
          </p>
        </div>
      </div>
    </div>
  );
};

const backgroundImage = {
 backgroundImage: `url(https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,

  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default HeroSection;
