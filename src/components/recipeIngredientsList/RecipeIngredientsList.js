import React from "react";
import displayAmount from "../../helpers/displayAmount";
import styles from "../recipecard/RecipeCard.module.scss";
import replaceUnitNames from "../../helpers/replaceUnitNames";

function RecipeIngredientsList( { recipe, numberOfGuests } ) {
  // console.log( recipe );

  return (
    <>

      { recipe && numberOfGuests &&

        <div>
          <h3>Ingredients</h3>

          <div className={ styles["recipe-ingredients-info"] }>
            <table>
              { recipe.extendedIngredients.map( ( ingredient ) =>
                <tbody key={ ingredient.id }>

                {/*{ replaceUnitNames( ingredient ) }*/}

                <tr>
                  {/*Calculating amount adjusted from amount of guests input */ }
                  <td> { displayAmount( (ingredient.amount / recipe.servings) * numberOfGuests ) } </td>
                  <td> { replaceUnitNames(ingredient.unit) } </td>
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
