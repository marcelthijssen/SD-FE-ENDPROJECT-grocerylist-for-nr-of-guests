import React, { useEffect } from "react";
import { useToggle } from "rooks";
import Button from "../buttons/Button";

function ToggleShoppingList( { recipe, numberOfGuests } ) {

  const [ inShoppingList, toggleInShoppingList ] = useToggle( false );

  // check if saved in localStorage, if so show icon
  useEffect( () => {
    const shoppinglist = ( localStorage.getItem( "shoppinglist" ) );
    if ( shoppinglist === null || shoppinglist.length === 0 ) {
    } else {
      if ( shoppinglist.includes( recipe.id ) ) {
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
    const fullRecipeInfo = [ recipe, { "numberofguests": numberOfGuests }, ];
    shoppinglist.push( fullRecipeInfo );
    localStorage.setItem( "shoppinglist", JSON.stringify( shoppinglist ) );
  }

  function removeFromShoppinglist() {
    let shoppinglist = JSON.parse( localStorage.getItem( "shoppinglist" ) );
    const index = shoppinglist.indexOf( recipe.id );
    shoppinglist.splice( index, 1 );
    localStorage.setItem( "shoppinglist", JSON.stringify( shoppinglist ) );
  }

  return (

    <Button
      buttonStyle="add-button"
      clickHandler={ toggle }>
      <div>
        {
          inShoppingList ?
            <div>❌ Remove from shoppinglist</div>
            :
            <div>✅ Add to shoppinglist</div>
        }
      </div>
    </Button>

  );
}

export default ToggleShoppingList;