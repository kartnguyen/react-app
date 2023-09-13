import React from "react";
import PropTypes from 'prop-types'

/**
 * Component to display a "Sale" badge if there is a sale price.
 * 
 * @param {Object} props - The props object.
 * @param {number} props.s_price - The sale price.
 * @returns {JSX.Element} - JSX element representing the "Sale" badge.
 */
const ProductSale = ({ s_price }) => {
  if (s_price) {
    return (
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Sale
      </div>
    );
  }
};

ProductSale.propTypes = {
  /**
   * The sale price.
   */
  s_price: PropTypes.number,
}

export default ProductSale;

