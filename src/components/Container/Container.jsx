import PropTypes from "prop-types";

export const Container = ({ className = "", children }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
