import React, { useEffect, useState } from "react";

// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import "./Search.module.scss";
import "./Home.module.scss";
import HomePageInfoBlocks from "../components/homePageInfoBlocks/HomePageInfoBlocks";
import styles from "./Home.module.scss";
import RecipeCard from "../components/recipecard/RecipeCard";
import axios from "axios";

function Home() {

  // fetch 6 random recipes to display underneath the homeInfoBlocks
  const [ recipesSearchResult, setRecipesSearchResult ] = useState( [] );

  useEffect( () => {

    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const result = await axios.get( `https://api.spoonacular.com/recipes/random?number=6&tags=vegetarian,dessert&apiKey=${ process.env.REACT_APP_SPOONACULAR_KEY }`, { cancelToken: source.token, } );
        setRecipesSearchResult( result.data.recipes );

        // console.log( result.results );
        // CLEANUP when user leaves page while function is running
        return function cleanup() {
          source.cancel();
        };
      } catch ( e ) {
        console.error( e );
      }
    }

    fetchData();
  }, [] );
  //
  // useEffect( () => {
  //   console.log( recipesSearchResult );
  // }, [ recipesSearchResult ] );

  return (
    <>
      { recipesSearchResult &&
        <div className={ styles["content-container"] }>

          <PageHeader title="Home"/>

          <div id={ styles["grid"] }>
            <div id={ styles["grid-main"] }>
              <div className={ styles["home-container"] }>

                <HomePageInfoBlocks className={ styles["home-info-block"] }/>

                <RecipeCard recipesSearchResult={ recipesSearchResult }/>

              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Home;
