import PropTypes from "prop-types";
import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white w-full md:250px lg:w-[230px] xl:w-[290px] relative ${className}`}>
        {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`px-4 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
}

  