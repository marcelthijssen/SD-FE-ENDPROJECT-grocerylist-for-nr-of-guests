import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {
  const [ isAuth, toggleIsAuth ] = useState( {
    isAuth: false,
    user: null,
    status: "pending",
  } );

  const history = useHistory();

  useEffect( () => {
    // haal de JWT op uit Local Storage
    const accessToken = localStorage.getItem( "accessToken" );

    // If there is a token get data
    if ( accessToken && isTokenValid( accessToken ) ) {
      const decoded = jwt_decode( accessToken );
      fetchUserData( decoded, accessToken );
    } else {
      // Else do nothing
      toggleIsAuth( {
        isAuth: false,
        user: null,
        status: "done",
      } );
    }
  }, [] );

  function login( JWT ) {
    localStorage.setItem( "accessToken", JWT );
    const decoded = jwt_decode( JWT );

    fetchUserData( decoded, JWT, "/profile" );
    history.push( "/profile" );
  }

  function logout() {
    localStorage.removeItem("accessToken");
    toggleIsAuth( {
      isAuth: false,
      user: null,
      status: "done",
    } );

    history.push( "/" );
  }

  async function fetchUserData(id, accessToken, redirectUrl ) {
    try {
      // Fetch UserData: id, accessToken
      const result = await axios.get( `https://polar-lake-14365.herokuapp.com/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ accessToken }`,
        },
      } );

      // zet de gegevens in de state
      toggleIsAuth( {
        ...isAuth,
        isAuth: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: "done",
      } );

      if ( redirectUrl ) {
        history.push( redirectUrl );
      }

    } catch ( e ) {
      // console.error( e );

      toggleIsAuth( {
        isAuth: false,
        user: null,
        status: "done",
      } );
    }
  }

  const contextData = {
    isAuth: isAuth.isAuth,
    user: isAuth.user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={ contextData }>
      { isAuth.status === "done" ? children : <p>One moment please...</p> }
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;