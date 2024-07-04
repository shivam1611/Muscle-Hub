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
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
          <div className={classes.col}>
            <div className={classes.inside_col}>
              <input
                type="text"
                id="firstname"
                className={classes.input_field}
                placeholder="First Name"
              />
            </div>
            <div className={classes.inside_col}>
              <input
                type="text"
                id="lastname"
                className={classes.input_field}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className={classes.col}>
            <input
              type="text"
              id="email"
              className={classes.input_field}
              placeholder="Username"
            />
            <i className={`fa-solid fa-user ${classes.icon}`}></i>
          </div>
          <div className={classes.col}>
            <input
              type="phone"
              id="number"
              className={classes.input_field}
              placeholder="Mobile Number"
            />
            <i className={`fa-solid fa-phone ${classes.icon}`}></i>
          </div>
          <div className={classes.col}>
            <select
              id="cars"
              className={classes.input_field}
              placeholder="Gender"
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Others</option>
            </select>
          </div>
          <div className={classes.col}>
            <input
              type="password"
              id="number"
              className={classes.input_field}
              placeholder="Password"
            />
            <i className={`fa-solid fa-lock ${classes.icon}`}></i>
          </div>
          <div className={classes.col}>
            <input
              type="password"
              id="number"
              className={classes.input_field}
              placeholder="Confirm Password"
            />
            <i className={`fa-solid fa-lock ${classes.icon}`}></i>
          </div>
          <button type="submit" className={classes.btn_full}>sign up</button>
        </form>
        <p className={classes.text_sm}>Already have a account ? <NavLink to={"./login"}> <span className="diff">Login</span> </NavLink></p>
       
      </div>
    </div>
  );
}

export default SignUp;
