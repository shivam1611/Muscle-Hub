/* eslint-disable no-unused-vars */
import classes from "./Navbar.module.css";
import { NavLink as Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={classes.navbar_section}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          Muscle
          <span className={classes.diff}>Hub</span>
        </div>
        <ul className={classes.navlist}>
          <li >
            <Link className={classes.nav_items} to={"/"}>Home</Link>
          </li>
          <li>
            <Link className={classes.nav_items} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className={classes.nav_items} to={"/classes"}>
              classes
            </Link>
          </li>
          <li>
            <Link className={classes.nav_items} to={"/schedule"}>
              schedule
            </Link>
          </li>
          <li>
            <Link className={classes.nav_items} to={"/contact"}>
              contact
            </Link>
          </li>
          <li>
            <Link  to={'/accounts'}> <button className={classes.btn_sm}>Sign up</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
