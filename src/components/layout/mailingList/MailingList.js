import React from "react";
import styles from "./MailingList.module.scss";
import "../grid.module.css";
import Button from "../../buttons/Button";
import { useForm } from "react-hook-form";
import InputElement from "../../InputField/InputElement";

function MailingList() {

  const { register, formState: { errors }, handleSubmit } = useForm( {
    mode: "onBlur",
  } );

  function onFormSubmit( data ) {
    // console.log(data);
    localStorage.setItem( "newsletter", JSON.stringify( data ) );
  }

  return (
    <>
      <div id="grid">
        <form
          id="grid-footer"
          className={ styles["footer-mailing"] }
          onSubmit={ handleSubmit( onFormSubmit ) }>

          <div className={ styles["mailinglist-input"] }>
            <InputElement
              errors={ errors }
              register={ register }
              name="mailaddress"
              label=""
              placeholder="Subscribe to newsletter"
              inputType="email"
              validationRules={ {
                required: "Please type a valid mailaddress is required",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "invalid mailaddress",
                }
              } }

            />
            <Button inputType="submit"
                    label="Submit"
            />
          </div>
        </form>
      </div>

    </>
  );
}

export default MailingList;
