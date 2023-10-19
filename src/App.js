import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ClimbPage from "./pages/ClimbPage/index";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/climb" element={<ClimbPage />} />
      </Routes>
    </div>
  );
}

export default App;
