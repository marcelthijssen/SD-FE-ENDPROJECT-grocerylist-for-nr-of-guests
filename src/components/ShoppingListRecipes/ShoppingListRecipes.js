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
            <p >
              <Link to={ `/recipe/${ recipe[0].id }` } key={recipe[0].title}>{ recipe[0].title }</Link>
          </p>
          ) }
        </div>
      }
    </>
  );
}

export default ShoppingListRecipes;

