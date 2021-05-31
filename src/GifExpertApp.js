import React,{ useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
// Componente padre es GifExpertApp
const GifExpertApp = () =>{
        //Crea categorias en un array
         const [ categorias, setcategorias ] = useState(['labrador']);
         //retorna el componente Principal
          return (
              <>
              <h2> GifExpertApp es una Aplicacion Web que busca Gifs </h2>
              <h3> probando Noelia :v </h3>
               {/* mandamos la funcion setcategoria al componente AddCategory */}
              <AddCategory setcategorias = { setcategorias } />
              <hr/>  
         
                { 
                  {/* usamos el map porque retorna un valor pero un for no retorna nada  */},
                  categorias.map( category => 
                <GifGrid 
                key = { category } 
                categoria = { category }
                />
               )
               } 
              </>
                 )
      };


      export default GifExpertApp;
      

    

