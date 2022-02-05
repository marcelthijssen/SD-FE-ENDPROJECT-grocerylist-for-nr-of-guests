import React, { useContext, useEffect, useState } from "react";
import styles from "./ShoppingList.module.scss";
import PageHeader from "../components/layout/pageheader/Pageheader";
import TableIngredients from "../components/tableIngredients/TableIngredienst";
import { FavCounterContext } from "../context/FavContextProvider";

function ShoppingList() {

  const { counter } = useContext( FavCounterContext );
  const [ shoppingList, setShoppingList ] = useState( [] );

  useEffect( () => {
    setShoppingList( JSON.parse( localStorage.getItem( "shoppinglist" ) ) );
  }, [] );

  return (
    <>
      <div className={ styles["content-container"] }>

        <PageHeader title="Shoppinglist" counter={ counter }/>

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