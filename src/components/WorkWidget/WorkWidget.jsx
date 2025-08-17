import "./WorkWidget.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section data-testid="workWidget" className="work-widget">
      <h2 data-testid="workWidgetTitle">{title}</h2>
      <p data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((exp, idx) => (
          <li key={idx} data-testid={`workWidgetItem${idx}`}>
            <div className="work-item">
              <img data-testid={`workWidgetItemLogo${idx}`} src={exp.logo} alt={`${exp.organization} Logo`} />
              <div className="work-item-content">
                <h3 data-testid={`workWidgetItemTitle${idx}`}>{exp.organization}</h3>
                <div className="work-item-content-details">
                  <p data-testid={`workWidgetItemContent${idx}`}>{exp.jobTitle}</p>
                  <span data-testid={`workWidgetItemDates${idx}`}>
                    {exp.startYear}
                    {exp.endYear ? ` - ${exp.endYear}` : " - Present"}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
