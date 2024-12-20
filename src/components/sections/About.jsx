import { Card, CardContent } from '../ui/Card';
import { Car } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Про курс</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="about__text">
            Курс <i>"Легке паркування"</i> розроблений для тих, хто хоче впевнено та
            безпечно паркувати автомобіль у будь-якій ситуації. За 6 уроків ви
            опануєте всі основні види паркування та зможете без стресу
            знаходити місце для авто навіть у центрі міста в годину пік.
          </p>
        </div>

        <div className="about__grid">
          <Card className="bg-orange-50">
            <CardContent className="features__card-content">
              <h3 className="about__card-title">Паркування заднім ходом</h3>
              <ul className="about__card-list">
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Пряма парковка задом</p>
                    <p className="about__card-description">
                      Навчитесь безпечно паркуватись між автомобілями під
                      прямим кутом
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Паралельна парковка</p>
                    <p className="about__card-description">
                      Опануєте техніку паркування паралельно до бордюру між
                      автомобілями
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Коса парковка задом</p>
                    <p className="about__card-description">
                      Освоїте паркування під кутом 45° на парковках ТРЦ та
                      супермаркетів
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About; 