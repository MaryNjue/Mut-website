// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import LeadershipPage from "./components/LeadershipPage";
import TracksPage from "./components/TracksPage";
import EventsPage from "./components/EventsPage";
import './app.css';


const App = () => {
  return (
    <Router>
      <div>
        {/* Shared Navigation Bar */}
        {/* Use shared navigation on all pages */}
        
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
