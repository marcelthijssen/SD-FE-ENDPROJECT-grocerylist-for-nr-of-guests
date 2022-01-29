import React from "react";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import FilterTypes from "../components/filters/FilterTypes";
import typesOfCuisines from "../assets/json/typesOfCuisines.json";
import typesOfIntolerances from "../assets/json/typesOfIntolerances.json";
import typesOfMeals from "../assets/json/typesOfMeals.json";
import typesOfDiets from "../assets/json/typesOfDiets.json";
import styles from "./AccountFilters.module.scss";
import FilterExport from "../components/filterExport/FilterExport";
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

  return (
    <div>
      <PageHeader
        title="Personal filter Settings"
      />
      <div id={ styles["grid"] }>

        <div id={ styles["grid-main"] }>
          <h1>Filtersettings</h1>
          <p>Here you can save your personal filtersettings.</p>
          <p>To use them, click 'Use these settings'.</p>

          <div className={ styles["filters-container"] }>

            <div className={ styles["filter"] }>

              <div className={ styles["filter-title"] }>
                Types of Cuisines
              </div>

              <FilterTypes
                className={ styles["account-filter"] }
                title={ "Types of Cuisines" }
                name={ "account settings toc" }
                typeFilter={ typesOfCuisines }
              />
              <Button
                clickHandler={ copySettingsToc }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>

              <div className={ styles["filter-title"] }>
                Types of Intolerances
              </div>
              <FilterTypes
                className={ styles["account-filter"] }
                title={ "Types of Intolerances" }
                name={ "account settings toi" }
                typeFilter={ typesOfIntolerances }
              />
              <Button
                clickHandler={ copySettingsToi }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>
              <div className={ styles["filter-title"] }>
                Types of Type of meals
              </div>
              <FilterTypes
                className={ styles["account-filter"] }
                title={ "Types of Meals" }
                name={ "account settings tom" }
                typeFilter={ typesOfMeals }
              />
              <Button
                clickHandler={ copySettingsTom }>
                Use these settings
              </Button>
            </div>

            <div className={ styles["filter"] }>
              <div className={ styles["filter-title"] }>
                Types of Diets
              </div>
              <FilterTypes
                className={ styles["account-filter"] }
                title={ "Types of Diets" }
                name={ "account settings tod" }
                typeFilter={ typesOfDiets }
              />
              <Button
                clickHandler={ copySettingsTod }>
                Use these settings
              </Button>
            </div>
          </div>

          <FilterExport />

        </div>
      </div>
    </div>
  );
}

export default AccountFilters;