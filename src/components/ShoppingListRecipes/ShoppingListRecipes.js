// TableIngredient is shown on /favorites

import React from "react";
// import displayAmount from "../../helpers/displayAmount";
import styles from "./ShoppingListRecipes.module.scss";
import { Link } from "react-router-dom";
// import replaceUnitNames from "../../helpers/replaceUnitNames";
// import toggleShoppingList from "../toggleShoppingList/ToggleShoppingList";

function ShoppingListRecipes( { shoppingList } ) {

  return (
    <>
      { shoppingList &&
        <div className={ styles["recipe-list"] }>
          <h4>Recipes included in your shoppinglist:</h4>
          { shoppingList.map( ( recipe ) =>

            <p>
              <Link  to={ `/recipe/${ recipe[0].id }` }>{ recipe[0].title }</Link>

          </p>
          ) }
        </div>
      }
    </>
  );
}

export default ShoppingListRecipes;

