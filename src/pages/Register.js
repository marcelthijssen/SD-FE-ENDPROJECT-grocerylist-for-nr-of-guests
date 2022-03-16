import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../pages/Register.module.scss";
import Button from "../components/buttons/Button";
import PageHeader from "../components/layout/pageheader/Pageheader";
import InputElement from "../components/InputField/InputElement";
import { useForm } from "react-hook-form";

function Register() {

  const [ email, setEmail ] = useState( "" );
  const [ username, setUsername ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ error, toggleError ] = useState( false );
  const [ loading, toggleLoading ] = useState( false );
  const history = useHistory();

  // const [ isDisabled, setIsDisabled ] = useState( false );
  const { register, formState: { errors }, handleSubmit } = useForm( {
    mode: "onBlur",
  } );
  console.log('ERRORS', errors);
  // canceltoken to prevent leak
  const source = axios.CancelToken.source();

  useEffect( () => {
    return function cleanup() {
      source.cancel();
    };
  }, [] );


  // submitting and post data
  async function onFormSubmit( data ) {
    toggleError( false );
    toggleLoading( true );
    try {
      await axios.post( `https://polar-lake-14365.herokuapp.com/api/auth/signup`, {
        username: data.username,
        email: data.email,
        password: data.password,
        role: [ "user" ]
      }, {
        cancelToken: source.token,
      } );

      history.push( "/signin" );
    } catch ( e ) {
      console.error( e );
      toggleError( true );
    }
    toggleLoading( false );
  }

  return (
    <>
      <PageHeader title="Register"/>

      <div id={ styles["grid"] }>
        <div id={ styles["grid-main"] }>

          <div className={ styles["form-container"] }>

            <form
              onSubmit={ handleSubmit( onFormSubmit ) }
              className={ styles["form"] }
            >
              <h2>Registration</h2>

              <InputElement
                errors={ errors }
                register={ register }
                name="email"
                label="Email"
                inputType="email"
                onChange={ ( e ) => setEmail( e.target.value ) }
                validationRules={ {
                  required: "Please type a valid email is required",
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email",
                  }

                } }
              />

              <InputElement
                errors={ errors }
                register={ register }
                name="username"
                label="Username"
                inputType="text"
                onChange={ ( e ) => setUsername( e.target.value ) }

                validationRules={ {

                  required: "Please enter a username",
                } }
              />

              <InputElement
                errors={ errors }
                register={ register }
                name="password"
                label="password"
                inputType="password"
                onChange={ ( e ) => setPassword( e.target.value ) }

                validationRules={ {
                  required: "Please enter a password",
                } }
              />

              <Button
                type="submit"
                buttonStyle="submit-button"
                label="register"
                disabled={ loading }
              />
            </form>

          </div>
        </div>
      </div>

    </>
  );
}

export default Register;