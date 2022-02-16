import React from "react";
import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <div>
      <h1 style={headingStyle}>Hello {title}</h1>
      <button>Click me</button>
    </div>
  );
};
Header.defaultProps = {
  title: "Traversy Media",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "pink",
};
export default Header;
