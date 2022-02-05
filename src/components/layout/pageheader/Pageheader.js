import React, { useEffect, useContext } from "react";
import styles from "./Pageheader.module.scss";
import NumberOfFavorites from "../../numberOfFavorites/numberOfFavorites";
import { FavCounterContext } from "../../../context/FavContextProvider";

function PageHeader( { title, total } ) {

  const favoriteToSave = JSON.parse( localStorage.getItem( "recipes" ) );
  const { counter } = useContext( FavCounterContext );

  useEffect( () => {

  }, [ favoriteToSave ] );

  return (
    <>
      <div id={ styles["grid"] }>
          <div id={ styles["grid-pageheader"] } className={ styles["pageheader"] }>

            <div className={ styles["page-title"] }>{ title }</div>

            <span className={ styles["title-totalnumber"] }>  { total }</span>

            <div className={ styles["number-of-favorites"] }>
              <NumberOfFavorites id={ styles["grid-accountinfo"]} counter={counter} />
            </div>

          </div>
        </div>
    </>
  );
}

export default PageHeader;
