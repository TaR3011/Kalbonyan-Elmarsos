import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoading = authCtx.isLoggedIn;

  const loggoutHandler = () => {
    authCtx.logout();

    //optional : redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoading && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoading && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoading && (
            <li>
              <button onClick={loggoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
