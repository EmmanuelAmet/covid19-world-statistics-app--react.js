import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
const defaultImage = 'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg'

  
const Product = () => {
  const [name, setName] = useState('default name')
  const [countries, setCountries] = useState([])
    const { country } = useParams()
    const url = `https://corona.lmao.ninja/v2/countries/${country}`
    console.log(url)


  async function getDetails(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.cases)
    setCountries(data)
  }
    
  useEffect(() => {
    getDetails(url)
  }, [])

   const urlImge = countries.countryInfo && countries.countryInfo.flag
  return (
    <div className="product">
      
      <img src={urlImge || defaultImage} alt={ countries.country}/>
      <h1>{countries.country}</h1>
      <h3 className="nav">Cases: {countries.cases}</h3>
      <h3>Today Cases: {countries.todayCases}</h3>
      <h3>Deaths: {countries.deaths}</h3>
      <h3>Today Deaths: {countries.todayDeaths}</h3>
      <h3>Recovered: { countries.recovered}</h3>
      <h3>Today Recovered: {countries.todayRecovered}</h3>
      <h3>Active: {countries.active}</h3>
      <h3>Critical: {countries.critical}</h3>
      <h3>Cases Per One Million: {countries.casesPerOneMillion}</h3>
      <h3>deaths Per One Million: {countries.deathsPerOneMillion}</h3>
      <h3>Tests: { countries.tests}</h3>
      <Link to="/" className="btn">Back</Link>
    </div>
  );
};

Product.propTypes = {
  countryInfo: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
}

Product.defaultProps = {
  name: 'country'
}

export default Product;