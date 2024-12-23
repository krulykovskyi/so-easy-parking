import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import Container from '../ui/Container';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <Container>
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="pricing__price">
                379 грн
              </p>
              <p className="pricing__description">
                Повний курс з 7 уроків
              </p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg">
                Придбати курс
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
