import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Searchbar.module.scss";
// import "../grid.module.css";
import Button from "../../buttons/Button";

function Searchbar( { setRecipeSearchHandler } ) {

  const [ query, setQuery ] = useState( localStorage.getItem( "query" ) || "" );
  const [ isDisabled, setIsDisabled ] = useState( false );
  const [ queryError, setQueryError ] = useState( false );
  const history = useHistory();

  // save data to localstorage "newsletter", disable button en enable after 1 sec
  function onFormSubmit( e ) {
    e.preventDefault();
    setRecipeSearchHandler( query );
    setIsDisabled( true );
    // console.log( query );
    setTimeout( () => {
      setIsDisabled( false );
    }, 1000 );
    localStorage.setItem( "query", query );
    // redirect to search
    history.push( "/search" );

  }

  function queryHandler( e ) {
    let item = e.target.value;
    if ( item.length < 3 ) {
      setQueryError( true );
    } else {
      setQueryError( false );
    }
    // console.warn( e.target.value );
  }

  return (
    <>
      <div id={ styles["grid"] }>
        <div id={ styles["pageheader"] } className={ styles["pageheader"] }>
          <div className={ styles["pageheader-text"] }>
            <div>Enjoying a meal with friends</div>
          </div>
          <form
            className={ styles["searchbar"] }
            onSubmit={ onFormSubmit }>

            <div className={ styles["search-input"] }>
              <input
                type="text"
                name="search"
                value={ query }
                placeholder={ query }
                onChange={ e => {
                  setQuery( e.target.value );
                  queryHandler( e );
                } }
              />
              {
                queryError ?
                  <span className={ styles["error-message"] }>Please insert a minimum of 3 characters</span>
                  :
                  null
              }
              {
                query.length < 3 ?
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
