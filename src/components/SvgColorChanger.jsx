import {useState} from "react";
import PropTypes from "prop-types";

const SvgColorChanger = ({svgContent}) => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`clickable-svg ${isClicked ? "clicked" : ""}`}
    >
      {svgContent}
    </div>
  );
};

SvgColorChanger.propTypes = {
  svgContent: PropTypes.element.isRequired,
};

export default SvgColorChanger;
