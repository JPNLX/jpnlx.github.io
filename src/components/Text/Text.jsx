import "./Text.css";
import PropTypes from "prop-types";

const Text = ({ heading, body }) => {
  return (
    <div className="text-component">
      <h1 className="text-heading">{heading}</h1>
      <p className="text-body">{body}</p>
    </div>
  );
};

Text.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
Text.defaultProps = {
  heading: "Default Heading",
  body: "This is the default body text.",
};

export default Text;
