import { React } from "react";
// import {Link } from "react-router-dom";
import css from "./nav.module.css";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

const Nav = (props) => {
  const homeRoute = () => {
    window.location.pathname = "/";
  };
  const loginRoute = () => {
    window.location.pathname = "/login";
  };
  const newPostRoute = () => {
    window.location.pathname = "/createpost";
    props.setAuth(true)
  };

  // console.log(props.isAuth)
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className={css.navcontainer}>
      <div className={css.navmain}>
        <ul className={css.navlist}>
          <li className={css.navitems} onClick={homeRoute}>
            {" "}
            Home
          </li>
         
          {!props.isAuth ? (
            <li className={css.navitems} onClick={loginRoute}>
              Login
            </li>
          ) : (
            <>
            <li className={css.navitems} onClick={newPostRoute}>
            New Post
          </li>
            <button onClick={signOutUser}>Sign Out</button>
            </>
          )}
          {/* <li className={css.navitems}>Feedback</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
