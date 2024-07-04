import { NavLink  } from "react-router-dom"
import classes from './Login.module.css'
function Login() {
  return (
    <div><div className={classes.form_container}>
    <div className={classes.left_section}>
      <img
        className={classes.img}
        src="https://images.pexels.com/photos/3838701/pexels-photo-3838701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
    <div className={classes.right}>
      <h1 className={classes.form_title}>
        WELCOME BACK <span className="diff">USER</span>
      </h1>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <div className={classes.col}>
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
        <button type="submit" className={classes.btn_full}>Log In</button>
      </form>
      <p className={classes.text_sm}>New Member ? <NavLink to={"/accounts"}> <span className="diff"> Create Account</span></NavLink></p>
     
    </div>
  </div></div>
  )
}

export default Login