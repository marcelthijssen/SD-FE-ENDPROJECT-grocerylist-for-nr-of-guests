export default function replaceUnitnNames(ingredient) {
  // new component to change units
  //   if ( ingredient.unit === "tbsp" ) {
  //     ingredient.unit = "tablespoon"
  //   }
  // }

  switch ( ingredient.unit ) {
    case "tbsp" || "tablespoons":
      ingredient.unit = "tablespoon";
      break;
    case "tsp":
      ingredient.unit = "teaspoon";
      break;
    case "cups":
      ingredient.unit = "cup";
      break;
    default:
    // code block
  }
}