import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'; 
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { categoria } ) => {

  // el data:images renombramos el data con el otro nombre de images 
    const { data:images, loading } = useFetchGifs( categoria );
  
  return ( 
    <>
    {/* el h3 el nombre de la categoria */}
    <h3 className = 'animate__animated animate__bounce'> { categoria }</h3>
  
      {/* devuelve una caja de grid de gifs */}
    <div className="card-grid">
       
       { loading && <p className = 'animate__animated animate__flash'> Loading </p> }
    
        {
          images.map( img =>
           <GifGridItem
           key = { img.id }
            { ...img }
           />
           )
        }    
    </div>
    </>
  )
}
