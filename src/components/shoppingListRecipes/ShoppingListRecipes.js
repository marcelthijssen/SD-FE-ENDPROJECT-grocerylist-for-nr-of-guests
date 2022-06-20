import React from "react";
import styles from "./ShoppingListRecipes.module.scss";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

/**
 * @param shoppingList
 * @returns {JSX.Element}
 * @constructor
 * list of recipes on sidebar on shoppinglist-page
 */

function ShoppingListRecipes( { shoppingList } ) {
  return (
    <>
      { shoppingList &&
        <div className={ styles["recipe-list"] }>
          <h4>Recipes included in your shoppinglist:</h4>

          { shoppingList.map( ( recipe ) =>
            <div key={ recipe[0].title }>
              <Button
                buttonStyle="recipe-link"
              >
                <Link to={ `/recipe/${ recipe[0].id }` }>{ recipe[0].title }</Link>
              </Button>
            </div>
          ) }
        </div>
      }
    </>
  );
}

export default ShoppingListRecipes;

