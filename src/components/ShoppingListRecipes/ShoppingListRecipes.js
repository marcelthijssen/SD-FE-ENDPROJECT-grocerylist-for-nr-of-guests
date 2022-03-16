import React from "react";
import styles from "./ShoppingListRecipes.module.scss";
import { Link } from "react-router-dom";

function ShoppingListRecipes( { shoppingList } ) {

  return (
    <>
      { shoppingList &&
        <div className={ styles["recipe-list"] }>
          <h4>Recipes included in your shoppinglist:</h4>

          { shoppingList.map( ( recipe ) =>
            <p key={ recipe[0].title }>
              <Link to={ `/recipe/${ recipe[0].id }` } >{ recipe[0].title }</Link>
            </p>
          ) }
        </div>
      }
    </>
  );
}

export default ShoppingListRecipes;

