import "./App.css";
import Footer from "./components/Footer/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div>
      <header>
        <nav className="sticky">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Pricing></Pricing>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
