import React, { createContext, useEffect, useState } from "react";

export const FavCounterContext = createContext( {} );

function FavCounterContextProvider( { children } ) {
  // 5. State bouwen
  const [ counter, setCounter ] = useState();

  useEffect( () => {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    if ( favoriteToSave === null || !favoriteToSave ) favoriteToSave = [];
    setCounter( JSON.parse( favoriteToSave.length ) );
    // console.log(localSaved.length);
  }, [] );

  // 6. Functies maken
  function addOne() {
    setCounter( counter + 1 );
    // console.log(counter);
  }

  function subtractOne() {
    setCounter( counter - 1 );
    // console.log(counter);
  }

  // 4. Data maken die voor iedereen beschikbaar is
  const contextData = {
    counter: counter,
    addOneToFavorite: addOne,
    subtractOneFromFavorite: subtractOne,
  };

  return (
    <FavCounterContext.Provider value={ contextData }>
      { children }
    </FavCounterContext.Provider>
  );
}

export default FavCounterContextProvider;
