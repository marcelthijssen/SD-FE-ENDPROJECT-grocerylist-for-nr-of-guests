import React from "react";
import styles from "./InputElement.module.scss";

function InputElement( { errors, register, name, label, value, inputType, validationRules, placeholder } ) {

  return (
    <>
      <label htmlFor={ `${ name }-field` }
             className={ styles["label"] } >
        { label }
      </label>

      <div>
          <input
            className={ styles["input"] }
            value= {value}
            type={ inputType }
            placeholder={ placeholder }
            id={ `${ name }-field` }
            { ...register( name, validationRules ) }

          />
          { errors[name] && <p className={ styles["error-message"] }>{ errors[name].message }</p> }
        </div>
    </>
  );
}

export default InputElement;