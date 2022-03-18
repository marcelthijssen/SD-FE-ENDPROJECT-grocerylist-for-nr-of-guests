import React from "react";
import styles from "./ShoppingListRecipes.module.scss";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

function ShoppingListRecipes( { shoppingList } ) {

  return (
    <>
      { shoppingList &&
        <div className={ styles["recipe-list"] }>
          <h4>Recipes included in your shoppinglist:</h4>

          { shoppingList.map( ( recipe ) =>
            <p><Button key={ recipe[0].title }
                    buttonStyle="recipe-link"
            >
              <Link to={ `/recipe/${ recipe[0].id }` } >{ recipe[0].title }</Link>
            </Button>
            </p>
          ) }
        </div>
      }
    </>
  );
}

export default ShoppingListRecipes;

