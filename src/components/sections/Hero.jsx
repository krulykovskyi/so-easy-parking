import Button from '../ui/Button';
import Container from '../ui/Container';
import photo from '../../assets/mom_car.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero__container">
          <div className="hero__photo">
            <img src={photo} alt="driver" />
          </div>
          <div className="hero__text">
            <h1 className="hero__title">
              Легке паркування
              <p className="hero__description0">
                Зручне для всіх охочих, а особливо для жінок та дівчат!
              </p>
            </h1>
            <p className="hero__description">
              КУРС з 7-ми УРОКІВ ВСЬОГО ЗА 379 ГРН
            </p>
            <p className="hero__description">
              Навчіться паркуватись за <span className="font-bold">1 день</span>{' '}
              - покроковий метод доступний кожному!
            </p>
            <div className="hero__buttons">
              <Button size="lg">Почати навчання</Button>
              <Button size="lg" variant="outline">
                <a href="#about">Дізнатися більше</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
