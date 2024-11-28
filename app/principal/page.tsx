import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import Hero from '@/Components/Hero'
import Categories from '@/Components/Categories'
import OfertasList from '@/Components/Ofertas'
import Servicios from '@/Components/Servicios'
import Testimonios from '@/Components/Testimonios'
import Footer from '@/Components/ui/Footer'

const principal = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Servicios/>
      <OfertasList/>
      <Testimonios/>
      <Footer/>
    </div>
  )
}

export default principal