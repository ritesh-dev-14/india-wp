import { useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050816] text-white antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Global Background */}
      <div className="fixed inset-0 -z-20 bg-[#050816]" />

      {/* Optional Gradient Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_40%)]" />

      {/* Navigation */}
      {showNavbar && <Navbar />}

      {/* Main Content */}
      <main className="relative z-10">
        <MainContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
