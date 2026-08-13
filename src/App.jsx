import Navbar from "./layout/Navbar";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GlobalBackground from "./components/GlobalBackground";

const App = () => {
  return (
    <GlobalBackground>
      <div className="min-h-screen w-full flex flex-col bg-transparent text-[#1A1714] antialiased overflow-x-hidden relative">
        <ScrollToTop />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          <MainContent />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </GlobalBackground>
  );
};

export default App;
