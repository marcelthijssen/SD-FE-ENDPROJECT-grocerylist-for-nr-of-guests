import React, { useEffect } from "react";
import styles from "./numberOfFavorites.module.scss";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";

function NumberOfFavorites() {

  const favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );
  const history = useHistory();

  useEffect( () => {

  } );
  return (
    <>
      { favoriteToSave &&
        <div className={ styles["favorites"] }>
          <div className={ styles["favorites-text"] }>
            <p>favorite recipes</p>
          </div>
          <Button
            type="button"
            buttonStyle="favorites"
            disabled={ favoriteToSave.length === 0 }
            clickHandler={ () => history.push( "/favorites" ) }
            label={ favoriteToSave.length }>
          </Button>
        </div>
      }
    </>
  );
}

export default NumberOfFavorites;
