import React from "react";
import styles from "./SocialIcons.module.scss";
import socialsIcons from "../../assets/json/Socials.json";
import { ExternalLink } from "react-external-link";

function SocialIcons() {

  return (
    <>
      { socialsIcons &&

        <div className={ styles["socials"] }>
          { socialsIcons.map( ( socialsIcon ) =>
            <div key={`${ socialsIcon.title }`}>
              <ExternalLink href={ `${ socialsIcon.url }` } target="blank">
                <img
                  src={ require( `../../assets/images/${ socialsIcon.title }.svg` ) }
                  alt={ `${ socialsIcon.title }` }
                />
              </ExternalLink>
            </div>
          ) }
        </div>

      }
    </>
  );
}

export default SocialIcons;