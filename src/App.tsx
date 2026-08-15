import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Home from "./pages/Home";
import Idp from "./pages/Idp";
import Join from "./pages/Join";
import Materials from "./pages/Materials";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Policies from "./pages/Policies";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Search from "./pages/Search";
import Support from "./pages/Support";

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/idp" element={<Idp />} />
          <Route path="/support" element={<Support />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
