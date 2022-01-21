import React, { useEffect } from "react";
import { useToggle } from "rooks";
import Button from "../buttons/Button";

function ToggleShoppingList( { recipe, numberOfGuests } ) {

  // TODO: recipe in shoppinglist also shown in favorites!
  const [ inShoppingList, toggleInShoppingList ] = useToggle( false );

  // check if saved in localStorage, if so show icon
  useEffect( () => {
    const shoppinglist = ( localStorage.getItem( "shoppinglist" ) );
    if ( shoppinglist === null || shoppinglist.length === 0 ) {
    } else {
      if ( shoppinglist.includes(recipe.id)) {
        toggleInShoppingList( inShoppingList );
          }
    }
  }, [] );

  // toggle favorite and trigger function
  function toggle() {
    if ( !inShoppingList ) {
      toggleInShoppingList( inShoppingList );
      addToShoppinglist();
    } else {
      toggleInShoppingList( !inShoppingList );
      removeFromShoppinglist();
    }
  }

  function addToShoppinglist() {
    let shoppinglist = JSON.parse( localStorage.getItem( "shoppinglist" ) );

    // add numberOfGuest and recipe in an temp array (fullrecipeInfo)
    const fullRecipeInfo =  [ recipe, { "numberofguests": numberOfGuests }, ] ;
    console.log( { fullRecipeInfo } );

    // add fullRecipeInfo is to the complete shoppinglist.
    shoppinglist.push( fullRecipeInfo );
    console.log( shoppinglist );
    localStorage.setItem( "shoppinglist", JSON.stringify( shoppinglist ) );
  }

  function removeFromShoppinglist() {
    let shoppinglist = JSON.parse( localStorage.getItem( "shoppinglist" ) );
    const index = shoppinglist.indexOf( recipe.id );
    shoppinglist.splice( index, 1 );
    localStorage.setItem( "shoppinglist", JSON.stringify( shoppinglist ) );
  }
  // todo: change icons
  return (
    <Button
      buttonStyle="add-button"
      clickHandler={ toggle }>
        <div>
          { inShoppingList ? <div>❌ Remove from shoppinglist</div> : <div>✅ Add to shoppinglist</div> }

        </div>
    </Button>

  );
}

export default ToggleShoppingList;