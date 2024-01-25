import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function Carousel(props) {
  const maxImagesPerRow = 3;

  const imageGroups = [];
  for (let i = 0; i < props.imageSources.length; i += maxImagesPerRow) {
    const rowImages = props.imageSources.slice(i, i + maxImagesPerRow);
    imageGroups.push(rowImages);
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <h1>პროექტის პარტნიორები</h1>
      <Slider {...settings} className="slider">
        {imageGroups.map((rowImages, index) => (
          <div key={index} className="sliderImagesContainer">
            {rowImages.map((src, innerIndex) => (
              <img key={innerIndex} src={src} alt={`Image ${innerIndex + 1}`} />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
