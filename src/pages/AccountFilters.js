import React from "react";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import Filters from "../components/filters/Filters";
import typesOfCuisines from "../assets/json/typesOfCuisines.json";
import typesOfIntolerances from "../assets/json/typesOfIntolerances.json";
import typesOfMeals from "../assets/json/typesOfMeals.json";
import typesOfDiets from "../assets/json/typesOfDiets.json";
import styles from "./AccountFilters.module.scss";
import Button from "../components/buttons/Button";

function AccountFilters() {

  function copySettingsToc() {
    const toc = JSON.parse( localStorage.getItem( "account settings toc" ) );
    localStorage.setItem( "types of cuisines", JSON.stringify( toc ) );
  }

  function copySettingsToi() {
    const toi = JSON.parse( localStorage.getItem( "account settings toi" ) );
    localStorage.setItem( "types of intolerances", JSON.stringify( toi ) );
  }

  function copySettingsTom() {
    const tom = JSON.parse( localStorage.getItem( "account settings tom" ) );
    localStorage.setItem( "types of meals", JSON.stringify( tom ) );
  }

  function copySettingsTod() {
    const tod = JSON.parse( localStorage.getItem( "account settings tod" ) );
    localStorage.setItem( "types of diets", JSON.stringify( tod ) );
  }

  function copyAll() {
    copySettingsToc();
    copySettingsToc();
    copySettingsToi();
    copySettingsTom();
  }

  return (
    <div>
      <PageHeader
        title="Personal filter Settings"
      />
      <div id={ styles["grid"] }>

        <div id={ styles["grid-main"] } className={styles["container"]}>
          <h1>Filtersettings</h1>
          <p>Here you can save your personal filtersettings.</p>
          <p>To use them, click 'Use these settings'.</p>

          <div className={ styles["filters-container"] }>

            <div className={ styles["filter"] }>

              <div className={ styles["filter-title"] }>
                Types of Cuisines
              </div>

              <Filters
                className={ styles["account-filter"] }
                title={ "Types of Cuisines" }
                name={ "account settings toc" }
                typeFilter={ typesOfCuisines }
              />
              <Button
                buttonStyle="use-button"
                clickHandler={ copySettingsToc }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>

              <div className={ styles["filter-title"] }>
                Types of Intolerances
              </div>
              <Filters
                className={ styles["account-filter"] }
                title={ "Types of Intolerances" }
                name={ "account settings toi" }
                typeFilter={ typesOfIntolerances }
              />
              <Button
                buttonStyle="use-button"
                clickHandler={ copySettingsToi }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>
              <div className={ styles["filter-title"] }>
                Types of Type of meals
              </div>
              <Filters
                className={ styles["account-filter"] }
                title={ "Types of Meals" }
                name={ "account settings tom" }
                typeFilter={ typesOfMeals }
              />
              <Button
                buttonStyle="use-button"
                clickHandler={ copySettingsTom }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>
              <div className={ styles["filter-title"] }>
                Types of Diets
              </div>
              <Filters
                className={ styles["account-filter"] }
                title={ "Types of Diets" }
                name={ "account settings tod" }
                typeFilter={ typesOfDiets }
              />
              <Button
                buttonStyle="use-button"
                clickHandler={ copySettingsTod }>
                Use these settings
              </Button>
            </div>
          </div>

          <Button
            buttonStyle="use-all-button"
            clickHandler={ copyAll }>
             USE ALL THESE FILTERSETTINGS
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountFilters;