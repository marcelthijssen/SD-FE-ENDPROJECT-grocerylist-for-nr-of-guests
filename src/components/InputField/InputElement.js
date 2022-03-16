import React from "react";
import styles from "./InputElement.module.scss";

function InputElement( { errors, register, name, label, value, inputType, validationRules, placeholder, onChange } ) {

  return (
    <>
      <label htmlFor={ `${ name }-field` }
             className={ styles["label"] }>
        { label }
      </label>

      <div className={ styles["form-field"] }>
        <input
          className={ styles["input-field"] }
          value={ value }
          type={ inputType }
          placeholder={ placeholder }
          id={ `${ name }-field` }
          { ...register( name, validationRules, onChange ) }
        />
        { errors[name] && <p className={ styles["error-message"] }>{ errors[name].message }</p> }
      </div>
    </>
  );
}

export default InputElement;