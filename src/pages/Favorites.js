import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import RecipeFavoriteCard from "../components/recipeFavoriteCard/RecipeFavoriteCard";
import styles from "./Favorites.module.scss";
import { FavCounterContext } from "../context/FavContextProvider";

function Favorites() {
  const { counter } = useContext( FavCounterContext );

  const favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
  const history = useHistory();

  //
  useEffect( () => {
    if ( favoriteToSave === null || favoriteToSave.length === 0 ) {
      history.push( "/search" );
    }
  }, [ favoriteToSave ] );

  return (
    <>
      { favoriteToSave &&
        <div className={ styles["content-container"] }>
          <PageHeader title="Favorites" counter={ counter }/>
          <div id={ styles["grid"] }>
            <div id={ styles["grid-main"] }>
              { favoriteToSave.map( ( favRecipesId ) =>
                <div>
                  {
                    <RecipeFavoriteCard favRecipesId={ favRecipesId }/>

                  }
                </div>
              ) }
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Favorites;
