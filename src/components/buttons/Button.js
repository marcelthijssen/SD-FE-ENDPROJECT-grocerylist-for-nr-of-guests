import React from "react";
import styles from "./Button.module.scss";

function Button( { children, inputType, clickHandler, name, label,disabled, buttonStyle } ) {

  return (
  <button
      type={ inputType }
      onClick={ clickHandler }
      name={ name }
      label={ label }
      disabled={disabled}
      className={styles[`${buttonStyle}`]}
    >
      { label }{ children }
    </button>
  );
}

export default Button;