import React from "react";
import styles from "./NumberOfGuests.module.scss";

function NumberOfGuests( { placeholder, children, value, inputType, onChange, name, min } ) {

  return (
    <>
      <div className={styles["number-of-guests"]}>
        <label htmlFor={ `${ name }-field` }/>
        <input
          value={ value }
          type={ inputType }
          placeholder={ placeholder }
          onChange={ onChange }
          min={ min }
        >
          { children }
        </input>
      </div>
    </>
  );
}

export default NumberOfGuests;