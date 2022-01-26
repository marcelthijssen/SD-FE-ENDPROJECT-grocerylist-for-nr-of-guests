// TableIngredient is shown on /favorites

import React from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "./TableIngredients.module.scss";

function TableIngredients( { shoppingList } ) {
  console.log( shoppingList );

    const shoppingArray = [];
    shoppingList.map( ( recipe ) => {
      recipe[0].extendedIngredients.map( ( ingredient ) => {
        shoppingArray.push( {
          "id": ingredient.id,
          "name": ingredient.name,
          "unit": ingredient.unit,
          "amount": displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests )
        } );
        console.log( shoppingArray );

      } );
    } );

    return (
      <>
        { shoppingList &&
          <div>
            {
              shoppingList.map( ( recipe ) =>
                <div>
                  <h3>{ recipe[0].title } for { recipe[1].numberofguests } guests</h3>

                  <table key={ recipe.id } className={ styles["table-style"] }>

                    <tr className={ styles["table-row1"] }>
                      <th>amount</th>
                      <th>unit</th>
                      <th>Ingredient</th>
                    </tr>

                    { recipe[0].extendedIngredients.map( ( ingredient ) =>
                      <tbody>
                      <tr>
                        <td
                          className={ styles["table-row2"] }> { displayAmount( (ingredient.amount / recipe[0].servings) * recipe[1].numberofguests ) } </td>
                        <td> { ingredient.unit }</td>
                        <td>{ ingredient.name } </td>

                      </tr>
                      </tbody>
                    ) }
                  </table>
                </div>
              )
            }
          </div>
        }
      </>
    );
  }

export default TableIngredients;

