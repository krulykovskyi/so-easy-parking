import Container from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import { Car } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="features">
      <Container>
        <div className="features__grid">
          <Card>
            <CardContent className="features__card-content">
              <h3 className="features__card-title">
                Паркування переднім ходом
              </h3>
              <ul className="features__card-list">
                <li className="features__card-item">
                  <Car className="features__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Пряма парковка вперед</p>
                    <p className="features__card-description">
                      Навчитесь правильно оцінювати габарити автомобіля
                    </p>
                  </div>
                </li>
                <li className="features__card-item">
                  <Car className="features__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Заїзд в гараж</p>
                    <p className="features__card-description">
                      Освоїте техніку заїзду в обмежений простір
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Features; 