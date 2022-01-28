export default function replaceUnitNames(ingredient) {
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
    case "cups":
      ingredient.unit = "cup";
      break;
    default:
  }
}