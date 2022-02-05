import React from "react";
import Button from "../buttons/Button";
import styles from "./SharingButtons.module.scss";

function SharingButtons() {

  function printThisPage() {
    window.print();
  }

  function shareThisPage() {
    console.log( "shareThisButton" );
  }

  function mailThisRecipe() {


  }

  return (
    <>
      <div className={ styles["buttons-container"] }>
        <Button
          buttonStyle="print"
          label="Print this page"
          clickHandler={ printThisPage }/>

        <Button
          buttonStyle="share"
          label="Share this recipe"
          clickHandler={ shareThisPage }/>

        <Button
          buttonStyle="add-button"
          label="Print this page"
          clickHandler={ mailThisRecipe }/>

      </div>
    </>
  );
}

export default SharingButtons;
