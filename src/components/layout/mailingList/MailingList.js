import React, { useState } from "react";
import styles from "./MailingList.module.scss";
// import "../grid.module.css";
import Button from "../../buttons/Button";
import { useForm } from "react-hook-form";
import InputElement from "../../InputField/InputElement";

function MailingList() {

  const [ isDisabled, setIsDisabled ] = useState(false );
  const { register, formState: { errors }, handleSubmit } = useForm( {
    mode: "onBlur",
  } );

  // save data to localstorage "newsletter", disable button en enable after 1 sec
  function onFormSubmit( data ) {
    setIsDisabled( true );
    localStorage.setItem( "newsletter", JSON.stringify( data ) );
    setTimeout( () => {
      setIsDisabled( false );
    }, 1000 );
  }

  return (
    <>
      <div id="grid">
        <form
          id="grid-footer"
          className={ styles["footer-mailing"] }
          onSubmit={ handleSubmit( onFormSubmit ) }
          noValidate
        >

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
                    isDisabled={ isDisabled }
                    buttonStyle="mailinglist-button"
            />
          </div>
        </form>
      </div>

    </>
  );
}

export default MailingList;
