import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/IsAuthContextProvider";
import axios from "axios";
import PageHeader from "../components/layout/pageheader/Pageheader";
import styles from "./Profile.module.scss";

function Profile() {
  const [ profileData, setProfileData ] = useState( {} );
  // const { user } = useContext( AuthContext );

  useEffect( () => {
    const source = axios.CancelToken.source();

    async function fetchProfileData() {
      // Get Token from localStorage to insert into axios.get request
      const accessToken = localStorage.getItem( "accessToken" );

      try {
        const result = await axios.get( "https://polar-lake-14365.herokuapp.com/api/user", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ accessToken }`,
          },
          cancelToken: source.token,
        } );

        setProfileData( result.data );
      } catch ( e ) {
      }
    }

    fetchProfileData();

    return function cleanup() {
      source.cancel();
    };
  }, [] );

  return (
    <>
      <PageHeader />

      { profileData &&
        <div id={ styles["grid"] }>
          <div id={ styles["grid-main"] }>
            <div className={ styles["account-container"] }>
              <section className={ styles["account"] }>
                <h2>Accountinformation</h2>
                <p><strong>Username:</strong> { profileData.username }</p>
                <p><strong>Email:</strong> { profileData.email }</p>
              </section>


              <section className={ styles["filtersettings"] }>
                <h2>Filtersettings</h2>
                <p>Adjust your personal searchfilters</p>
                <p><Link to="/account-filters"
                className={styles["filter-settings"]}> Filtersettings</Link></p>

              </section>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Profile;