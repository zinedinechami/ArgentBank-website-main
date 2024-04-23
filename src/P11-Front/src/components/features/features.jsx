import "./features.css";
import PropTypes from "prop-types";

export default function FeatureItem({ imageSrc, Title, Description }) {
  return (
    <>
      <div className="feature-item">
        <img src={imageSrc} alt={Title} className="feature-icon" />
        <h3 className="feature-item-title">{Title}</h3>
        <p>{Description}</p>
      </div>
    </>
  );
}

FeatureItem.propTypes = {
  imageSrc: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
};
