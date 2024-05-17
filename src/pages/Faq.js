// Text info block are displayed on the Home-pages

import React from "react";
import styles from "./Faq.module.scss";
import faq from "../assets/json/faq.json";

import PageHeader from "../components/layout/pageheader/Pageheader";
import Button from "../components/buttons/Button";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <div>
      <PageHeader title="FAQs"/>
      <div id={ styles["grid"] }>
        <section className={ styles["grid-sidebar"] }>
          <h4>
            Missing an answer
          </h4>

          <p>
            If you have another question, please send us an email. We will get back to you as soon as possible.
          </p>
          <Button type="submit"
                  clickhandler={ () => Router.push( "mailto:email@hosting.com" ) }
                  label="Send an email"/>

        </section>
        <section className={ styles["grid-main"] }>
          <div >
            { faq.map( ( faq ) =>
              <article
                className={ styles["question"] }
                       key={ `${ faq.id - 1 }` }>
                <h3>
                  { `${ faq.question }` }
                </h3>
                <p>
                  { `${ faq.answer }` }
                </p>
                { ( !faq.link) ?
                  <div/>
                  :
                  <Link className={styles["faq-link"]} to={ `/${ faq.link }` }>
                    { `${ faq.link }` }
                  </Link>
                }
              </article>
            ) }
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;
