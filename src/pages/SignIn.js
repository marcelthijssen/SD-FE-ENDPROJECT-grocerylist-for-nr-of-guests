import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/IsAuthContextProvider";
import axios from "axios";
import styles from "./SignIn.module.scss";
import Button from "../components/buttons/Button";
import PageHeader from "../components/layout/pageheader/Pageheader";
import { useForm } from "react-hook-form";
import InputElement from "../components/InputField/InputElement";

function SignIn() {
  const [ isDisabled, setIsDisabled ] = useState(false );
  const [ username, setUsername ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ error, toggleError ] = useState( false );
  const { register, formState: { errors }, handleSubmit } = useForm( {
    mode: "onBlur",
  } )
  const { login } = useContext( AuthContext );
  const source = axios.CancelToken.source();

  // cancel request if page premature closes
  useEffect( () => {
    return function cleanup() {
      source.cancel();
    };
  }, [] );

  async function onFormSubmit( data ) {
    toggleError( false );
    setTimeout( () => {
      setIsDisabled( false );
      // console.log("again");
    }, 1000 );

    try {
      const result = await axios.post( `https://polar-lake-14365.herokuapp.com/api/auth/signin`, {
        username: data.username,
        password: data.password,
      }, {
        cancelToken: source.token,
      } );

      // Pass the JWT accessToken to login-functie off context
      login( result.data.accessToken );

    } catch ( e ) {
      console.error( e );
      toggleError( true );
    }
  }


  return (
    <>
      <PageHeader title="Login"/>

      <div id={ styles["grid"] }>
        <div id={ styles["grid-main"] }>

          <div className={ styles["form-container"] }>
            <form
              onSubmit={ handleSubmit( onFormSubmit ) }
              className={ styles["form"] }
            >
              <h2>Login</h2>

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
                label="Sign In"
                disabled={ isDisabled }
              />
              <div className={styles["text-block"]}>
                <p>
                  Not a account yet?<br/>
                  You can <Link to="/register">register here.</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
