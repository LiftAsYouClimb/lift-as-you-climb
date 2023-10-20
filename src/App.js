import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage/AboutPage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ClimbPage from "./pages/ClimbPage/index";
import LiftPage from "./pages/LiftPage";
import OfferSupportPage from "./pages/OfferSupportPage";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ClimbPage" element={<ClimbPage />} />
        <Route path="/lift" element={<LiftPage />} />
        <Route path="/offer-support" element={<OfferSupportPage />} />

      </Routes>
    </div>
  );
}

export default App;
