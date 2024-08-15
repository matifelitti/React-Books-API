import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Navbar";
import SearchContainer from "./SearchContainer";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <SearchContainer />
      <About />
    </>
  );
}

export default App;
