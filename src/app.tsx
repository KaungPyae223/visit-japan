import { Routes, Route } from "react-router-dom";
import NavBar from "./features/global/NavBar";

import Footer from "./features/global/Footer";
import HomePage from "./features/Home/pages/HomePage";
import PackagesPage from "./features/Packages/Pages/PackagesPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
