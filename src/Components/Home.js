import React from 'react'
import FeatureProduct from './FeatureProduct';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';


function Home() {
    return (
        <>  
        <HeroSection title="Store"/>
        <FeatureProduct/>
        <Services/>
        <Trusted/>

        </>
    )
}

export default Home