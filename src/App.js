import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Mail from "./components/Mail/Mail";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Services />
      <Experience />
      <Resume />
      <Mail />
    </div>
  );
}

export default App;
