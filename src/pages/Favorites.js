import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import RecipeFavoriteCard from "../components/recipeFavoriteCard/RecipeFavoriteCard";
import styles from "./Favorites.module.scss";
import ShoppingListRecipes from "../components/shoppingListRecipes/ShoppingListRecipes";

function Favorites() {

  const [ shoppingList, setShoppingList ] = useState( [] );
  const favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
  const history = useHistory();

  useEffect( () => {
    if ( favoriteToSave === null || favoriteToSave.length === 0 ) {
      history.push( "/search" );
    }
  }, [ favoriteToSave ] );

  useEffect( () => {
    setShoppingList( JSON.parse( localStorage.getItem( "shoppinglist" ) ) );
  }, [] );

  return (
    <>
      { favoriteToSave &&
        <div className={ styles["content-container"] }>
          <PageHeader title="Favorites" />

          <div id={ styles["grid"] }>

            <div id={ styles["grid-sidebar"] }>
              <ShoppingListRecipes shoppingList={ shoppingList }/>
            </div>

            <div id={ styles["grid-main"] }>
              { favoriteToSave.map( ( favRecipesId ) =>
                <div key={ favRecipesId }>
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
