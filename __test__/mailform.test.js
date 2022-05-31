const { render } = require( "react-dom" );
const MailingList = require( "../src/components/layout/mailingList/MailingList" ).default;

function MailingList( { input } ){

}

test( "mailaddress must be checked", () => {
render(<MailingList />)
  // Arrange
  const input = "@mail.nl";
  const expectedResult = "teaspoon";

  // Act
  // const LinkElement = render.
  const result = MailingLIst( input );

  //Assert // What we expect
  expect( result ).toBe( expectedResult );

} );

// test( "Unknown unitName is NOT replaced", () => {
//
//   // Arrange
//   const input = "unknow";
//
//   // Act
//   const result = replaceUnitNames( input );
//
//   //Assert // What we expect
//   expect( result ).toBe( input );
// } );


