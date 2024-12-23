import Container from '../ui/Container';
import { Card } from '../ui/Card';
import testimonial1 from '../../assets/testimonial1.jpg';
import testimonial2 from '../../assets/testimonial2.jpg';
import testimonial3 from '../../assets/testimonial3.jpg';
import testimonial4 from '../../assets/testimonial4.jpg';
import testimonial5 from '../../assets/testimonial5.jpg';
import testimonial6 from '../../assets/testimonial6.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Container className="testimonials__container">
        <h2 className="testimonials__title">Відгуки учнів</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Card className="testimonials__card">
            <img src={testimonial1} alt="testimonial" />
          </Card>
          <Card className="testimonials__card">
            <img src={testimonial2} alt="testimonial" />
          </Card>
          <Card className="testimonials__card">
            <img src={testimonial3} alt="testimonial" />
          </Card>
          <Card className="testimonials__card">
            <img src={testimonial4} alt="testimonial" />
          </Card>
          <Card className="testimonials__card">
            <img src={testimonial5} alt="testimonial" />
          </Card>
          <Card className="testimonials__card">
            <img src={testimonial6} alt="testimonial" />
          </Card>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
