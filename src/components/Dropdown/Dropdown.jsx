import { useState } from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const Dropdown = ({ onPreview, onEdit, onClone, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="dropdown" className="dropdown">
      <button data-testid="menuButton" className="dropdown-btn" onClick={() => setIsOpen((open) => !open)}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-container">
          <button data-testid="previewButton" className="dropdown-item" onClick={onPreview}>
            Preview
          </button>
          <button data-testid="editButton" className="dropdown-item" onClick={onEdit}>
            Edit
          </button>
          <button data-testid="cloneButton" className="dropdown-item" onClick={onClone}>
            Clone
          </button>
          <div className="dropdown-divider"></div>
          <button data-testid="deleteButton" className="dropdown-item danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onPreview: PropTypes.func,
  onEdit: PropTypes.func,
  onClone: PropTypes.func,
  onDelete: PropTypes.func,
};

Dropdown.defaultProps = {
  onPreview: () => {},
  onEdit: () => {},
  onClone: () => {},
  onDelete: () => {},
};

export default Dropdown;
