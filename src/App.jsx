import "./App.css";
import Footer from "./components/Footer/Footer/Footer";
import Cards from "./components/GetStarted/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Status from "./components/Status/Status";
import Workflow from "./components/Workflow/Workflow";

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
        <Status></Status>
        <Cards></Cards>
        <Pricing></Pricing>
        <Workflow></Workflow>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
