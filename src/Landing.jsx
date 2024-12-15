import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import Button from "./components/ui/button";
import { ChevronRight, Star, PlayCircle, Car, ArrowRight } from "lucide-react";

const ParkingLanding = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center gap-8">
            <li>
              <a href="#hero" className="text-gray-700 hover:text-orange-600">
                Головна
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-orange-600">
                Про курс
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-gray-700 hover:text-orange-600"
              >
                Особливості
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-orange-600"
              >
                Відгуки
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-orange-600"
              >
                Придбати
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 pb-12 bg-gradient-to-b from-orange-200 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Легке паркування
              </h1>
              <p className="text-xl mb-8">
                Курс з 6-ти уроків від жіночого автоінструктора з 23-річним
                стажем водіння
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg">
                Почати навчання
                <ChevronRight className="ml-2" />
              </Button>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Паркування автомобіля"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Про курс</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-6">
              Курс "Легке паркування" розроблений для тих, хто хоче впевнено та
              безпечно паркувати автомобіль у будь-якій ситуації. За 6 уроків ви
              опануєте всі основні види паркування та зможете без стресу
              знаходити місце для авто навіть у центрі міста в годину пік.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-orange-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Паркування заднім ходом
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">Пряма парковка задом</p>
                      <p className="text-gray-600">
                        Навчитесь безпечно паркуватись між автомобілями під
                        прямим кутом
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">Паралельна парковка</p>
                      <p className="text-gray-600">
                        Опануєте техніку паркування паралельно до бордюру між
                        автомобілями
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">Коса парковка задом</p>
                      <p className="text-gray-600">
                        Освоїте паркування під кутом 45° на парковках ТРЦ та
                        супермаркетів
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Паркування переднім ходом
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">Пряма парковка передом</p>
                      <p className="text-gray-600">
                        Вивчите техніку швидкого паркування передом на місця під
                        прямим кутом
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">Коса парковка передом</p>
                      <p className="text-gray-600">
                        Навчитесь легко паркуватись під кутом на міських
                        парковках
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="mt-1 text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold">
                        Паркування в обмеженому просторі
                      </p>
                      <p className="text-gray-600">
                        Опануєте техніки маневрування в тісних дворах та
                        підземних паркінгах
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <h4 className="font-bold mb-2">Покрокові інструкції</h4>
                <p>
                  Чіткий алгоритм дій для кожного типу паркування з детальними
                  поясненнями
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h4 className="font-bold mb-2">Відеодемонстрації</h4>
                <p>Наочні приклади виконання всіх маневрів з різних ракурсів</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h4 className="font-bold mb-2">Практичні поради</h4>
                <p>
                  Корисні хитрощі та рекомендації від досвідченого інструктора
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg">
              Записатись на курс
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Особливості курсу
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Парковка в 2-3 дії
                </h3>
                <p>
                  Навчіться паркуватися швидко та впевнено за простим алгоритмом
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Підходить початківцям
                </h3>
                <p>
                  Курс розрахований на тих, хто тільки починає вчитися водінню
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Перевірений результат
                </h3>
                <p>Більше 300 задоволених учениць вже впевнено паркуються</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Відгуки учениць
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-black/5 rounded-lg flex items-center justify-center">
              <PlayCircle
                size={64}
                className="text-orange-600 cursor-pointer hover:text-orange-700"
              />
            </div>
            <div className="aspect-video bg-black/5 rounded-lg flex items-center justify-center">
              <PlayCircle
                size={64}
                className="text-orange-600 cursor-pointer hover:text-orange-700"
              />
            </div>
          </div>
          <div className="mt-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-4">
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <Star className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Хочу трішки поділитися своїм позитивним досвідом навчання
                  водінню з автоінструктором Анною. Вона професіонал своєї
                  справи і прекрасна людина, яка підходить до учня з
                  максимальною увагою та терпінням"
                </p>
                <p className="font-semibold">Світлана К.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Спеціальна пропозиція</h2>
          <p className="text-xl mb-8">
            Встигни придбати всі 6 уроків до 1 січня 2025 року
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold mb-4">$20</p>
              <p className="text-gray-600 mb-6">Повний курс з 6 уроків</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-lg">
                КУПИТИ ЗАРАЗ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Легке паркування. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
};

export default ParkingLanding;
