import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../../assets/images/facebook.svg";
import twitter from "../../../assets/images/twitter.svg";
import pinterest from "../../../assets/images/pinterest.svg";
import instagram from "../../../assets/images/instagram.svg";
import tiktok from "../../../assets/images/tiktok.svg";


function Footer() {
  return (
    <>
      <div id={ styles["grid"] }>

        <div id={ styles["grid-footer"] }>

          <div className={ styles["footer"] }>

            <div className={ styles["footer-section"] }>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Help</li>
                <li>Faq</li>
                <li>contact</li>

              </ul>
            </div>
            <div className={ styles["footer-section"] }>
              <ul>
                <li>AVG</li>
                <li>News</li>
                <li>Help</li>

              </ul>
            </div>
            <div className={ styles["footer-section"] }>
              <ul>
                <li>Why</li>
                <li>How</li>
                <li>What</li>
                <li>Faq</li>
              </ul>
            </div>

          </div>

        </div>

        <section id={ styles["grid-footersocial"] }>
          <ul className={ styles["socials"] }>
            <li >
              <href a="https://pinterest.nl">
                <img alt="pinterest"
                     style={ { cursor: "pointer" } }
                     src={ pinterest }
                     height={ 25 } width={ 25 }
                />
              </href>
            </li>
            <li>
              <href a="https://instagram.nl">
                <img alt="instagram"
                     style={ { cursor: "pointer" } }
                     src={ instagram }
                />
              </href>
            </li>
            <li>
              <href a="https://twitter.nl">
                <img alt="twitter"
                     style={ { cursor: "pointer" } }
                     src={ twitter }
                />
              </href>
            </li>
            <li>
              <href a="https://facebook.nl">
                <img alt="facebook"
                     style={ { cursor: "pointer" } }
                     src={ facebook }
                />
              </href>
            </li>
            <li>
              <href a="https://tiktok.nl">
                <img alt="tiktok"
                     style={ { cursor: "pointer" } }
                     src={ tiktok }
                />
              </href>
            </li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Footer;
