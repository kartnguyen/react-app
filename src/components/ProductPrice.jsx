import React from "react";
import PropTypes from "prop-types";

/**
 * Component to display product prices with optional sale price.
 *
 * @param {Object} props - The props object.
 * @param {number} props.o_price - The original price of the product.
 * @param {number} [props.s_price] - The sale price of the product (optional).
 * @returns {JSX.Element} - JSX element representing the product prices.
 */
const ProductPrice = ({ o_price, s_price }) => {
  if (s_price) {
    return (
      <>
        <span className="text-muted text-decoration-line-through">
          ${o_price}
        </span>
        <span> ${s_price.toFixed(0)}</span>
      </>
    );
  }
  return <span> ${o_price.toFixed(0)}</span>;
};

ProductPrice.propTypes = {
  /**
   * The original price of the product.
   */
  o_price: PropTypes.number.isRequired,
  /**
   * The sale price of the product (optional).
   */
  s_price: PropTypes.number,
};

export default ProductPrice;
