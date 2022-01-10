import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../pages/Register.module.scss";
import Button from "../components/buttons/Button";
import PageHeader from "../components/layout/pageheader/Pageheader";

function Register() {

  const [ email, setEmail ] = useState( "" );
  const [ username, setUsername ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ error, toggleError ] = useState( false );
  const [ loading, toggleLoading ] = useState( false );
  const history = useHistory();
  // canceltoken to prevent leak
  const source = axios.CancelToken.source();

  useEffect( () => {
    return function cleanup() {
      source.cancel();
    };
  }, [] );

  // submitting and post data
  async function handleSubmit( e ) {
    e.preventDefault();
    toggleError( false );
    toggleLoading( true );

    try {
      await axios.post( `https://polar-lake-14365.herokuapp.com/api/auth/signup`, {
        username: username,
        email: email,
        password: password,
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
      <div className={ styles["content-container"] }>
        <PageHeader title="Registreren"/>
        <div id={ styles["grid"] }>
          <div id={ styles["grid-main"] }>

            <div className={ styles["InputField-container"] }>
              <form className={ styles["register-InputField"] } onSubmit={ handleSubmit }>
                <label
                  htmlFor="email-field"
                  className={ styles["label-input"] }
                >
                  Emailadres:
                  <input
                    className={ styles["input-field"] }
                    type="email"
                    id="email-field"
                    name="email"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) }
                  />
                </label>

                <label
                  className={ styles["label-input"] }
                  htmlFor="username-field">
                  Gebruikersnaam:
                  <input
                    className={ styles["input-field"] }
                    type="text"
                    id="username-field"
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
                  className="submit-button"
                  disabled={ loading }
                >
                  Registreren
                </Button>

                <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
