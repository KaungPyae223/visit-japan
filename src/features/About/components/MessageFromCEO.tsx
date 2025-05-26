const MessageFromCEO = () => {
  return (
    <div className="mt-16">
      <p className="text-3xl font-semibold text-center">Message from CEO</p>
      <p className="text-lg text-center">CEOのメッセージ</p>

      <div className="mt-12 grid grid-cols-3 gap-x-9">
        <div>
          <img
            src="https://img.freepik.com/free-photo/portrait-asian-business-man-business-district-senior-visionary-executives-leader-with-business-vision-lifestyle-business-people-concept_1150-34735.jpg?ga=GA1.1.106640999.1748167203&semt=ais_hybrid&w=740"
            alt=""
            className="w-full h-[500px] object-cover"
          />
          <p className="text-2xl font-medium mt-6">Nakamura Hiroshi</p>
          
        </div>
        <div className="col-span-2">
          <p className="text-xl font-medium">Dear Future Japan Explorer</p>
          <p className="text-justify mt-3 text-gray-800">
            Greetings from Visit Japan! As CEO, I'm thrilled to share our
            passion for making your journey through Japan truly extraordinary.
            We understand that planning a trip to a country as rich and diverse
            as Japan can be both exciting and daunting. That's where our
            expertise comes in. At Visit Japan, we specialize exclusively in
            creating seamless and unforgettable experiences within this
            captivating archipelago. Our deep local knowledge and extensive
            network allow us to offer not just the iconic sights, but also
            exclusive access to hidden gems, unique cultural activities, and
            authentic encounters that truly define a Japanese adventure. From
            navigating the efficient bullet trains to securing reservations at
            highly sought-after ryokans, our dedicated team handles every detail
            with precision. We are committed to providing unparalleled service
            and ensuring your visit to Japan is effortless, enriching, and
            exceeds every expectation. We look forward to guiding you on your
            remarkable journey."
          </p>
          <p className="text-xl font-medium mt-9">未来の日本探検家へ</p>
          <p className="text-justify mt-3 text-gray-800">
            Visit
            Japanよりご挨拶申し上げます。CEOとして、皆様の日本旅行を真に特別なものにするという私たちの情熱を共有できることを大変嬉しく思います。日本のような豊かで多様性に富んだ国への旅行を計画することは、刺激的でもあり、同時に不安でもあることを私たちは理解しています。だからこそ、私たちの専門知識が活かされます。Visit
            Japanは、この魅力的な島々で、シームレスで忘れられない体験を創造することに特化しています。深い地域知識と広範なネットワークにより、象徴的な観光スポットだけでなく、隠れた名所、ユニークな文化活動、そして日本の冒険を真に定義する本物の出会いへの特別なアクセスを提供することができます。効率的な新幹線の乗り換えから、人気の旅館の予約確保まで、私たちの献身的なチームがあらゆる細部にまで細心の注意を払って対応します。私たちは比類のないサービスを提供し、皆様の日本旅行が快適で、豊かで、あらゆる期待を超えるものとなるよう尽力して​​います。皆様の素晴らしい旅をご案内できることを楽しみにしています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageFromCEO;
