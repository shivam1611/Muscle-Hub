/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink as Link } from "react-router-dom";

function Navbar() {

  // Navbar in use ref 
  const navbar = useRef(null);

  // State of thr mobile navigation 

  const [showNav, setShowNav] = useState(false)

  // Effect that will run when we scroll 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        navbar.current.classList.add(classes.scrolling_style);
      } else {
        navbar.current.classList.remove(classes.scrolling_style);
      }
    };

    // Adding Event Listener 
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function that handle the navigation during mobile view 
  
  function handleNavbar() {
    navbar.current.classList.toggle("show")
  }

  return (
    <div className={classes.navbar_section} ref={navbar}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          Muscle
          <span className={classes.diff}>Hub</span>
        </div>
        <div onClick={()=>handleNavbar()}> 
        <i className={`fa-solid fa-bars-staggered ${classes.mobile_bar_icon}`}></i>
        </div>
        <ul className={classes.navlist}>
          <li>
            <Link className={classes.nav_items} to={"/"}>
              Home
            </Link>
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
            <Link to={"/accounts"}>
              {" "}
              <button className={classes.btn_sm}>Sign up</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
