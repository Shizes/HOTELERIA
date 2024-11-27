import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import Eventos from '@/Components/Eventos'
import PortadaEvento from '@/Components/PortadaEvento'

const eventos = () => {
  return (
    <div>
      <Navbar/>
      <PortadaEvento/>
      <Eventos/>
      </div>
  )
}

export default eventos