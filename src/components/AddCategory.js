import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ( { setcategorias }  ) => {

  //Creamos un estado para el input del componente AddCategory
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = ( e ) => {
    // esta funcion sirve para escribir en la caja de texto 
    setinputValue( e.target.value );

  }

   const handleSubmit = (e)  => { 
     //el preventDefault evita el refresh y envio del formulario al poner enter
     e.preventDefault();
      // el trim quita el espacio del texto
       if( inputValue.trim().length > 2 ) 
       {
        setcategorias( categorias => [ inputValue, ...categorias] );
        setinputValue('');
       }else { 
         alert( 'compa ponga algo en el texto de entrada ' );
       }
   }
  return (
     
     <form onSubmit ={ handleSubmit }>
       <input 
          type= "text" 
          value = { inputValue }
          onChange ={ handleInputChange }
          />
     </form>
 
  )
};
AddCategory.propTypes = {
  setcategorias: Proptypes.func.isRequired
}

