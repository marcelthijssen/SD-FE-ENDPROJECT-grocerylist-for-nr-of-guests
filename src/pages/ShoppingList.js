import React, { useEffect, useState } from "react";
import styles from "./ShoppingList.module.scss";
import PageHeader from "../components/layout/pageheader/Pageheader";
import TableIngredients from "../components/tableIngredients/TableIngredienst";

function ShoppingList() {

  const [ shoppingList, setShoppingList ] = useState( [] );

  useEffect( () => {
    setShoppingList( JSON.parse( localStorage.getItem( "shoppinglist" ) ) );
  }, [] );

  return (
    <>
      <div className={ styles["content-container"] }>

        <PageHeader title="Shopping adjusted for amount of guests"/>

        { shoppingList &&

          <div id={ styles["grid"] }>
            <div id={ styles["grid-main"] }>

              <TableIngredients shoppingList={ shoppingList }/>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default ShoppingList;