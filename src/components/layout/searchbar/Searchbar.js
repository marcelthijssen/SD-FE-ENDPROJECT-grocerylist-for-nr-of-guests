import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Searchbar.module.scss";
import Button from "../../buttons/Button";
import InputElement from "../../InputField/InputElement";
import { useForm } from "react-hook-form";

function Searchbar( { setRecipeSearchHandler } ) {

  const [ query, setQuery ] = useState( localStorage.getItem( "query" ) || "" );
  const [ isDisabled, setIsDisabled ] = useState( false );
  const history = useHistory();

  const { register, formState: { errors, isValid }, handleSubmit } = useForm( {
    mode: "onBlur",
  } );

  function onFormSubmit( data ) {
    console.log( data.search );
    setQuery( data.search );
    localStorage.setItem( "query", data.search );
    setRecipeSearchHandler( data.search );
    history.push( "/search" );
  }

  return (
    <>
      <div id={ styles["grid"] }>
        <div id={ styles["pageheader"] } className={ styles["pageheader"] }>
          <div className={ styles["pageheader-text"] }>
            Enjoying a meal with friends
          </div>

          <form
            className={ styles["searchbar"] }
            onSubmit={ handleSubmit( onFormSubmit ) }>

            <div className={ styles["searchbar-input"] }>
              <InputElement
                errors={ errors }
                register={ register }
                type="text"
                name="search"
                value={ query }
                placeholder={ query }
                validationRules={ {
                  MinLength: {
                    value: 3,
                    message: "Please enter a minimum of 3 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/,
                    message: "Minimum of 3 characters,no numbers"
                  }
                } }
              />
              { !isValid
                ?
                <Button
                  inputType="submit"
                  buttonStyle="recipe-search-button"
                  disabled="disabled"
                  label="Search"
                />
                :
                <Button
                  inputType="submit"
                  buttonStyle="recipe-search-button"
                  label="Search"
                  isDisabled={ isDisabled }
                />
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Searchbar;