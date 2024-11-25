import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import { getApis } from '@/lib/getApis'
import { GetServerSideProps } from 'next'


const armados = ({articles}) => {
  return (
    <div>
      <Navbar/> 
      <img src={articles.image} alt={articles.title}/>
      </div>
  )
}


export async function getServerSideProps() {
    const res = await fetch('https://673e808e0118dbfe860b76dd.mockapi.io/eventos'); 
    const articles = await res.json();

    return {
      props: { articles } 
    };
  } 


export default armados