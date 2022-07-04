import React from 'react';
import Link from 'next/link';

import { urlFor } from '../library/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='musicman-majesty'> {heroBanner.smallText} </p>
        <h3> {heroBanner.midText} </h3>
        <h1> {heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="Majesty Guitar" className='hero-banner-image'></img>
        <div>
          <Link href="/product/ID">
            <button type='button'> {heroBanner.buttonText} </button>
          </Link>
          <div className='desc'>
            <h5>DESCRIPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner