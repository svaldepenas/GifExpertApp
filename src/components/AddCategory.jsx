import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleChangeValue = ( { target } ) => {
    setInputValue( target.value );
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();

    const trimValue = inputValue.trim() ;

    if( trimValue.length <= 1 ) return;

    // Event from parent to child 
    // setCategories( cat => [ inputValue, ...cat ]   );

     // Event from child to parent 
    onNewCategory( trimValue );
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Buscar GIFs" 
            value={inputValue} 
            onChange={handleChangeValue} />
    </form>
  )

};
