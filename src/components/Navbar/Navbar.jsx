import "./Navbar.css";
import PropTypes from "prop-types";
//import React from 'react';

/* TODO:
  Fill out this component according to the README.
*/

function NavbarLink({ children, to, testid }) {
  return (
    <a data-testid={testid} className="link" href={to}>
      {children}
    </a>
  );
}

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
function Navbar({ options }) {
  return (
    <nav data-testid="nav" className="navbar">
      <ul data-testid="ul">
        {options.map((option) => (
          <li key={option.path} data-testid="li">
            <NavbarLink to={option.path} testid={`link-${option.label}`}>
              {option.label}
            </NavbarLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
