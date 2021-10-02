import React from "react";

const Image = ({ className, srcDark,  srcSetDark, alt }) => {

  return (
    <img
      className={className}
      srcSet={ srcSetDark }
      src={ srcDark }
      alt={alt}
    />
  );
};

export default Image;
