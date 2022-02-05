import React, { useEffect } from "react";
import styles from "./numberOfFavorites.module.scss";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";

function NumberOfFavorites( { counter } ) {

  const history = useHistory();

  useEffect( () => {

  } );
  return (
    <>
      { counter &&
        <div className={ styles["favorites"] }>
          <span className={ styles["favorites-text"] }>
            Favorite recipes
          </span>
          <Button
            type="button"
            buttonStyle="favorite-button"
            disabled={ counter.length === 0 }
            clickHandler={ () => history.push( "/favorites" ) }
            label={ counter }>
          </Button>
        </div>
      }
    </>
  );
}

export default NumberOfFavorites;
