import Carousel from 'react-bootstrap/Carousel';
import './carousal.css'; // Make sure to import the CSS file

function BannerCarousel() {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.e66a4452ab9e6c07ee2e.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-left">
          <h5 className="caption-title">Experienced Educators</h5>
          <p className="caption-text">Our educators are professionals with years of teaching experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.e66a4452ab9e6c07ee2e.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption-left">
          <h5 className="caption-title">Student Success Programs</h5>
          <p className="caption-text">Programs that ensure student success and career readiness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default BannerCarousel;
