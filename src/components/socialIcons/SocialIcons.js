import React from "react";
import styles from "./SocialIcons.module.scss";
import socialIcons from "../../assets/json/socialIcons.json";
import { ExternalLink } from "react-external-link";

function SocialIcons() {

  return (
    <>
      { socialIcons &&

        <div className={ styles["socialicons"] }>
          { socialIcons.map( ( socialIcon ) =>
            <div key={ `${ socialIcon.id }` }>
              <ExternalLink href={ `${ socialIcon.url }` } target="blank">
                <img
                  alt={ `${ socialIcon.title }` }
                  src={ require( `../../assets/images/${ socialIcon.title }.png` ) }
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