import React, { useState, useEffect } from "react";
import { useToggle } from "rooks";
import styles from "./Filters.module.scss";
import Button from "../buttons/Button";
import capitalize from "../../helpers/capitalize";

function Filters( { typeFilter, name } ) {

  const [ isChecked, toggleIsChecked ] = useToggle( false );
  const [ nameFilter, setNameFilter ] = useState( [] );

  useEffect( () => {
    const filter = JSON.parse( localStorage.getItem( name ) );
    if ( filter ) setNameFilter( filter );
    if ( nameFilter.includes( filter ) ) {
      toggleIsChecked( isChecked );
    }
  }, [ name ] );

  function handleChange( e ) {
    const { checked, value } = e.currentTarget;

    setNameFilter(
      prev => checked
        ? [ ...prev, value ]
        : prev.filter( val => val !== value )
    );
  }

  //Remove all selected
  function clearSelected( e ) {
    const { checked, value } = e.currentTarget;
    setNameFilter(
      prev => checked
        ? [ ...prev, value ]
        : prev.filter( val => val === value )
    );
  }

  useEffect( () => {
    localStorage.setItem( name, JSON.stringify( nameFilter ) );
  }, [ name, nameFilter ] );

  return (
    <>
      <div className={ styles["filter-container"] }>

        <ul className={ styles["filter-checkboxes"] }>
          { typeFilter.map( item => (
            <div className={ styles["filter-item"] } key={ item }>
              <li>

                <input
                  className={ styles["filter-input"] }
                  value={ item }
                  type="checkbox"
                  checked={ nameFilter.some( val => val === item ) }
                  onChange={ handleChange }
                />
                <label>{ capitalize( item ) }</label>
              </li>

            </div>
          ) ) }

        </ul>

        <Button
          buttonStyle="reset-button"
          inputType="submit"
          label="reset"
          name="reset"
          clickHandler={ clearSelected }
        />

      </div>
    </>
  );
}

export default Filters;