import React, { useContext, useEffect } from "react";
import styles from "./ToggleFavorites.module.scss";
import { useToggle } from "rooks";
import { FavCounterContext } from "../../context/FavContextProvider";

function ToggleFavorites( { recipe } ) {

  const { addOneToFavorite, subtractOneFromFavorite } = useContext( FavCounterContext );
  const [ isFavorite, setIsFavorite ] = useToggle( false );

  useEffect( () => {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    if ( favoriteToSave === null ) favoriteToSave = [];
    // TODO: check if indexOf works in stead of favoriteToSave.includes(recipe)
    if ( favoriteToSave.includes( recipe ) ) {
      setIsFavorite( isFavorite );
    }
  }, [] );


  function toggle() {
    if ( !isFavorite ) {
      setIsFavorite( isFavorite );
      addToFavorite();
      addOneToFavorite();
    } else {
      setIsFavorite( !isFavorite );
      removeFromFavorite();
      subtractOneFromFavorite();
    }
  }

  function addToFavorite() {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    // if ( favoriteToSave === null ) favoriteToSave = [];
    favoriteToSave.push( recipe );
    localStorage.setItem( "favorite recipes", JSON.stringify( favoriteToSave ) );
  }

  function removeFromFavorite() {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    favoriteToSave = favoriteToSave.filter( favoriteToSave => favoriteToSave !== recipe );
    // remove accidentally added "null" from array during development
    favoriteToSave = favoriteToSave.filter( favoriteToSave => favoriteToSave !== null );
    localStorage.setItem( "favorite recipes", JSON.stringify( favoriteToSave ) );
  }
  console.log(recipe);

  return (
    <>
      { recipe &&
        <div className={ styles["toggle-favorite"] }>
          <h4 onClick={ toggle }>

            <div className={ styles["favorite-icon"] } style={ { cursor: "pointer" } }>
              { isFavorite ?
                <span>
                  <div className={ styles["tooltip"] }>Remove from your favorites</div>❤️
                </span>
                :
                <span>
                  <div className={ styles["tooltip"] }>Add to your favorites</div>🤍
                </span>
              }
            </div>
          </h4>
        </div>
      }
    </>
  );
}

export default ToggleFavorites;