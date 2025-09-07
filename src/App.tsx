import { Route, Routes } from "react-router";
import AppWrapper from "./pages/AppWrapper";
import { PaysProvider } from "./contexts/PaysProvider";

export default function App() {
  return (
    <div>
      <PaysProvider>
        <Routes>
          <Route path="/" element={<AppWrapper />} />
        </Routes>
      </PaysProvider>
    </div>
  );
}
