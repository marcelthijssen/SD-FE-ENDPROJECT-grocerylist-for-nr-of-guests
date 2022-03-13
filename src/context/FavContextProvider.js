import React, { createContext, useEffect, useState } from "react";

export const FavCounterContext = createContext( {} );

function FavCounterContextProvider( { children } ) {
  // JEST __test__
  // module.exports = { addOneToFavorite: addOneToFavorite, };

  const [ counter, setCounter ] = useState();

  useEffect( () => {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    if ( favoriteToSave === null || !favoriteToSave ) favoriteToSave = [];
    setCounter( JSON.parse( favoriteToSave.length ) );
  }, [] );

  function addOneToFavorite() {
    setCounter( counter + 1 );
  }

  function subtractOneFromFavorite() {
    setCounter( counter - 1 );
  }

  const contextData = {
    counter: counter,
    addOneToFavorite: addOneToFavorite,
    subtractOneFromFavorite: subtractOneFromFavorite,
  };

  return (
    <FavCounterContext.Provider value={ contextData }>
      { children }
    </FavCounterContext.Provider>
  );
}

export default FavCounterContextProvider;
