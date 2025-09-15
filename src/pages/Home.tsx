import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import Partenaire from "../components/Partenaire";
import Service from "../components/Service";
import About from "../components/About";
import Solution from "../components/Solution";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Home = ({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLDivElement>;
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* About Section */}
      <About />

      {/* Solutions Section */}
      <Solution />

      {/* Services Section */}
      <Service />

      {/* Partners Section */}
      <Partenaire />
      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-50 rounded-full bg-indigo-300 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-indigo-400"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
