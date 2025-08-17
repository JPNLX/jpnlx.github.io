import "./ProjectCard.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <img data-testid="projectCardLogo" src={logo} alt={`${name} logo`} className="project-card-logo" />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>
        <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
          </svg>
          {"View Project"}
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
