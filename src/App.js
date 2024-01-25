import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <CustomCarousel />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
