import "./App.css";
import Navbar from "./components/shred/Navbar";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 min-h-screen bg-gray-50">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;
