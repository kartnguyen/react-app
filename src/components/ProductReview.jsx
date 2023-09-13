import React from "react";
import PropTypes from 'prop-types'

/**
 * Component to display a star rating based on voting.
 * 
 * @param {Object} props - The props object.
 * @param {boolean} props.voted - Indicates whether the user voted or not.
 * @returns {JSX.Element} - JSX element representing the star rating.
 */
const ProductReview = ({ voted }) => {
  if (voted) {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill" />
        <div className="bi-star-fill" />
        <div className="bi-star-fill" />
        <div className="bi-star-fill" />
        <div className="bi-star-fill" />
      </div>
    );
  }
};

ProductReview.propTypes = {
  /**
   * Indicates whether the user voted or not.
   */
  voted: PropTypes.bool,
}

export default ProductReview;
