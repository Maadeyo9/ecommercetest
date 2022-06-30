import React from 'react'
import product from '../ecommerce-testing/schemas/product';

const Home = () => {
  return (
    <>
      HeroBanner

      <div>
        <h2> Most popular products </h2>
        <p> A variety of gear</p>
      </div>

      <div>
        {['Product1', 'Product2'].map((product) => product)}
      </div>
    </>

    Footer
  )
}

export default Home;