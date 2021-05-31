import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// un Custom no es mas que extraer logica de algun componente o logica que yo quiero reutilizar y extraerlo 
// para que sea sencillo reutilizar nuevamente.
// los custom hook o hooks personalizado pueden tener estados 
// este custom hook fue creado para que GifGrid no este muy cargado y tenga codigo limpio 
export const useFetchGifs = ( categoria ) => {

  //creamo un estado que sea un objeto
  const [state, setstate] = useState({
    data : [],
    loading: true 
  });

  useEffect( () => {
    
    getGifs( categoria )
    .then( imgs => 
  
          setstate({
          data: imgs,
          loading: false 
           }) 
      );

  },[ categoria ]);

  return state;

}