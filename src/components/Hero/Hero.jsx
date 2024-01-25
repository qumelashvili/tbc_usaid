import HeroImg from "./assets/hero_image.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src={HeroImg} alt="" />
      <div className="hero_text">
        <h1>TBC x USAID</h1>
        <p>ტექნოლოგიური განათლებისთვის</p>
      </div>
    </div>
  );
}

export default Hero;
