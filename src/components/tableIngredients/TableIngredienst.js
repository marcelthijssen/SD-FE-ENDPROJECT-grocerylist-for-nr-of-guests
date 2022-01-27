// TableIngredient is shown on /favorites

import React, { useState } from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "./TableIngredients.module.scss";

const arr = [{a: 'b'}]
console.log(arr.some(item => item.a === 'b'))

function TableIngredients( { shoppingList } ) {
  console.log( shoppingList );
  let shoppingListAll=[];
  shoppingList.map( ( recipe ) => {
    recipe[0].extendedIngredients.map( ( ingredient ) => {
      console.log( shoppingListAll );
      //Finding the same ingredient with item.id equals ingredient.id BUT NOT when units are different
      if ( !shoppingListAll.some(item => item.id === ingredient.id && shoppingListAll.some(item => item === ingredient.unit)) ) {
        shoppingListAll = [ ...shoppingListAll, {
          "id": ingredient.id,
          "name": ingredient.name,
          "unit": ingredient.unit,
          "amount": displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests )
        } ];
      } else {
                // add amount to other amount if unit is equals;
      }
    } );
    console.log( shoppingListAll );
  } );

  // loop array to add to new array
  //when allready in newarray just to amount

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

