import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <nav className="sticky">
          <Navbar></Navbar>
        </nav>
      </header>
    </div>
  );
}

export default App;
