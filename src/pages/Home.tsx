import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import Partenaire from "../components/Partenaire";
import Service from "../components/Service";
import About from "../components/About";
import Solution from "../components/Solution";

const Home = ({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLDivElement>;
}) => {
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
    </div>
  );
};

export default Home;
