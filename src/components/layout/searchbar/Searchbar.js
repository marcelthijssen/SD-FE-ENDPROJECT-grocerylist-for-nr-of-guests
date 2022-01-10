import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Searchbar.module.scss";
import "../grid.module.css";
import Button from "../../buttons/Button";

function Searchbar( { setRecipeSearchHandler } ) {

  const [ query, setQuery ] = useState( localStorage.getItem( "query" )||"" );

  const [ queryError, setQueryError ] = useState( false );
  const history = useHistory();

  function onFormSubmit( e ) {
    e.preventDefault();
    setRecipeSearchHandler( query );
    localStorage.setItem( "query", query );
    history.push( "/search" );
  }

  function queryHandler( e ) {
    let item = e.target.value;
    if ( item.length < 3 ) {
      setQueryError( true );
    } else {
      setQueryError( false );
    }
    console.warn( e.target.value );
  }

  // console.log(query.length);
  return (
    <>
      <div id="grid">
        <form
          id="grid-searchbar"
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
                <span className={ styles["error"] }>Please insert a minimum of 3 characters</span>
                :
                null
            }
            {
              query.length<3 ?
                <Button
                  styleType="searchbutton"
                  className="searchbutton"
                  type="submit"
                  disabled="disabled"
                  label="Search"
                  />
                :
                <Button
                  styleType="searchbutton"
                  className="searchbutton"
                  type="submit"
                  label="Search"
                />
            }
          </div>
        </form>
      </div>

    </>
  );
}

export default Searchbar;
