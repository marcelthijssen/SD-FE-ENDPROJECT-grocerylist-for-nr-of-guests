import React, { useEffect, useState, useContext } from "react";
import {
  Switch,
  Route, Redirect
} from "react-router-dom";
// css
import "./App.module.scss";
// import "./components/layout/grid.module.css";

// components
import Footer from "./components/layout/footer/Footer";
import TopNavbar from "./components/layout/topnavbar/TopNavbar";
//components / pages
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import Searchbar from "./components/layout/searchbar/Searchbar";
import Recipe from "./pages/Recipe";
import RecipeSearchResults from "./pages/Search";
import ShoppingList from "./pages/ShoppingList";
import { AuthContext } from "./context/IsAuthContextProvider";
import AccountFilters from "./pages/AccountFilters";
import MailingList from "./components/layout/mailingList/MailingList";

function App() {
  const { isAuth } = useContext( AuthContext );
  const [ recipeSearch, setRecipeSearch ] = useState();

  const cuisines = JSON.parse( localStorage.getItem( "types of cuisines" ) );
  const typesOfMeals = JSON.parse( localStorage.getItem( "types of meals" ) );
  const intolerances = JSON.parse( localStorage.getItem( "types of intolerances" ) );
  const typesOfDiets = JSON.parse( localStorage.getItem( "types of diets" ) );
  const shoppinglist = JSON.parse( localStorage.getItem( "shoppinglist" ) );
  let favoriteToSave = JSON.parse( localStorage.getItem( "favorite recipes" ) );

  // Create a localStorage to prevent "null"
  useEffect( () => {
    if ( !shoppinglist ) {
      localStorage.setItem( "shoppinglist", JSON.stringify( [] ) );
    }
    if ( !cuisines ) {
      localStorage.setItem( "types of cuisines", JSON.stringify( [] ) );
    }
    if ( !intolerances ) {
      localStorage.setItem( "types of intolerances", JSON.stringify( [] ) );
    }
    if ( !typesOfMeals ) {
      localStorage.setItem( "types of meals", JSON.stringify( [] ) );
    }
    if ( !typesOfDiets ) {
      localStorage.setItem( "types of diets", JSON.stringify( [] ) );
    }
    if ( !favoriteToSave ) {
      localStorage.setItem( "favorite recipes", JSON.stringify( [] ) );
    }

  }, [] );


  return (
    <>
      <TopNavbar  id="grid-topnav"/>

      <Searchbar id="grid-searchbar" setRecipeSearchHandler={ setRecipeSearch }/>

      <div>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/search">
            <RecipeSearchResults recipeSearch={ recipeSearch }/>
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/shoppinglist">
            <ShoppingList />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>

          <Route path="/faq">
            <Faq/>
          </Route>

          <Route path="/profile">
            { isAuth ? <Profile/> : <Redirect to="/signin"/> }
          </Route>

          <Route path="/account-filters">
            { isAuth ? <AccountFilters/> : <Redirect to="/signin"/> }
          </Route>

          <Route path="/signin">
            { !isAuth ? <SignIn/> : <Redirect to="/profile"/> }
          </Route>

          <Route path="/register">
            <Register/>
          </Route>

        </Switch>
      </div>
      <MailingList/>
      <Footer id="grid-footer"/>

    </>
  );
}

export default App;