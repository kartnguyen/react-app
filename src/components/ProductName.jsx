import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to display the name of a product.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the product.
 * @returns {JSX.Element} - JSX element representing the product name.
 */
const ProductName = ({ name }) => {
  return (
    <h5 className="fw-bolder">{name}</h5>
  )
}

ProductName.propTypes = {
  /**
   * The name of the product.
   */
  name: PropTypes.string.isRequired
}

export default ProductName;
