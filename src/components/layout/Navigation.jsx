import { useState, useEffect } from 'react';

const navigationItems = [
  { href: '#hero', label: 'Головна' },
  { href: '#about', label: 'Про курс' },
  { href: '#testimonials', label: 'Відгуки' },
  { href: '#pricing', label: 'Придбати' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navigationItems.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`navigation__link ${
                activeSection === href.slice(1) ? 'active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(href)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
