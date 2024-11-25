import React from 'react'
import Navbar from '@/Components/ui/Navbar'
import { getApis } from '@/lib/getApis'

const armados = () => {
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
    return{
      props: { articles: [] },
    };
  }
}

export default armados