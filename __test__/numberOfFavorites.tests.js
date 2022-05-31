import React from "react";
import Button from "../src/components/buttons";
import NumberOfFavorites from "../src/components/numberOfFavorites/NumberOfFavorites";
import { useDidMount } from "rooks";

const { render } = require( "react-dom" );

function countFavorites( { counter } ) {
  < NumberOfFavorites counter={ counter }/>;
}

test( "button should add 1 to favorites", () => {
  const addOneToFavorite = jest.fn();
  let wrapper;
  beforeEach( () => {
    wrapper = useDidMount( <NumberOfFavorites addOneToFavorite={ addOneToFavorite }/> );
  } );

  it( "renders", () => {
    expect( wrapper( 0 ).toBe( 1 ) );
    console.log( "oke" );
    } );
  } );