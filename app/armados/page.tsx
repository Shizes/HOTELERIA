import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import { getApis } from '@/lib/getApis'
import { GetServerSideProps } from 'next'
interface salones{
  id: String,
  name: String,
  //description: String,
  image: String,
}

const armados = ({salones}) => {
  return (
    <div>
      <Navbar/>
      armados
      </div>
  )
}


export async function getServerSideProps(){
  try {
    const salones = await getApis()
    return{
      props:{
        salones
    }
  };
  }catch(error){
    console.error(error);
    return{
      salones: [], 
    };
  }
}

export default armados