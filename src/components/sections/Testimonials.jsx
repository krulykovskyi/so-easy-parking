import Container from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import testimonial1 from '../../assets/testimonial1.jpg';
import testimonial2 from '../../assets/testimonial2.jpg';
import testimonial3 from '../../assets/testimonial3.jpg';
import testimonial4 from '../../assets/testimonial4.jpg';
import testimonial5 from '../../assets/testimonial5.jpg';
import testimonial6 from '../../assets/testimonial6.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <h2 className="testimonials__title">Відгуки учнів</h2>
        <div className="testimonials__wrapper">
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
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
