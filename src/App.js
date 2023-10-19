import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <div className="App">
        <header className="App-header">
          <NavBar />
          <p>Hello world.</p>
        </header>
      </div> */}
      </Routes>
    </div>
  );
}

export default App;
