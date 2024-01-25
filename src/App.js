import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <CustomCarousel />
    </div>
  );
}

export default App;
