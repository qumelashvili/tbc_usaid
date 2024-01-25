import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImages from "./data/CustomCarouselData";
import Carousel from "./Carousel";

function CustomCarousel() {
  return <Carousel imageSources={carouselImages} />;
}

export default CustomCarousel;
