import Container from "../../../components/Container";

const HomeBlog = () => {
  const BlogData = [
    {
      img: "https://images.unsplash.com/photo-1613257125720-c2f8a783416a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover Japan’s Hidden Gems",
      content: `Explore Japan beyond the usual tourist spots! Visit quaint villages
          like Shirakawa-go, uncover secret shrines, and experience the
          untouched beauty of Japan’s countryside.`,
    },
    {
      img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Must-See Landmarks",
      content: `From the iconic Mount Fuji to Kyoto’s golden Kinkaku-ji, discover the cultural and historical wonders that make Japan one of the world's most captivating destinations.`,
    },
    {
      img: "https://images.unsplash.com/photo-1536689318884-9ee850c4c095?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Traveling on a Budget",
      content: `Want to explore Japan without breaking the bank? Learn budget-friendly tips, from using JR Passes to finding affordable yet delicious street food.`,
    },
    {
      img: "https://images.unsplash.com/photo-1517299553468-75a9dab327e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphcGFuZXNlJTIwd2ludGVyfGVufDB8fDB8fHww",
      title: "Experience Japan’s Seasonal Magic",
      content: `Japan is a land of seasons! Witness cherry blossoms in spring, vibrant autumn leaves, snow festivals in winter, and lively summer matsuri (festivals).`,
    },
  ];

  return (
    <Container className={"py-24 grid grid-cols-2 gap-6"}>
      <div>
        <p className="text-4xl tracking-wider font-medium font-poppins">
          Travel Blogs
        </p>
        <p className="text-xl mt-2">( 旅行ブログ )</p>
        <img
          className="mt-6"
          src="https://images.unsplash.com/photo-1531219572328-a0171b4448a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="my-5 text-3xl font-poppins font-medium">
          Plan the Ultimate Japan Adventure
        </p>
        <p className="text-justify text-gray-800">
          Planning a trip to Japan can be overwhelming, but this guide will help
          you craft the perfect itinerary. From ancient temples to neon-lit
          streets, delicious cuisine to breathtaking landscapes, Japan offers an
          unforgettable experience for every traveler.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {BlogData.map((blog, index) => (
          <BlogCard
            key={index}
            img={blog.img}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </Container>
  );
};

const BlogCard = ({ img, title, content }) => {
  return (
    <div className="flex flex-row items-start gap-6 object-cover ">
      <img className="w-1/3 h-full" src={img} />
      <div>
        <p className="font-poppins text-2xl font-medium">{title}</p>
        <p className="text-justify mt-3 text-gray-800">{content}</p>
      </div>
    </div>
  );
};

export default HomeBlog;
