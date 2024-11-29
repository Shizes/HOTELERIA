'use server';
import React from 'react'
import { getSalones } from "../lib/getSalones";
import CardSalon from './CardSalon';
import './Salones.css';

interface SalonesType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}


export default async function ApiSalones() {
    const salones: SalonesType[] = await getSalones(
       ' https://673e808e0118dbfe860b76dd.mockapi.io/armados'
    );

    

  return (
    <div className='mosaico'>
      <h2 className='titulo'>Tipo de salones</h2>
    {salones.map((salon) => (
     <CardSalon key={salon.id} salon={salon}/>
    ))}
    </div>
  )
}

