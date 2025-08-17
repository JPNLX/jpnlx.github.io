import "./Footer.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid={"footer"} className={"footer"}>
      <ul>
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <a href={`link${index}-url`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <p data-testid={"footerContent"}>© {year}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
