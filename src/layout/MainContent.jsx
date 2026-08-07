import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";
// import ServicesPage from "../pages/ServicesPage";
// import ContactPage from "../pages/ContactPage";
// import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
// import TermsPage from "../pages/TermsPage";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} /> */}
    </Routes>
  );
};

export default MainContent;