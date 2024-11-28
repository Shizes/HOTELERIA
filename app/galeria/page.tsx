import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import Footer from '@/Components/ui/Footer'
import ImageGallery from '@/Components/ImageGalery'
import Galery from '@/Components/Galery'
const galeria = () => {
  return (
    <div>
      <Navbar/>
      <Galery/>
      <ImageGallery/>
      <Footer/>
      </div>
  )
}

export default galeria