import React, { createContext, useEffect, useState } from "react";

export const FavCounterContext = createContext( {} );

function FavCounterContextProvider( {children} ) {
  // 5. State bouwen
  const [ counter, setCounter ] = useState();

  useEffect(()=>{
    const localSaved = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    setCounter(JSON.parse(localSaved.length));
    // console.log(localSaved.length);
  },[]);

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
    addOneTofavorite: addOne,
    subtractOneFromFavorite: subtractOne,
  };

  return (
    <FavCounterContext.Provider value={ contextData }>
      { children }
    </FavCounterContext.Provider>
  );
}

export default FavCounterContextProvider;
