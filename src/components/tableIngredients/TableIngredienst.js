// TableIngredient is shown on /favorites

import React from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "./TableIngredients.module.scss";
import replaceUnitNames from "../../helpers/replaceUnitNames";

function TableIngredients( { shoppingList } ) {
  // console.log( shoppingList );
  let ingredientTemp = [];
  let shoppingListAll = [];

  shoppingList.map( ( recipe ) => {
    recipe[0].extendedIngredients.map( ( ingredient ) => {
      // console.log( shoppingListAll );

      replaceUnitNames( ingredient );

      //IF an ingredient.id are the same AND the unit is the same then don't put in the array yet.
      if ( !shoppingListAll.some( item => item.id === ingredient.id ) || !(shoppingListAll.some( item => item.unit === ingredient.unit )) ) {
        shoppingListAll = [ ...shoppingListAll, {
          "id": ingredient.id,
          "name": ingredient.name,
          "unit": ingredient.unit,
          "amount": displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests )
        } ];

      } else {
        // add the amount to other amount if unit is equals;
        // TODO: Save duplicate ingredient
        ingredientTemp = [ ...ingredientTemp, {
          "id": ingredient.id,
          "name": ingredient.name,
          "unit": ingredient.unit,
          "amount": displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests )
        } ];
        const ingredientIndex = shoppingListAll.findIndex( x => x.id === ingredientTemp[0].id );
        // console.log( ingredientIndex );
        // console.log( parseFloat(shoppingListAll[ingredientIndex].amount) );
        // console.log( parseFloat(ingredientTemp[0].amount) );
        shoppingListAll[ingredientIndex].amount = parseFloat(ingredientTemp[0].amount) + parseFloat(shoppingListAll[ingredientIndex].amount);
      }
    } );
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
                  <td> { ingredient.id } </td>
                  <td> { ingredient.amount } </td>
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

