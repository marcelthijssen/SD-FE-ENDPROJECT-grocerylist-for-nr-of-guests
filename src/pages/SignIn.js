import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/IsAuthContextProvider";
import axios from "axios";
import styles from "./SignIn.module.scss";
import Button from "../components/buttons/Button";
import PageHeader from "../components/layout/pageheader/Pageheader";

function SignIn() {
  const [ isDisabled, setIsDisabled ] = useState(false );
  const [ username, setUsername ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ error, toggleError ] = useState( false );

  const { login } = useContext( AuthContext );
  const source = axios.CancelToken.source();

  // cancel request if page premature closes
  useEffect( () => {
    return function cleanup() {
      source.cancel();
    };
  }, [] );

  async function handleSubmit( e ) {
    e.preventDefault();
    toggleError( false );
    setTimeout( () => {
      setIsDisabled( false );
      // console.log("again");
    }, 1000 );

    try {
      const result = await axios.post( `https://polar-lake-14365.herokuapp.com/api/auth/signin`, {
        username: username,
        password: password,
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
      <PageHeader title="sign in"/>

      <div id={ styles["grid"] }>
        <div id={ styles["grid-main"] }>

          <div className={ styles["form-container"] }>
            <form className={ styles["login-form"] } onSubmit={ handleSubmit }>

              <label
                className={ styles["label-input"] }
                htmlFor="username-field">
                Username:
                <input
                  className={ styles["input-field"] }

                  type="username"
                  id="username-field"
                  name="username"
                  value={ username }
                  onChange={ ( e ) => setUsername( e.target.value ) }
                />
              </label>

              <label
                className={ styles["label-input"] }
                htmlFor="password-field">
                Wachtwoord:
                <input
                  className={ styles["input-field"] }

                  type="password"
                  id="password-field"
                  name="password"
                  value={ password }
                  onChange={ ( e ) => setPassword( e.target.value ) }
                />
              </label>
              { error && <p className={ styles["error"] }>Error...</p> }

              <Button
                type="submit"
                buttonStyle="submit-button"
                label="Sign In"
                disabled={ isDisabled }
              />
              <div className={styles["text-block"]}>
              <p>Heb je nog geen account?</p>
              <p><Link to="/register">Registreer</Link> je dan eerst.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
