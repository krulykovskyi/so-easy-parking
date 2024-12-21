import { Card, CardContent } from '../ui/Card';
import { Car } from 'lucide-react';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Про курс та переваги</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="about__text">
            Курс <i>"Легке паркування"</i> розроблений для тих, хто хоче
            впевнено та безпечно паркувати автомобіль у будь-якій ситуації. За 6
            уроків ви опануєте всі основні види паркування та зможете без стресу
            знаходити місце для авто навіть у центрі міста в годину пік.
          </p>
        </div>

        <div className="about__main-cards">
          <Card className="bg-orange-50">
            <CardContent className="features__card-content">
              <h3 className="about__card-title">Паркування заднім ходом</h3>
              <ul className="about__card-list">
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Пряма парковка задом</p>
                    <p className="about__card-description">
                      Навчитесь безпечно паркуватись між автомобілями під прямим
                      кутом
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
          <Card className="bg-orange-50">
            <CardContent className="features__card-content">
              <h3 className="about__card-title">Паркування переднім ходом</h3>
              <ul className="about__card-list">
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Пряма парковка передом</p>
                    <p className="about__card-description">
                      Вивчите техніку швидкого паркування передом на місця під
                      прямим кутом
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">Коса парковка передом</p>
                    <p className="about__card-description">
                      Навчитесь легко паркуватись під кутом на міських парковках
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" size={20} />
                  <div>
                    <p className="font-semibold">
                      Паркування в обмеженому просторі
                    </p>
                    <p className="about__card-description">
                      Опануєте техніки маневрування в тісних дворах та підземних
                      паркінгах
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="about__secondary-cards">
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Покрокові інструкції</h3>
              <p>
                Чіткий алгоритм дій для кожного типу паркування з детальними
                поясненнями
              </p>
            </CardContent>
          </Card>
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Відеодемонстрації</h3>
              <p>Наочні приклади виконання всіх маневрів з різних ракурсів</p>
            </CardContent>
          </Card>
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Практичні поради</h3>
              <p>
                Корисні хитрощі та рекомендації від досвідченого інструктора
              </p>
            </CardContent>
          </Card>
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Парковка в 2-3 дії</h3>
              <p>
                Навчіться паркуватися швидко та впевнено за простим алгоритмом
              </p>
            </CardContent>
          </Card>
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Підходить початківцям</h3>
              <p>
                Курс розрахований на тих, хто тільки починає вчитися водінню
              </p>
            </CardContent>
          </Card>
          <Card className="about__secondary-card">
            <CardContent className="features__card-content">
              <h3 className="features__card-title">Перевірений результат</h3>
              <p>Більше 300 задоволених учениць вже впевнено паркуються</p>
            </CardContent>
          </Card>
        </div>

        <Button size="lg" className="about__button">
          Придбати програму
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default About;
