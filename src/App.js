import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AllServicesPage from "./pages/AllServicesPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import MEPPage from "./pages/MEPPage";
import ScanToBIMPage from "./pages/ScanToBIMPage";
import WhyUsPage from "./pages/WhyUsPage";
import AboutPage from "./pages/AboutPage";
import BookACallPage from "./pages/BookACallPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/mep" element={<MEPPage />} />
          <Route path="/scan-to-bim" element={<ScanToBIMPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book-call" element={<BookACallPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
