'use server';
import React from 'react'
import { getSalones } from "../lib/getSalones";
import CardSalon from './CardSalon';

interface SalonesType {
  id: string;
  name: string;
  image: string;
  description: string;
}


export default async function ApiSalones() {
    const salones: SalonesType[] = await getSalones(
       ' https://673e808e0118dbfe860b76dd.mockapi.io/armados'
    );

  return (
    <div><h2>Tipo de salones</h2>
    {salones.map((salon) => (
     <CardSalon key={salon.id} salon={salon}/>
    ))}
    </div>
  )
}

