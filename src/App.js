import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Services />
    </div>
  );
}

export default App;
