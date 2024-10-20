import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Slickerslider from './Slickerslider';
import Newproductgro from './Newproductgro';
import Dresspro from './Dresspro';
import Newone from './Newone';
export default function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
        <Slickerslider/>
        <Newproductgro/>
        <Dresspro/>
        <Newone/>
        <Subfooter/>
        {/* <Footer/> */}
    </div>
  )
}
