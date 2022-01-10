import React from "react";
import styles from "./Headerimage.module.scss";

function HeaderImage() {

  return (
    <>
      <div id={ styles["grid"] }>
        <div id={ styles["grid-header"] }>

            <div className={ styles["pageheader-text"] }>Enjoying a meal with friends</div>
        </div>
      </div>
    </>
  );
}

export default HeaderImage;