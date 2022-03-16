import React, { useState, useEffect } from "react";
import { useToggle } from "rooks";
import styles from "./Filters.module.scss";
import Button from "../buttons/Button";

function Filters( { typeFilter, name } ) {

  const [ isChecked, toggleIsChecked ] = useToggle( false );
  const [ nameFilter, setNameFilter ] = useState( [] );

  // checking if saved in localStorage, if so checkbox on
  useEffect( () => {
    const filter = JSON.parse( localStorage.getItem( name ) );
    if ( filter ) setNameFilter( filter );
    if ( nameFilter.includes( filter ) ) {
      toggleIsChecked( isChecked );
    }
  }, [] );

  function handleChange( e ) {
    const { checked, value } = e.currentTarget;

    setNameFilter(
      prev => checked
        ? [ ...prev, value ]
        : prev.filter( val => val !== value )
    );
    // console.log("clicked")

  }

  //Remove all selected
  function clearSelected( e ) {
    const { checked, value } = e.currentTarget;
    // console.log("clicked clearselect");
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
                <label>{ item }</label>
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