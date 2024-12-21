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
            <h1 className="hero__title">Легке паркування</h1>
            <p className="hero__description">
              Курс з 6-ти уроків від жіночого автоінструктора з 23-річним стажем
              водіння.
            </p>
            <p className="hero__description">
              Навчіться паркуватись за <span className="text-bold">1 день</span>{' '}
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
