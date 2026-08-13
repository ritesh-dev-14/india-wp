import Navbar from "./layout/Navbar";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GlobalBackground from "./components/GlobalBackground";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-page text-ink antialiased overflow-x-hidden relative">
      <GlobalBackground />
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
  );
};

export default App;
