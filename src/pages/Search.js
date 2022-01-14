import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import PageHeader from "../components/layout/pageheader/Pageheader";
import RecipeCard from "../components/recipecard/RecipeCard";
import axios from "axios";
import FilterTypes from "../components/filters/FilterTypes";
import typesOfMeals from "../components/filterLists/typesOfMeals.json";
import typesOfCuisines from "../components/filterLists/typesOfCuisines.json";
import typesOfIntolerances from "../components/filterLists/typesOfIntolerances.json";
import typesOfDiets from "../components/filterLists/typesOfDiets.json";

function RecipeSearchResults( { recipeSearch } ) {

  const [ recipesSearchResult, setRecipesSearchResult ] = useState( [] );
  const [ totalResults, setTotalResults ] = useState( 0 );
  const [ query, setQuery ] = useState( { recipeSearch } );
  //filters
  const [ savedCuisinesFilter, setSavedCuisinesFilter ] = useState();
  const [ savedMealsFilter, setSavedMealsFilter ] = useState( "" );
  const [ savedIntolerancesFilter, setSavedIntolerancesFilter ] = useState();
  const [ savedDietsFilter, setSavedDietsFilter ] = useState();
  // const [ urlFilter, setUrlFilter ] = useState();
  //pagination
  const [ offSet, setOffSet ] = useState( 0 );
  const offSetting = `&offset=${ offSet }`;
  const [ filterActive, setFilterActive ] = useState( false );

  // get info from localstorage to add to url, for new api-request
  useEffect( () => {
    setSavedCuisinesFilter( JSON.parse( localStorage.getItem( "types of cuisines" ) ) );
    setSavedMealsFilter( JSON.parse( localStorage.getItem( "types of meals" ) ) );
    setSavedIntolerancesFilter( JSON.parse( localStorage.getItem( "types of intolerances" ) ) );
    setSavedDietsFilter( JSON.parse( localStorage.getItem( "types of diets" ) ) );

  }, [ filterActive ] );

  useEffect( () => {
    setOffSet( 0 );
  }, [] );

  // update query ion browser refresh
  useEffect( () => {
    setQuery( localStorage.getItem( "query" ) );
    console.log(query);
  } );

  // get data
  useEffect( () => {

    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const result = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?query=${ query }&cuisine=${ savedCuisinesFilter }&type=${ savedMealsFilter }&intolerances=${ savedIntolerancesFilter }&diet=${ savedDietsFilter }&addRecipeInformation=true&apiKey=${ process.env.REACT_APP_SPOONACULAR_KEY }${ offSetting }`, { cancelToken: source.token, } );
        setTotalResults( result.data.totalResults );
        setRecipesSearchResult( result.data.results );

        // CLEANUP when user leaves page while function is running
        // console.log( filterActive );
        setFilterActive( false );
        // console.log( filterActive );
        // console.log( result );

        return function cleanup() {
          source.cancel();
        };
      } catch ( e ) {
        console.error( e );
      }
    }

    fetchData();
  }, [ recipeSearch, offSetting, filterActive, query] );

  function handleChange() {
    setFilterActive( true );
    // console.log( filterActive );
    // console.log( "clicked" );
    // console.log( recipeSearch );
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

          <PageHeader id={ styles["grid-pageheader"] } title="Search"/>

          <div id={ styles["grid"] }>
            <div id={ styles["grid-maintop"] }>
              <div className={ styles["recipes-found"] }>{ `Recipes found ${ totalResults }` }</div>
            </div>

            <div id={ styles["grid-sidebar"] } className={ styles["filter-container"] }>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Cuisines
                </div>
                <FilterTypes
                  title={ "TypesCuisines" }
                  name={ "types of cuisines" }
                  typeFilter={ typesOfCuisines }
                />
                <button className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">Activate
                  filter
                </button>

              </div>

              <div className={ styles["filtercontainer"] }>

                <div className={ styles["filter-title-container"] }>
                  Types of Intolerances
                </div>

                <FilterTypes
                  title={ "Types of Intolerances" }
                  name={ "types of intolerances" }
                  typeFilter={ typesOfIntolerances }
                />
                <button className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">Activate
                  filter
                </button>

              </div>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Meals
                </div>
                <FilterTypes
                  title={ "Types of Meals" }
                  name={ "types of meals" }
                  typeFilter={ typesOfMeals }
                />
                <button className={ styles["filter-button"] } onClick={ handleChange } type="submit-button">Activate
                  filter
                </button>
              </div>

              <div className={ styles["filtercontainer"] }>
                <div className={ styles["filter-title-container"] }>
                  Types of Diets
                </div>
                <FilterTypes
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
                type="button"
                onClick={ previousPageButton }
                disabled={ offSet < 1 }
              >
                Previous 10 recipes
              </button>
              <button
                type="button"
                disabled={ offSet > recipesSearchResult.length }
                onClick={ nextPageButton }
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