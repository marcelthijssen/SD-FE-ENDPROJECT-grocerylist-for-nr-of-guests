import React from "react";
import styles from "./Button.module.scss";

function Button( { children, inputType, clickHandler, name, label, buttonStyle, isDisabled } ) {

  return (
    <button
      type={ inputType }
      onClick= { clickHandler }
      name={ name }
      label={ label }
      className={ styles[`${ buttonStyle }`] }
      disabled={ isDisabled }
    >
      { label }{ children }
    </button>
  );
}

export default Button;

