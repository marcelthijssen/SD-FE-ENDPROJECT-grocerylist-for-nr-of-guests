// Text info block are displayed on the Home-pages

import React from "react";
import styles from "./HomePageInfoBlocks.module.scss";
import infoBlocks from "./HomeInfoBlockText.json";

function HomePageInfoBlocks() {

  return (
    <>
      { infoBlocks &&

        <div className={ styles["info-cards"] }>

          { infoBlocks.map( ( infoBlock ) =>
            <article className={ styles["single-info-card"] } key={ infoBlock.id }>

              <div className={ styles["image-container"] }>
                <div className={styles["info-number"]} >{ `${ infoBlock.id }` } </div>

                <img className={ styles["info-card-image"] }
                     alt={ `${ infoBlock.title }` }
                     src={ require( `../../assets/images/${ infoBlock.imagename }.png` ).default }
                />
              </div>
              <div className={ styles["text-container"] }>
                <div
                  className={ styles["info-card-title"] }>
                  { `${ infoBlock.title }` }
                </div>

                <div className={ styles["info-cards-content"] }>
                  { `${ infoBlock.content }` }
                </div>
              </div>


            </article>
          ) }
        </div>
      }
    </>
  );
}

export default HomePageInfoBlocks;