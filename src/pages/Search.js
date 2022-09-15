import React, { useEffect, useState, useContext } from "react";
import styles from "./Search.module.scss";
import PageHeader from "../components/layout/pageheader/Pageheader";
import RecipeCard from "../components/recipecard/RecipeCard";
import axios from "axios";
import Filters from "../components/filters/Filters";
import typesOfMeals from "../assets/json/typesOfMeals.json";
import typesOfCuisines from "../assets/json/typesOfCuisines.json";
import typesOfIntolerances from "../assets/json/typesOfIntolerances.json";
import typesOfDiets from "../assets/json/typesOfDiets.json";

function RecipeSearchResults( { recipeSearch } ) {

  const [ recipesSearchResult, setRecipesSearchResult ] = useState( [] );
  const [ totalResults, setTotalResults ] = useState( 0 );
  const [ query, setQuery ] = useState( { recipeSearch } );
  const [ filterActive, setFilterActive ] = useState( false );

  //filters
  const [ savedCuisinesFilter, setSavedCuisinesFilter ] = useState();
  const [ savedMealsFilter, setSavedMealsFilter ] = useState( "" );
  const [ savedIntolerancesFilter, setSavedIntolerancesFilter ] = useState();
  const [ savedDietsFilter, setSavedDietsFilter ] = useState();
  //pagination
  const [ offSet, setOffSet ] = useState( 0 );
  const offSetting = `&offset=${ offSet }`;

  // get info from localstorage to insert into the url, for a new api-request
  useEffect( () => {
    setSavedCuisinesFilter( JSON.parse( localStorage.getItem( "types of cuisines" ) ) );
    setSavedMealsFilter( JSON.parse( localStorage.getItem( "types of meals" ) ) );
    setSavedIntolerancesFilter( JSON.parse( localStorage.getItem( "types of intolerances" ) ) );
    setSavedDietsFilter( JSON.parse( localStorage.getItem( "types of diets" ) ) );
  }, [ filterActive ] );

  useEffect( () => {
    setQuery( localStorage.getItem( "query" ) );
    setOffSet( 0 );
  }, );

  useEffect( () => {
    setOffSet( 0 );
  }, [] );

  // get data
  useEffect( () => {

    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const result = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?query=${ query }&cuisine=${ savedCuisinesFilter }&type=${ savedMealsFilter }&intolerances=${ savedIntolerancesFilter }&diet=${ savedDietsFilter }&addRecipeInformation=true&apiKey=${ process.env.REACT_APP_SPOONACULAR_KEY }${ offSetting }`, { cancelToken: source.token, } );
        setTotalResults( result.data.totalResults );
        setRecipesSearchResult( result.data.results );
        setFilterActive( false );

        // CLEANUP when user leaves page while function is running
        return function cleanup() {
          source.cancel();
        };
      } catch ( e ) {
      }
    }

    fetchData();
  }, [ recipeSearch, offSetting, filterActive, query ] );

  function handleChange() {
    setFilterActive( true );
  }

  function nextPageButton() {
    return setOffSet( offSet + 10 );
  }

  function previousPageButton() {
    return setOffSet( offSet - 10 );
  }

  return (
    <>
      <div>
        <div className={ styles["content-container"] }>

          <PageHeader id={ styles["grid-pageheader"] } />

          <div id={ styles["grid"] }>
            <div id={ styles["grid-maintop"] }>
              <div className={ styles["recipes-found"] }>{ `Recipes found ${ totalResults }` }</div>
            </div>

            <div id={ styles["grid-sidebar"] } className={ styles["filter-container"] }>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Cuisines
                </div>

                <Filters
                  title={ "TypesCuisines" }
                  name={ "types of cuisines" }
                  typeFilter={ typesOfCuisines }
                />
                <button className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">
                  Activate filter
                </button>

              </div>

              <div className={ styles["filtercontainer"] }>

                <div className={ styles["filter-title-container"] }>
                  Types of Intolerances
                </div>

                <Filters
                  title={ "Types of Intolerances" }
                  name={ "types of intolerances" }
                  typeFilter={ typesOfIntolerances }
                />
                <button
                  className={ styles["filter-button"] }
                  onClick={ handleChange }
                  type="submit-button"
                >
                  Activate Filter
                </button>

              </div>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Meals
                </div>
                <Filters
                  title={ "Types of Meals" }
                  name={ "types of meals" }
                  typeFilter={ typesOfMeals }
                />
                <button
                  className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">Activate
                  filter
                </button>
              </div>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Diets
                </div>
                <Filters
                  title={ "Types of Diets" }
                  name={ "types of diets" }
                  typeFilter={ typesOfDiets }
                />
                <button className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">Activate
                  filter
                </button>
              </div>
            </div>

            <div id={ styles["grid-main"] }>
              <RecipeCard recipesSearchResult={ recipesSearchResult }/>
            </div>

            <div id={ styles["grid-mainbottom"] } className={ styles["pagination"] }>

              <button
                type="submit"
                onClick={ previousPageButton }
                disabled={ offSet < 1 }
                className={ styles["pagination-button"] }
              >
                Previous 10 recipes
              </button>
              <button
                type="submit"
                disabled={ offSet > recipesSearchResult.length }
                onClick={ nextPageButton }
                className={ styles["pagination-button"] }
              >
                Next 10 recipes
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default RecipeSearchResults;