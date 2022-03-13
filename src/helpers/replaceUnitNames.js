export default function replaceUnitNames( unit ) {

  module.export = { replaceUnitNames: replaceUnitNames, };

  if ( unit === "tbsp" ) {
    return "tablespoon";
  }
  if ( unit === "tablespoons" ) {
    return "tablespoon";
  }
  if ( unit === "tsp" ) {
    return "teaspoon";
  }
  if ( unit === "teaspoons" ) {
    return "teaspoon";
  }
  if ( unit === "cups" ) {
    return "cup";
  }
  if ( unit === "c" ) {
    return "cup";
  }
  if ( unit === "g" ) {
    return "gram";
  }
  else {
    return unit;
  }
}