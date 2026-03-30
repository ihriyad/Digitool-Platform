import "./App.css";
import Footer from "./components/Footer/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <nav className="sticky">
          <Navbar></Navbar>
        </nav>
      </header>
      <main></main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
