import React from "react";
import classes from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
function SignUp() {
  return (
    <div className={classes.form_container}>
      <div className={classes.left_section}>
        <img
          className={classes.img}
          src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className={classes.right}>
        <h1 className={classes.form_title}>
          CREATE YOU <span className="diff">ACCOUNT</span>
        </h1>
        <form className={classes.form} onSubmit={(e)=>e.preventDefault()}>
            <label className={classes.label} htmlFor="email">Email Address</label>
            <input type="email" id="email" className={classes.input_field} />
        </form>
        <NavLink to={"./login"}>Login</NavLink>
      </div>
    </div>
  );
}

export default SignUp;
