import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Navbar";
import SearchContainer from "./SearchContainer";
import About from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
