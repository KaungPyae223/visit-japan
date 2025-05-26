import { Routes, Route } from "react-router-dom";
import NavBar from "./features/global/NavBar";

import Footer from "./features/global/Footer";
import HomePage from "./features/Home/pages/HomePage";
import PackagesPage from "./features/Packages/Pages/PackagesPage";
import DetailPage from "./features/Details/pages/DetailPage";
import AboutPage from "./features/About/pages/AboutPage";
import AnimatePannel from "./AnimatePannel";

const App = () => {
  return (
    <div className="relative">
      <NavBar />
      <AnimatePannel />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
