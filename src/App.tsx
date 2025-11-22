// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";

function App() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden pt-10 pb-0">
      <div
        className="bg-white flex flex-col relative shadow-2xl"
        style={{
          width: "1440px",
          minHeight: "100vh",
          maxWidth: "100%",
          marginBottom: 0,
        }}
      >
        <Header />

        <div className="flex-grow flex flex-col w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<IntroPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Footer */}
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
