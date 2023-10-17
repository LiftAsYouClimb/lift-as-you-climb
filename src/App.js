import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { PassageProvider } from '@passageidentity/passage-react';

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          {/* <div className="App">
        <header className="App-header">
          <NavBar />
          <p>Hello world.</p>
        </header>
      </div> */}
        </Routes>
      </div>
    </PassageProvider>
  );
}

export default App;
