const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <p>&copy; {new Date().getFullYear()} Легке паркування. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 