import React from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "../recipecard/RecipeCard.module.scss";

function RecipeIngredientsList( { recipe, numberOfGuests } ) {
  console.log( recipe );
  return (
    <>
      { recipe && numberOfGuests &&

        <div>
          <h2>Ingredients:</h2>
          <div className={ styles["recipe-ingredients-info"] }>
            <table>
              { recipe.extendedIngredients.map( ( ingredient ) =>
                <tbody key={ ingredient.id }>
                <tr>
                  {/*Calculating amount adjusted from amount of guests input */ }
                  <td> { displayAmount( (ingredient.amount / recipe.servings) * numberOfGuests ) } </td>
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

export default RecipeIngredientsList;