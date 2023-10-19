import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import LiftPage from "./pages/LiftPage";
import ClimbPage from "./pages/ClimbPage";

import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/climb" element={<ClimbPage />} />
        <Route path="/lift" element={<LiftPage />} />
      </Routes>
    </div>
  );
}

export default App;
