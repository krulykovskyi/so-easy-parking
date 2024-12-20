import Container from '../ui/Container';
import { Card, CardContent } from '../ui/Card';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <h2 className="testimonials__title">Відгуки учнів</h2>
        <div className="testimonials__grid">
          <Card>
            <CardContent className="pt-6">
              <p className="testimonial-card__text">
                "Дуже задоволена курсом! Тепер я можу спокійно припаркуватися в будь-якому місці."
              </p>
              <p className="testimonial-card__name">Олена К.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="testimonial-card__text">
                "Найкращі інвестиції в своє водійське майбутнє. Дякую за чудовий курс!"
              </p>
              <p className="testimonial-card__name">Марія П.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 