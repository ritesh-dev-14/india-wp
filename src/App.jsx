import Navbar from "./layout/Navbar";
import MainContent from "./layout/MainContent";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#050505] text-white antialiased overflow-x-hidden">
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
