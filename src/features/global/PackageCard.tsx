import React from "react";
import { Link } from "react-router";

interface PackageDataInterface {
  img: string;
  title: string;
  duration: string;
  Destinations: string;
  contents: string;
}

interface PackageCardProps {
  packageData: PackageDataInterface;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  return (
    <div className="border border-gray-300 flex flex-col service-card">
      <img
        className="h-[300px] object-cover items-center"
        src={packageData.img}
      />
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
        <Link
          to={`/packages/1`}
          className="px-3 hover:bg-gray-800 duration-150 hover:text-white py-1 cursor-pointer border uppercase tracking-wider border-gray-300"
        >
          Details ( 詳細 )
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
