import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <>
      <div id={ styles["grid"] }>
        <div id={ styles["grid-footer"] }>
          <h1>Footer-title</h1>
          <div className={ styles["footer"] }>
            <section className={ styles["footer-section"] }>
              <h3>This is the footersection 1</h3>
              <p>needs some filling</p>
            </section>
            <section className={ styles["footer-section"] }>
              <h3>This is the footersection 2</h3>
              <p>needs some filling</p>

            </section>
            <section className={ styles["footer-section"] }>
              <h3>This is the footersection 3</h3>
              <p>needs some filling</p>

            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
