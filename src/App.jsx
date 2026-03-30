import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
   <div>
    {/* header here  */}
    <header>
      <nav className="p-5 bg-gray-100 sticky">
        <Navbar></Navbar>
      </nav>
    </header>
   </div>
  );
}

export default App;
