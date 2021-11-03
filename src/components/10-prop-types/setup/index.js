import React from 'react'
import Products from './Products'
import { useFetch } from '../../useFetch/useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://corona.lmao.ninja/v2/countries'

const Index = () => {
  const { loading, products } = useFetch(url)
  return (
    <div>
      <h3 className="container">Covid-19 Statistics Updates</h3>
      <a className="btn" href="https://www.linkedin.com/in/emmanuel-ametepee-052264175/">Developed By: Emmanuel Ametepee</a>
      
      <section className='products'>
        {products.map((product) => {
          return <div>
            {loading? <h3>Loading...</h3> :  <Products key={product.country} {...product} />}
          </div>
        })}
      </section>
    </div>
  )
}

export default Index
