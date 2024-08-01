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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/video">Video</Link>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/video" element={<VideoPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
