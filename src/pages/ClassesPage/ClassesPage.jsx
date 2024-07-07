import Navbar from "../../components/Navbar/Navbar";
import classes from "./ClassesPage.module.css";
import ClassesContainer from "../../components/ClassesContainer/ClassesContainer";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function ClassesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffnesss: 250 }}
    >
      <Navbar />
      <motion.div className={classes.banner}>
        <video autoPlay loop muted playsInline className="background_video">
          <source
            src="https://videos.pexels.com/video-files/3196220/3196220-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className={classes.heading_lg}>
          Unlock Your Potential with Muscle Hub.
        </h1>
        <h1 className={`${classes.heading_lg} diff`}>Start you journey now</h1>
      </motion.div>
      <div className={classes.class_container}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, stiffnesss: 200 }}
          className={classes.heading_md}
        >
          Our <span className="diff">Classes</span>
        </motion.h1>
        <motion.p
          className={classes.classes_text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5, stiffnesss: 200 }}
        >
          Heyy Future Body Builders !! Here are five classes you can offer at
          Muscle Hub, along with descriptions of each class and their respective
          levels
        </motion.p>
        <ClassesContainer />
        <Footer />
      </div>
    </motion.div>
  );
}

export default ClassesPage;
