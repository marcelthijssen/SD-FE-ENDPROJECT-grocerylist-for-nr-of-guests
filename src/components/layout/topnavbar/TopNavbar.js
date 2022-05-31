import React, { useContext } from "react";
import styles from "./TopNavbar.module.scss";
import logo from "../../../assets/images/logo.svg";
import { useHistory, NavLink } from "react-router-dom";
import Button from "../../buttons/Button";
import { isAuthContext } from "../../../context/IsAuthContextProvider";

function TopNavbar() {
  const history = useHistory();
  const { isAuth, logout } = useContext( isAuthContext );

  return (
    <>
      <div id={styles["grid"]} className={styles["grid"]}>

        <nav id={styles["grid-topnav"]} className={styles["top-navbar"]}>

          <NavLink to="/">

          <span className={styles["logo-container"]}>
            <img src={ logo } type="svg" alt="logo"/>
          </span>
          </NavLink>

          <div className={styles["push"]}>

            <NavLink
              className={styles["menu-link"]}
              to="/faq">
              faq
            </NavLink>

            <NavLink
              className={styles["menu-link"]}
              to="/shoppinglist">
              Shoppinglist
            </NavLink>

            { !isAuth ?
              <Button
                buttonStyle="signin-button"
                inputType="button"
                clickHandler={ () => history.push( "/signin" ) }
                name="login"
                label="Login"
              />
              : null }

            { !isAuth ?
              <Button
                buttonStyle="register-button"
                inputType="submit"
                clickHandler={ () => history.push( "/register" ) }
              > Register
              </Button> : null }



            { isAuth ?
              <Button
                buttonStyle="menu-button"
                inputType="submit"
                clickHandler={ () => history.push( "/profile" ) }
              >
                Profile
              </Button> : null }

            { isAuth ?
              <Button
                buttonStyle="menu-button"
                inputType="submit"
                clickHandler={ () => history.push( "/account-filters" ) }
              >
                Filtersettings
              </Button> : null }
            
            { isAuth ?
              <Button
                buttonStyle="menu-button"
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