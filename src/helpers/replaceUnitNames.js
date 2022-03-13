export default function replaceUnitNames(ingredient) {

  module.exports = { replaceUnitNames:replaceUnitNames,  };

  switch ( ingredient.unit ) {
    case "tbsp":
      ingredient.unit = "tablespoon";
      break;
      case "tablespoons":
      ingredient.unit = "tablespoon";
      break;
    case "tsp":
      ingredient.unit = "teaspoon";
      break;
    case "teaspoons":
      ingredient.unit = "teaspoon";
      break;
    case "cup":
      ingredient.unit = "cup";
      break;
    case "c":
      ingredient.unit = "cup";
      break;
    case "g":
      ingredient.unit = "gram";
      break;
    default:
  }
  return ingredient.unit;

}