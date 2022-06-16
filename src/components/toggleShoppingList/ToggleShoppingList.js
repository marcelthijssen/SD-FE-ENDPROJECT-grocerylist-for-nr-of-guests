import React, { useEffect } from "react";
import { useToggle } from "rooks";
import Button from "../buttons/Button";
import shoppingList from "../../pages/ShoppingList";

function ToggleShoppingList( { recipe, numberOfGuests } ) {

  const [ inShoppingList, setInShoppingList ] = useToggle( false );
  // check if saved in localStorage, if so show icon
  useEffect( () => {
    let shoppinglist = ( localStorage.getItem( "shoppinglist" ) );
    if ( shoppinglist === null || shoppinglist.length === 0 ) shoppinglist = [];
      if ( shoppinglist.includes( recipe.id ) ) {
        setInShoppingList( inShoppingList );
    }
  }, [] );

  function toggle() {
    if ( !inShoppingList ) {
      setInShoppingList( inShoppingList );
      addToShoppinglist();
    } else {
      setInShoppingList( !inShoppingList );
      removeFromShoppinglist();
    }
  }

  function addToShoppinglist() {
    let shoppinglist = JSON.parse( localStorage.getItem( "shoppinglist" ) );
    recipe.servings = parseFloat( numberOfGuests );
    shoppinglist.push( recipe );
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