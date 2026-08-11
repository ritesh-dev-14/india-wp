import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import ServicesPage from "../pages/ServicesPage";
import AboutPage from "../pages/AboutPage";
import InDustries from "../pages/InDustries";
import Process from "../pages/Process";
import ContactPage from "../pages/ContactPage";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/industries" element={<InDustries />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default MainContent;
