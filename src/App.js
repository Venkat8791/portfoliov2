import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
      </main>
      <Intro />
    </div>
  );
}

export default App;
