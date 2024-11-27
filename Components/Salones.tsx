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

    const titleStyle = {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#A91F8C",
      textAlign: "center" as const,
      marginBottom: "20px",
      fontFamily: "Dancing Script",
    };

  return (
    <div><h2 style={titleStyle}>Tipo de salones</h2>
    {salones.map((salon) => (
     <CardSalon key={salon.id} salon={salon}/>
    ))}
    </div>
  )
}

