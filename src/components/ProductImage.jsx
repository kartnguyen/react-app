import React from "react";
import PropTypes from "prop-types";

/**
 * A component for displaying an image of a product.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.src - The URL of the image.
 * @returns {JSX.Element} - JSX element representing the product image.
 */
const ProductImage = ({ src }) => {
  return <img className="card-img-top" src={src} alt={src} height={200} />;
};

ProductImage.propTypes = {
  /**
   * The URL of the image.
   */
  src: PropTypes.string.isRequired
};

export default ProductImage;

