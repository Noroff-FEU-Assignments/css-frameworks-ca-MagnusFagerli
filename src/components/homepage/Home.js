import React from 'react'
import ImageCarousel from './ImageCarousel';
import Paragraph from './Paragraph';
import Accordion from '../accordion/Accordion';
import Footer from '../footer/Footer'

function Home() {
    return (
        <>  
        <ImageCarousel />
        <Paragraph />
        <Accordion />
        <Footer />
      </>
    )
}

export default Home
