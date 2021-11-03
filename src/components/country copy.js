import React, { useState, useEffect } from 'react'

const url = 'https://corona.lmao.ninja/v2/countries'

console.log(url)
const CountryFetchData = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getCountries = async () => {
    const response = await fetch(url)
    if (response.status >= 200 && response.status <= 299) {
      const countries = await response.json()
      setIsLoading(false)
      setIsError(false)
      setCountries(countries)
    } else {
      setIsLoading(false)
      setIsError(true)
    }
    
  }
  useEffect(() => {
    getCountries()
  }, [])

  if (isLoading) {
    return <div className="container">
      <h4>Loading...</h4>
    </div>
  }
  if (isError) {
    return <div className="container">
      <h4>Oops, something unexpected happened...</h4>
    </div>
  }

  return (
    <>
      <h3 className="container">Covid-19 Statistics Updates</h3>
      <a className="btn" href="https://www.linkedin.com/in/emmanuel-ametepee-052264175/">Developed By: Emmanuel Ametepee</a>
      <ul className='users'>
        {countries.map((myCountry) => {
          const { country, cases, active, population, deaths, countryInfo: _id } = myCountry
          return (
            <li key={myCountry.countryInfo._id}>
              <img src={myCountry.countryInfo.flag} alt={country} />
              <div>
                <h4>{country}</h4>
                <h5>Cases: {cases}</h5>
                <h5>Deaths: {deaths}</h5>
                <h5>Active: {active}</h5>
                <h5>Population: {population}</h5>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CountryFetchData
