import { useEffect } from "react";
import Container from "../../../components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeReviews = () => {
  useEffect(() => {
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: ".review-container",
        start: "top 30%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.7,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <Container className={"py-24 review-container"}>
      <div>
        <p className="text-4xl text-center tracking-wider font-medium font-poppins">
          Our Customers Feedback
        </p>
        <p className="text-xl mt-4 text-center">( お客様の声 )</p>
        <div className="mt-12 grid grid-cols-5 gap-3">
          <div className="col-span-2 review-card border border-gray-300 flex flex-row">
            <img
              className="w-1/2 aspect-square object-cover"
              src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xl text-center font-poppins font-medium">
                An Unforgettable Experience!
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 忘れられない経験 )
              </p>
              <p className="text-sm text-gray-800 mt-3 text-justify">
                I had an amazing time using this service! The team was super
                helpful, and everything went smoothly. Highly recommended!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">( Sophia L. )</p>
            </div>
          </div>
          <div className="row-span-2 review-card border border-gray-300 flex flex-col">
            <img
              className="w-full h-1/2 object-cover"
              src="https://img.freepik.com/free-photo/smiling-pleased-asian-male-student-with-braces-showing-thumbs-up-recommend-product-service-with-excellent-quality-like-approve-idea-man-nod-approval-agree-with-person-white-background_1258-55402.jpg?t=st=1740973926~exp=1740977526~hmac=285c3f5f1a007f5ffd6ee148bf2eca5ad6e13a511bee328f228bf35f32f6be56&w=1380"
            />
            <div className="p-5 h-1/2 flex flex-col">
              <p className="text-xl font-poppins font-medium text-center">
                Exceptional Quality and Service!
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 卓越した品質とサービス！ )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                I was impressed by the professionalism and quality. The
                attention to detail made all the difference. I’ll definitely be
                back!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">( Daniel K. )</p>
            </div>
          </div>
          <div className="col-span-2 review-card border border-gray-300 flex flex-row">
            <img
              className="w-1/2 aspect-square object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xl font-poppins font-medium text-center">
                Great Value for Money
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( お買い得価格 )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                The service exceeded my expectations. Affordable, efficient, and
                reliable. Just a minor issue with the delivery, but overall
                excellent!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">( Emma R. )</p>
            </div>
          </div>
          <div className="row-span-2 review-card border border-gray-300 flex flex-col">
            <img
              className="w-full h-1/2 object-cover"
              src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"
            />
            <div className="p-5 flex flex-col h-1/2">
              <p className="text-xl font-poppins font-medium text-center">
                Beyond My Expectations
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 期待以上 )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                From start to finish, everything was perfect. The support team
                was responsive, and the experience was seamless. Five stars!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">
                ( Michael T. )
              </p>
            </div>
          </div>
          <div className="p-5 border review-card flex flex-col border-gray-300">
            <p className="text-xl font-poppins font-medium text-center">
              Really Enjoyed It
            </p>
            <p className="text-sm text-center my-1 font-poppins">
              ( 本当に楽しかった )
            </p>

            <p className="text-sm text-gray-800 mt-3 text-justify">
              A fantastic experience! The only thing I wish was better was the
              waiting time, but aside from that, it was great!
            </p>
            <p className="text-sm  mt-auto pt-3 font-medium">( Olivia W. )</p>
          </div>
          <div className="col-span-2 review-card border border-gray-300 flex flex-row-reverse">
            <img
              className="w-1/2 aspect-square object-cover"
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xl font-poppins font-medium text-center">
                Absolutely Fantastic!
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 本当に素晴らしい! )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                This was one of the best experiences I’ve had. Everything was
                well-organized, and the team went above and beyond!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">
                ( Jonathan M. )
              </p>
            </div>
          </div>
          <div className="col-span-2 review-card border border-gray-300 flex flex-row">
            <img
              className="w-1/2 aspect-square object-cover object-top"
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xl font-poppins font-medium text-center">
                Highly Recommend
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 強く推奨する )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                I was hesitant at first, but I’m so glad I chose this service.
                It was smooth, professional, and exceeded my expectations!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">( David H. )</p>
            </div>
          </div>
          <div className="col-span-2 review-card border border-gray-300 flex flex-row">
            <img
              className="w-1/2 aspect-square object-cover"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"
            />
            <div className="p-5 flex flex-col">
              <p className="text-xl font-poppins font-medium text-center">
                Perfect from Start to Finish
              </p>
              <p className="text-sm text-center my-1 font-poppins">
                ( 最初から最後まで完璧 )
              </p>

              <p className="text-sm text-gray-800 mt-3 text-justify">
                Amazing experience! Everything was flawless, and I felt valued
                as a customer. I will be recommending this to all my friends!
              </p>
              <p className="text-sm  mt-auto pt-3 font-medium">( Emily C. )</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeReviews;
