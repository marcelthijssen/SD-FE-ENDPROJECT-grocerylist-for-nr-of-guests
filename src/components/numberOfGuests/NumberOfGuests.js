import React from "react";
import styles from "./NumberOfGuests.module.scss";

function NumberOfGuests( { placeholder, children, value, onChange, name } ) {

  return (
    <>
      <div className={ styles["number-of-guests"] }>
        <label htmlFor={ `${ name }-field` }/>
        <input
          name="number-of-guests"
          value={ value }
          type="number"
          placeholder={ placeholder }
          onChange={ onChange }
          min="1"
        >
          { children }
        </input>
      </div>
    </>
  );
}

export default NumberOfGuests;