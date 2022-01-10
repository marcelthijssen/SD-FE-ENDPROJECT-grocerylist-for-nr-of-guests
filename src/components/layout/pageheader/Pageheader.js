import React, { useEffect } from "react";
import styles from "./Pageheader.module.scss";
import NumberOfFavorites from "../../numberOfFavorites/numberOfFavorites";

function PageHeader( { title, total } ) {
  const favoriteToSave = JSON.parse( localStorage.getItem( "recipes" ) );

  useEffect( () => {

  }, [ favoriteToSave ] );

  return (
    <>
      <div id={ styles["grid"] }>
          <div id={ styles["grid-pageheader"] } className={ styles["pageheader"] }>

            <div className={ styles["page-title"] }>{ title }</div>

            <span className={ styles["title-totalnumber"] }>  { total }</span>

            <div className={ styles["number-of-favorites"] }>
              <NumberOfFavorites id={ styles["grid-accountinfo"] }/>
            </div>
          </div>
        </div>
    </>
  );
}

export default PageHeader;
