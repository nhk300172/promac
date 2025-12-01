// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/home/HomePage";
import { IntroPage } from "./pages/intro/IntroPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { NewsPage } from "./pages/news/NewsPage";
import { NewsDetailPage } from "./pages/news/NewsDetailPage";
import { ProjectPage } from "./pages/project/ProjectPage";
import { ProjectDetailPage } from "./pages/project/ProjectDetailPage";
import { ProductPage } from "./pages/product/ProductPage";
import { ProductDetailPage } from "./pages/product/ProductDetailPage";
import { TermsOfServicePage } from "./pages/termsofservice/TermsOfServicePage";
import { PrivacyPolicyPage } from "./pages/privacypolicy/PrivacyPolicyPage";
import { WorkingProcessPage } from "./pages/workingprocess/WorkingProcessPage";
import { HardBoxPage } from "./pages/coreservices/HardBoxPage";
import { VoucherPage } from "./pages/coreservices/VoucherPage";
import { PublicationPage } from "./pages/coreservices/PublicationPage";
import { DecalPage } from "./pages/coreservices/DecalPage";
import { VariableScratchPage } from "./pages/otherservices/VariableScratchPage";
import { ActivationScratchPage } from "./pages/otherservices/ActivationScratchPage";
import { WinningScratchPage } from "./pages/otherservices/WinningScratchPage";
import { MatchingScratchPage } from "./pages/otherservices/MatchingScratchPage";

function App() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden ">
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
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />{" "}
            <Route path="/du-an" element={<ProjectPage />} />
            <Route path="/du-an/:slug" element={<ProjectDetailPage />} />
            <Route path="/san-pham" element={<ProductPage />} />
            <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
            <Route
              path="/chinh-sach/dieu-khoan"
              element={<TermsOfServicePage />}
            />
            <Route path="/chinh-sach/bao-mat" element={<PrivacyPolicyPage />} />
            <Route
              path="/chinh-sach/quy-trinh"
              element={<WorkingProcessPage />}
            />
            <Route
              path="/dich-vu-cot-loi/in-hop-cung"
              element={<HardBoxPage />}
            />
            <Route
              path="/dich-vu-cot-loi/in-voucher"
              element={<VoucherPage />}
            />
            <Route
              path="/dich-vu-cot-loi/in-an-pham"
              element={<PublicationPage />}
            />
            <Route
              path="/dich-vu-cot-loi/in-tem-nhan"
              element={<DecalPage />}
            />
            <Route
              path="/dich-vu-khac/in-the-cao-bien-doi"
              element={<VariableScratchPage />}
            />
            <Route
              path="/dich-vu-khac/in-the-cao-kich-hoat"
              element={<ActivationScratchPage />}
            />
            <Route
              path="/dich-vu-khac/in-the-cao-trung-thuong"
              element={<WinningScratchPage />}
            />
            <Route
              path="/dich-vu-khac/in-the-cao-rap-chu"
              element={<MatchingScratchPage />}
            />
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
