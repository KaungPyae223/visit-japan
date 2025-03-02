import Container from "../../../components/Container";

const HomePackages = () => {
  const Packages: {
    img: string;
    title: string;
    duration: string;
    Destinations: string;
    contents: string;
  }[] = [
    {
      img: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3lvdG98ZW58MHx8MHx8fDA%3D",
      title: "Classic Japan Heritage Tour",
      duration: "7",
      Destinations: "Tokyo, Kyoto, Nara, Osaka",
      contents: `Explore Japan’s rich history and cultural wonders with a journey through its iconic heritage sites.`,
    },
    {
      img: "https://images.unsplash.com/photo-1617468871756-fe9616039fe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlcnl8ZW58MHx8MHx8fDA%3D",
      title: "Cherry Blossom Adventure",
      duration: "8",
      Destinations: "Tokyo, Mount Fuji, Kyoto",
      contents: `Witness Japan’s breathtaking sakura season with scenic landscapes, seasonal festivals, and vibrant city experiences.`,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      title: "Traditional & Modern Japan Experience",
      duration: "8",
      Destinations: "Tokyo, Kyoto, Osaka",
      contents: `A perfect blend of Japan’s past and future, exploring historic temples and futuristic cityscapes.`,
    },
    
  ];

  return (
    <Container className={"py-24"}>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="text-4xl tracking-wider font-medium font-poppins">
            Our Top Packages
          </p>
          <p className="text-xl mt-4">( 弊社のトップパッケージ )</p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-3">
        {Packages.map((data) => (
          <PackageCard packageData={data} />
        ))}
      </div>
    </Container>
  );
};

const PackageCard = ({ packageData }) => {
  return (
    <div className="border border-gray-300 flex flex-col">
      <img src={packageData.img} />
      <div className="p-3">
        <p className="mt-3 font-poppins text-xl font-semibold">
          {packageData.title}
        </p>
        <p className="text-sm mt-3">
          <span className="font-medium">Duration:</span> {packageData.duration}{" "}
          days
        </p>
        <p className="text-sm">
          <span className="font-medium">Destinations:</span>{" "}
          {packageData.Destinations}
        </p>

        <p className="text-justify mt-5 text-gray-800">
          {packageData.contents}
        </p>
      </div>

      <div className=" p-3 flex flex-row justify-end items-center mt-auto">
        <div className="px-3 py-1 cursor-pointer border uppercase tracking-wider border-gray-300">
          Details ( 詳細 )
        </div>
      </div>
    </div>
  );
};

export default HomePackages;
