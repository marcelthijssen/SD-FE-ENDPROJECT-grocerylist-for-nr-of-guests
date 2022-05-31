/* recipeIcoms */
// RecipeIcons displays ReadyInTime, Vegan, Vegetarian, Glutenfree or dairy free recipeIcons

import React from "react";
import styles from "./RecipeIcons.module.scss";
import vegan from "../../assets/images/vegan.png";
import vegetarian from "../../assets/images/vegetarian.png";
import dairyfree from "../../assets/images/dairy-free.png";
import glutenfree from "../../assets/images/gluten-free.png";
import coockingtimer from "../../assets/images/coocking-timer.png";

function RecipeIcons( { recipe } ) {

  return (
    <>
      <div className={ styles["recipe-info"] }>
        <div className={ styles["recipe-info-detail"] }>

          <div className={ styles["tooltip"] }>Time needed to prepair</div>
          <img alt="readyInMinutes"
               className={ styles["recipe-icon"] }
               style={ { cursor: "pointer" } }
               src={ coockingtimer }
          />
          { ` ${ recipe.readyInMinutes } min.` }
        </div>

        <div>
          { recipe.vegetarian
            ?
            <div  className={ styles["recipe-info-detail"] }>
              <div className={ styles["tooltip"] }>Vegetarian recipe</div>
              <img alt="vegetarian"
                   className={ styles["recipe-icon"] }
                   style={ { cursor: "pointer" } }

                   src={ vegetarian }/>

            </div>
            :
            <div/>
          }
        </div>

        <div>
          { recipe.vegan
            ?
            <div  className={ styles["recipe-info-detail"] }>
              <div className={ styles["tooltip"] }>Vegan recipe</div>
              <img alt="vegan"
                   style={ { cursor: "pointer" } }
                   className={ styles["recipe-icon"] }
                   src={ vegan }/>
            </div>
            :
            <div/>
          }
        </div>

        <div>
          { recipe.glutenfree
            ?
            <div  className={ styles["recipe-info-detail"] }>
              <div className={ styles["tooltip"] }>Glutenfree</div>
              <img alt="gluten free"
                   style={ { cursor: "pointer" } }
                   className={ styles["recipe-icon"] }
                   src={ glutenfree }/>
            </div>
            :
            <div/>
          }
        </div>
        <div>
          { recipe.dairyFree
            ?
            <div  className={ styles["recipe-info-detail"] }>
              <div className={ styles["tooltip"] }>Dairyfree</div>
              <img alt="dairy free"
                   className={ styles["recipe-icon"] }
                   style={ { cursor: "pointer" } }
                   src={ dairyfree }/>
            </div>
            :
            <div/>
          }
        </div>
      </div>
    </>
  );
}

export default RecipeIcons;
