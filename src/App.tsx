import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/About";
import VideoPage from "./pages/Video";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <Link to="/playground">Home</Link>
            <Link to="/playground/about">About</Link>
            <Link to="/playground/video">Video</Link>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/playground/" element={<HomePage />} />
            <Route path="/playground/about" element={<AboutPage />} />
            <Route path="/playground/video" element={<VideoPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
