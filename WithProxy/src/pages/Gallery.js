import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import ImageCarousel2 from '../components/ImageCarousel2'
import ImageCarousel3 from '../components/ImageCarousel3'

function Gallery() {
  return (
    <div>
      <div className='w-11/12 mx-auto mb-10'>
        <h1 className='mt-11 font-extrabold text-2xl sm:text-5xl text-center'>Gallery</h1>
        <h2 className=' mt-2 sm:mt-6 font-normal text-sm sm:text-lg md:text-2xl text-customBlack text-center'>Welcome to your source for Logistics Industry Insights & Solutions! Learn interesting facts on industry transformation, covering topics from trends to service excellence and beyond.</h2>
      </div>

      <div className='mt-14' style={{backgroundColor: '#F7F7F7'}}>
        <ImageCarousel />
        <ImageCarousel2 />
        <ImageCarousel3 /> 
      </div>
      
    </div>
  )
}

export default Gallery