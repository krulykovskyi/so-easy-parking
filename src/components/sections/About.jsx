import { Card, CardContent } from '../ui/Card';
import { Car } from 'lucide-react';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Про курс та його переваги:</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="about__text">
            - Курс <i>"Легке паркування"</i> від професійного автоіструктора з
            23-річним стажем водіння, таксиста, дальнобійника та приватного
            водія. <br />
            - Розроблений для всіх, хто хоче легко, впевнено та безпечно
            паркувати автомобіль у будь-який спосіб. <br />
            - Отримайте 7 уроків, збережіть в телефоні і паркуйтесь як
            професіонал. <br />
            - Кожен урок містить всього 2-3 дії. <br />
            - Має відеодемонтстраціЇ (схеми, анімацію), чіткі орієнтири,
            зрозуміле пояснення. <br />
            - Цей курс збереже ваші час та нерви. <br />- Необмежений в часі
            доступ до курсу.
          </p>
        </div>

        <div className="about__main-cards">
          <Card className="about__main-card bg-orange-50">
            <CardContent className="features__card-content">
              <h3 className="about__card-title">
                Паркування <span className="uppercase font-bold">передом</span>
              </h3>
              <ul className="about__card-list">
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">
                      Пряма (під кутом 90 градусів) парковка передом
                    </p>
                    <p className="about__card-description">
                      Вивчіть техніку швидкого паркування передом на місце під
                      прямим кутом
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">Коса парковка передом</p>
                    <p className="about__card-description">
                      Навчіться легко паркуватись під кутом (ялинкою) на міських
                      парковках, а також безпечно виЇзджати з косоЇ парковки.
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">Паралельна парковка передом</p>
                    <p className="about__card-description">
                      Навчіться визначати достатній розмір паркомісця для заїзду
                      передом. Також дізнайтесь як поправити, прижати до
                      бордюра, легко переставити авто вліво або вправо в тісних
                      умовах.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="about__main-card bg-orange-50">
            <CardContent className="features__card-content">
              <h3 className="about__card-title">
                Паркування <span className="uppercase font-bold">задом</span>
              </h3>
              <ul className="about__card-list">
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">
                      Пряма (під кутом 90 градусів) парковка задом (ближня)
                    </p>
                    <p className="about__card-description">
                      Навчіться безпечно паркуватись між автомобілями біля
                      супермаркетів та ТРЦ під прямим кутом
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">
                      Пряма (під кутом 90 градусів) парковка задом (дальня)
                    </p>
                    <p className="about__card-description">
                      Навчіться безпечно паркуватись між автомобілями біля
                      супермаркетів та ТРЦ під прямим кутом здалеку.
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" />
                  <div>
                    <p className="font-semibold">Паралельна парковка задом</p>
                    <p className="about__card-description">
                      Опануйте техніку паркування в тісних умовах між
                      автомобілями паралельно бордюру всього в 2 діЇ.
                    </p>
                  </div>
                </li>
                <li className="about__card-item">
                  <Car className="about__card-icon" />
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
                Корисні хитрощі та рекомендації від досвідченого автоінструктора
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
          Придбати курс
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default About;
