import { useRef } from "react";
import Footer from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import Home from "./Home";
import ModernCookieConsent from "../components/ModernCookieConsent";

export default function AppWrapper() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -134; // hauteur des deux navbars fixes
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="max-sm:pt-[60px] sm:pt-[144px]">
      {" "}
      {/* compensation navbars fixes */}
      <NavbarComponent onContactClick={scrollToContact} />
      <Home contactRef={contactRef} />
      <Footer />
      <ModernCookieConsent />
    </div>
  );
}
