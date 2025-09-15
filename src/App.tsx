import { Route, Routes } from "react-router";
import AppWrapper from "./pages/AppWrapper";
import { PaysProvider } from "./contexts/PaysProvider";
import Home from "./pages/Home";
import Actualite from "./pages/Actualite";
import NotFound from "./pages/NotFound";
import { useRef } from "react";

export default function App() {
  const contactRef = useRef<any>(null);

  return (
    <div>
      <PaysProvider>
        <Routes>
          <Route path="/" element={<AppWrapper />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home contactRef={contactRef} />} />
          <Route path="/actualites" element={<Actualite />} />
        </Routes>
      </PaysProvider>
    </div>
  );
}
