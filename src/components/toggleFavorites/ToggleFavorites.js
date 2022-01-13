import React, { useEffect, useState } from "react";
import styles from "./ToggleFavorites.module.scss";
import { useToggle } from "rooks";

// import favorites from "../../pages/Favorites";

function ToggleFavorites( { recipe } ) {
  let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );

  let [ countFavorites, setCountFavorites ] = useState(favoriteToSave.length);
  const [ isFavorite, setIsFavorite ] = useToggle( false );
  // check if saved in localStorage, if so isFavorite and display 'red hart'
  useEffect( () => {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    if ( favoriteToSave === null ) favoriteToSave = [];
    if ( favoriteToSave.includes( recipe ) ) {
      setIsFavorite( isFavorite );
      setCountFavorites( favoriteToSave.length );
      console.log( countFavorites );
    }
  }, [] );

  // toggle favorite and trigger function
  function toggle() {
    if ( !isFavorite ) {
      setIsFavorite( isFavorite );
      addToFavorite();
    } else {
      setIsFavorite( !isFavorite );
      removeFromFavorite();
    }
  }

  // ADD to localStorage if set to isFavorite
  function addToFavorite() {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    if ( favoriteToSave === null ) favoriteToSave = [];
    favoriteToSave.push( recipe );
    localStorage.setItem( "favorite recipes", JSON.stringify( favoriteToSave ) );
    console.log( favoriteToSave.length );
  }

  // REMOVE from localStorage if set to !isFavorite
  function removeFromFavorite() {
    let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
    favoriteToSave = favoriteToSave.filter( favoriteToSave => favoriteToSave !== recipe );
    // remove accidently added "null" from array during development
    favoriteToSave = favoriteToSave.filter( favoriteToSave => favoriteToSave !== null );
    localStorage.setItem( "favorite recipes", JSON.stringify( favoriteToSave ) );
    console.log( favoriteToSave.length );
  }

  return (
    <>
      { recipe &&
        <div className={ styles["toggle-favorite"] }>
          <h4 onClick={ toggle }>

            <div className={ styles["favorite-icon"] } style={ { cursor: "pointer" } }>
              { isFavorite ? <span>
                  <div className={ styles["tooltip"] }>Remove from your favorites</div>❤️
              </span>
                :
                <span>
                  <div className={ styles["tooltip"] }>Add to your favorites</div>🤍
                </span> }
            </div>
          </h4>
        </div>
      }
    </>
  );
}

export default ToggleFavorites;