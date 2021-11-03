import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const defaultImage = 'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg'

const Products = ({ countryInfo, country, cases, deaths, population }) => {
  const url = countryInfo && countryInfo.flag
  console.log(country)
  return <article className='product'>
    <img src={url || defaultImage} alt={ country}/>
    <h4>{country}</h4>
    <h4>Cases: {cases}</h4>
    <h4>Death: {deaths}</h4>
    <h4>Population: {population}</h4>

    <Link className="btn" to={`product/${country}`}>Read More</Link>
  </article>;
};

Products.propTypes = {
  countryInfo: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
}

Products.defaultProps = {
  name: 'default name'
}

export default Products;
