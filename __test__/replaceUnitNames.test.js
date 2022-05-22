const replaceUnitNames = require( "../src/helpers/replaceUnitNames" ).default;

test( "UnitNames should be replaced", () => {

  // Arrange
  const input = "tsp";
  const expectedResult = "teaspoon";

  // Act
  const result = replaceUnitNames( input) ;

  //Assert // What we expect
  expect( result ).toBe( expectedResult );

} );

test( "Unknown unitName is NOT replaced", () => {

  // Arrange
  const input = "unknow";

  // Act
  const result = replaceUnitNames( input) ;

  //Assert // What we expect
  expect( result ).toBe(input) ;
} );


