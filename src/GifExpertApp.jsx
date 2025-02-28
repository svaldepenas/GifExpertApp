import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;

    setCategories( [ newCategory, ...categories ] );

    // Otra forma, el callback de setCategories es la lista categories
    // setCategories( cat => [ ...cat, 'Dragon Ball' ]   );
  };

  return (
    <>
      {/* Titulo */}
      <div>GifExpertApp</div>

      {/* Search */}
      <AddCategory 
        // Event from parent to child   
        // setCategories={ setCategories } 
        // Event from child to parent 
        onNewCategory={ addCategory }  
        />

      {/* Grids */}
        {categories.map((category) => (
            <GifGrid key={category} category={category} />
        ))}
    </>
  );
};
