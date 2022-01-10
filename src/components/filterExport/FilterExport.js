import React from "react";
import styles from "./FilterExport.scss";
import Button from "../buttons/Button";

function FilterExport() {

  function exportFilterSettings() {

    const temp1 = JSON.parse( localStorage.getItem( "account settings toc" ) );
    console.log( temp1 );
    localStorage.setItem( "types of cuisines", JSON.stringify( temp1 ) );

    const temp2 = JSON.parse( localStorage.getItem( "account settings toi" ) );
    console.log( temp2 );
    localStorage.setItem( "types of intolerances", JSON.stringify( temp2 ) );

    const temp3 = JSON.parse( localStorage.getItem( "account settings tod" ) );
    console.log( temp3 );
    localStorage.setItem( "types of diets", JSON.stringify( temp3 ) );

    const temp4 = JSON.parse( localStorage.getItem( "account settings tom" ) );
    console.log( temp4 );
    localStorage.setItem( "types of meals", JSON.stringify( temp4 ) );

  }

  return (

    <Button
      className={ styles["filter-button"] }
      clickHandler={ exportFilterSettings }

      label="COPY ALL SETTINGS"
      />
  );
}

export default FilterExport;