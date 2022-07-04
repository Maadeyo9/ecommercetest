import React from 'react';

import { FooterBanner, HeroBanner, Product } from '../components';
import { client } from '../library/client';

const Home = ({ products, bannerData }) => {
  return(
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2> Most popular products </h2>
        <p> A variety of gear</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

    <FooterBanner FooterBanner={bannerData && bannerData[0]}/>
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;