import React from "react";
import PackagesFilter from "../Components/PackagesFilter";
import PackageList from "../Components/PackageList";

const PackagesPage = () => {
  return (
    <div>
      <PackagesFilter />
      <PackageList/>
    </div>
  );
};

export default PackagesPage;
