export default function replaceUnitNames( unit ) {

  module.export = { replaceUnitNames: replaceUnitNames };

  switch ( unit ) {
    case "tbsp":
      return "tablespoon";
    case "tablespoons":
      return "tablespoon";
    case "T":
      return "tablespoon";
    case "tsp":
      return "teaspoon";
    case "t":
      return "teaspoon";
    case "teaspoons":
      return "teaspoon";
    case "cup":
      return "cup";
    case "c":
      return "cup";
    case "g":
      return "gram";

    default:
      return unit;
  }

}