import React from "react";
// components
import PageHeader from "../components/layout/pageheader/Pageheader";
import FilterTypes from "../components/filters/FilterTypes";
import typesOfCuisines from "../components/filterLists/typesOfCuisines.json";
import typesOfIntolerances from "../components/filterLists/typesOfIntolerances.json";
import typesOfMeals from "../components/filterLists/typesOfMeals.json";
import typesOfDiets from "../components/filterLists/typesOfDiets.json";
import styles from "./AccountFilters.module.scss";
import FilterExport from "../components/filterExport/FilterExport";

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
        title="Filter Settings"
      />
      <div id={ styles["grid"] }>

        <div id={ styles["grid-main"] }>
          <h1>Filtersettings</h1>
          <p>Here you can safe your personal filtersettings.</p>
          <p>And copy them to use them when searching.</p>
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
              <button
                onClick={ copySettingsToc }>
                Use these settings
              </button>
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
              <button
                onClick={ copySettingsToi }>
                Use these settings
              </button>
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
              <button
                onClick={ copySettingsTom }>
                Use these settings
              </button>
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
              <button
                onClick={ copySettingsTod }>
                Use these settings
              </button>
            </div>
          </div>
          <FilterExport/>

        </div>
      </div>
    </div>
  );
}

export default AccountFilters;