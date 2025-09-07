import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="pt-20 bg-gray-50">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </main>
  );
}

export default App;
