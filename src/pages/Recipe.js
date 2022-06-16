import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.module.scss";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import axios from "axios";
import ToggleFavorites from "../components/toggleFavorites/ToggleFavorites";
import RecipeIcons from "../components/recipeIcons/RecipeIcons";
import RecipeIngredientsList from "../components/recipeIngredientsList/RecipeIngredientsList";
import NumberOfGuests from "../components/numberOfGuests/NumberOfGuests";
import Button from "../components/buttons/Button";
import ToggleShoppingList from "../components/toggleShoppingList/ToggleShoppingList";
import styles from "./Recipe.module.scss";

function Recipe() {

  const source = axios.CancelToken.source();

  const { id } = useParams();
  const [ recipe, setRecipe ] = useState( [] );
  const [ numberOfGuests, setNumberOfGuests ] = useState("");

  // cancel request if page premature closes
  useEffect( () => {
    return function cleanup() {
      source.cancel();
    };
  }, [] );

  useEffect( () => {
    async function fetchData() {
      try {
        const result = await axios.get( `https://api.spoonacular.com/recipes/${ id }/information?includeNutrition=false/&apiKey=${ process.env.REACT_APP_SPOONACULAR_KEY }`, { cancelToken: source.token, } );
        setRecipe( result.data );
        setNumberOfGuests( result.data.servings );

        return function cleanup() {
          source.cancel();
        };

      } catch ( e ) {
      }
    }

    fetchData();
  }, [ id ] );

  return (
    <>
      { recipe &&
        <div>
          <PageHeader title={ `${ recipe.title } ` }/>

          <div id={ styles["grid"] }>

            <div className={ styles["recipeheader"] }>
              <ToggleFavorites recipe={ recipe.id }/>

              <h1>
                { `${ recipe.title } ` }
              </h1>
            </div>

            <div className={ styles["column1"] }>
              <div className={ styles["card"] }>
                {
                  <img className={ styles["image"] }
                       src={ `${ recipe.image }` }
                       alt={ `${ recipe.title }` }/>
                }
                <div className={ styles["column1"] }>
                  <RecipeIcons recipe={ recipe }/>
                </div>
              </div>
            </div>

            <div className={ styles["column2"] }>
              <RecipeIngredientsList recipe={ recipe } numberOfGuests={ numberOfGuests }/>
            </div>

            <div className={ styles["column3"] }>

              <div className={ styles["number-of-guests-buttons"] }>
                <h3>
                  How many guests
                </h3>
                <div className={ styles["number-of-guests"] }>
                  <p>{ `This recipe is written for ${ recipe.servings } personen.` }</p>
                  <p>
                    For how many guests will you be serving?
                    Select the amount of guests and add to the ingredients
                    into your shopping-list.
                  </p>
                </div>

                <NumberOfGuests
                  value={ numberOfGuests }
                  onChange={ e => setNumberOfGuests( e.target.value ) }
                />

                { numberOfGuests !== recipe.servings
                  ?
                  <Button buttonStyle="reset-amount-button"
                          inputType="button"
                          clickHandler={ () => setNumberOfGuests( recipe.servings ) }
                          label="reset"
                  />
                  :
                  <div/>
                }

              </div>

              <div className={ styles["add-to-shoppinglist"] }>
                <ToggleShoppingList recipe={ recipe } numberOfGuests={ numberOfGuests }/>
              </div>
            </div>

            <div className={ styles["recipe-instruction"] }>
              <h3>
                Instructions
              </h3>
              <p dangerouslySetInnerHTML={ { __html: `${ recipe.instructions } ` } }/>

              <div id={ styles["grid-mainbottom"] }>

                <div className={ styles["credit-text"] }>{ `creditText: ${ recipe.creditsText } ` }</div>

             </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Recipe;
