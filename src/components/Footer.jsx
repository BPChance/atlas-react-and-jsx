import links from '../assets/links.json';

function Footer() {
  return (
    <footer>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.link} target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} Atlas School</p>
    </footer>
  );
}

export default Footer;
