const replaceUnitNames = require( "../src/helpers/replaceUnitNames" ).default;

test( "UnitNames should be replaced", () => {

  // Arrange
  const ingredient = "tsp";
  const expectedResult = "teaspoon";

  // Act
  const result = replaceUnitNames( ingredient) ;

  //Assert // What we expect
  expect( result ).toBe( expectedResult );
} );

test( "Unknown unitName is NOT replaced", () => {

  // Arrange
  const ingredient = "plates";

  // Act
  const result = replaceUnitNames( ingredient) ;

  //Assert // What we expect
  expect( result ).toBe(ingredient) ;
} );


