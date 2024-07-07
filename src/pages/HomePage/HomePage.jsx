import Navbar from "../../components/Navbar/Navbar";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

function HomePage() {
  return (
    <motion.div
      className={classes.homepage_container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffnesss: 200 }}
    >
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
          <motion.p
            className={classes.banner_text_sm}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ stiffnesss: 400, duration: 1 }}
          >
            Push Your Limits at Muscle Hub
          </motion.p>
          <motion.h1
            className={classes.banner_text_lg}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ stiffnesss: 300, delay: 1, duration: 0.8 }}
          >
            let&apos;s Start <span className="diff">now!!</span>
          </motion.h1>
          <NavLink to={"/accounts"}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ stiffnesss: 250, delay: 2 }}
              className={classes.banner_btn_lg}
            >
              Become a member
            </motion.button>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
