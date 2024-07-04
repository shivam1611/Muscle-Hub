import Navbar from "../../components/Navbar/Navbar";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={classes.homepage_container}>
      <Navbar />

      {/* BANNER SECTION  */}
      <div className={classes.banner}>
        <video autoPlay loop muted playsInline className="background_video">
          <source
            src="https://videos.pexels.com/video-files/3195943/3195943-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className={classes.call_to_action}>
          <p className={classes.banner_text_sm}>
            Push Your Limits at Muscle Hub
          </p>
          <h1 className={classes.banner_text_lg}>
            let&apos;s Start <span className="diff">now!!</span>
          </h1>
          <NavLink to={"/accounts"}>
            {" "}
            <button className={classes.banner_btn_lg}>Become a member</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
