import React, { useContext } from "react";
import styles from "./TopNavbar.module.scss";
import logo from "../../../assets/images/logo.svg";
import { useHistory, Link } from "react-router-dom";
import Button from "../../buttons/Button";
import { AuthContext } from "../../../context/IsAuthContextProvider";

function TopNavbar() {
  const history = useHistory();
  const { isAuth, logout } = useContext( AuthContext );

  return (
    <>
      <div id={styles["grid"]} className={styles["grid"]}>
        <nav id={styles["grid-topnav"]} className={styles["top-navbar"]}>

          <Link to="/">

          <span className={styles["logo-container"]}>
            <img src={ logo } type="svg" alt="logo"/>
          </span>
          </Link>

          <div className={styles["push"]}>

            <Link
              className={styles["menu-button"]} to="/faq">
              FAQ
            </Link>

            <Link
              className={styles["menu-button"]} to="/shoppinglist">
              Shoppinglist
            </Link>

            { !isAuth ?
              <Button
                className={styles["menu-button"]}
                inputType="button"
                clickHandler={ () => history.push( "/signin" ) }
                name="sign in"
                label="sign in"
              />
              : null }

            { !isAuth ?
              <Button
                className={styles["menu-button"]}
                inputType="submit"
                clickHandler={ () => history.push( "/register" ) }
              > Register
              </Button> : null }



            { isAuth ?
              <Button
                className={styles["menu-button"]}
                inputType="submit"
                clickHandler={ () => history.push( "/profile" ) }
              >
                Profile
              </Button> : null }

            { isAuth ?
              <Button
                className={styles["menu-button"]}
                inputType="submit"
                clickHandler={ () => history.push( "/account-filters" ) }
              >
                Filtersettings
              </Button> : null }
            
            { isAuth ?
              <Button
                className={styles["menu-button"]}
                inputType="submit"
                clickHandler={ logout }
              >
                Log Out
              </Button> : null }

          </div>
        </nav>
      </div>
    </>
  );
}

export default TopNavbar;