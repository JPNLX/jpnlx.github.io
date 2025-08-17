import "./ArticleCard.css";
import PropTypes from "prop-types";

/* TODO:
  Fill out this component according to the README.
*/

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article data-testid={"articleCard"} className="article-card">
      <div className="article-card-header">
        <time data-testid={"articleCardDate"}>{date}</time>
        <h2 data-testid={"articleCardTitle"}>{title}</h2>
      </div>
      <p data-testid={"articleCardContent"}>{content}</p>
      <a data-testid={"articleCardLink"} href={link}>
        Read article
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  /* code me */
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ArticleCard.defaultProps = {
  /* code me */
  link: "#",
};

export default ArticleCard;
