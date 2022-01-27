// TableIngredient is shown on /favorites

import React from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "./TableIngredients.module.scss";

function TableIngredients( { shoppingList } ) {
  console.log( shoppingList );

    const shoppingListAll = [];
    shoppingList.map( ( recipe ) => {
      recipe[0].extendedIngredients.map( ( ingredient ) => {
        shoppingListAll.push( {
          "id": ingredient.id,
          "name": ingredient.name,
          "unit": ingredient.unit,
          "amount": displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests )
        } );
      } );
      console.log( shoppingListAll );
    } );

    return (
      <>
        { shoppingListAll &&
          <div>
            <h2>All ingredients for your shoppinglist:</h2>
            <div className={ styles["recipe-ingredients-info"] }>
              <table>
                { shoppingListAll.map( ( ingredient ) =>
                  <tbody key={ ingredient.id }>
                  <tr>
                    {/*Calculating amount adjusted from amount of guests input */ }
                    <td> { ingredient.amount  } </td>
                    <td> { ingredient.unit } </td>
                    <td> { ingredient.name }</td>
                  </tr>
                  </tbody>
                ) }
              </table>
            </div>
          </div>
        }
      </>
    );
  }

export default TableIngredients;

