import "./App.css";
import Footer from "./components/Footer/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Hero></Hero>
        <Pricing></Pricing>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
