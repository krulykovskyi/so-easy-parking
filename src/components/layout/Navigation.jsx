const navigationItems = [
  { href: '#hero', label: 'Головна' },
  { href: '#about', label: 'Про курс' },
  { href: '#features', label: 'Переваги' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#pricing', label: 'Придбати' }
];

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="navigation__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 